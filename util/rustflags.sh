RFLAGS=(
  "-W" "absolute-paths-not-starting-with-crate"
  "-W" "anonymous-parameters"
  "-W" "bare-trait-objects"
  "-W" "box-pointers"
  "-W" "elided-lifetimes-in-paths"
  "-W" "ellipsis-inclusive-range-patterns"
  "-W" "explicit-outlives-requirements"
  "-W" "future-incompatible"
  "-W" "keyword-idents"
  "-W" "macro-use-extern-crate"
  "-W" "missing-copy-implementations"
  "-W" "missing-debug-implementations"
  "-W" "missing-doc-code-examples"
  "-W" "missing-docs"
  "-W" "nonstandard-style"
  "-W" "question-mark-macro-sep"
  "-W" "rust-2018-compatibility"
  "-W" "rust-2018-idioms"
  "-W" "trivial-casts"
  "-W" "trivial-numeric-casts"
  "-W" "unreachable-pub"
  "-W" "unsafe-code"
  "-W" "unused"
  "-W" "unused-extern-crates"
  "-W" "unused-import-braces"
  "-W" "unused-labels"
  "-W" "unused-lifetimes"
  "-W" "unused-qualifications"
  "-W" "unused-results"
  "-W" "variant-size-differences"
  "-W" "warnings"
)
if [[ "${STABLE:-0}" == 0 ]]; then
  RFLAGS+=(
  "-W" "deprecated-in-future"
  "-W" "private-doc-tests"
  "-W" "rustdoc"
# Currently false-positives
# https://github.com/rust-lang/rust/issues/60554
#  "-W" "single-use-lifetimes"

# external doc is unstable :(
#"-W" "unstable-features"
  )
fi
RDOCFLAGS_STABLE=(
)
RDOCFLAGS=( "${RDOCFLAGS_STABLE[@]}" )
if [[ "${STABLE:-0}" == 0 ]]; then
  RDOCFLAGS+=(
  "-Z" "unstable-options"
  "--disable-minification"
  "--enable-index-page"
  "--extern-html-root-url" "display_attr=https://docs.rs/display_attr/0.1.1"
  "--extern-html-root-url" "libc=https://docs.rs/libc/0.2.58"
  )
fi

CLIPPY_LINTS_MASTER=(
)
CLIPPY_LINTS_NIGHTLY=(
)
CLIPPY_LINTS_STABLE=(
  "complexity"
  "correctness"
  "perf"
  "style"
  "deprecated"
  "restriction"
  "pedantic"
  "nursery"
  "cargo"
)

CLIPPYFLAGS=()

for i in "${CLIPPY_LINTS_STABLE}"; do
  CLIPPYFLAGS+=( "-W" "clippy::${i}" )
done

if [[ "${STABLE:-0}" == 0 ]]; then
  for i in "${CLIPPY_LINTS_NIGHTLY[@]}" "${CLIPPY_LINTS_MASTER[@]}"; do
    CLIPPYFLAGS+=( "-W" "clippy::${i}" )
  done
fi
