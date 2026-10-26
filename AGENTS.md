# AGENTS.md

## Layout

- Git repo root is `AMAC/`; the application lives in `amac-frontend/`. There is no root `package.json`, so run package commands from `amac-frontend/`.
- Entry flow: `index.html` -> `src/main.tsx` -> `src/App.tsx`.
- Plain React SPA with global CSS (`src/index.css`, `src/App.css`). There is no router, data layer, state library, test framework, or CI workflow; do not assume they exist.

## Commands

Use `pnpm` (the lockfile is `pnpm-lock.yaml`).

- `pnpm dev` — Vite dev server with HMR.
- `pnpm lint` — ESLint flat config; ignores `dist/`.
- `pnpm build` — runs `tsc -b && vite build`; this is also the typecheck.
- `pnpm preview` — serve the production build locally.
- No test script exists. Verify changes with `pnpm lint` then `pnpm build`.

## Toolchain quirks

- React Compiler is enabled via `@rolldown/plugin-babel` in `vite.config.ts`. Preserve that Babel setup when editing the Vite config.
- `tsconfig.app.json` enforces `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` (use `import type`), and `erasableSyntaxOnly` (no enums, namespaces, or parameter properties).
- `tsc -b` uses project references: `tsconfig.app.json` covers `src/`, `tsconfig.node.json` covers `vite.config.ts`.
- React 19, Vite 8, TypeScript 6. No formatter is configured; do not invent a format command.
- Files in `public/` are served from `/`. SVG icons are an external sprite referenced as `/icons.svg#<id>` (see `src/App.tsx`).

## amac-frontend

## Tecnologías
- React + Vite + TypeScript.
- React Compiler.
- Usar el sistema de estilos y las dependencias existentes.
- Consultar antes de incorporar una nueva dependencia.

## Estructura
- src/assets/: imágenes, iconos y fuentes.
- src/components/ui/: componentes reutilizables entre páginas.
- src/components/layout/: Header, Footer y MainLayout.
- src/pages/<pagina>/: componente principal y estilos de cada página.
- src/pages/<pagina>/components/: secciones exclusivas de esa página.
- src/data/: contenido estático y configuración.
- src/styles/: estilos globales y variables de diseño.

## Reglas de implementación
- Revisar los componentes existentes antes de crear uno.
- Mantener las páginas como composición de secciones.
- Definir los tipos de las props con TypeScript.
- Evitar duplicar componentes y contenido.
- No modificar archivos ajenos a la tarea sin una razón necesaria.

## Diseño
- Usar el frame indicado de Figma como referencia visual.
- Respetar tipografía, colores, espaciados, tamaños y alineaciones.
- Usar los recursos originales disponibles.
- No sustituir imágenes ni iconos por otros sin indicarlo.
- Reutilizar variables de diseño para valores compartidos.
- Preguntar cuando falte una decisión visual importante.

## Adaptación y accesibilidad
- Evitar desbordamiento horizontal.
- Usar HTML semántico.
- Permitir navegación con teclado y mostrar el foco.
- Añadir etiquetas a los campos y texto alternativo a las imágenes.
- Respetar las variantes de escritorio y móvil proporcionadas.

## Validación
- Ejecutar las comprobaciones disponibles en package.json.
- Revisar visualmente en los tamaños de los frames de referencia.
- Informar qué se implementó y qué no se pudo verificar.