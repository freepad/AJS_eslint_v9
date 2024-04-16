import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  pluginJs.configs.recommended,
  {
    // .eslintignore - отключение проверок:
    ignores: [ 'dist/', '*.json' ],
  },
  {
    // определение стандарта и парсинга:
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: globals.browser,
    },
  },
  {
    // files: ['src/**/*.js'], // все файлы с расширением .js в папке src
    rules: {
      indent: [ 'error', 2 ], // отступы, авто
      semi: [ 'error', 'always' ], // точка с запятой, авто
      // 'no-unused-vars': 'off', // разрешение на не используемые переменные
      'no-console': 'off', // разрешение на console.log()
      'no-var': 'error', // запрет на var-переменные
    },
  },
  {
    files: [ '*.config.*' ], // правила для конфигов
    rules: {
      // 'no-underscore-dangle': [ 'off' ], // двойное подчеркивание перед/после переменной
      // 'import/no-extraneous-dependencies': 'off', // импорт из дев-зависимостей
    },
  },
  {
    plugins: { '@stylistic/js': stylisticJs },
    rules: {
      // длина строки, нет авто:
      'max-len': [ 'error', { code: 120 } ],
      // одинарные кавычки, авто:
      quotes: [ 'error', 'single' ],
      // deprecated -> пробелы внутри массива - авто:
      'array-bracket-spacing': [ 'error', 'always' ],
      // deprecated -> перенос элементов массива на новые строки, если многоэлементный - авто:
      // 'array-bracket-newline': [ 'error', { multiline: true, minItems: 2 } ],
      // пробелы внутри объекта:
      'object-curly-spacing': [ 'error', 'always' ],
      // deprecated -> перенос свойств объекта на новые строки, если много свойств - авто:
      // 'object-curly-newline': [ 'error', { ObjectExpression: { multiline: true, minProperties: 2 } } ],
      // убираем много пробелов в разных местах, авто
      'no-multi-spaces': [
        'error', {
          exceptions: {
            Property: false,
            BinaryExpression: true,
            VariableDeclarator: true,
            ImportDeclaration: true
          }
        }
      ],
      'key-spacing': [
        'error', { mode: 'strict' }
      ],
      'no-trailing-spaces': 'error',
      // пустые строки, авто:
      'no-multiple-empty-lines': [
        'error', {
          max: 1, // одна внутренняя
          maxBOF: 1, // одна сверху в импортах
        }
      ],
    },
  },
];
