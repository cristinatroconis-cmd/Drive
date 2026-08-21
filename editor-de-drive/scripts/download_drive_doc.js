#!/usr/bin/env node

// This script generates a curl command to download content from a Google Drive document.
// It takes two arguments: the document ID and the export MIME type.

const documentId = process.argv[2];
const mimeType = process.argv[3]; // e.g., 'text/plain', 'text/markdown'

if (!documentId || !mimeType) {
  console.error('Error: Document ID and MIME type are required.');
  console.error('Usage: node download_drive_doc.js <document_id> <mime_type>');
  process.exit(1);
}

const encodedMimeType = encodeURIComponent(mimeType);

// The script assumes the access token is available in an environment variable
// that the Gemini agent will provide when it executes the command.
const command = `curl -H "Authorization: Bearer $GEMINI_MCP_GOOGLE_ACCESS_TOKEN" "https://www.googleapis.com/drive/v3/files/${documentId}/export?mimeType=${encodedMimeType}"`;

console.log(command);
