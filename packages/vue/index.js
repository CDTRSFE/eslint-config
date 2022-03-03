// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    extends: [
        'plugin:vue/vue3-recommended',
        '@trscd/ts',
    ],
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
    ],
    rules: {
        // 每行最多的属性个数
        'vue/max-attributes-per-line': ['error', { singleline: 5 }],
        // 带属性的 html 元素内容不能保持单行
        'vue/singleline-html-element-content-newline': 'error',
        // 标签自闭和
        'vue/html-self-closing': ['error', {
            html: {
                void: 'always',
                normal: 'never',
                component: 'never',
            },
            svg: 'any',
            math: 'any',
        }],
        // 组件 name 属性值的格式（驼峰）
        'vue/component-definition-name-casing': 'error',
        // 允许使用 v-html
        'vue/no-v-html': 'off',
        // 定义 vue 中 html 缩进
        'vue/html-indent': ['error', 4],
    },
});
