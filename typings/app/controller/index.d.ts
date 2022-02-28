// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportChain = require('../../../app/controller/chain');
import ExportChannel = require('../../../app/controller/channel');
import ExportChat = require('../../../app/controller/chat');
import ExportContent = require('../../../app/controller/content');
import ExportHome = require('../../../app/controller/home');
import ExportMessage = require('../../../app/controller/message');
import ExportPolicy = require('../../../app/controller/policy');
import ExportPopular = require('../../../app/controller/popular');
import ExportPreset = require('../../../app/controller/preset');
import ExportProduct = require('../../../app/controller/product');
import ExportProfile = require('../../../app/controller/profile');
import ExportQuality = require('../../../app/controller/quality');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    chain: ExportChain;
    channel: ExportChannel;
    chat: ExportChat;
    content: ExportContent;
    home: ExportHome;
    message: ExportMessage;
    policy: ExportPolicy;
    popular: ExportPopular;
    preset: ExportPreset;
    product: ExportProduct;
    profile: ExportProfile;
    quality: ExportQuality;
    user: ExportUser;
  }
}
