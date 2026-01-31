# Frontend JavaScript/TypeScript Project Structure

## Recommended Folder Organization

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Button, Input, Modal)
│   ├── layout/         # Layout components (Header, Footer, Sidebar)
│   └── pages/          # Page-level components
├── pages/              # Route-based page components
├── services/           # API services and external integrations
├── utils/              # Utility functions and helpers
├── hooks/              # Custom hooks (React/Vue composition API)
├── store/              # State management (Redux, Zustand, Pinia)
├── types/              # TypeScript type definitions
├── constants/          # Application constants
├── styles/             # Global styles and CSS-in-JS
├── assets/             # Static assets (images, fonts, icons)
└── tests/              # Test files (or alongside source files)

config/                 # Build and configuration files
docs/                   # Project documentation
scripts/                # Build and deployment scripts
```

## File Naming Conventions

### Components
- Use PascalCase for component files: `UserProfile.tsx`, `NavigationBar.vue`
- Use kebab-case for non-component files: `user-profile.css`, `api-service.ts`

### Types and Interfaces
- Use PascalCase with suffix: `user.type.ts`, `user.interface.ts`
- Group related types in feature-specific folders

### Services
- Use kebab-case with `-service` suffix: `api-service.ts`, `auth-service.ts`
- Group by domain: `services/auth/`, `services/user/`

## Code Organization Patterns

### Component Structure
```typescript
// Component file structure
export interface ComponentProps {
  // Props interface
}

export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component implementation
  return <div>Component content</div>;
};
```

### Service Structure
```typescript
// Service file structure
interface ApiServiceConfig {
  baseURL: string;
  timeout: number;
}

class ApiService {
  private config: ApiServiceConfig;
  
  constructor(config: ApiServiceConfig) {
    this.config = config;
  }
  
  async getData(): Promise<DataModel> {
    // Implementation
  }
}
```

### State Management
- Use feature-based state organization
- Implement proper selectors for derived state
- Follow naming conventions: `useStore`, `useFeatureStore`

## Configuration Standards

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### ESLint Configuration
```javascript
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'prefer-const': 'error',
    'no-var': 'error',
    '@typescript-eslint/no-unused-vars': 'error'
  }
};
```

### Package.json Structure
```json
{
  "name": "project-name",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "jest",
    "lint": "eslint src --ext .ts,.tsx"
  },
  "dependencies": {
    "react": "^18.0.0",
    "typescript": "^4.9.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "eslint": "^8.0.0",
    "typescript": "^4.9.0"
  }
}
```

## Build and Deployment

### Environment Configuration
- Use `.env` files for environment-specific variables
- Implement proper environment variable validation
- Separate development, staging, and production configurations

### Build Optimization
- Implement code splitting for better performance
- Use tree shaking to eliminate unused code
- Optimize bundle size with proper imports

### Deployment Strategy
- Use CI/CD pipelines for automated deployment
- Implement proper environment separation
- Set up monitoring and error tracking