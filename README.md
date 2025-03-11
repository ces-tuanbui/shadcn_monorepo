# Monorepo with TurboRepo, Next.js, Tailwind CSS, Jest and Storybook

## Demo 👀

https://shadcn-monorepo-web.vercel.app/

## What's inside?

### Apps and Packages
- `web`: a landing page 
- `storybook`: document for @workspace/ui
- `@workspace/ui`: a stub React component library for both `web` and `storybook` applications
- `eslint-config`: `eslint` configurations
- `tailwind`: `tailwind.config.json` already setup in `@workspace/ui`
- `jest`: `jest.config.ts` already setup in `@workspace/ui`
- `ts-config`: `tsconfig.json` used throughout the monorepo

### Folder Structure

```
my-turborepo/
├── apps/
│   ├── web/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   ├── tests/
│   │   │   ├── pages/
│   │   │   └── __mocks__/
│   │   ├── public/
│   │   ├── jest.config.js
│   │   ├── next.config.js
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   └── storybook/  
├── packages/
│   ├── ui/
│   │   ├── src/
│   │   │   ├── components/  
|   |   |   |   |── ui
|   │   │   │   |  ├── button.tsx
|   │   │   │   |  └── card.tsx
|   |   |   |   └──footer.tsx
│   │   │   |── lib/
│   │   │   |   └── utils.ts
|   |   |   |── styles
|   |   |   |   └── globals.css (tailwind global.css)
│   │   ├   └── tests/
|   │   │       ├── components/
|   │   │       └── __mocks__/
│   │   ├── tailwind.config.ts
│   │   ├── components.json  (shadcn/ui config)
│   │   ├── tsconfig.json
│   │   ├── jest.config.json
│   │   └── package.json
│   ├── eslint-config/
│   │   ├── base.js
│   │   ├── next.js
│   │   ├── react-internal.js
│   │   └── package.json
│   ├── typescript-config/
│   │   ├── base.json
│   │   ├── nextjs.json
│   │   ├── react-library.json
│   │   └── package.json
├── node_modules/
├── turbo.json
├── package.json
├── package-lock.json
└── README.md
```

### Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

### Adding components to packages/ui

To add components to your packages/ui, run the following command at the root of repo:

```bash
npx shadcn@latest add button -c packages/ui
```

### Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { HeroSection } from "@workspace/ui/components/hero"
```

### Unit Test 
From the root directory: 

#### Run test

```bash
npm run test
```

#### Run test coverage

```bash
npm run test:coverage
```

#### Run test for a specific app

```bash
npm run test -- --filter="web"
```

### Storybook
To start storybook, run the following command:

```bash
npm run storybook
```

### Develop 
To develop all apps and packages, run the following command:

```bash
npm run dev
```

### Build
To build all apps and packages, run the folowing commad: 

```bash
npm run build
```

### Run Strapi
To run strapi, run the following command:
```bash
cd /app/api/strapi
npm run dev
```

### Seed data strapi
To add seed data to the app, run the following command:
```bash
npm run seed
```