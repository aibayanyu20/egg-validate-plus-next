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

## Install

```bash
$ npm i egg-validate-plus-next --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.validatePlusNext = {
  enable: true,
  package: 'egg-validate-plus-next',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.validatePlusNext = {
  resolveError(ctx, errors) {
    if (errors.length) {
      ctx.type = 'json';
      ctx.status = 400;
      ctx.body = {
        code: 400,
        error: errors,
        message: '参数错误',
      };
    }
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
