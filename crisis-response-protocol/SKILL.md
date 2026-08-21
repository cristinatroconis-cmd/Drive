---
name: crisis-response-protocol
description: Provides a structured protocol for responding to crisis situations in online communities, helping draft responses, identify stakeholders, and recommend escalation paths.
---
# Crisis Response Protocol Skill

This skill guides you through a structured process for handling crisis situations in online communities, ensuring a measured, on-brand, and effective response to protect your reputation.

## Workflow

1.  **Describe the Situation**:
    -   Ask the user to provide a clear description of the crisis (e.g., a negative comment, a false accusation, a widespread complaint).
    -   Obtain the **brand name** (e.g., "Terapia con Cris", "dani-psicologa") to leverage brand voice.

2.  **Assess Severity**:
    -   Read `references/crisis_protocol.md` and assess the situation's severity (Low, Medium, High).
    -   Explain the reasoning behind the severity level.

3.  **Follow Protocol Steps**:
    -   Based on the severity level, guide the user through the recommended actions outlined in `references/crisis_protocol.md`. This includes:
        -   **Detection & Initial Evaluation**: Ensure all facts are gathered.
        -   **Action Inmediata**: Recommend immediate steps.
        -   **Información / Notificación**: Identify key stakeholders to inform (e.g., specific individuals, management).
        -   **Investigación**: Suggest gathering more information if needed.
        -   **Respuesta Pública (Drafting)**: Help draft initial responses based on templates and brand voice.

4.  **Draft Initial Response**:
    -   Leverage templates from `references/crisis_protocol.md` and the `brand-voice-guardian` skill to draft 1-2 initial public responses.
    -   Emphasize empathy, professionalism, and a clear path forward (e.g., taking the conversation offline).
    -   **CRITICAL**: Stress the importance of *not* speculating, blaming, or deleting comments (unless they are spam/troll).

5.  **Recommend Escalation**:
    -   If the crisis is Medium or High, explicitly recommend informing specific internal stakeholders as outlined in the protocol.

6.  **Review and Approve**:
    -   Present the proposed actions and draft responses to the user for final review and approval.

## Bundled Resources

-   `references/crisis_protocol.md`: The core document detailing the step-by-step crisis response protocol, including severity levels, actions, templates, and communication guidelines.
