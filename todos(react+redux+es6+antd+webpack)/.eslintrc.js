module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "semi": [
            "warn",
            "always"
        ],
        "quotes": [
            "warn",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "jsx-quotes": [
            "warn",
            "prefer-double"
        ],
        "default-case": "error",
        "comma-spacing": "warn",
        "no-unused-vars": [
            "warn",
            {
                "args": "none",
                "varsIgnorePattern": "NextApp"
            }
        ],
        "eqeqeq": "warn",
        "no-extra-bind": "warn",
        "no-var": "warn",
        "no-console": "off",
    },
    "setting": {
        "react": {
            "createClass": "createClass",
            "pragma": "React",
            "version": "15.0"
        }
    }
};