---
name: social-calendar-builder
description: Helps create and structure a social media content calendar, from idea generation to formatting a Google Sheet. Use when asked to "create a content calendar", "plan social media posts", etc.
---
# Social Calendar Builder Skill

This skill provides a structured workflow to create a social media content calendar in a Google Sheet.

## Identity & Voice (Critical)
**All content MUST follow the Psicoterapia Humanista Existencial approach defined in `brand-voice-guardian/references/brand_voice_guides.md`.** 
Every post or hook must follow the structural requirement: **Philosophical Hook (Cita/Concepto) -> Poetic Bridge -> Clinical/Neuroscientific Bridge**.
**Media Mix Strategy**: Content generation MUST strictly adhere to the "Atomización Consciente" strategy outlined in `social-calendar-builder/references/media_mix_strategy.md`.

## Script Purposes (Functional Modules)

To maintain a clean and modular codebase, this skill is divided into functional script modules:

1.  **Retriever (`scripts/get_context.js`)**:
    -   **Purpose**: Extracts core content pillars, inspiration, and fetches relevant trend insights.
    -   **Usage**: `node scripts/get_context.js <brand_alias> <timeframe>`

2.  **Generator (`scripts/generate_calendar_data.js`)**:
    -   **Purpose**: Brainstorms and generates post ideas (Hook, Copy, CTA, Hashtags) for IG (3 Reels, 2 Carrusels) and TikTok (Repurpose). **Strictly applies the Philosophical-Poetic-Clinical structure and Media Mix format adaptations.**
    -   **Usage**: `node scripts/generate_calendar_data.js <timeframe> <brand_alias>`

3.  **Builder (`scripts/create_calendar_sheet.js`)**:
    -   **Purpose**: Formats the content into a Google Sheet using MCP tools.
    -   **Usage**: `node scripts/create_calendar_sheet.js "<title>" [parent_folder_id]`

## Workflow

1. **Retrieve Context & Trends**: Use the **Retriever** to understand the brand's pillars and latest trend insights.
2. **Generate Content**: Use the **Generator** to produce post ideas, ensuring content aligns with the **Existentialist voice guidelines** and the **Media Mix Strategy**.
3. **Optimize & Write**: Use `hook-and-copy-writer` to refine hooks and post copy, and `hashtag-and-seo-optimizer` for SEO-optimized captions.
4. **Build Sheet**: Use the **Builder** to create and populate the Google Sheet.


## Bundled Resources

-   `scripts/create_calendar_sheet.js`: A Node.js script that generates the structure for the Google Sheet.
-   `references/media_mix_strategy.md`: The Source of Truth (SSoT) for content strategy and atomization.
-   `references/content_pillars.md`: A map of brand's core content themes.
-   `references/post_ideas_examples.md`: A source of inspiration for creating engaging post ideas.

