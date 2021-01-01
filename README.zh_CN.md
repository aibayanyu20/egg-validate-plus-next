# egg-validate-plus-next

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-validate-plus-next.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-validate-plus-next
[travis-image]: https://img.shields.io/travis/eggjs/egg-validate-plus-next.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-validate-plus-next
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-validate-plus-next.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-validate-plus-next?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-validate-plus-next.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-validate-plus-next
[snyk-image]: https://snyk.io/test/npm/egg-validate-plus-next/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-validate-plus-next
[download-image]: https://img.shields.io/npm/dm/egg-validate-plus-next.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-validate-plus-next

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-validate-plus-next 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.validatePlusNext = {
  enable: true,
  package: 'egg-validate-plus-next',
};
```

## 使用场景

- 我在使用egg-validate-plus的时候，并没有我自己喜欢的规则，所以我对其进行了二次的封装
- How: 主要是用来做验证验证器的

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。


## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
