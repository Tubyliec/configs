# Language-Specific Guidelines

This document provides coding standards and best practices for each supported language in our projects.

## JavaScript

### General Guidelines
- Use ES6+ features (const/let, arrow functions, destructuring, template literals)
- Prefer functional programming patterns where appropriate
- Use meaningful variable and function names
- Avoid global variables and side effects

### Code Style
- Use 2 spaces for indentation
- Use single quotes for strings, double quotes only for JSX attributes
- Use semicolons consistently
- Follow Airbnb JavaScript Style Guide as baseline

### Error Handling
- Always handle async operations with try/catch or .catch()
- Use meaningful error messages
- Implement proper fallback mechanisms

### Performance
- Avoid unnecessary array/object creation in loops
- Use memoization for expensive calculations
- Implement debouncing for event handlers

## TypeScript

### General Guidelines
- Always provide type annotations for function parameters and return types
- Use strict mode configuration
- Prefer interfaces over types for object shapes
- Use enums for constants where appropriate

### Type Safety
- Avoid using `any` type - use `unknown` or proper type definitions
- Implement proper null/undefined checking
- Use discriminated unions for complex types

### Code Organization
- Use barrel exports for clean module interfaces
- Group related types in separate files
- Use namespace imports for large libraries

## HTML

### Semantic Structure
- Use semantic HTML elements (header, nav, main, section, article, footer)
- Maintain proper heading hierarchy (h1 > h2 > h3)
- Use ARIA labels for accessibility

### Performance
- Minimize DOM nodes
- Use lazy loading for images
- Optimize critical rendering path

### Accessibility
- Use proper alt attributes for images
- Implement keyboard navigation
- Use sufficient color contrast

## CSS/SCSS

### Architecture
- Follow BEM methodology for class naming
- Use CSS custom properties for theming
- Implement mobile-first responsive design

### Performance
- Minimize selector specificity
- Use efficient selectors (avoid universal selectors)
- Implement CSS-in-JS only when necessary

### Organization
- Group related styles logically
- Use consistent naming conventions
- Implement proper cascade and inheritance

## Framework-Specific Guidelines

### Angular
- Follow Angular Style Guide
- Use dependency injection properly
- Implement proper component lifecycle hooks
- Use RxJS for reactive programming

### React
- Follow React documentation best practices
- Use hooks appropriately
- Implement proper state management
- Optimize re-renders with memoization

### Vue.js
- Follow Vue Style Guide
- Use composition API for new projects
- Implement proper component communication
- Use Vuex/Pinia for state management

## Testing Standards

### Unit Testing
- Aim for 80%+ code coverage
- Test edge cases and error conditions
- Use descriptive test names
- Mock external dependencies

### Integration Testing
- Test component interactions
- Verify API integrations
- Test user workflows

### E2E Testing
- Test critical user paths
- Use realistic test data
- Implement proper test isolation

## Documentation Standards

### Code Comments
- Document complex algorithms and business logic
- Use JSDoc for public APIs
- Keep comments up-to-date with code changes

### README Files
- Include setup instructions
- Document project architecture
- List dependencies and their purposes
- Provide contribution guidelines