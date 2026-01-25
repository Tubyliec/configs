# Refactoring

Analyze the project code for code smells, architectural issues, and potential performance bottlenecks.

## Project context

- Language / stack: take from prompt
- Application type: take from prompt
- Runtime environment: take from prompt

## Refactoring goals

- Improve code readability, maintainability, and extensibility
- Minimize duplication (**DRY**)
- Simplify design and solutions by following **KISS**
- Avoid introducing abstractions or functionality without real necessity (**YAGNI**)
- Apply **SOLID principles contextually**, taking into account the specifics of the chosen stack
- **Prefer simple and explicit solutions over complex patterns if they do not provide measurable benefits**
- Eliminate unnecessary computations and redundant state updates / re-renders / object recreations (where applicable)
- Evaluate the **overall project architecture**, including the level of modularity and separation of concerns
- Identify issues in **folder structure and module boundaries** (e.g. high coupling, low cohesion)

## Naming conventions

Follow the the [naming conventions guide](../guides/naming/naming.md).

## Project structure

Follow the [project structure guide](../guides/project-structure/project-structure.md)

## Languages

For languages use instructions from [languages/scss.md](../guides/languages.md)

## Constraints

- Do not change external behavior or public APIs
- Do not add new dependencies unless clearly justified
- Avoid premature optimization and unnecessary architectural complexity

## Project Overhaul

- Do not add comments to the code in new files - code should be self-documenting through clear naming and structure
- Perform refactoring step by step - first move existing files by folders and update imports

## Logging

- Create a file called `issues.md` and record your suggestions for improvement there.

## User confirmation

- After presenting all refactoring suggestions, ask the user which specific suggestions they want to implement
- Wait for user confirmation before proceeding with any code changes
- Only implement the suggestions that the user explicitly approves

## Expected output

- List the identified problems and code smells (both code-level and architectural)
- Explain why these issues are problematic in the context of the given stack
- Propose:
  - code-level improvements
  - architectural and modularity recommendations
  - if necessary, an improved folder structure
- For each significant change, describe:
  - the original problem
  - the essence of the change
  - the expected impact (readability / maintainability / performance)
