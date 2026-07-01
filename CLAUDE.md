## 3. Behavioral Guidelines

### Think & Explore First
* Do not assume code structures. Read relevant files completely before suggesting edits.
* If a requirement is ambiguous or has multiple interpretations, **stop and ask** rather than guessing silently.
* State your core assumptions and proposed technical approach before rewriting large blocks of code.

### Simplicity & Surgical Changes
* Write the absolute minimum code required to solve the problem. Avoid speculative "future-proofing."
* **Surgical Edits:** Touch *only* what you must. Do not refactor adjacent code or fix unrelated formatting errors unless explicitly requested.
* Clean up your own mess: remove any imports, variables, or console logs introduced by your workflow.
* Strictly match the repository's existing code style, naming conventions, and architecture.

### Goal-Driven Execution
* Transform vague instructions into testable success criteria.
* Write or run a targeted test to reproduce a bug before attempting to fix it.
* Utilize the `/plan` mode to outline complex multi-step tasks before entering implementation mode.