# Google Drive Export MIME Types

When exporting Google Docs, Sheets, or Slides, you can specify a target MIME type.

## Common Export MIME Types for Google Docs:

-   `text/plain`: Plain text.
-   `text/html`: HTML format.
-   `application/rtf`: Rich Text Format.
-   `application/vnd.oasis.opendocument.text`: ODT (OpenDocument Text).
-   `application/pdf`: PDF document.
-   `application/vnd.openxmlformats-officedocument.wordprocessingml.document`: Microsoft Word (.docx).
-   `application/zip`: HTML (zipped).
-   `text/markdown`: Markdown format (requires Google Workspace Business or Enterprise account).

## Common Export MIME Types for Google Sheets:

-   `text/csv`: Comma-separated values (CSV).
-   `application/pdf`: PDF document.
-   `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`: Microsoft Excel (.xlsx).
-   `application/vnd.oasis.opendocument.spreadsheet`: ODS (OpenDocument Spreadsheet).
-   `text/tab-separated-values`: Tab-separated values (TSV).

## How to use:

The `download_drive_doc.js` script will take one of these MIME types as an argument when exporting.
Make sure the selected MIME type is appropriate for the document type and your intended use. For textual editing, `text/plain` or `text/markdown` are often suitable.
