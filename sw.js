"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"9c91f270587848b894eac932858a8fee",url:"./404.html"},{revision:"180efa6d47e916bceefe772442cf717f",url:"./about/index.html"},{revision:"4ec00c55e379c3f179df4c48485b9bf9",url:"./archives/2020/10/index.html"},{revision:"457a29d53eebf2aa750244a324828cdf",url:"./archives/2020/index.html"},{revision:"10f838a5e62857c413c5995ac4bb6850",url:"./archives/2021/01/index.html"},{revision:"0c1008762383ca15d20abac472d587bb",url:"./archives/2021/05/index.html"},{revision:"a0431950844f4a684acc10a2b7c656f0",url:"./archives/2021/06/index.html"},{revision:"1e580821b3afb600c3c18df3c01d7986",url:"./archives/2021/index.html"},{revision:"a30c5831dcb8fa9697a238e571bd1048",url:"./archives/index.html"},{revision:"014aa4f2a734759629969e80f5f9f111",url:"./artitalk/index.html"},{revision:"472552604f19815d0a634bd3d953171e",url:"./assets/js/DPlayer.min.js"},{revision:"008788b551a99b53999ff1e4805faee0",url:"./atom.xml"},{revision:"6956993d9231214327b70545b58f8981",url:"./baidusitemap.xml"},{revision:"30f60e5c53a3b326fa2c3a193d683140",url:"./bing.json"},{revision:"49e8507f869c66da5ead45f89ff1264a",url:"./box/about/index.html"},{revision:"b52179afabbfe94fb4ff22ec6ba61c94",url:"./box/index.html"},{revision:"a08200d0a1c7fb8bd7dd23b20b4593cd",url:"./categories/Live2d/index.html"},{revision:"42a5ccd3ead4ed425d771b08e4790a80",url:"./categories/测试/index.html"},{revision:"bb99d6ed7343939bd19235cfe220ed45",url:"./categories/番剧/index.html"},{revision:"38a77ef8491b600e92fe43285ab898a3",url:"./categories/设定/index.html"},{revision:"ad4e5738682fc5bff3aeb6f7209bb87c",url:"./comments/index.html"},{revision:"cfcf649652cff91e70eb3330f5fc9c08",url:"./css/coin.css"},{revision:"0490d728d0274e77ee07bb18db0f9b9f",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"0eb86d19882c5b92361caafc23014fed",url:"./Gallery/biaoqing/furry/index.html"},{revision:"b66432c7d0daa43edb864eface03ed9b",url:"./Gallery/biaoqing/index.html"},{revision:"a62fc7032f5554652545f315b4839e6c",url:"./Gallery/biaoqing/qita/index.html"},{revision:"73e566c22759ec8e19f85578228034a9",url:"./Gallery/biaoqing/shadiao/index.html"},{revision:"24b12df4cf9a3d0726a14fe249ec41bf",url:"./Gallery/images/index.html"},{revision:"4aaeee27cb0ba288181c0e508b1f9214",url:"./Gallery/index.html"},{revision:"226d3f14756342a561fb3df0ca38c9eb",url:"./hpptalk/index.html"},{revision:"0f619d8ba8ade67c2b7824155cb1ca81",url:"./img/siteicon/browserconfig.xml"},{revision:"047c1e2db58e347b2d1b4a0d5afcf940",url:"./img/siteicon/README.html"},{revision:"31c39814a15fb40dd394a201deab4e80",url:"./index.html"},{revision:"db0ef6fc56befa79cef5e478f9138324",url:"./js/coin.js"},{revision:"8f1796329eb5b9b4d40101c3a84a2a18",url:"./js/custom.js"},{revision:"17997c8c456815bf9ad9ecd8b8cf2ebe",url:"./js/kernel.js"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"c005052c3b8085d9bca31d47fe517e05",url:"./js/runtime.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"a66edc73c59a46ac3cfdedcec9884e9c",url:"./kernel.html"},{revision:"ee9770a2894241aac752f755e40f0ce3",url:"./link/index.html"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./live2d-widget/autoload.js"},{revision:"2596a8630c0801002b3dff127b50518b",url:"./live2d-widget/demo/demo.html"},{revision:"6790fe17ee0264f77ba972c941f5d4c3",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"5e61153c81680871c6b501997e4df15f",url:"./live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./live2d-widget/waifu-tips.js"},{revision:"82dd286dffdad4cbbcda80352aca97ec",url:"./live2d-widget/waifu-tips.json"},{revision:"e11570c2a4b40040e6b5e780409055f8",url:"./live2d-widget/waifu.css"},{revision:"695aaf3222b48b4304fce428c91b9688",url:"./manifest.json"},{revision:"4622f8888f73e09f3d669923643841b3",url:"./music/index.html"},{revision:"3a51aae557006d9e2515d251457b7ffd",url:"./posts/19660/index.html"},{revision:"aee1c638aba0348031e2bcba28d205ee",url:"./posts/19888/index.html"},{revision:"240987f63d739f31898ea14b97e20156",url:"./posts/200501/index.html"},{revision:"00d7015adba52b799e90b6aece6374eb",url:"./posts/2146/index.html"},{revision:"61ea98c64d267eda17643ca49e3f0075",url:"./posts/28820/index.html"},{revision:"afd008443ff6f4eab7dcad5b452a8751",url:"./posts/4439/index.html"},{revision:"60322a6b412cd3f185119124148d9f05",url:"./posts/51727/index.html"},{revision:"d1d21d63924d368a28d1c2e229b0e959",url:"./posts/61916/index.html"},{revision:"44d4798793d6a1159e816bac8be5fb79",url:"./search.xml"},{revision:"ca3e316ff989c30eb2ea0b250d0f34e1",url:"./sitemap.xml"},{revision:"9f93ba0f0e3c0a14c5dd8afaf174bb7d",url:"./tags/Hexo/index.html"},{revision:"28f5d8a79cb5e103ba09a464d9483c98",url:"./tags/index.html"},{revision:"a79ada98ad1b043206c402b2d56e157a",url:"./tags/Live2d/index.html"},{revision:"95e28f66d492f89e51fc5cd72357ac1d",url:"./tags/人设/index.html"},{revision:"bd58c0bcd29b6398a0d8e2406dfa035b",url:"./tags/兽圈/index.html"},{revision:"16b04d96a483bb93b699ddbb5aa4ff77",url:"./tags/兽设/index.html"},{revision:"7e6e68ec9716ddd953425c0444a988e6",url:"./tags/动画/index.html"},{revision:"6a65c76b404cba390e1f03e436fccaf2",url:"./tags/视频/index.html"},{revision:"1f183f43ba4c6df9a83bb40eaa610039",url:"./tags/设定/index.html"},{revision:"2aca05aaf94af729bb76390e76027e74",url:"./videos/10/index.html"},{revision:"5c9769f1327634bfd268f07555567ffd",url:"./videos/11/index.html"},{revision:"4762078c1cbf461003792b7e4894bc65",url:"./videos/12/index.html"},{revision:"f34af1c901bd3dad2d1631b9d83eca55",url:"./videos/2/index.html"},{revision:"f3931dc4e121b1a4c3ad8d595d7c6da3",url:"./videos/3/index.html"},{revision:"e948c9bab8aea91318e69c8f00549d32",url:"./videos/4/index.html"},{revision:"b3f92cdf1641a9cbea402430923e8617",url:"./videos/5/index.html"},{revision:"b93a9dda2080c397cfa4f5e3d0ae0b76",url:"./videos/6/index.html"},{revision:"5c161ff35ab5fbcdcec212736dfd5e42",url:"./videos/7/index.html"},{revision:"0242d012aecf15f837de8f55287afc5c",url:"./videos/8/index.html"},{revision:"2e4f208c5d7d0b29b35cad13a4ee3e23",url:"./videos/9/index.html"},{revision:"bbcdc582c4102be737968785e22fc65a",url:"./videos/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();