const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b12bfe0ae305181d49546fe607c6525d",url:"./404.html"},{revision:"aaa7b278308d7e3f462f9ca49ef11c6f",url:"./about/index.html"},{revision:"4d0eca1f0a9eb4a9c9b245ad5f392033",url:"./archives/2020/10/index.html"},{revision:"0227632efa743ee48919588ef5fa58e1",url:"./archives/2020/index.html"},{revision:"ae7327ae1e42dfc106cd6d9c2bd8f338",url:"./archives/2021/01/index.html"},{revision:"170fea5a0c1c11710a7dabec88f080a6",url:"./archives/2021/05/index.html"},{revision:"5ed3900f767e6c63fb991b24a3b284aa",url:"./archives/2021/06/index.html"},{revision:"4f6ba0ff8e5de3ca34a5ae0c7d3e5e76",url:"./archives/2021/08/index.html"},{revision:"3ee735230e04f48dec833b504456040f",url:"./archives/2021/index.html"},{revision:"21f31b2cc3cb0255d79fd01982709551",url:"./archives/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"472552604f19815d0a634bd3d953171e",url:"./assets/js/DPlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"0b79d684865f7c8c7b5e01d5e44694d6",url:"./atom.xml"},{revision:"a8883300bbb5e2c1bec31e0458840cd6",url:"./bing.json"},{revision:"49e8507f869c66da5ead45f89ff1264a",url:"./box/about/index.html"},{revision:"b52179afabbfe94fb4ff22ec6ba61c94",url:"./box/index.html"},{revision:"0d0bee5254b3fca87fa9b097da6fd53b",url:"./categories/Live2d/index.html"},{revision:"d4c3dfba81073524354dda7c964e1f43",url:"./categories/测试/index.html"},{revision:"c4e955a9ee0cc914a07fdf4f0ee088d5",url:"./categories/番剧/index.html"},{revision:"56c362971d69ab301afa00ec0f1af79f",url:"./categories/设定/index.html"},{revision:"d2377a403f770e480947974eb78add89",url:"./comments/index.html"},{revision:"808bbddc4f4c56aee97a7af07f1f364f",url:"./css/coin.css"},{revision:"3a1efd6a641c7d94fb480d9e35758bb0",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"de67e5fef92e2a13db3492a8e2bcf0a5",url:"./Gallery/biaoqing/furry/index.html"},{revision:"9da37bf7d59432b24664638fe71c8b65",url:"./Gallery/biaoqing/index.html"},{revision:"c1a40aa1540538969bc1527d4bbddaac",url:"./Gallery/biaoqing/qita/index.html"},{revision:"cbc1b6fb9f182d2a6ae1222dc6803812",url:"./Gallery/biaoqing/shadiao/index.html"},{revision:"5dc8d1ad6bfa19ca1a41523617f12a88",url:"./Gallery/images/index.html"},{revision:"afaf572a1c70b12a43fa19d5d57724ac",url:"./Gallery/index.html"},{revision:"20eeb04772ce308ed408367884c8b868",url:"./hpptalk/index.html"},{revision:"0f619d8ba8ade67c2b7824155cb1ca81",url:"./img/siteicon/browserconfig.xml"},{revision:"70db85b680fbebb2c276dc3f942044e6",url:"./img/siteicon/README.html"},{revision:"58e03461dc0a74f517091a53eb4c7c3f",url:"./index.html"},{revision:"db0ef6fc56befa79cef5e478f9138324",url:"./js/coin.js"},{revision:"81ddbc1f1237d5537a8b1fd4e6cd6121",url:"./js/custom.js"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"a66edc73c59a46ac3cfdedcec9884e9c",url:"./kernel.html"},{revision:"c7b5494bb0838c91ca4583df35ddfc44",url:"./kongtiao/index.html"},{revision:"01f3f209a30609ef92a8c343be31ec66",url:"./link/index.html"},{revision:"2c6a5aa6a3f7bbd019b0055bd835709e",url:"./manifest.json"},{revision:"853999f048061ec5ecc5cf868d855248",url:"./music/index.html"},{revision:"164e116095d86d7535f59338df0ffaf9",url:"./posts/19660/index.html"},{revision:"f307bb975dd4b8771a20ea09cf784617",url:"./posts/19888/index.html"},{revision:"5f561e7b6ce88cedfd4936a6871bd747",url:"./posts/200501/index.html"},{revision:"b5b53cb738b765a4fbc7c16fcebd8558",url:"./posts/2146/index.html"},{revision:"afa8e602eefa5231f9ccffda0e31a068",url:"./posts/28820/index.html"},{revision:"8c7e6ebdad1dd3f11b21decc8f95f6f4",url:"./posts/4439/index.html"},{revision:"1d024f59cbe9a2d549fbac2ca7ac2a74",url:"./posts/51727/index.html"},{revision:"7950b38dc25061db1b9149cf9f858784",url:"./posts/61916/index.html"},{revision:"cd7ba7427f0830f8f2d50d37c704b363",url:"./posts/a2e0e64a/index.html"},{revision:"e0bf8ead44eb9b7deb4ad14fe9b6796d",url:"./search.xml"},{revision:"0420e2581027e0f69e10914d5684413e",url:"./sitemap.xml"},{revision:"09514c8dced8aebcb259a91cca63c6e3",url:"./tags/Hexo/index.html"},{revision:"596a07f52a416771a0d0ff58d1aaed6a",url:"./tags/index.html"},{revision:"d3a5b7e20ba4fce8d2430bad260a852e",url:"./tags/Live2d/index.html"},{revision:"a945a3c97e11f875e130a5b892e7dd54",url:"./tags/人设/index.html"},{revision:"b75a2b2d904937e02bf533c6d3f559ed",url:"./tags/兽圈/index.html"},{revision:"33483880bae049df8616e2db5437cfb3",url:"./tags/兽设/index.html"},{revision:"4b929da1b14af3e1818785b7e6fd1e21",url:"./tags/动画/index.html"},{revision:"724d1c59485452bbbd7bf36aedb0ac62",url:"./tags/博客/index.html"},{revision:"c709bca7a22fe30f76832060d240f2d4",url:"./tags/视频/index.html"},{revision:"bf4d1e2171de8ba315787458739c316b",url:"./tags/设定/index.html"},{revision:"63f01522b021c97cc7c8cfcf33f92a06",url:"./videos/10/index.html"},{revision:"1ba5962e81987e8a6e9efb0d51d83a2a",url:"./videos/11/index.html"},{revision:"21aa1614c077b74973c5e5dd9a6732f4",url:"./videos/12/index.html"},{revision:"15dc550f9d0d683cf2bd796315de77d1",url:"./videos/2/index.html"},{revision:"e4d0e8e56f899ff290ca94848693960e",url:"./videos/3/index.html"},{revision:"27ad1df1ac9573fdad5c57c269f109b7",url:"./videos/4/index.html"},{revision:"339e956e4828364c8d1cfe8222f81a17",url:"./videos/5/index.html"},{revision:"d379b7c284bdab2bb62088f0c25467a0",url:"./videos/6/index.html"},{revision:"71c2a891ac3c8a8d9885be20cabac84e",url:"./videos/7/index.html"},{revision:"c7927214802501191ddce8d6655cb71c",url:"./videos/8/index.html"},{revision:"1b2430e98afd4bd4d4e27447efb1af43",url:"./videos/9/index.html"},{revision:"ac70a76aa8f212103849a6a2c2b8dfe6",url:"./videos/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();