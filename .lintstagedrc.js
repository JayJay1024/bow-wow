const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

module.exports = {
  "src/**/*.css": "stylelint --fix",
  "src/**/*.{js,jsx,ts,tsx}": ["prettier -w", buildEslintCommand],
};
