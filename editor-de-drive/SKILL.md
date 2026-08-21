---
name: editor-de-drive
description: Enables editing of Google Drive documents by downloading, allowing modifications, and then uploading changes. Supports Google Docs export/import workflows.
---
# Google Drive Editor Skill

This skill allows you to edit Google Drive documents by implementing a workflow of downloading the content, allowing you (the Gemini agent) to modify it, and then uploading the updated content back to Drive.

## Workflow

1.  **Download Document**:
    -   Identify the `document_id` of the Google Drive file you want to edit.
    -   Choose an appropriate `mime_type` for export (e.g., `text/markdown`, `text/plain`). Refer to `references/drive_export_mimetypes.md` for options.
    -   Use the `scripts/download_drive_doc.js` script to generate a `curl` command.
    -   Execute the `curl` command using `run_shell_command` with the `GEMINI_MCP_GOOGLE_ACCESS_TOKEN`.
    -   Capture the output (the document content).

2.  **Edit Content**:
    -   You (the Gemini agent) will receive the document's content as plain text or Markdown.
    -   Apply the requested modifications using your internal text processing capabilities.
    -   Save the modified content to a temporary local file (e.g., `/tmp/edited_doc.md`).

3.  **Upload/Update Document**:
    -   Use the `scripts/upload_drive_doc.js` script to generate a `curl` command.
    -   **Usage**: `node scripts/upload_drive_doc.js <document_id> <path_to_modified_content_file> <mime_type_of_new_content>`
    -   Execute the `curl` command using `run_shell_command` with the `GEMINI_MCP_GOOGLE_ACCESS_TOKEN`. This will update the content of the existing Drive document.

## Important Considerations

-   **Authentication**: The `scripts/download_drive_doc.js` and `scripts/upload_drive_doc.js` rely on the `GEMINI_MCP_GOOGLE_ACCESS_TOKEN` environment variable, which the Gemini environment provides when interacting with the `google-workspace-terapiaconcris` MCP.
-   **Content Type**: Ensure the `mime_type` used for uploading matches the format of the content you are providing.
-   **Local Storage**: For editing, content will be temporarily saved to local files. Remember to clean up these temporary files after the operation is complete.

## Bundled Resources

-   `scripts/download_drive_doc.js`: Node.js script to generate `curl` command for downloading document content.
-   `scripts/upload_drive_doc.js`: Node.js script to generate `curl` command for uploading/updating document content.
-   `references/drive_export_mimetypes.md`: Reference for supported MIME types for Google Drive document export.
-   `references/drive_update_api.md`: Reference for the Google Drive API `files: update` method for changing content.
