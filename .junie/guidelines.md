# Project Guidelines - NoctherionGateOfSouls

## Project Overview
NoctherionGateOfSouls is a web-based game application built with Vue.js 3, TypeScript, and modern web technologies. The project appears to be in early development stage with a foundation setup for a browser-based gaming experience.

### Tech Stack
- **Frontend Framework**: Vue.js 3 with Composition API
- **Language**: TypeScript
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Package Manager**: npm

### Project Structure
```
src/
├── components/          # Reusable Vue components
├── pages/              # Page-level components (Dashboard.vue)
├── stores/             # Pinia stores (useGameStore.ts)
├── router.ts           # Vue Router configuration
├── main.ts            # Application entry point
├── App.vue            # Root component
└── style.css          # Global styles
```

## Development Guidelines

### Code Quality & Standards
- **Linting**: Use ESLint for code quality (`npm run check:lint`)
- **Formatting**: Use Prettier for code formatting (`npm run check:format`)
- **Type Safety**: Maintain strict TypeScript usage throughout the codebase
- **Vue Style**: Use Composition API with `<script setup>` syntax

### Development Workflow
1. **Development Server**: Run `npm run dev` to start the development server
2. **Code Checking**: Run `npm run check` to verify linting and formatting
3. **Code Fixing**: Run `npm run fix` to auto-fix linting and formatting issues
4. **Building**: Run `npm run build` to create production build
5. **Preview**: Run `npm run preview` to preview production build locally

### Testing Strategy
- Currently no test framework is configured
- When implementing tests, consider using Vitest (Vite's testing framework)
- Test critical game logic and state management functionality

### Code Style Instructions
- Use TypeScript for all new files
- Follow Vue 3 Composition API patterns
- Use Tailwind CSS for styling
- Maintain consistent naming conventions (camelCase for variables/functions, PascalCase for components)
- Keep components focused and single-responsibility
- Use Pinia stores for shared state management

### Build and Deployment
- Always run `npm run build` before deployment
- Ensure `npm run check` passes before committing changes
- The project builds to a `dist/` directory for deployment

### Game-Specific Considerations
- The project is structured for a game application with a game store
- Consider performance optimizations for game loops and animations
- Plan for responsive design across different screen sizes
- Consider implementing proper game state persistence
