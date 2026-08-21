---
name: brand-voice-guardian
description: Analyzes text against predefined brand voice guidelines and suggests improvements. Use when content needs to be aligned with a specific brand's tone and style.
---
# Brand Voice Guardian Skill

This skill helps ensure that your written content adheres to the specific brand voice and style guidelines you define for your projects.

## Script Purposes (Functional Modules)

To maintain a clean and modular codebase, this skill is divided into three functional script modules:

1.  **Retriever (`scripts/get_brand_guide.js`)**:
    -   **Purpose**: Extracts the specific brand voice guidelines for a given project from `references/brand_voice_guides.md`.
    -   **Usage**: `node scripts/get_brand_guide.js <brand_alias>`

2.  **Analyzer (`scripts/analyze_text_tone.js`)**:
    -   **Purpose**: Compares the provided text file against the brand's tone guidelines (Empathetic, Professional, etc.) and generates an alignment report with specific improvement suggestions.
    -   **Usage**: `node scripts/analyze_text_tone.js <text_file_path> <brand_alias>`

3.  **Scanner (`scripts/check_forbidden_words.js`)**:
    -   **Purpose**: Scans the provided text for forbidden words, phrases, or impermissible judgments listed in the `brand_voice_guides.md` for that specific project.
    -   **Usage**: `node scripts/check_forbidden_words.js <text_file_path> <brand_alias>`

## Workflow

1.  **Retrieve Guidelines**: Use the **Retriever** to get the context.
2.  **Scan**: Use the **Scanner** first to ensure no forbidden language is used.
3.  **Analyze**: Use the **Analyzer** to check for tone and style alignment.
4.  **Refine**: Combine the outputs to rewrite the text.

## Bundled Resources

-   `references/brand_voice_guides.md`: A configurable Markdown file where detailed brand voice guidelines for different projects are defined.
