---
name: metrics-and-report-summarizer
description: Summarizes key metrics and reports from various data sources (social media, web analytics, ad campaigns, Google Sheets), identifying trends, insights, and actionable conclusions.
---
# Metrics and Report Summarizer Skill

This skill helps you extract key insights from various data sources and present them in a clear, concise, and actionable summary format.

## Workflow

1.  **Identify Data Source and Goal**:
    -   Ask the user to specify the **data source**:
        -   Direct text of a report.
        -   File path to a local report (e.g., CSV, TXT).
        -   URL to an online report or public dashboard.
        -   Google Sheet: requires Sheet ID and specific range (e.g., `Sheet1!A1:Z100`).
    -   Ask for the **primary goal of the summary**: (e.g., "identify trends", "find actionable insights", "summarize performance for stakeholders", "highlight challenges").
    -   Ask for the **timeframe** of the report (e.g., "last month", "Q3", "campaign duration").

2.  **Retrieve Data**:
    -   Use `read_file` for local files.
    -   Use `web_fetch` for URLs.
    -   Use `mcp_google_workspace_terapiaconcris_read_sheet` for Google Sheets.

3.  **Consult References**:
    -   Read `references/metrics_templates.md` to ensure all relevant metrics are considered for the specific report type.
    -   Read `references/reporting_frameworks.md` to choose an appropriate analytical framework (e.g., SWOT, SMART, Benchmark) based on the summary's goal.
    -   Read `references/output_formats.md` to select the best presentation style.

4.  **Analyze and Extract Insights**:
    -   Process the retrieved data.
    -   Identify key performance indicators (KPIs).
    -   Look for trends (growth, decline, seasonality).
    -   Pinpoint significant deviations from benchmarks or goals.
    -   Extract actionable insights and potential recommendations.

5.  **Generate Summary**:
    -   Craft a summary in the requested format (e.g., bullet points, executive summary, tabular data).
    -   Ensure clarity, conciseness, and focus on the primary goal.
    -   Include a brief overview, key findings, and actionable recommendations.

6.  **Present and Refine**:
    -   Present the generated summary to the user.
    -   Offer to refine the summary or delve deeper into specific metrics.

## Bundled Resources

-   `references/metrics_templates.md`: Provides templates for common metrics in social media, web, and ad campaign reports.
-   `references/reporting_frameworks.md`: Offers structured approaches like SWOT and SMART for data analysis.
-   `references/output_formats.md`: Examples of clear and concise output formats for summaries.
