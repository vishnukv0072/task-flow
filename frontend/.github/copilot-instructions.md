# TaskFlow — Angular Development Guidelines

## Project

TaskFlow is a modern task-management SaaS application.

The frontend is built with Angular 20 and will eventually communicate
with a REST API.

## Angular

- Use modern Angular 20 APIs and patterns.
- Use standalone components.
- Prefer Signals for local and UI state where appropriate.
- Use computed signals for derived state.
- Use lazy-loaded routes for feature areas.
- Prefer Angular control flow (`@if`, `@for`, `@switch`).
- Use typed reactive forms.
- Keep components focused and small.
- Avoid unnecessary abstractions.

## Architecture

Use feature-based organization.

Application-wide concerns belong in `core/`.

Reusable UI and utilities belong in `shared/`.

Business features belong in `features/`.

Do not create a global `components/` folder containing unrelated
feature components.

## API readiness

The application will eventually communicate with a REST API.

Keep API communication behind services.

Do not put HTTP calls directly inside components.

Keep models/types separate from presentation components.

## State management

Do not introduce NgRx or another state-management library unless
there is a demonstrated need.

Prefer Angular Signals and services for application state.

## UI

Build an accessible, responsive SaaS interface.

Prefer semantic HTML.

Use proper labels and keyboard accessibility.

Do not sacrifice accessibility for visual design.

## Code quality

- Use strict TypeScript.
- Avoid `any`.
- Prefer explicit types for public APIs.
- Keep functions small.
- Avoid duplicated logic.
- Don't introduce dependencies unless there is a clear reason.

## AI behavior

Before making large architectural changes, explain the proposed
change.

Do not modify unrelated files.

Do not rewrite working code unnecessarily.

When implementing a feature, keep the implementation focused on
that feature.

Always preserve existing functionality.
