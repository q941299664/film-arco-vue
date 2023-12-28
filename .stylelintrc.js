module.exports = {
  'extends': [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
  ],
  'defaultSeverity': 'warning',
  'plugins': ['stylelint-order'],
  'custom-syntax': 'postcss-styled-syntax',
  'rules': {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['plugin'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
  },
};
