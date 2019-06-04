XTARGET=()
XOPTS=()


if [[ "${STABLE:-0}" != 0 ]]; then
  XTARGET+=( "+1.31.0" )
  XOPTS+=(
    "--config-path" "util/rustfmt-stable.toml"
  )
else 
  XOPTS+=(
    "--config-path"
    "util/rustfmt-nightly.toml"
  )
fi

source ./util/rustflags.sh

RUSTFLAGS="${RFLAGS[*]}" cargo "${XTARGET[@]}" fmt -- "${XOPTS[@]}"
