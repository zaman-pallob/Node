# Node Dependency
    npm i lodash

# Node Dev Dependency
    npm add -D eslint-config-airbnb-base
    npm add -D eslint-config-prettier
    npm add -D eslint-plugin-prettier
    npm add -D eslint-plugin-import
    npm add -D prettier

# Linting Configuration


 copy this to  <i> .eslintrc.json</i> file
    
    {
     "extends": ["prettier", "airbnb-base"],
     "parserOptions": {
            "ecmaVersion": 12
             },

     "env": {
        "commonjs": true,
        "node": true
     },
     "rules": {
        "no-console": 0,
        "indent": 0,
        "linebreak-style": 0,
        "prettier/prettier": [
     "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true
        }
       ]
      },
    "plugins": ["prettier"]
    }
