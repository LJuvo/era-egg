"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/healthz/ready", controller.home.index);

  router.post("/api/user/login", controller.user.login);
  router.post("/api/user/logout", controller.user.logout);
  router.post("/api/user/info", controller.user.info);
  router.post("/api/user/my-project/list", controller.user.queryMyProject);
  router.post("/api/user/my-team/list", controller.user.queryMyTeam);
  router.post("/api/user/latest-activity", controller.user.queryLatestActivity);
  router.post("/api/user/save-info", controller.user.saveUserInfo);
  router.post("/api/user/certification", controller.user.queryCertification);
  router.post(
    "/api/user/project-and-team/list",
    controller.user.queryProjectTeam
  );
  router.get("/api/user/visits", controller.user.queryVisit);

  router.post("/api/message/list", controller.message.list);
  router.post("/api/message/read", controller.message.read);
  router.post("/api/chat/list", controller.chat.list);

  router.post("/api/channel-form/submit", controller.channel.submit);

  router.get("/api/content-data", controller.content.list);
  router.get("/api/content-publish", controller.content.publish);
  router.post("/api/content-period-analysis", controller.content.period);
  router.post("/api/public-opinion-analysis", controller.content.opinion);

  router.get("/api/popular/list", controller.popular.list);
  router.get("/api/popular-author/list", controller.popular.author);

  router.get("/api/profile/basic", controller.profile.basic);
  router.get("/api/operation/log", controller.profile.operation);

  router.get("/api/list/policy", controller.policy.list);
  router.get("/api/list/the-service", controller.policy.serviceList);
  router.get("/api/list/quality-inspection", controller.quality.list);
  router.get("/api/list/rules-preset", controller.preset.list);

  router.post("/api/data-chain-growth", controller.chain.growth);
  router.post("/api/data-overview", controller.chain.overview);

  router.get("/apis/product/detail/:productId", controller.product.detail);
};
