module.exports = {
    parser: 'typescript-eslint-parser',
    plugins: [
        'typescript'
    ],
    rules: {
        'spaced-comment': 'off',
        // 'react/no-unescaped-entities': 'off',
        // 'react/self-closing-comp': 'off',
        // 'react/void-dom-elements-no-children': 'off',
        'react/jsx-indent': 'off',
        // 'react/jsx-indent-props': 'off',
        // 'react/jsx-max-props-per-line': 'off'
        // 还不支持 properties https://github.com/yannickcr/eslint-plugin-react/issues/1342
        'react/sort-comp': 'off',
        'typescript/no-unused-vars': 'error'
    }
};