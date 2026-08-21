# Contexto para el Proyecto: Integración Google Drive

Este directorio sirve como un workspace dedicado para la interacción directa con Google Drive a través de las herramientas MCP de Gemini.

**Propósito:** Facilitar la edición, gestión y automatización de archivos en Google Drive (Docs, Sheets, Folders) directamente desde la nube, sin depender de sincronizaciones locales desactualizadas.

**Herramientas MCP de Google Workspace disponibles:**
- `mcp_google_workspace_terapiaconcris_create_google_doc`
- `mcp_google_workspace_terapiaconcris_create_google_sheet`
- `mcp_google_workspace_terapiaconcris_write_to_sheet`
- `mcp_google_workspace_terapiaconcris_read_sheet`
- `mcp_google_workspace_terapiaconcris_read_doc`
- `mcp_google_workspace_terapiaconcris_create_drive_folder`
- `mcp_google_workspace_terapiaconcris_move_to_folder`
- Otros MCPs específicos de Calendar también están disponibles si es necesario.

**Flujo de Trabajo:**
Cuando se active Gemini en este directorio, se asume que la tarea principal involucrará la manipulación de recursos en Google Drive o Google Calendar en la nube.

**Limitaciones Actuales:**
- No se admite la edición "en línea" de Google Docs o archivos binarios de forma genérica. Las operaciones son atómicas (crear, leer contenido de texto, escribir en celdas de hojas).
- Para ediciones complejas de Docs, se requeriría leer el contenido, procesarlo externamente (si es posible) y luego crear un nuevo documento o actualizar un segmento si la API lo permite.

---
Última actualización: Lunes, 17 de agosto de 2026
