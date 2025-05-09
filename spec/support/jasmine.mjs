export default {
  spec_dir: "test/specs",
  spec_files: [
    "**/regression/activities.spec.mjs",
    "**/regression/authors.spec.mjs",
    "**/regression/books.spec.mjs",
    "**/regression/coverphotos.spec.mjs",
    "**/regression/users.spec.mjs",
    "**/smoke/activities.spec.mjs",
    "**/smoke/authors.spec.mjs",
    "**/smoke/books.spec.mjs",
    "**/smoke/coverphotos.spec.mjs",
    "**/smoke/users.spec.mjs"
  ],
  helpers: [
    "helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
