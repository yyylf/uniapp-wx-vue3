"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  basic();
}
const basic = () => "./basic.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "js",
  setup(__props) {
    const data = [
      {
        question: "nginx配置？",
        answer: `
			server {  
			    listen 80;  # 监听的端口号  
			    server_name example.com;  # 服务器名称，可以是域名或IP地址  
			  
			    location / {  # 根目录的位置  
			        root /var/www/html;  # 网站的根目录路径  
			        index index.html index.htm;  # 默认的索引文件  
			    }  
			  
			    # 配置SSL证书  
			    ssl_certificate /etc/nginx/ssl/example.com.crt;  
			    ssl_certificate_key /etc/nginx/ssl/example.com.key;  
			  
			    # 配置gzip压缩  
			    gzip on;  
			    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;  
			  
			    # 配置反向代理  
			    location /api {  
			        proxy_pass http://backend_server;  # 反向代理的目标服务器地址  
			        proxy_set_header Host $host;  
			        proxy_set_header X-Real-IP $remote_addr;  
			        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;  
			    }  
			}
			`
      },
      {
        question: "nginx属性",
        answer: `
		1.高性能
		2.静态内容处理
		3.反向代理
		4.负载均衡
		5.日志记录
		6.模块化
		配置属性:
		worker_processes：这是Nginx服务器并发处理服务的关键配置，其值越大，可以支持的并发处理量也越多，但是受到硬件、软件等设备的制约。默认情况下，如果没有指定，它的值通常为CPU核心数，以达到最优的性能。
		worker_connections：每个工作进程的最大连接数。这个配置对Nginx的性能影响较大，在实际中应该灵活配置。
		error_log：发生错误时的日志输出路径。通过指定这个路径，用户可以查看和理解哪些操作或配置导致了错误。
		pid：指定Nginx主进程的ID文件路径。
		events：这个块涉及的指令主要影响Nginx服务器与用户的网络连接，包括是否开启对多work process下的网络连接进行序列化、是否允许同时接收多个网络连接，以及选取哪种事件驱动模型来处理连接请求。
		http：包含了代理、缓存和日志定义等绝大多数功能和第三方模块的配置，可以定义多个http块，每个块可以有多个server和location配置。
		server：定义一个server块，它表示一个虚拟服务器，可以监听指定的网络端口，并接受来自客户端的请求。
		location：定义了服务器应该如何响应特定的请求，或者如何将特定的请求转发到其他服务器。location可以包含正则表达式。
		access_log：指定该http的日志路径（此项也可以配置在server{}内）。这些日志记录了关于http请求的信息，如客户端IP地址、请求时间、请求的状态等。
		root、index、rewrite：用于指定服务器的基本文件目录、默认索引文件和URL重写规则。
		upstream：用于配置服务器集群，可以实现负载均衡，其中weight是权重的意思，权重越大，分配的概率就越大。
		简单例子:
		{
			user nginx;  # 定义用户为nginx  
			worker_processes 4;  # 定义工作进程数为4  
			error_log /var/log/nginx/error.log;  # 定义错误日志输出路径  
			pid /var/run/nginx.pid;  # 定义主进程ID文件路径  
			  
			events {  
			    worker_connections 1024;  # 定义每个工作进程的最大连接数  
			}  
			  
			http {  
			    include /etc/nginx/mime.types;  # 引入MIME类型文件  
			    default_type application/octet-stream;  # 默认的MIME类型  
			    log_format main '$remote_addr - $remote_user [$time_local] "$request" '  
			                    '$status $body_bytes_sent "$http_referer" '  
			                    '"$http_user_agent" "$http_x_forwarded_for"';  # 日志格式  
			  
			    server {  
			        listen 80;  # 监听的端口  
			        server_name example.com;  # 服务器名称  
			        location / {  # 定义URL路径  
			            root /var/www/html;  # 指定网页文件目录  
			            index index.html index.htm;  # 默认索引文件  
			        }  
			    }  
			}
		}
		`
      },
      {
        question: "promise.all成功返回的是什么,失败是什么",
        answer: `
		成功返回一个新的Promise对象，该对象的返回值是一个数组，数组元素按照原始Promise对象数组的顺序排列。
		Promise.all方法会等待所有的Promise实例都完成。所以失败，结果数组中仍然会包含所有错误消息。
		`
      },
      {
        question: "事件循环",
        answer: `
		1.调用栈：JavaScript引擎有一个单一的调用栈，用来记录当前执行中的任务。当一个函数被调用时，它被添加到调用栈的顶部。当这个函数执行完毕时，它会从调用栈中移除。
		2.任务队列：当一个异步操作（比如定时器、网络请求等）完成时，对应的回调函数会被添加到任务队列中。如果调用栈是空的，事件循环会从任务队列中取出一个任务放到调用栈中执行。
		3.微任务和宏任务：JavaScript的任务队列中有两种类型的任务，微任务和宏任务。宏任务包括：脚本整体（整体代码script）、setTimeout、setInterval、setImmediate、I/O、UI渲染等。微任务包括：Promise.then/catch/finally、MutationObserver、nextTick等。当执行栈为空的时候，首先会查看微任务队列是否有任务，如果有，就先执行微任务。当微任务全部执行完之后，再执行一个宏任务。
		4.事件循环：事件循环的工作就是配合调用栈执行栈中的任务，然后查看微任务队列和任务队列，将任务放到调用栈中。这个过程是一个无限循环，也就是“事件循环”。
		`
      },
      {
        question: "this指向",
        answer: `
		1.调用栈：JavaScript引擎有一个单一的调用栈，用来记录当前执行中的任务。当一个函数被调用时，它被添加到调用栈的顶部。当这个函数执行完毕时，它会从调用栈中移除。
		2.任务队列：当一个异步操作（比如定时器、网络请求等）完成时，对应的回调函数会被添加到任务队列中。如果调用栈是空的，事件循环会从任务队列中取出一个任务放到调用栈中执行。
		3.微任务和宏任务：JavaScript的任务队列中有两种类型的任务，微任务和宏任务。宏任务包括：脚本整体（整体代码script）、setTimeout、setInterval、setImmediate、I/O、UI渲染等。微任务包括：Promise.then/catch/finally、MutationObserver、nextTick等。当执行栈为空的时候，首先会查看微任务队列是否有任务，如果有，就先执行微任务。当微任务全部执行完之后，再执行一个宏任务。
		4.事件循环：事件循环的工作就是配合调用栈执行栈中的任务，然后查看微任务队列和任务队列，将任务放到调用栈中。这个过程是一个无限循环，也就是“事件循环”。
		`
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uni-app/uniapp-wx-vue3/pages/index/js.vue"]]);
wx.createPage(MiniProgramPage);
