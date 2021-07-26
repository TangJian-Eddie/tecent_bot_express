var express = require("express");
var router = express.Router();
const model = require("../mongodb/model");

router.post("/api/addSchedule", function (req, res, next) {
  // 添加定时任务
  let body = req.body;
  console.log("接收参数", body);
  model.insert(body).then((result) => {
    res.json({ code: 200, msg: "ok", data: result });
  });
});

router.get("/api/getScheduleList", function (req, res, next) {
  // 获取定时任务列表
  const condition = { hasExpired: false };
  model.find(condition).then((result) => {
    res.json({ code: 200, msg: "ok", data: result });
  });
});

router.post("/api/updateSchedule", function (req, res, next) {
  // 更新定时任务
  const condition = { _id: ctx.request.body.id };
  model.update(condition).then((result) => {
    res.json({ code: 200, msg: "ok", data: result });
  });
});

module.exports = router;
