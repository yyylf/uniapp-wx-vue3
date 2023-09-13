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
        question: "Vue生命周期？",
        answer: `
		beforeCreate created beforeMount mounted beforeUpdate updated beforeDestroy destroyed (activated deactivated)
		vue3:
		setup onBeforeMount onMounted onBeforeUpdate onUpdated onBeforeUnmount onUnmounted (onActivated onDeactivated)
		`
      },
      {
        question: "如何防御XSS攻击？",
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni-app/uniapp-wx-vue3/pages/vue/index.vue"]]);
wx.createPage(MiniProgramPage);
