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

## 使用

### 开启插件

```js
// config/plugin.js
exports.validatePlusNext = {
  enable: true,
  package: 'egg-validate-plus-next',
};

```

### 配置插件

```javascript

// config/config.default.js
config.validatePlus = {
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
  }
};

```

### 使用插件

#### 目录结构

```bash
|- MY-PROJECT
    |- app
        |- controller
            |- admin
              |- user.js
            |- api
              |- index.js
        |- validate
            |- admin
                |- user.js [创建用户校验规则]
            |- api
                |- index.js [创建 api 参数校验规则]
    |- config
        |- config.default.js
        |- plugin.js
    |- package.json
    |- README.md
```

```js
// validate/admin/user

export default {
  // 规则
  rules: {
    id: { type: 'number', required: true, message: 'id只能是数字' },
    username: { type: 'string', required: true, message: '用户名不能为空' },
    password: [
      { type: 'string', required: true, message: '密码不能为空' },
      { min: 6, max: 20, message: '密码只能在6到20位之间' },
    ],
  },
  // 场景
  scene: {
    create: [ 'username', 'password' ],
    update: ['id','username','password']
  },
};

```

```js
// app/controller/admin.js

export default class AdminController extends Controller {
  public async create() {
    const { ctx } = this;
    // 第一种校验方式
    const valid = await ctx.validate('admin.user', ctx.request.query, 'create');
    // 不传第三个参数默认校验全部规则
    // const valid = await ctx.validate('admin.user', ctx.request.query);
    if(!valid) return
    ctx.body = "校验通过"
  }

  public async update() {
    const { ctx,app } = this;
    // 第二种校验方式
    const valid = await ctx.validate(app.validate.admin.user, ctx.request.query, 'update');
    // 不传第三个参数默认校验全部规则
    // const valid = await ctx.validate(app.validate.admin.user, ctx.request.query);
    if(!valid) return
    ctx.body = "校验通过"
  }
  
  public async rule(){
    const { ctx } = this;
    // 第三种方式，自定义校验规则对象
    const rule = {
      id: [
        { required: true },
        { type: 'number', message: 'id 必须为数字' }
      ],
      password: [
        { required: true },
        { type: 'string', message: 'password 必须为字符串'}
      ]
    }
    // 第三个参数必须传入rule，否则不生效
    const valid = await ctx.validate(rule, ctx.request.query, 'rule');
    if(!valid) return
    ctx.body = "校验通过"
  }
}

```

### 参数描述


* 用法 this.ctx.validate(valid, query, scene)
* @param {string，object} valid validate 目录下的校验文件(不需要带上 validate 目录)，或者直接传校验规则
* @param {object} query 需要校验的数据
* @param {string} scene 验证场景 默认情况下会校验所有的规则，如果指定了场景，且场景为`rule`，
  第一个参数必须传入的是规则，其他场景可自定义。`rule`为关键字不可被使用

## 使用场景

- 我在使用egg-validate-plus的时候，虽然解决了egg-validate中自定义错误的功能，
  但是创建的文件过于多，个人感觉比较麻烦，
  所以我对当前的插件进行了一个二次的封装，提供了一些场景的功能。
  
- 增加了使用提示功能，优化使用体验


## 详细配置

[egg-validate-plus-next](https://github.com/aibayanyu20/egg-validate-plus-next)

## 依赖说明

### 依赖的 egg 版本

egg-validate-plus-next 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件

- async-validator 目前大部分的校验规则插件都使用了 [async-validator](https://github.com/yiminghe/async-validator)，
  包括前端的表单验证，egg-validate-plus-next 也不例外，感谢作者 [yiminghe](https://github.com/yiminghe)

## 鸣谢

本插件是基于[egg-validate-plus](https://github.com/temool/egg-validate-plus)做的一个二次的开发来满足个性化的定制
感谢作者[temool](https://github.com/temool)

## 提问交流

请到 [egg-validate-plus-next](https://github.com/aibayanyu20/egg-validate-plus-next) 异步交流。

## License

[MIT](LICENSE)
