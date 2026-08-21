---
name: community-reply-assistant
description: Helps draft empathetic, on-brand, and effective replies to comments or messages in a community setting, handling various types of interactions.
---
# Community Reply Assistant Skill

This skill assists in drafting appropriate and effective responses for community interactions across social media platforms, forums, or messaging. It helps maintain brand consistency, manage sentiment, and foster engagement.

## Workflow

1.  **Understand the Interaction**:
    -   Ask the user for the **original comment or message** to which a reply is needed.
    -   Ask for the **type of interaction**:
        -   `positive` (praise, gratitude)
        -   `question` (seeking information)
        -   `negative` (criticism, complaint, frustration)
        -   `objection` (specific concern like cost, efficacy)
        -   `other` (describe briefly)
    -   Ask for the **brand name** (e.g., "Terapia con Cris", "dani-psicologa") to ensure brand voice adherence (this skill will leverage the `brand-voice-guardian` skill for context).

2.  **Consult References & Context**:
    -   Read `references/reply_guidelines.md` for general best practices on tone, speed, and handling different interaction types.
    -   If the interaction type is `objection`, read `references/common_objections.md` to find pre-defined strategies for similar concerns.
    -   Retrieve the `brand_voice_guidelines` using the `brand-voice-guardian` skill to ensure the reply is on-brand.

3.  **Draft Replies**:
    -   Generate 1-3 draft replies based on the interaction type, content, and retrieved guidelines.
    -   For `negative` comments or `objections`, prioritize empathy, validation, and a constructive path forward (e.g., taking the conversation offline).
    -   For `questions`, aim for clarity and offer further assistance.
    -   For `positive` comments, reinforce engagement and gratitude.

4.  **Present and Refine**:
    -   Present the draft replies to the user, along with a brief explanation of the rationale behind each.
    -   Offer to refine the replies or generate more options.

## Bundled Resources

-   `references/reply_guidelines.md`: General best practices and examples for community replies.
-   `references/common_objections.md`: Configurable strategies for handling common objections and negative comments.
