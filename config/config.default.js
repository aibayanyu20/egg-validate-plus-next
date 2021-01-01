'use strict';

/**
 * egg-validate-plus-next default config
 * @member Config#validatePlusNext
 * @property {String} SOME_KEY - some description
 */
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

exports.customLoader = {
  validate: {
    directory: 'app/validate',
    inject: 'app',
  },
};
