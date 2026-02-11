# Agents Guidelines

This document provides guidance for AI coding agents working in this Nuxt 3 + Vuetify 3 + TypeScript personal website repository.

## Build/Develop/Test Commands

```bash
# Development - runs on http://localhost:3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate

# Post-install (preparation step - runs automatically after npm install)
npm run postinstall
```

**Testing**:
- No dedicated test scripts exist currently. This is primarily a static site with dynamic rendering capabilities.
- If tests are added later, use Vitest (recommended for Nuxt 3) with `@nuxt/test-utils`.
- Example: Add to package.json: `"test": "vitest"` and `"test:run": "vitest run"`
- For e2e tests, consider Playwright or Cypress.

**Linting**:
- No linting scripts configured. Use your judgment for code quality.
- If adding linting, use ESLint with TypeScript support: `@nuxt/eslint-config`
- Example: Add `"lint": "eslint ."` and `"lint:fix": "eslint . --fix"`

**Running a single test**: If tests exist, run with `npm run test -- <test-file>` (assuming Vitest setup).

## Code Style Guidelines

### Project Architecture

- **Framework**: Nuxt 3 with TypeScript composition API
- **UI Library**: Vuetify 3
- **Language**: TypeScript strict mode
- **Styling**: SCSS with Vuetify variables (when stylesheets are used)
- **State Management**: Reactive refs and composables (no external state libs)
- **Routing**: File-based routing in `/pages/`

### Formatting

- Use 2 spaces for indentation (consistent with Nuxt defaults)
- No trailing whitespace
- Max line length: 100 characters (soft limit)
- Use single quotes for strings in JavaScript/TypeScript
- Use double quotes for attributes in templates (Vue default)
- No semicolons at end of lines (Prettier style, if used)
- Organize imports: Vue imports first, then external libs, then local imports

### Naming Conventions

- **Components**: PascalCase for file names (e.g., `VHeader.vue`), "V" prefix for custom components
- **Variables/Functions**: camelCase (e.g., `backgroundImageUrl`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Interfaces/Types**: PascalCase (e.g., `BlockProps`)
- **Files**: kebab-case for non-component files (e.g., `utils.ts`)
- **CSS Classes**: kebab-case (e.g., `headline-title`)

### TypeScript Usage

- Always use strict mode (enabled by default)
- Define interfaces for all data structures
- Use union types for variants (e.g., `type ComponentType = 'headline' | 'teaser'`)
- Avoid `any` type; use `unknown` or specific types
- Use `keyof` for dynamic object keys
- Prefer `const` assertions for immutable objects
- Use `as const` for literal types

### Component Patterns

#### Vue Components (.vue files)

- Use `<script setup lang="ts">` (Composition API preferred over Options API)
- Component names start with "V" prefix (e.g., `VHeader.vue`, `VGrid.vue`)
- Use PascalCase for component file names
- Props definition with TypeScript interfaces or inline types

```typescript
// Preferred: Inline types for simple props
const props = defineProps<{
  block: {
    content: Record<string, any>
    children?: Block[]
  }
}>()

// Or with interface for complex props
interface PropsType {
  property?: string
  required: boolean
}

const props = defineProps<PropsType>()
const emit = defineEmits<{
  (event: 'event-name'): void
}>()
```

- Use Vuetify 3 components throughout (v-app, v-container, v-row, v-col, v-btn)
- Dynamic components use `resolveComponent()`:  
  `const VHeadline = resolveComponent('VHeadline')`
- For recursive components, wrap with `markRaw()`
- Use optional chaining for optional props: `block?.children`

#### Composition API Patterns

- Always define interfaces for data structures
- Use `defineProps`, `defineEmits` macros
- Use `computed()`, `ref()`, `reactive()` from Vue
- Mark components as `markRaw()` when needed for performance
- Use `onMounted()`, `onUnmounted()` lifecycle hooks properly
- Prefer `ref` for primitives, `reactive` for objects

```typescript
interface Block {
  type: string
  content: Record<string, any>
  children?: Block[]
}

const data: Data = reactive({ url: null, blocks: [] })
const isLoading = ref(false)
const computedBlocks = computed(() => data.blocks.filter(block => block.type))
```

### Template Patterns

- Event handlers use `@click` syntax
- Style bindings: `:style="{}"`
- Class bindings: `:class="[array, of, classes]"`
- Minimal inline styling, prefer Vuetify classes and custom CSS
- Use v-for with keys: `v-for="(item, index) in items" :key="index"`
- Dynamic components: `<component :is="component[type]" :block="block" />`
- Use v-if/v-else for conditional rendering
- Prefer computed properties over methods in templates

### Imports and Dependencies

- Import Vuetify components individually (tree-shaking): `import { VBtn } from 'vuetify/components'`
- Use Vuetify composables: `useHead()` for SEO/metadata
- Import Vue functions as needed: `import { ref, computed, onMounted } from 'vue'`
- Group imports: Vue core, external libs, local utils
- Use absolute imports for local modules (Nuxt auto-resolves)
- Plugins use `defineNuxtPlugin()` pattern

### Error Handling

- Add console logging for debugging: `console.log('Message:', data)`
- Check for URL parameters safely: `currentUrl.searchParams.has('editMode')`
- Use try-catch for asynchronous operations
- Handle API errors gracefully (though minimal APIs here)
- Validate props and emit warnings for invalid data
- Use Vue's error boundaries if needed (though not common in Nuxt)

### Security Best Practices

- Never expose secrets or API keys in code
- Validate all user inputs, especially from URL params or postMessage
- Use HTTPS for external resources
- Avoid inline scripts or eval
- Sanitize content from external sources
- Use Content Security Policy if deploying (configure in Nuxt)

### Styling Guidelines

- Use scoped styles (`<style scoped>`)
- Prefer Vuetify theme variables over hardcoded colors
- Use CSS custom properties for theming
- Organize styles: layout, typography, colors, responsive
- Avoid !important; use specificity wisely
- Use SCSS nesting sparingly (max 2-3 levels)

### Testing Guidelines

- Write unit tests for composables and utilities
- Component tests using `@nuxt/test-utils` and Vitest
- Test user interactions and edge cases
- Mock external dependencies
- Aim for 70-80% code coverage
- Run tests before commits

## Important Notes

- This is a **Nuxt 3.4.2** project (ensure compatibility)
- **Vuetify 3.1.14** (latest compatible with Nuxt 3)
- Uses **TypeScript** without shims (configured in `nuxt.config.ts`)
- No package manager lock file (uses Yarn but not committed)
- Minimal dependencies - keep it lightweight
- Edit mode functionality via URL params (`?editMode=true`)
- Message API for external content injection via `window.postMessage` event
- No test/lint commands configured - use your judgment for code quality

## File Structure

```
/
├── app.vue                 # Root component, wraps with v-app
├── nuxt.config.ts         # Nuxt configuration
├── package.json           # Dependencies and scripts
├── assets/                # Static assets
│   ├── images/
│   └── styles/            # SCSS files (mostly empty currently)
├── components/            # Vue components (VHeadline, VTeaser, etc.)
├── layouts/               # Layout components
├── pages/                 # Page components (index.vue)
├── plugins/               # Nuxt plugins (vuetify.ts)
└── public/                # Public static files
```

## No Cursor/Copilot Rules

There are no existing `.cursorrules`, `.cursor/rules/`, or `.github/copilot-instructions.md` files in this repository.