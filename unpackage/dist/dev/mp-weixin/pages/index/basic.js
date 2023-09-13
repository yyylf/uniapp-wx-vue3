"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_collapse_item + _easycom_uni_collapse)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "basic",
  props: {
    data: null
  },
  setup(__props) {
    const { data } = __props;
    const value = common_vendor.ref("");
    let filterData = common_vendor.ref(data);
    const onSearch = (e) => {
      const filterText = e.target.value;
      filterData.value = data.filter((el) => el.question.indexOf(filterText) !== -1);
    };
    return (_ctx, _cache) => {
      return {
        a: value.value,
        b: common_vendor.o(onSearch),
        c: common_vendor.f(common_vendor.unref(filterData), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.answer),
            b: item.question,
            c: "05663ef6-1-" + i0 + ",05663ef6-0",
            d: common_vendor.p({
              title: item.question
            })
          };
        }),
        d: common_vendor.p({
          accordion: true
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-05663ef6"], ["__file", "D:/uni-app/uniapp-wx-vue3/pages/index/basic.vue"]]);
wx.createComponent(Component);
