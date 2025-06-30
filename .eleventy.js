module.exports = async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  // Add the url_encode filter
  eleventyConfig.addNunjucksFilter("url_encode", function(value) {
    return encodeURIComponent(value);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
      data: "_data",
    },
    htmlTemplateEngine: "njk",   // Force .html files to be Nunjucks, not Liquid
    markdownTemplateEngine: "njk",
  };
};
