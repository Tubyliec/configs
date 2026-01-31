```
src
├── app
│   ├── core
│   │   ├── guards
│   │   └── interceptors
│   ├── entities
│   │   ├── model
│   │   │   ├── interfaces
│   │   │   └── types
│   │   ├── api
│   │   └── ui
│   ├── features
│   │   ├── model
│   │   │   ├── interfaces
│   │   │   └── types
│   │   └── ui
│   ├── pages
│   ├── shared
│   │   ├── constants
│   │   ├── pipes
│   │   ├── styles
│   │   │   ├── _fonts.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _placeholders.scss
│   │   │   ├── _reset.scss
│   │   │   ├── _themes.scss
│   │   │   └── _variables.scss
│   │   ├── ui
│   │   └── utilities
│   └── widgets
├── assets
│   ├── fonts
│   ├── icons
│   ├── images
│   ├── i18n
│   ├── media
│   └── mock
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
└── styles.scss
```

---

## Overview

### app/core

- **guards/** – Route guards (e.g., `AuthGuard`, `AdminGuard`).
- **interceptors/** – HTTP interceptors (e.g., for authorization, logging, error handling).
- **services/** _(optional, can be added)_ – Global singleton services used across the app (e.g., `AuthService`, `HttpService`, `NotificationService`).
- **Purpose:** Central place for core application logic and services that are used globally.

### app/entities

- **model/interfaces/** – TypeScript interfaces for domain entities.
- **model/types/** – TypeScript types, aliases, unions for entities.
- **api/** – API services specific to entities (e.g., `UserApiService`).
- **ui/** – Components tied to specific entities.

### app/features

- **model/interfaces/** – Interfaces for feature-specific models.
- **model/types/** – Types for feature models.
- **ui/** – Components implementing a specific feature.

### app/pages

- Components representing full pages/screens. Combines features, widgets, and entities.

### app/shared

- **constants/** – global constants (e.g., app-wide strings, numeric values, keys).
- **pipes/** – Global Angular or TypeScript pipes/helpers (e.g., date formatting).
- **utilities/** – Utility functions (e.g., formatters, helpers).
- **styles/** – Global SCSS files:
  - `_variables.scss` – colors, sizes, font variables.
  - `_mixins.scss` – SCSS mixins.
  - `_reset.scss` – CSS reset.
  - `_themes.scss` – Light/Dark themes.
  - `_placeholders.scss` – Placeholder styles for forms/elements.
  - `_fonts.scss` – Font imports and global font styles.
- **ui/** – Reusable UI components (buttons, modals, inputs).

### app/widgets

- Small reusable UI blocks or components (e.g., cards, lists, timelines).

### assets

- **fonts/** – Project fonts.
- **icons/** – Icons (SVG, PNG).
- **images/** – Illustrations, images.
- **i18n/** – Localization files.
- **media/** – Videos, audio files.
- **mock/** – Mock data for development.

### environments

- **environment.ts** – Development environment configuration.
- **environment.prod.ts** – Production environment configuration.

### styles.scss

- Main SCSS entry point importing global styles from `shared/styles`.

**File organization rules:**

- Create separate files for utilities and constants whenever possible
- Group related utilities/constants in the folders by functionality (e.g., `date-utils`)
- Avoid large utility files with mixed functionality
- Each utility/constant file should have a single, clear responsibility
- Follow [naming conventions](../../../guides/naming/naming.md) for all files
