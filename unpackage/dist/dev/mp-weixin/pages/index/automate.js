"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  basic();
}
const basic = () => "./basic.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "automate",
  setup(__props) {
    const data = [
      {
        question: "什么是XSS攻击？",
        answer: `
			（1）概念
			XSS 攻击指的是跨站脚本攻击，是一种代码注入攻击。攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息如cookie等。
			攻击者可以通过这种攻击方式可以进行以下操作：
			1.获取页面的数据，如 DOM、cookie、localStorage；
			2.DOS 攻击，发送合理请求，占用服务器资源，从而使用户无法访问服务器；
			3.破坏页面结构；
			4.流量劫持（将链接指向某网站）
			
			（2）攻击类型
			XSS可以分为存储型、反射型和DOM型：
			存储型指的是恶意脚本会存储在目标服务器上，当浏览器请求数据时，脚本从服务器传回并执行。步骤如下：
			1.攻击者将恶意代码提交到目标网站的数据库中。
			2.用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。
			3.用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
			4.恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。
			这种攻击常用于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。
			
			反射型指的是攻击者诱导用户访问一个带有恶意代码的URL后，服务器端接收数据后处理，然后把带有恶意代码的数据发送到浏览器端，浏览器端解析这段带有 XSS 代码的数据后当做脚本执行，最终完成XSS 攻击。
			1.攻击者构造出特殊的 URL，其中包含恶意代码。
			2.用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。
			3.用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
			4.恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。
			反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。 由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。
			
			反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。
			
			DOM 型 XSS 的攻击步骤：
			1.攻击者构造出特殊的 URL，其中包含恶意代码。
			2.用户打开带有恶意代码的 URL。
			3.用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。
			4.恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。
			
			DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端JS自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni-app/uniapp-wx-vue3/pages/index/automate.vue"]]);
wx.createPage(MiniProgramPage);
