---
name: google-doc-updater
description: Emulates an update operation for Google Docs by reading content, creating a new document with updated content, and archiving the old one.
---
# Google Doc Updater Skill

This skill provides a secure workflow to "update" a Google Doc, overcoming the limitation of direct editing by adopting a "Read-Replace-Archive" pattern.

## Workflow

1.  **Read (`scripts/read_doc.js`)**:
    -   **Purpose**: Reads the content of the target Google Doc.
    -   **Usage**: `node scripts/read_doc.js <document_id>`

2.  **Update (Manual/Scripted)**:
    -   **Purpose**: Performs the content modification in the agent's memory.

3.  **Create (`scripts/create_new_doc.js`)**:
    -   **Purpose**: Creates a new Google Doc with the modified content.
    -   **Usage**: `node scripts/create_new_doc.js <new_title> <content>`

4.  **Archive (`scripts/archive_doc.js`)**:
    -   **Purpose**: Moves the old Google Doc to an "Archive" folder in Drive.
    -   **Usage**: `node scripts/archive_doc.js <old_document_id>`

## Protocol
1. Read the document content.
2. Draft the updated content.
3. Create the new document.
4. Move the old document to an Archive folder to ensure the new one becomes the single source of truth.

## Bundled Resources
- `scripts/`: Modular scripts to handle read, create, and archive operations.
