curl -H "Authorization: Bearer $GEMINI_MCP_GOOGLE_ACCESS_TOKEN" "https://www.googleapis.com/drive/v3/files?q='root'%20in%20parents&fields=files(id,name,mimeType)"
