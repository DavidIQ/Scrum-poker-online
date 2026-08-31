import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'

// eslint-config-next ships native flat configs, so they are spread directly.
// Routing them through FlatCompat fed a flat config to the legacy eslintrc
// validator, which crashed on the plugins' circular references.
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  prettier,
  {
    languageOptions: {
      globals: {
        NodeJS: true
      }
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts'
    ]
  }
]

export default eslintConfig
