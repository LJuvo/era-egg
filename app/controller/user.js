"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = {
      code: 20000,
      data: {
        token: "123145",
      },
      msg: "请求成功",
      status: "ok",
    };
  }
  async logout() {
    const { ctx } = this;
    ctx.body = {
      code: 20000,
      data: null,
      msg: "请求成功",
      status: "ok",
    };
  }
  async info() {
    this.ctx.body = {
      code: 20000,
      data: {
        accountId: "15012312300",
        avatar:
          "//lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png",
        certification: 1,
        email: "wangliqun@email.com",
        introduction: "人潇洒，性温存",
        job: "frontend",
        jobName: "前端艺术家",
        location: "beijing",
        locationName: "北京",
        name: "王立群",
        organization: "Frontend",
        organizationName: "前端",
        personalWebsite: "https://www.arco.design",
        phone: "150****0000",
        registrationDate: "2013-05-10 12:10:00",
        role: "admin",
      },
      msg: "请求成功",
      status: "ok",
    };
  }

  async queryMyProject() {
    const contributors = [
      {
        name: "秦臻宇",
        email: "qingzhenyu@arco.design",
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
      },
      {
        name: "于涛",
        email: "yuebao@arco.design",
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
      },
      {
        name: "宁波",
        email: "ningbo@arco.design",
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
      },
      {
        name: "郑曦月",
        email: "zhengxiyue@arco.design",
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp",
      },
      {
        name: "宁波",
        email: "ningbo@arco.design",
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
      },
    ];
    const units = [
      {
        name: "企业级产品设计系统",
        description: "Arco Design System",
      },
      {
        name: "火山引擎智能应用",
        description: "The Volcano Engine",
      },
      {
        name: "OCR文本识别",
        description: "OCR text recognition",
      },
      {
        name: "内容资源管理",
        description: "Content resource management ",
      },
      {
        name: "今日头条内容管理",
        description: "Toutiao content management",
      },
      {
        name: "智能机器人",
        description: "Intelligent Robot Project",
      },
    ];
    const { ctx } = this;
    ctx.body = {
      code: 20000,
      data: new Array(6).fill(null).map((_item, index) => ({
        id: index,
        name: units[index].name,
        description: units[index].description,
        peopleNumber: 234,
        contributors,
      })),
      msg: "请求成功",
      status: "ok",
    };
  }

  async queryMyTeam() {
    const { ctx } = this;
    ctx.body = {
      code: 20000,
      data: [
        {
          id: 1,
          avatar:
            "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
          name: "火山引擎智能应用团队",
          peopleNumber: 341,
        },
        {
          id: 2,
          avatar:
            "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
          name: "企业级产品设计团队",
          peopleNumber: 532,
        },
        {
          id: 3,
          avatar:
            "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
          name: "前端/UE小分队",
          peopleNumber: 324,
        },
        {
          id: 4,
          avatar:
            "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp",
          name: "内容识别插件小分队",
          peopleNumber: 613,
        },
      ],
      msg: "请求成功",
      status: "ok",
    };
  }

  async queryLatestActivity() {
    const { ctx } = this;
    ctx.body = {
      code: 20000,
      data: new Array(7).fill(null).map((_item, index) => ({
        id: index,
        title: "发布了项目 Arco Design System",
        description: "企业级产品设计系统",
        avatar:
          "//lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png",
      })),
      msg: "请求成功",
      status: "ok",
    };
  }
  async saveUserInfo() {
    const { ctx } = this;
    ctx.body = {
      code: 20000,
      data: "ok",
      msg: "请求成功",
      status: "ok",
    };
  }
  async queryCertification() {
    const { ctx } = this;
    ctx.body = {
      code: 20000,
      data: {
        enterpriseInfo: {
          accountType: "企业账号",
          status: 0,
          time: "2018-10-22 14:53:12",
          legalPerson: "李**",
          certificateType: "中国身份证",
          authenticationNumber: "130************123",
          enterpriseName: "低调有实力的企业",
          enterpriseCertificateType: "企业营业执照",
          organizationCode: "7*******9",
        },
        record: [
          {
            certificationType: 1,
            certificationContent: "企业实名认证，法人姓名：李**",
            status: 0,
            time: "2021-02-28 10:30:50",
          },
          {
            certificationType: 1,
            certificationContent: "企业实名认证，法人姓名：李**",
            status: 1,
            time: "2020-05-13 08:00:00",
          },
        ],
      },
      msg: "请求成功",
      status: "ok",
    };
  }

  async queryVisit() {
    const { ctx } = this;
    ctx.body = {
      code: 20000,
      data: [
        {
          name: "主页访问量",
          visits: 5670,
          growth: 206.32,
        },
        {
          name: "项目访问量",
          visits: 5670,
          growth: 206.32,
        },
      ],
      msg: "请求成功",
      status: "ok",
    };
  }
  async queryProjectTeam() {
    const { ctx } = this;
    ctx.body = {
      code: 20000,
      data: [
        {
          id: 1,
          content: "他创建的项目",
        },
        {
          id: 2,
          content: "他参与的项目",
        },
        {
          id: 3,
          content: "他创建的团队",
        },
        {
          id: 4,
          content: "他加入的团队",
        },
      ],
      msg: "请求成功",
      status: "ok",
    };
  }
}

module.exports = UserController;
