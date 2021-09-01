const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b2e427aa6d631e557258983e092e026c",url:"./404.html"},{revision:"ed0272f92b2cf21c869362361e010d56",url:"./about/index.html"},{revision:"786643c734613a3f88bfa3dbef4cc32b",url:"./archives/2020/10/index.html"},{revision:"12d84aec044df7ac66667cd6a4cab3cf",url:"./archives/2020/index.html"},{revision:"2d87c88653e1fc03dddec87dd0133fda",url:"./archives/2021/01/index.html"},{revision:"8044f521d73bc07bc1bded5e63842b1c",url:"./archives/2021/05/index.html"},{revision:"85763d70b0ca1147702d00a4426153df",url:"./archives/2021/06/index.html"},{revision:"a62ef7b0df1d4588f7530754975696fa",url:"./archives/2021/08/index.html"},{revision:"f723c5ba667a945e0232941b6b3fcf4b",url:"./archives/2021/index.html"},{revision:"3d10d0ee1f6cc6ccf1cb14a2e2c932ee",url:"./archives/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"472552604f19815d0a634bd3d953171e",url:"./assets/js/DPlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"008d08cd566620e7c3b32f5a567599b1",url:"./atom.xml"},{revision:"8433b1c300e95754d4c2fa2c679fd3ba",url:"./bing.json"},{revision:"49e8507f869c66da5ead45f89ff1264a",url:"./box/about/index.html"},{revision:"b52179afabbfe94fb4ff22ec6ba61c94",url:"./box/index.html"},{revision:"11b7761986664f00e8d81ce5de818b0c",url:"./categories/Live2d/index.html"},{revision:"2d217d7fb994a10c5a90f6dbb89390f5",url:"./categories/测试/index.html"},{revision:"e5266e02586e07af71ded71735189913",url:"./categories/番剧/index.html"},{revision:"c0962152c8f8bfb11b274b5fcc5f310a",url:"./categories/设定/index.html"},{revision:"87c8faf8d1c836d2d89f7ea6a4a00164",url:"./category/live2d/atom.xml"},{revision:"c275b61c2f6e1d7b2abdbe6f18c5d864",url:"./category/live2d/feed.json"},{revision:"9fae9afbe0224e10c8d4a3312147171c",url:"./category/live2d/rss.xml"},{revision:"9aa31fb75dfaf5c1b2d277ef28c225c4",url:"./category/测试/atom.xml"},{revision:"e5366a3da54e454858b00444c3c1213c",url:"./category/测试/feed.json"},{revision:"3e87f6bb93dedbd708beb312e97a9f55",url:"./category/测试/rss.xml"},{revision:"9d5355ddd4d452c008e2bb98fb6585d0",url:"./category/番剧/atom.xml"},{revision:"ca7dae923f82ec51dc4fd0049dd06633",url:"./category/番剧/feed.json"},{revision:"22c23e088d13d941cef813f585123f81",url:"./category/番剧/rss.xml"},{revision:"257837f95f20b53d12385bac0b33ef33",url:"./category/设定/atom.xml"},{revision:"29fff92861c2f8e3b9e46349b565376a",url:"./category/设定/feed.json"},{revision:"24b3975decb4cc71db859ce9cc899c88",url:"./category/设定/rss.xml"},{revision:"d9923d71f6410a2c77b3ddda44ecb926",url:"./comments/index.html"},{revision:"808bbddc4f4c56aee97a7af07f1f364f",url:"./css/coin.css"},{revision:"3a1efd6a641c7d94fb480d9e35758bb0",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"ff3aba273aba17cd774aa37974d53a1f",url:"./feed.json"},{revision:"6eafb0d9792afaa48057649bb142a33c",url:"./Gallery/biaoqing/furry/index.html"},{revision:"fc994b37edd31eda6ce09724e4d042ce",url:"./Gallery/biaoqing/index.html"},{revision:"1993f93b51997958c2407109f4fc272b",url:"./Gallery/biaoqing/qita/index.html"},{revision:"0d656afc2f09b27d3a46e16122d27c43",url:"./Gallery/biaoqing/shadiao/index.html"},{revision:"714049ad4e7399827bf9a1f64b041401",url:"./Gallery/images/index.html"},{revision:"06f39c726f6bb7c0ae17e3062482ce42",url:"./Gallery/index.html"},{revision:"a8a4a277680989de367afd14cb6af180",url:"./hpptalk/index.html"},{revision:"0f619d8ba8ade67c2b7824155cb1ca81",url:"./img/siteicon/browserconfig.xml"},{revision:"70db85b680fbebb2c276dc3f942044e6",url:"./img/siteicon/README.html"},{revision:"fbe29bee8e72c6f1856140c7b70a9c4f",url:"./index.html"},{revision:"db0ef6fc56befa79cef5e478f9138324",url:"./js/coin.js"},{revision:"81ddbc1f1237d5537a8b1fd4e6cd6121",url:"./js/custom.js"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"a66edc73c59a46ac3cfdedcec9884e9c",url:"./kernel.html"},{revision:"6ae5e051dfbea966c0f26a2718ea4828",url:"./kongtiao/index.html"},{revision:"5f066510a57ecae4615bd65eef236d52",url:"./link/index.html"},{revision:"2c6a5aa6a3f7bbd019b0055bd835709e",url:"./manifest.json"},{revision:"0900836bacd3d18a55eca4e7482db4c2",url:"./music/index.html"},{revision:"4d193b8e364dfb5eaaf4ad161bc18b96",url:"./posts/19660/index.html"},{revision:"121b3cf86562030e0ce71f6a793ced19",url:"./posts/19888/index.html"},{revision:"8b9eaba6439e8cac7d43760da6cb06b7",url:"./posts/200501/index.html"},{revision:"cdfd4b467508a527bf9ca840bd098157",url:"./posts/2146/index.html"},{revision:"1abb600286eab100bc5f4294d79f6f95",url:"./posts/28820/index.html"},{revision:"608fddee1cf547538a039435783a89e8",url:"./posts/4439/index.html"},{revision:"695f578b53890a1551105ae778fb164f",url:"./posts/51727/index.html"},{revision:"40054f716cc5105500a4440e6d57853b",url:"./posts/61916/index.html"},{revision:"89f7742bace1bf238701d4b03f5d68a6",url:"./posts/a2e0e64a/index.html"},{revision:"23861e42fdc4d68a43ca0a50703179c1",url:"./rss.xml"},{revision:"e0bf8ead44eb9b7deb4ad14fe9b6796d",url:"./search.xml"},{revision:"b4227c22ee512ad5e2d5b16f20b883c1",url:"./sitemap.xml"},{revision:"414811979ac5ad218486d2fae8b2a7c5",url:"./tag/hexo/atom.xml"},{revision:"9d25844ccaa4352168394512a46000e8",url:"./tag/hexo/feed.json"},{revision:"f1e17b19912dcf704f4f3a5f777a0610",url:"./tag/hexo/rss.xml"},{revision:"39391054de7712e20f90201df63ae0c6",url:"./tag/live2d/atom.xml"},{revision:"dbf01860fbea2a8468a0941d3d90a68a",url:"./tag/live2d/feed.json"},{revision:"70c6153a2c022854116a5c7e97ad1917",url:"./tag/live2d/rss.xml"},{revision:"c75195efad077569193dde9bc9a7a33b",url:"./tag/人设/atom.xml"},{revision:"6b48fd52ff495ea55f8846ed143d06bc",url:"./tag/人设/feed.json"},{revision:"b3eb49f9ea928abbc8d8a6f6b4bc4c5c",url:"./tag/人设/rss.xml"},{revision:"203dd9d856c155713cfde103162048cb",url:"./tag/兽圈/atom.xml"},{revision:"254e21163650c2de517e89b7a15f2966",url:"./tag/兽圈/feed.json"},{revision:"f2ca66ac3b7b18931787c1d33a0a556a",url:"./tag/兽圈/rss.xml"},{revision:"943a292b99d2144b996eff2111b6e728",url:"./tag/兽设/atom.xml"},{revision:"1dfb9f8637d44cd8cb0b496c70e93a24",url:"./tag/兽设/feed.json"},{revision:"f6968e59c2cbbc7f0834fe22acfa6195",url:"./tag/兽设/rss.xml"},{revision:"ced3aa00adf24d0008b60c8e3e30e65c",url:"./tag/动画/atom.xml"},{revision:"2dc862f074e339c2940c43687fef80c1",url:"./tag/动画/feed.json"},{revision:"9b0cf232498590cf003275f31c06d068",url:"./tag/动画/rss.xml"},{revision:"02541b7c88149424b5f0c2363f09782a",url:"./tag/博客/atom.xml"},{revision:"c09661fcd2166671fd751d206b9a4f20",url:"./tag/博客/feed.json"},{revision:"b2627c1ad985b2a30ef36587736468fc",url:"./tag/博客/rss.xml"},{revision:"236471b33763644a1a44e7422a8ec6d4",url:"./tag/视频/atom.xml"},{revision:"1c8e2792057bf8a2d69d4c3ee49af550",url:"./tag/视频/feed.json"},{revision:"3e59599f1318cb3c804a5d17ce69eebd",url:"./tag/视频/rss.xml"},{revision:"102a28a22f7b323d061b760f782e82e0",url:"./tag/设定/atom.xml"},{revision:"fd4ea6d05111c22065eaec43421d34bd",url:"./tag/设定/feed.json"},{revision:"9c2f6c7c20e063c748ca6a616e706c82",url:"./tag/设定/rss.xml"},{revision:"15583d286b2b79104449c00b02b6a1b9",url:"./tags/Hexo/index.html"},{revision:"8de90935690840d4421af7158c4029a1",url:"./tags/index.html"},{revision:"3342eeea32d7010a483e5c1a107b3020",url:"./tags/Live2d/index.html"},{revision:"7d26247a71f232ad3572b693f5bf6858",url:"./tags/人设/index.html"},{revision:"94829815baf7344b65cf126f6e8700df",url:"./tags/兽圈/index.html"},{revision:"c00ead99103accc9828f827ae23e21ff",url:"./tags/兽设/index.html"},{revision:"110d50f4e56cb8d5fefa8b24595299a7",url:"./tags/动画/index.html"},{revision:"5db47157f168d0d5cc2baf68b1e87ff9",url:"./tags/博客/index.html"},{revision:"56abe523f7ebe8aad35059b7ae511afd",url:"./tags/视频/index.html"},{revision:"c6d484bc310bd02e623dd7a17e78f075",url:"./tags/设定/index.html"},{revision:"614be1a67740bcdd616adb66d80da78d",url:"./videos/10/index.html"},{revision:"d14546f67d559a8a72629f2ded4bdfa6",url:"./videos/11/index.html"},{revision:"484e81e61c17ce1ca11c008122c7e96d",url:"./videos/12/index.html"},{revision:"7e08fd453cb5d808b99a1cb633eaa145",url:"./videos/2/index.html"},{revision:"41862592d0f0496ee7c8d1a6b1c5b3f3",url:"./videos/3/index.html"},{revision:"e35d56912700589dbcee737762b5eb02",url:"./videos/4/index.html"},{revision:"9175c080bdbbfef8b1fc729e45d25686",url:"./videos/5/index.html"},{revision:"0f14633ecb1a0469fc430229d8af6992",url:"./videos/6/index.html"},{revision:"868ae406aeb407dd3764a3cb32a5ab63",url:"./videos/7/index.html"},{revision:"37a0287ad6edb32f4e0317a9d2122909",url:"./videos/8/index.html"},{revision:"f55b31d5666ced04d217c9a680cbbc79",url:"./videos/9/index.html"},{revision:"de63c06a7392c72e918933acfe1ecf6f",url:"./videos/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();