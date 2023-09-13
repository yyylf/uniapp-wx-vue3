"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const typeList = [
      {
        id: "browser",
        name: "浏览器"
      },
      {
        id: "css",
        name: "CSS"
      },
      {
        id: "html",
        name: "HTML"
      },
      {
        id: "js",
        name: "JS"
      },
      {
        id: "optimize",
        name: "性能优化"
      },
      {
        id: "automate",
        name: "前端工程化"
      }
    ];
    const toDetail = (title) => {
      common_vendor.index.navigateTo({
        url: `./${title}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(typeList, (title, k0, i0) => {
          return {
            a: common_vendor.t(title.name),
            b: title.id,
            c: common_vendor.o(($event) => toDetail(title.id), title.id)
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni-app/uniapp-wx-vue3/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
