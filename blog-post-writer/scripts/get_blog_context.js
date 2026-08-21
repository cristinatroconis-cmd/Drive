// /Users/cristinatroconis/Projects/Drive/blog-post-writer/scripts/get_blog_context.js
function getBlogContext(topic) { return { trend: "...", keywords: [] }; }
const args = process.argv.slice(2);
console.log(JSON.stringify(getBlogContext(args[0])));
