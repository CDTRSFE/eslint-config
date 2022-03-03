# @trscd/eslint-config

Vue 和 Typescript 项目的 ESLint 配置。

## 安装

```shell
pnpm add eslint @trscd/eslint-config -D          # JavaScript, TypeScript, Vue 3
pnpm add eslint @trscd/eslint-config-basic -D    # JavaScript only
pnpm add eslint @trscd/eslint-config-ts -D       # JavaScript and TypeScript
```

## 使用

### 配置 `.eslintrc`

```js
// .eslintrc.js

module.exports = {
    extends: [
        '@trscd'        // JavaScript, TypeScript, Vue 3
        '@trscd/basic'  // JavaScript only
        '@trscd/ts'     // JavaScript and TypeScript
    ],
};
```

### 配置 `.eslintignore`

```json
public
dist
```

### 配置 `vscode/settings.json`

添加需要检测的语言类型：

```json
{
    "eslint.validate": [
        "vue",
        "html",
        "javascript",
        "typescript",
    ],
    "eslint.probe": [
        "vue",
        "html",
        "javascript",
        "typescript",
    ]
}
```

保存时自动修复：

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```
