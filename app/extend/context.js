'use strict';
/**
 * 框架会把 app/extend/context.js 中定义的对象与 KOA Context 的prototype对象合并， 在处理请求时会基于扩展后的prototype生成ctx对象
 */

const AsyncValidator = require('async-validator');

module.exports = {
  /**
   * 用法 this.ctx.validate(rule, query)
   * @param {string，object} rule validate 目录下的校验文件(不需要带上 validate 目录)，或者直接传校验规则
   * @param {object} query 需要校验的数据
   */
  async validate(rule, query, scene = '') {
    // 判断当前是不是场景验证
    let builder = this.app.validate;
    let ruleObj = {};
    if (typeof rule === 'string') {
      const paths = rule.split('.');
      paths.forEach(path => {
        builder = builder[path];
      });
      if (scene.length && builder.scene[scene]) {
        // 当前是场景验证
        builder.scene[scene].forEach(r => {
          ruleObj[r] = builder.rules[r];
        });
      } else {
        ruleObj = builder.rules;
      }
    } else if (typeof rule === 'object') {
      if (scene.length && rule.scene[scene]) {
        rule.scene[scene].forEach(r => {
          ruleObj[r] = builder.rules[r];
        });
      } else {
        ruleObj = rule.rules;
      }
    }

    const validator = new AsyncValidator(ruleObj);
    let validateResult = true;
    validator.validate(query, { firstFields: true }, errors => {
      if (errors) {
        validateResult = false;
        if (this.app.config.validatePlusNext
          && this.app.config.validatePlusNext.resolveError
          && typeof this.app.config.validatePlusNext.resolveError === 'function') {
          this.app.config.validatePlusNext.resolveError(this, errors);
        } else {
          this.type = 'json';
          this.status = 400;
          this.body = {
            code: 400,
            message: '参数错误',
            error: errors,
          };
        }
      }
    });
    return validateResult;
  },
};
