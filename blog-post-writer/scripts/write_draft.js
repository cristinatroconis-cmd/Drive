// /Users/cristinatroconis/Projects/Drive/blog-post-writer/scripts/write_draft.js
function writeDraft(outline) { return { draft: "..." }; }
const args = process.argv.slice(2);
console.log(JSON.stringify(writeDraft(args[0])));
