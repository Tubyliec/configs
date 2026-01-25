```
project-root
├── config
│   ├── app.config.ts
│   ├── database.config.ts
│   └── jwt.config.ts
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── public
│   ├── fonts
│   ├── icons
│   ├── i18n
│   ├── images
│   ├── media
│   └── mock
└── src
    ├── core
    │   ├── filters
    │   ├── guards
    │   ├── interceptors
    │   ├── middlewares
    │   └── providers
    ├── entities
    │   └── model
    │       ├── dto
    │       ├── interfaces
    │       └── types
    ├── features
    │   └── api
    ├── shared
    │    ├── constants
    │    ├── decorators
    │    ├── pipes
    │    ├── types
    │    └── utils
    ├── app.module.ts
    └── main.ts
```

# NestJS Project Structure Guide

This guide explains the recommended structure for a NestJS project and what kind of files or code should be placed in each folder.

---

## `src`

The root folder for all application code.

---

## `core`

Infrastructure and cross-cutting concerns that are used globally in the application.

**Typical contents:**

- `guards` – Authorization and route guards (e.g., `AuthGuard`, `RolesGuard`)
- `interceptors` – Interceptors for logging, transforming responses, or handling exceptions
- `filters` – Exception filters (e.g., `HttpExceptionFilter`)
- `middlewares` – Global or route-specific middlewares
- `providers` – Global providers like database connectors or services shared across modules

---

## `entities`

Domain entities and their data models.
Represents the core business objects of the application.

**Typical contents:**

- `model`
  - `dto` – Data Transfer Objects for request and response validation
  - `interfaces` – TypeScript interfaces representing entities
  - `types` – Type aliases or enums related to entities

---

## `features`

Application features that usually handle specific use cases or workflows.
They often depend on entities and core infrastructure.

**Typical contents:**

- `api` – Controllers, routes, and endpoints related to a feature
- Other feature-specific folders could include services, strategies, or guards

---

## `shared`

Reusable utilities, constants, and helpers that are used across modules.

**Typical contents:**

- `constants` – Application constants
- `decorators` – Custom decorators for controllers, services, or parameters
- `pipes` – Validation and transformation pipes
- `utils` – Utility functions and helpers
- `types` – Common TypeScript types used across modules

---

## `public`

Static assets and external resources.

**Typical contents:**

- `i18n` – Translation files for internationalization
- `mock` – Mock data for testing or development
- `images` – Static images
- `icons` – Icons or SVGs
- `fonts` – Custom fonts
- `media` – Videos, audio, or other media files

---

## `config`

Configuration files for the application.

**Typical contents:**

- `app.config.ts` – General application configuration
- `database.config.ts` – Database connection settings
- `jwt.config.ts` – JWT or authentication configuration

---

## `environments`

Environment-specific configuration files.

**Typical contents:**

- `environment.ts` – Default/development environment variables
- `environment.prod.ts` – Production environment variables

---

## `app.module.ts`

The root module that imports and aggregates all application modules.
Typically located at the bottom of `src`.

---

## `main.ts`

The entry point of the application. Bootstraps the NestJS app.

---

### Notes

- Keep the folder structure **flat where possible** to make modules easily discoverable.
- `entities` are core business models; `features` are use-case implementations.
- `shared` should **never contain business logic**, only reusable helpers.
- `core` is for **NestJS infrastructure**, like guards, interceptors, filters, and middlewares.
- `public` is static content, not part of the backend logic.
