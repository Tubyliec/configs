## For JavaScript + SCSS + HTML

```
project-root/
├─ public/
│   ├─ images/
│   ├─ fonts/
│   └─ icons/
├─ app/
│   ├─ core/
│   ├─ pages/
│   ├─ features/
│   ├─ entities/
│   ├─ widgets/
│   ├─ shared/
│   │   ├─ ui/
│   │   ├─ constants/
│   │   ├─ utilities/
│   │   └─ styles/
│   │       ├── _fonts.scss
│   │       ├── _mixins.scss
│   │       ├── _placeholders.scss
│   │       ├── _reset.scss
│   │       ├── _themes.scss
│   │       └── _variables.scss
│   ├─ index.html
│   ├─ index.js
│   └─ styles.scss
├─ package.json
└─ README.md
```

## For TypeScript + SCSS + HTML

```
project-root/
├─ public/
│   ├─ images/
│   ├─ fonts/
│   └─ icons/
├─ app/
│   ├─ core/
│   ├─ pages/
│   ├─ features/
│   │   └─ model/
│   │       ├─ interfaces/
│   │       └─ types/
│   ├─ entities/
│   │   └─ model/
│   │       ├─ interfaces/
│   │       └─ types/
│   ├─ widgets/
│   ├─ shared/
│   │   ├─ ui/
│   │   ├─ constants/
│   │   ├─ utilities/
│   │   └─ styles/
│   │       ├── _fonts.scss
│   │       ├── _mixins.scss
│   │       ├── _placeholders.scss
│   │       ├── _reset.scss
│   │       ├── _themes.scss
│   │       └── _variables.scss
│   ├─ index.html
│   ├─ index.ts
│   └─ styles.scss
├─ package.json
└─ README.md

```

Each component must be self-contained in its own directory with the following structure:

```
component-name/               
├── сomponent-name.js    
├── component-name.scss
```

## Structure overview

---

### Project Root

- **public/** – static assets served as-is (no build-time processing).
- **app/** – application source code.
- **package.json** – dependencies and scripts.
- **README.md** – general project documentation.

---

### Public Folder

- **images/** – images, backgrounds, illustrations, logos.
- **fonts/** – font files (woff, woff2, ttf, etc.).
- **icons/** – SVG icons or icon sets.

All files in `public` are available via absolute paths.

---

### App Folder

The `app` folder contains all application logic and structure.

#### **core/**

- Application initialization and global configuration.
- App-level setup, bootstrap logic, global listeners.
- Does not contain UI components or business logic.

---

#### **pages/**

- Top-level application pages.
- Page-specific scripts, templates, and styles.
- Pages compose widgets, features, and entities.
- Pages do not define models or business entities.

---

#### **features/**

- Reusable functional blocks that implement user interactions.
- May include logic, UI, and side effects.

**model/**

- Contracts related to the feature.
- Interfaces and types in TypeScript.
- Documented data structures or JSDoc typings in JavaScript.

---

#### **entities/**

- Core business entities of the application.
- Represent domain objects such as User, Product, or Order.
- Reused across features, widgets, and pages.

**model/**

- Data structure definitions for the entity.
- Interfaces or types in TypeScript.
- Documented structures in JavaScript.

---

#### **widgets/**

- Composite UI blocks built from multiple components.
- Used to assemble pages.
- Combine entities, features, and shared UI.
- Do not contain models.

---

#### **shared/**

Reusable resources not tied to business logic.

- **ui/** – basic UI components (buttons, inputs, loaders).
- **constants/** – global constants and configuration values.
- **utilities/** – helper and utility functions.
- **styles/** – global SCSS styles:
  - `_fonts.scss` – font declarations.
  - `_mixins.scss` – reusable SCSS mixins.
  - `_placeholders.scss` – SCSS placeholders.
  - `_reset.scss` – CSS reset or normalize.
  - `_themes.scss` – theme definitions.
  - `_variables.scss` – colors, spacing, breakpoints, etc.

---

### Entry Files

- **index.html** – main HTML entry point.
- **index.js / index.ts** – application entry file.
- **styles.scss** – root SCSS file that imports global styles.

**File organization rules:**

- Create separate files for utilities and constants whenever possible
- Group related utilities/constants in the folders by functionality (e.g., `date-utils`, `api-constants`)
- Avoid large utility files with mixed functionality
- Each utility/constant file should have a single, clear responsibility
