module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'configure',
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'update',
        'seo'
      ]
    ],
    'scope-enum': [
      2,
      'always',
      [
        'general',
        'releases',
        'deps',
        'ui',
        'plugin',
        'framework',
        'config',
        'setup',
        'readme',
        'tools',
        'workflow'
      ]
    ]
  }
};
