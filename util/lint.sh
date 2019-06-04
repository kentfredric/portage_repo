source ./util/rustflags.sh

CLIPPY="${CLIPPY:-clippy}"
XOPTS=(
  "-Z" "unstable-options"
  "-Z" "cache-messages"
)
PREOPTS=()
XTARGETS=(
  "--all-targets"
  "--profile test --all-targets"
)
if [[ "${CLIPPY}" == "clippy-preview" ]]; then
  unset CLIPPYFLAGS
  XTARGETS=( "--all-targets"  )
fi

run_echo() {
  if [[ "${DEBUG:-0}" != "0" ]]; then
    printf "RUSTFLAGS=\"%s\" " "${RUSTFLAGS}"
    for i; do
      printf "%q " $i
    done
    printf "\n";
  fi
  "$@"
}
if [[ "${STABLE:-0}" == 0 ]]; then
  ./util/fmt.sh ||  exit 1
  XOPTS+=( "--features" "nightly" )
else
  PREOPTS=( "+1.31.0" )
  XOPTS=()
fi
./util/quickclean.sh &&
  for target in "${XTARGETS[@]}"; do
    printf "==[ running cargo %s %s %s ]==\n" "${CLIPPY}" "${PREOPTS[*]}${XOPTS[*]}" "${target}"
    RUSTFLAGS="${RFLAGS[*]}" run_echo cargo "${PREOPTS[@]}" "${CLIPPY}" "${XOPTS[@]}" ${target} -- "${CLIPPYFLAGS[@]}" || break
  done
