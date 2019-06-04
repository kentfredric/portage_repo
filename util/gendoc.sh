source ./util/rustflags.sh
XFLAGS=()
if [[ "${STABLE:-0}" == 0 ]]; then
  XFLAGS=( "--features" "nightly" )
  ./util/fmt.sh || exit 1
fi
[ -e target/doc ] && rm -r target/doc
  RUSTFLAGS="${RFLAGS[*]}" RUSTDOCFLAGS="${RDOCFLAGS[*]}" cargo doc "${XFLAGS[@]}" -q --no-deps &&
  util/tidy.sh
