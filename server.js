'use strict';
const AV = require('leanengine');
const {hello} = require('./cloud-functions');
const {afterSaveUser} = require('./hooks');

AV.Cloud.define("hello", hello);
AV.Cloud.afterSave("_User", afterSaveUser);

// 所有云函数定义完成后，启动服务。
AV.Cloud.start();
