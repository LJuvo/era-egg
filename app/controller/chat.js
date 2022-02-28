"use strict";

const Controller = require("egg").Controller;

class CharController extends Controller {
  async list() {
    this.ctx.body = {
      code: 20000,
      data: [
        {
          content: "马上就开始了，好激动！",
          id: 1,
          isCollect: true,
          time: "13:09:12",
          username: "用户7352772",
        },
        {
          content: "马上就开始了，好激动！",
          id: 2,
          isCollect: true,
          time: "13:09:12",
          username: "用户7352772",
        },
        {
          content: "马上就开始了，好激动！",
          id: 3,
          isCollect: false,
          time: "13:09:12",
          username: "用户7352772",
        },
        {
          content: "马上就开始了，好激动！",
          id: 4,
          isCollect: true,
          time: "13:09:12",
          username: "用户7352772",
        },
      ],
      msg: "请求成功",
      status: "ok",
    };
  }
}

module.exports = CharController;
