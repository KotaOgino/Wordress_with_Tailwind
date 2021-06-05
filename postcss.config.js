const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const purgecssWordpress = require("purgecss-with-wordpress");

module.exports = {
	plugins: [
		tailwindcss("./tailwind.config.js"),
		require("autoprefixer"),

		purgecss({
			content: ["./**.php", "./**/**.php", "./**.html", "./**.js"],
			safelist: purgecssWordpress.safelist,
			safelistPatterns: purgecssWordpress.safelistPatterns
		}),
	]
  }