// /Users/cristinatroconis/Projects/Drive/blog-post-writer/scripts/save_to_drive.js
function saveDraft(draft) { return { docId: "..." }; }
const args = process.argv.slice(2);
console.log(JSON.stringify(saveDraft(args[0])));
