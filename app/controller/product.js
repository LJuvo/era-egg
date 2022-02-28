"use strict";

const Controller = require("egg").Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async detail() {
    const productId = this.ctx.params.productId;
    const dataList = await this.other();
    this.ctx.body = {
      code: 0,
      msg: "news list success",
      productId: productId,
      data: dataList,
    };
  }

  async other() {
    return {
      list: [
        { id: 1, title: "this is news 1", url: "/news/1" },
        { id: 2, title: "this is news 2", url: "/news/2" },
      ],
    };
  }
}

module.exports = ProductController;
