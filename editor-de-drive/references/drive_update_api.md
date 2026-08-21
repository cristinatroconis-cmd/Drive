# Google Drive API: Update File Content (Files: update)

To update the content of an existing Google Drive file, you perform a `PATCH` request to the `files/{fileId}` endpoint with `uploadType=media`.

## Endpoint

`PATCH https://www.googleapis.com/upload/drive/v3/files/{fileId}?uploadType=media`

## Request Headers

-   `Authorization: Bearer <YOUR_ACCESS_TOKEN>`
-   `Content-Type: <MIME_TYPE_OF_NEW_CONTENT>` (e.g., `text/plain`, `text/markdown`)

## Request Body

The request body should contain the new content of the file.

## Example `curl` command (Conceptual)

```bash
ACCESS_TOKEN="your_token"
FILE_ID="your_file_id"
NEW_CONTENT="Your updated content here."
MIME_TYPE="text/plain"

curl -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: ${MIME_TYPE}" \
  --data-binary "${NEW_CONTENT}" \
  "https://www.googleapis.com/upload/drive/v3/files/${FILE_ID}?uploadType=media"
```

## Important Considerations

-   **`fileId`**: The ID of the file to update.
-   **`uploadType=media`**: Essential for updating the file's content directly.
-   **`Content-Type`**: Must match the MIME type of the `NEW_CONTENT` you are providing.
-   **`--data-binary`**: Used with `curl` to send the raw content as the request body.
-   **Versions**: Google Drive maintains revisions of files. Updating content typically creates a new revision.
