/**
 * @description camelCased (驼峰式) 命名与 kebab-case（短横线命名）
 */




// https://www.javascriptcn.com/read-10393.html

"thisStringIsGood"
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); })

    // This String Is Good