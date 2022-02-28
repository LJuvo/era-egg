"use strict";

const Controller = require("egg").Controller;

class ChainController extends Controller {
  async growth() {
    const { quota } = this.ctx.request;
    const getLineData = () => {
      return {
        xAxis: new Array(12).fill(0).map((_item, index) => `${index + 1}日`),
        data: {
          name: quota,
          value: new Array(12)
            .fill(0)
            .map(() => parseInt(Math.random() * 3000)),
        },
      };
    };
    this.ctx.body = {
      code: 20000,
      data: {
        count: parseInt(Math.random() * 3000),
        growth: parseInt(Math.random() * 200),
        chartData: getLineData(),
      },
      msg: "请求成功",
      status: "ok",
    };
  }
  async overview() {
    const generateLineData = (name) => {
      return {
        name,
        count: parseInt(Math.random() * 2000),
        value: new Array(8).fill(0).map(() => parseInt(Math.random() * 4000)),
      };
    };
    const xAxis = new Array(8).fill(0).map((_item, index) => {
      return `12.1${index}`;
    });
    this.ctx.body = {
      code: 20000,
      data: {
        xAxis,
        data: [
          generateLineData("内容生产量"),
          generateLineData("内容点击量"),
          generateLineData("内容曝光量"),
          generateLineData("活跃用户数"),
        ],
      },
      msg: "请求成功",
      status: "ok",
    };
  }
}

module.exports = ChainController;
