// /Users/cristinatroconis/Projects/Drive/blog-post-writer/scripts/create_lead_magnet.js
function createLM(docId, type) { return { lmId: "..." }; }
const args = process.argv.slice(2);
console.log(JSON.stringify(createLM(args[0], args[1])));
