"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  basic();
}
const basic = () => "../index/basic.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = [
      {
        question: "？",
        answer: `
		
		`
      },
      {
        question: "？",
        answer: ""
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          data
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni-app/uniapp-wx-vue3/pages/react/index.vue"]]);
wx.createPage(MiniProgramPage);
