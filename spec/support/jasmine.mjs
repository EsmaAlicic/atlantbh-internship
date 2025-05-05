export default {
  spec_dir: "test/specs",
  spec_files: [
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