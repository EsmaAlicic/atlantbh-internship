export default {
  spec_dir: "test/specs",
  spec_files: [
    "**/smoke/activities.spec.mjs"
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