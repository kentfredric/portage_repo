source ./util/rustflags.sh

XTARGET=()

if [[ "${STABLE:-0}" != 0 ]]; then
  XTARGET=( "+1.31.0")
fi

if [ "$1"  == "--verbose" ]; then
  do_test() {
    RUSTFLAGS="${RFLAGS[*]}" cargo "${XTARGET[@]}" test "$@"
  }
else
do_test() {
  local out_file;
  local err_file;
  local e_code;
  out_file="$(tempfile cargo_test_out_XXXXXXXXXXXXX)" || exit 1;
  err_file="$(tempfile cargo_test_err_XXXXXXXXXXXXX)" || exit 1;
  RUSTFLAGS="${RFLAGS[*]}" cargo "${XTARGET[@]}" test "$@" >"$out_file" 2>"$err_file"
  e_code=$?
  if [ $e_code != 0 ]; then
    printf "\e[31;1mcargo test failed\e[0m"
    echo "$@"
    printf "\e[31;1m-=-[ stdout ]-=-\e[0m\n"
    cat "${out_file}";
    printf "\e[31;1m-=-[ stderr ]-=-\e[0m\n"
    cat "${out_file}";
    return $e_code;
  fi
  unlink "${out_file}";
  unlink "${err_file}";
  return 0;
}
fi

FEATURES=()
IOPTS=()
if [[ "${STABLE:-0}}" == 0 ]]; then
  FEATURES=( "nightly" )
  IOPTS+=( "--features" "${FEATURES[*]}" )
  ./util/fmt.sh || exit 1;
fi

do_test "${IOPTS[@]}" --all-targets &&
  do_test "${IOPTS[@]}" --doc
