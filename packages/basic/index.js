module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'standard',
        'plugin:import/recommended',
        'plugin:eslint-comments/recommended',
    ],
    plugins: ['unicorn'],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
        },
        // https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/named.md#settings
        'import/ignore': ['node_modules'],
    },
    rules: {
        'no-console': 1,
        'no-debugger': 1,
        // 缩进使用4个空格
        'indent': [2, 4, { SwitchCase: 1 }],
        // 禁止函数圆括号之前有空格
        'space-before-function-paren': [2, 'never'],
        // 语句末尾使用分号
        'semi': [2, 'always'],
        // 当最后一个元素或属性与闭括号 ] 或 } 在不同的行时，要求使用拖尾逗号；当在同一行时，禁止使用拖尾逗号
        'comma-dangle': [2, 'always-multiline'],
        // yield* 表达式中前面没空格后面有空格
        'yield-star-spacing': [2, { before: false, after: true }],
        // 最大连续空行数为1，文件末尾和文件开始的最大连续空行数为1和0
        'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],
        // 在花括号中使用一致的空格
        'object-curly-spacing': [2, 'always'],
        // 限制函数块中的语句的最大数量
        'max-statements': [2, { max: 20 }, { ignoreTopLevelFunctions: true }],
        // 如果有属性名称要求使用引号，则所有的属性名称都要使用引号
        'quote-props': ['error', 'consistent-as-needed'],
        // 使用驼峰命名
        'camelcase': [2, { properties: 'always' }],
        'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
        // 回调函数尽可能用箭头函数
        'prefer-arrow-callback': 'error',
        // 用 ES6 简写的形式去定义对象中的方法和属性
        'object-shorthand': ['error', 'always'],
        // 使用剩余参数代替 arguments
        'prefer-rest-params': 'error',
        // 使用扩展语法而非 .apply()
        'prefer-spread': 'error',
        // 使用模板字面量而非字符串拼接
        'prefer-template': 'error',
        // 箭头函数参数在可以省略括号的地方不使用括号
        'arrow-parens': ['error', 'as-needed'],
        // 变量的使用限制在其定义的作用域范围内
        'block-scoped-var': 'error',
        // 不建议使用 alert、confirm 和 prompt
        'no-alert': 'warn',
        // 变量不在声明前使用
        'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],

        // 无需严格遵循回调模式，在回调的第一个位置显示未定义的、 null 或错误对象
        'n/no-callback-literal': 0,
        // 不用强制统一 promise 的回调参数名为 resolve 和 reject
        'promise/param-names': 0,
        'import/order': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',

        // unicorns
        // Improve regexes by making them shorter, consistent, and safer
        'unicorn/better-regex': 'error',
        // Pass error message when throwing errors
        'unicorn/error-message': 'error',
        // Require Array.isArray() instead of instanceof Array
        'unicorn/no-instanceof-array': 'error',
        // Prevent calling EventTarget#removeEventListener() with the result of an expression
        'unicorn/no-invalid-remove-event-listener': 'error',
        // Improved version of the no-nested-ternary ESLint rule, which allows cases where the nested ternary is only one level and wrapped in parens.
        'unicorn/no-nested-ternary': 'error',
        // Forbid classes that only have static members
        'unicorn/no-static-only-class': 'error',
        // Disallow unnecessary spread
        'unicorn/no-useless-spread': 'error',
        // Disallow number literals with zero fractions or dangling dots
        'unicorn/no-zero-fractions': 'error',
        // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
        'unicorn/number-literal-case': 'error',
        // Prefer .addEventListener() and .removeEventListener() over on-functions
        'unicorn/prefer-add-event-listener': 'error',
        // Prefer .find(…) over the first element from .filter(…)
        'unicorn/prefer-array-find': 'error',
        // Prefer Array#flat() over legacy techniques to flatten arrays
        'unicorn/prefer-array-flat': 'error',
        // Prefer .flatMap(…) over .map(…).flat()
        'unicorn/prefer-array-flat-map': 'error',
        // Prefer Date.now() to get the number of milliseconds since the Unix Epoch
        'unicorn/prefer-date-now': 'error',
        // Prefer default parameters over reassignment
        'unicorn/prefer-default-parameters': 'error',
        // Prefer .includes() over .indexOf() and Array#some() when checking for existence or non-existence
        'unicorn/prefer-includes': 'error',
        // Prefer String#startsWith() & String#endsWith() over RegExp#test()
        'unicorn/prefer-string-starts-ends-with': 'error',
        // Prefer ternary expressions over simple if-else statements
        'unicorn/prefer-ternary': 'error',
        // Enforce throwing TypeError in type checking conditions
        'unicorn/prefer-type-error': 'error',
        // Require new when throwing an error
        'unicorn/throw-new-error': 'error',
    },
};
