"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const titleList = common_vendor.reactive(["作者", "QQ", "出生日期", "入党日期"]);
    const myInfo = common_vendor.reactive({
      作者: "于佑尧",
      QQ: "2428072732",
      出生日期: "1995-04-28",
      入党日期: "2016-05-25"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(titleList, (title, k0, i0) => {
          return {
            a: common_vendor.t(title),
            b: common_vendor.t(myInfo[title]),
            c: title
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni-app/uniapp-wx-vue3/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
