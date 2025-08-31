// Converted to CommonJS for the current Eleventy Docker image
module.exports = function (eleventyConfig) {
    // Simple date filter (supports the "now" literal and yyyy format)
    eleventyConfig.addFilter("date", (value, format = "yyyy") => {
        let d;
        if (!value || value === "now") d = new Date();
        else if (value instanceof Date) d = value;
        else d = new Date(value);
        if (format === "yyyy") return String(d.getFullYear());
        // basic fallback ISO
        return d.toISOString();
    });

    // Passthrough copy for static assets (if any later)
    eleventyConfig.addPassthroughCopy({ "public": "/" });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_includes/layouts",
            output: "_site"
        },
        templateFormats: ["njk", "md", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};
