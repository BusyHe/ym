module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': [0, 'always'],//function函数前空格
        'indent': [2, 4, { 'SwitchCase': 1 }],
        'camelcase': 0,
        'handle-callback-err': [2, '^(err|error)$'],
        'no-unused-vars': 0,
        'semi': [0]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
