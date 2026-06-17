import mantine from 'eslint-config-mantine';

export default [
  {
    // eslint-config-mantine enables these eslint-plugin-jsx-a11y rules with
    // option shapes that Oxlint's stricter rule schemas reject (the
    // `includeRoles` field on control-has-associated-label and the element-map
    // on no-noninteractive-element-to-interactive-role), which breaks `vp lint`
    // after migrating to Vite+. Declaring them first drops those options from
    // the migrated Oxlint config: `vp migrate` runs `@oxlint/migrate --merge`,
    // which keeps the first config it sees for a rule. ESLint is last-wins, so
    // `eslint` here still uses Mantine's full config unchanged.
    rules: {
      'jsx-a11y/control-has-associated-label': 'off',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
    },
  },
  ...mantine,
  {
    ignores: [
      'dist',
      'storybook-static',
      'vite.config.ts',
      'vitest.setup.mjs',
      '**/*.{mjs,cjs,js,d.ts,d.mts}',
    ],
  },
  {
    files: ['**/*.story.tsx'],
    rules: {
      'no-console': 'off',
    },
  },
];
