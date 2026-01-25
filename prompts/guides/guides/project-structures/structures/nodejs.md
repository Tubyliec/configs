```
project-root
├── config
├── environments
├── src
│   ├── core
│   │   └── middleware
│   ├── entities
│   ├── features
│   │   └── api
│   │       ├── routes
│   │       └── controllers
│   └── shared
│       ├── constants
│       └── utils
├── public
│   ├── i18n
│   ├── mock
│   ├── images
│   ├── icons
│   ├── fonts
│   └── media
└── app.js
```

# Node.js Project Structure Guide

This guide describes a recommended structure for a Node.js project and what type of code or files should be placed in each folder.

---

## `config`

Contains all application configuration files.

**Typical contents:**

- `app.config.js` – general application settings
- `database.config.js` – database connection settings
- `jwt.config.js` – JWT/authentication configuration
- Any other environment-independent configuration files

---

## `environments`

Contains environment-specific configuration files.

**Typical contents:**

- `environment.js` – default or development environment variables
- `environment.prod.js` – production environment variables
- Additional files for staging, testing, etc.

---

## `src`

Contains the main application code.

### `core`

Infrastructure and reusable components for the application.

- `middleware` – Express/KOA/Fastify middleware (logging, authentication, error handling)

### `entities`

Domain entities and models representing business objects.
This folder can include:

- Data models
- Enums or constants related to entities

### `features`

Application features organized by functionality.

- `api`
  - `routes` – route definitions
  - `controllers` – functions that handle requests

### `shared`

Reusable utilities and constants that can be used across modules.

- `constants` – application-wide constants
- `utils` – utility functions (e.g., formatting, hashing, validation helpers)

---

## `public`

Static assets served by the application.

- `i18n` – translation files for internationalization
- `mock` – mock data for testing or development
- `images` – image files
- `icons` – icons and SVGs
- `fonts` – font files
- `media` – videos, audio, or other media files

---

## `app.js`

The main entry point of the application. Initializes the server, loads middleware, routes, and starts listening for requests.

---

### Notes

- Keep `core` for middleware and infrastructure-related code only.
- `entities` should contain domain models and business objects.
- `features` are specific modules or use cases with routes and controllers.
- `shared` is for general utilities and constants that can be reused.
- `public` is for static files accessible by the client.
- `config` and `environments` hold all configuration and environment-specific settings.
