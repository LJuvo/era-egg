"use strict";

const Controller = require("egg").Controller;

class ChannelController extends Controller {
  async submit() {
    this.ctx.body = {
      code: 20000,
      data: "ok",
      msg: "请求成功",
      status: "ok",
    };
  }
}

module.exports = ChannelController;
