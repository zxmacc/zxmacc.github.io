const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"02b5479a5f8c1b15f5bd72ae8295ba14",url:"./404.html"},{revision:"0442b31ebf1c56176c1e269cdf191c99",url:"./about/index.html"},{revision:"512265a24e09a064623e0f3510459108",url:"./archives/2020/10/index.html"},{revision:"d1182a1d4e535b2d518cb3eebac90766",url:"./archives/2020/index.html"},{revision:"2c6bbf2b9f564b2ba9491ac56dc19afa",url:"./archives/2021/01/index.html"},{revision:"a4ffaafb1f42bb5751776123669a1b37",url:"./archives/2021/05/index.html"},{revision:"0ba0d30b5da2a79900d282831f48e6b4",url:"./archives/2021/06/index.html"},{revision:"2dfbc460dff1843388b87176c0170a42",url:"./archives/2021/08/index.html"},{revision:"2b0f2ef5ba356a94ba690a8feb8302e1",url:"./archives/2021/index.html"},{revision:"0a5d73776f32c0c2964f3fd5c97111cc",url:"./archives/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"472552604f19815d0a634bd3d953171e",url:"./assets/js/DPlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"008d08cd566620e7c3b32f5a567599b1",url:"./atom.xml"},{revision:"a8883300bbb5e2c1bec31e0458840cd6",url:"./bing.json"},{revision:"49e8507f869c66da5ead45f89ff1264a",url:"./box/about/index.html"},{revision:"b52179afabbfe94fb4ff22ec6ba61c94",url:"./box/index.html"},{revision:"130baf465dd1efccbbfc1b7a43f84eb7",url:"./categories/Live2d/index.html"},{revision:"83ccf28f79f5c9a64fc6ce2bf4f2ccac",url:"./categories/测试/index.html"},{revision:"b56046447a1356da125656236cbaf979",url:"./categories/番剧/index.html"},{revision:"e3efbb1b0e42a2b76ba88fb1614f6635",url:"./categories/设定/index.html"},{revision:"87c8faf8d1c836d2d89f7ea6a4a00164",url:"./category/live2d/atom.xml"},{revision:"c275b61c2f6e1d7b2abdbe6f18c5d864",url:"./category/live2d/feed.json"},{revision:"9fae9afbe0224e10c8d4a3312147171c",url:"./category/live2d/rss.xml"},{revision:"9aa31fb75dfaf5c1b2d277ef28c225c4",url:"./category/测试/atom.xml"},{revision:"e5366a3da54e454858b00444c3c1213c",url:"./category/测试/feed.json"},{revision:"3e87f6bb93dedbd708beb312e97a9f55",url:"./category/测试/rss.xml"},{revision:"9d5355ddd4d452c008e2bb98fb6585d0",url:"./category/番剧/atom.xml"},{revision:"ca7dae923f82ec51dc4fd0049dd06633",url:"./category/番剧/feed.json"},{revision:"22c23e088d13d941cef813f585123f81",url:"./category/番剧/rss.xml"},{revision:"257837f95f20b53d12385bac0b33ef33",url:"./category/设定/atom.xml"},{revision:"29fff92861c2f8e3b9e46349b565376a",url:"./category/设定/feed.json"},{revision:"24b3975decb4cc71db859ce9cc899c88",url:"./category/设定/rss.xml"},{revision:"ac06f01decae65be6e701aaa092f2486",url:"./comments/index.html"},{revision:"808bbddc4f4c56aee97a7af07f1f364f",url:"./css/coin.css"},{revision:"3a1efd6a641c7d94fb480d9e35758bb0",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"ff3aba273aba17cd774aa37974d53a1f",url:"./feed.json"},{revision:"5e9ec4df564c52141020cb8d97f12adf",url:"./Gallery/biaoqing/furry/index.html"},{revision:"4c2766880fbfbf3569e17b77b599ce84",url:"./Gallery/biaoqing/index.html"},{revision:"7bcabd84b1ede115d87949839b082c26",url:"./Gallery/biaoqing/qita/index.html"},{revision:"ec099d8a22a9a0d6adb5f80c108b3021",url:"./Gallery/biaoqing/shadiao/index.html"},{revision:"bf1aaa30baa500968f09454562b2fe15",url:"./Gallery/images/index.html"},{revision:"0379cac93414b3a1e2586176ce932733",url:"./Gallery/index.html"},{revision:"c6cba7cb39ac78e02b9118a7d4686513",url:"./hpptalk/index.html"},{revision:"0f619d8ba8ade67c2b7824155cb1ca81",url:"./img/siteicon/browserconfig.xml"},{revision:"70db85b680fbebb2c276dc3f942044e6",url:"./img/siteicon/README.html"},{revision:"75a354da3bb15cfe3539cb381c0e872e",url:"./index.html"},{revision:"db0ef6fc56befa79cef5e478f9138324",url:"./js/coin.js"},{revision:"81ddbc1f1237d5537a8b1fd4e6cd6121",url:"./js/custom.js"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"a66edc73c59a46ac3cfdedcec9884e9c",url:"./kernel.html"},{revision:"cd7b27bda2e875eb889d4e5e33a856b1",url:"./kongtiao/index.html"},{revision:"f0f43a1992e565564118232d751d6e34",url:"./link/index.html"},{revision:"2c6a5aa6a3f7bbd019b0055bd835709e",url:"./manifest.json"},{revision:"d278fd4850b4e668de18137ba093f0e4",url:"./music/index.html"},{revision:"86836cc62757b6602ccc25aa659bc6e2",url:"./posts/19660/index.html"},{revision:"dff9fa1bb7248a1529e2cc31baabc5c7",url:"./posts/19888/index.html"},{revision:"dc64f179b86fd15adfe53e96b22d0e3b",url:"./posts/200501/index.html"},{revision:"a44dd410c7db127c52797075cceaada4",url:"./posts/2146/index.html"},{revision:"a1a6969adfaebd3da0e6063b133f336d",url:"./posts/28820/index.html"},{revision:"4834ca10ac60c27f98a4263db8101f23",url:"./posts/4439/index.html"},{revision:"9582936ce2d91ba2b8a215474aa4a2c7",url:"./posts/51727/index.html"},{revision:"b5462ba9f6ccd6d3d537bffefa86ad44",url:"./posts/61916/index.html"},{revision:"f523bcce92da4d989d5e5c0bfec6c777",url:"./posts/a2e0e64a/index.html"},{revision:"23861e42fdc4d68a43ca0a50703179c1",url:"./rss.xml"},{revision:"e0bf8ead44eb9b7deb4ad14fe9b6796d",url:"./search.xml"},{revision:"d869e79dbca6790efa1bbb97000abfe9",url:"./sitemap.xml"},{revision:"414811979ac5ad218486d2fae8b2a7c5",url:"./tag/hexo/atom.xml"},{revision:"9d25844ccaa4352168394512a46000e8",url:"./tag/hexo/feed.json"},{revision:"f1e17b19912dcf704f4f3a5f777a0610",url:"./tag/hexo/rss.xml"},{revision:"39391054de7712e20f90201df63ae0c6",url:"./tag/live2d/atom.xml"},{revision:"dbf01860fbea2a8468a0941d3d90a68a",url:"./tag/live2d/feed.json"},{revision:"70c6153a2c022854116a5c7e97ad1917",url:"./tag/live2d/rss.xml"},{revision:"c75195efad077569193dde9bc9a7a33b",url:"./tag/人设/atom.xml"},{revision:"6b48fd52ff495ea55f8846ed143d06bc",url:"./tag/人设/feed.json"},{revision:"b3eb49f9ea928abbc8d8a6f6b4bc4c5c",url:"./tag/人设/rss.xml"},{revision:"203dd9d856c155713cfde103162048cb",url:"./tag/兽圈/atom.xml"},{revision:"254e21163650c2de517e89b7a15f2966",url:"./tag/兽圈/feed.json"},{revision:"f2ca66ac3b7b18931787c1d33a0a556a",url:"./tag/兽圈/rss.xml"},{revision:"943a292b99d2144b996eff2111b6e728",url:"./tag/兽设/atom.xml"},{revision:"1dfb9f8637d44cd8cb0b496c70e93a24",url:"./tag/兽设/feed.json"},{revision:"f6968e59c2cbbc7f0834fe22acfa6195",url:"./tag/兽设/rss.xml"},{revision:"ced3aa00adf24d0008b60c8e3e30e65c",url:"./tag/动画/atom.xml"},{revision:"2dc862f074e339c2940c43687fef80c1",url:"./tag/动画/feed.json"},{revision:"9b0cf232498590cf003275f31c06d068",url:"./tag/动画/rss.xml"},{revision:"02541b7c88149424b5f0c2363f09782a",url:"./tag/博客/atom.xml"},{revision:"c09661fcd2166671fd751d206b9a4f20",url:"./tag/博客/feed.json"},{revision:"b2627c1ad985b2a30ef36587736468fc",url:"./tag/博客/rss.xml"},{revision:"236471b33763644a1a44e7422a8ec6d4",url:"./tag/视频/atom.xml"},{revision:"1c8e2792057bf8a2d69d4c3ee49af550",url:"./tag/视频/feed.json"},{revision:"3e59599f1318cb3c804a5d17ce69eebd",url:"./tag/视频/rss.xml"},{revision:"102a28a22f7b323d061b760f782e82e0",url:"./tag/设定/atom.xml"},{revision:"fd4ea6d05111c22065eaec43421d34bd",url:"./tag/设定/feed.json"},{revision:"9c2f6c7c20e063c748ca6a616e706c82",url:"./tag/设定/rss.xml"},{revision:"1b39b24f8675eea69529dfd9ff7ba71b",url:"./tags/Hexo/index.html"},{revision:"13691f497d161ca0eed2f8c77a75a2fe",url:"./tags/index.html"},{revision:"052fb0b8f52b0d74a1a8261f71f25998",url:"./tags/Live2d/index.html"},{revision:"14bebc315377ccac93fd8d89b7ca6167",url:"./tags/人设/index.html"},{revision:"8b1100317c837a24152b45cf99319c86",url:"./tags/兽圈/index.html"},{revision:"c2bec3f01d2513b7c222d5e80f4d7317",url:"./tags/兽设/index.html"},{revision:"0f7249f106889dfea861297945c563b5",url:"./tags/动画/index.html"},{revision:"3baeeb73c641a062c338e54339fbcdf0",url:"./tags/博客/index.html"},{revision:"689166017c14cb50665d2d945dff480a",url:"./tags/视频/index.html"},{revision:"b7955b2966b99ebbba26977ae174b99b",url:"./tags/设定/index.html"},{revision:"5701ab2ec489da30db9b252884fe4366",url:"./videos/10/index.html"},{revision:"3d614b72d85b75f9943b356283fce8cc",url:"./videos/11/index.html"},{revision:"bc769d146fc3ddba3ac708187472817b",url:"./videos/12/index.html"},{revision:"239f8088181c2925cc772440d79a7a4f",url:"./videos/2/index.html"},{revision:"e7aab9fc36bcda88971d9cdf474679dd",url:"./videos/3/index.html"},{revision:"f62993f683de147bd296fc1e6447534f",url:"./videos/4/index.html"},{revision:"44eb448a7c4f06b6d9de99e668e3c68d",url:"./videos/5/index.html"},{revision:"edc80cfb0e31eea406c2b3a50b3db601",url:"./videos/6/index.html"},{revision:"2332fda07a4532d2fecdcfdef55d1605",url:"./videos/7/index.html"},{revision:"a388e9b159bd7f6ed0b0bdfdd0608730",url:"./videos/8/index.html"},{revision:"0c1fa4cef194c007b6f7700670978fa3",url:"./videos/9/index.html"},{revision:"1b98711a8668b67d6c2e1c8208a7f550",url:"./videos/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();