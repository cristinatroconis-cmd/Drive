// /Users/cristinatroconis/Projects/Drive/blog-post-writer/scripts/create_blog_outline.js
function createOutline(topic) { return { outline: "..." }; }
const args = process.argv.slice(2);
console.log(JSON.stringify(createOutline(args[0])));
