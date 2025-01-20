export default {
  extends: "stylelint-config-standard",
  overrides: [{files: ["**/*.scss"], extends: "stylelint-config-standard-scss"}],
  ignoreFiles: [
    "./app/assets/builds/**/*",
    "./node_modules/**/*",
    "./public/assets/**/*",
  ]
}
