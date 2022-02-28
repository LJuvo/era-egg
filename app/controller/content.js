"use strict";

const dayjs = require("dayjs");
const Controller = require("egg").Controller;

class ContentController extends Controller {
  async list() {
    const presetData = [58, 81, 53, 90, 64, 88, 49, 79];
    const getLineData = () => {
      const count = 8;
      return new Array(count).fill(0).map((el, idx) => ({
        x: dayjs()
          .day(idx - 2)
          .format("YYYY-MM-DD"),
        y: presetData[idx],
      }));
    };
    this.ctx.body = {
      code: 20000,
      data: [...getLineData()],
      msg: "请求成功",
      status: "ok",
    };
  }
  async publish() {
    const generateLineData = (name) => {
      const result = {
        name,
        x: [],
        y: [],
      };
      new Array(12).fill(0).forEach((_item, index) => {
        result.x.push(`${index * 2}:00`);
        result.y.push(parseInt(Math.random() * 3000));
      });
      return result;
    };
    this.ctx.body = {
      code: 20000,
      data: [
        generateLineData("纯文本"),
        generateLineData("图文类"),
        generateLineData("视频类"),
      ],
      msg: "请求成功",
      status: "ok",
    };
  }
  async period() {
    const getLineData = (name) => {
      return {
        name,
        value: new Array(12).fill(0).map(() => parseInt(Math.random() * 90)),
      };
    };

    this.ctx.body = {
      code: 20000,
      data: {
        xAxis: new Array(12).fill(0).map((_item, index) => `${index * 2}:00`),
        data: [
          getLineData("纯文本"),
          getLineData("图文类"),
          getLineData("视频类"),
        ],
      },
      msg: "请求成功",
      status: "ok",
    };
  }
  async opinion() {
    const { quota = "visitors" } = this.ctx.request.body;
    let opinionData = {};
    if (["visitors", "comment"].includes(quota)) {
      const year = new Date().getFullYear();
      const getLineData = (name) => {
        return new Array(12).fill(0).map((_item, index) => ({
          x: `${index + 1}月`,
          y: parseInt(Math.random() * 100),
          name: String(name),
        }));
      };
      opinionData = {
        count: 5670,
        growth: 206.32,
        chartData: [...getLineData(year), ...getLineData(year - 1)],
      };
    } else if (["published"].includes(quota)) {
      const year = new Date().getFullYear();
      const getLineData = (name) => {
        return new Array(12).fill(0).map((_item, index) => ({
          x: `${index + 1}日`,
          y: parseInt(Math.random() * 100),
          name: String(name),
        }));
      };
      opinionData = {
        count: 5670,
        growth: 206.32,
        chartData: [...getLineData(year)],
      };
    } else {
      opinionData = {
        count: 5670,
        growth: 206.32,
        chartData: [
          // itemStyle for demo
          { name: "文本类", value: 25, itemStyle: { color: "#8D4EDA" } },
          { name: "图文类", value: 35, itemStyle: { color: "#165DFF" } },
          { name: "视频类", value: 40, itemStyle: { color: "#00B2FF" } },
        ],
      };
    }
    this.ctx.body = {
      code: 20000,
      data: opinionData,
      msg: "请求成功",
      status: "ok",
    };
  }
}

module.exports = ContentController;
