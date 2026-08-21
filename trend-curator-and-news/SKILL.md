---
name: trend-curator-and-news
description: Identifies current trends, relevant news, and emerging topics within specified niches, curates and summarizes information, and provides insights for content strategy.
---
# Trend Curator and News Skill

This skill helps you stay informed about current trends, relevant news, and emerging topics within your specified niches.

## Script Purposes (Functional Modules)

To maintain a clean and modular codebase, this skill is divided into three functional script modules:

1.  **Retriever (`scripts/get_research_context.js`)**:
    -   **Purpose**: Extracts niches/keywords (`references/niche_topics.md`) and preferred sources (`references/source_preferences.md`) to set up targeted search parameters.
    -   **Usage**: `node scripts/get_research_context.js <topic_alias>`

2.  **Curator (`scripts/summarize_content.js`)**:
    -   **Purpose**: Processes content fetched from URLs (via `web_fetch`), summarizing key findings, data points, and relevance to the specified niche.
    -   **Usage**: `node scripts/summarize_content.js <url>`

3.  **Analista (`scripts/generate_insights.js`)**:
    -   **Purpose**: Applies structured frameworks (`references/analysis_frameworks.md`) to the curated summaries to produce actionable strategic insights, opportunities, and content ideas.
    -   **Usage**: `node scripts/generate_insights.js <summarized_data_json>`

## Workflow

1.  **Retrieve Context**: Use the **Retriever** to define search parameters.
2.  **Curate Content**: Use the **Curator** to fetch and summarize key information from reputable sources.
3.  **Generate Insights**: Use the **Analista** to transform summaries into strategic business and content recommendations.

## Bundled Resources

-   `references/niche_topics.md`: Configurable list of the user's key niches and topics of interest.
-   `references/source_preferences.md`: Guidelines for preferred sources and content types to ensure quality and relevance.
-   `references/analysis_frameworks.md`: Simple frameworks (like PESTEL) to help analyze trends and extract strategic insights.
