module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  importOrder: ['^solidjs', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^./(.*)$', '^[@global/(./)$]'],
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
};
