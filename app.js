'use strict';
const path = require('path');
/**
 * 参数校验文件放在 /app/validate 下
 */
module.exports = app => {
  const directory = path.join(app.config.baseDir, 'app/validate');
  app.loader.loadToApp(directory, 'validate');
};
