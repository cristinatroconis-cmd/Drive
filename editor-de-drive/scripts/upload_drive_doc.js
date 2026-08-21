#!/usr/bin/env node

// This script generates a curl command to upload/update content to a Google Drive document.
// It takes three arguments: the document ID, the path to the file with new content, and the content MIME type.

const documentId = process.argv[2];
const filePath = process.argv[3];
const mimeType = process.argv[4];

if (!documentId || !filePath || !mimeType) {
  console.error('Error: Document ID, file path, and MIME type are required.');
  console.error('Usage: node upload_drive_doc.js <document_id> <path_to_new_content_file> <mime_type>');
  process.exit(1);
}

// Read the new content from the provided file path
let newContent;
try {
  newContent = fs.readFileSync(filePath, 'utf8'); // Assuming text content
} catch (e) {
  console.error(`Error reading new content from file ${filePath}: ${e.message}`);
  process.exit(1);
}

// Ensure the new content is properly escaped for the curl command
const escapedContent = newContent.replace(/'/g, "'\\''"); // Escape single quotes

const command = `curl -X PATCH \\
  -H "Authorization: Bearer $GEMINI_MCP_GOOGLE_ACCESS_TOKEN" \\
  -H "Content-Type: ${mimeType}" \\
  --data-binary $'${escapedContent}' \\
  "https://www.googleapis.com/upload/drive/v3/files/${documentId}?uploadType=media"`;

console.log(command);
