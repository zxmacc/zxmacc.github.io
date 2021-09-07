const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"312cd8954f735e3f6401bff899174586",url:"./404.html"},{revision:"583bde0dd82bbad65d9f79dfb0a88507",url:"./about/index.html"},{revision:"d62b6ec36e8eaa25a87c0bf94d3ba21f",url:"./archives/2020/10/index.html"},{revision:"0f7a8809e726f1c806e9b3a2e6d02d06",url:"./archives/2020/index.html"},{revision:"89360847fc9d6bb6efe172366df4bb5e",url:"./archives/2021/01/index.html"},{revision:"d3e73e87588786d170556e22c31d9d7b",url:"./archives/2021/05/index.html"},{revision:"50058cc583743e035e2d162ea9c66e8e",url:"./archives/2021/06/index.html"},{revision:"087ccc8878540b45ff4e2952037fed99",url:"./archives/2021/08/index.html"},{revision:"bc094cc1d1ac8c168ebf330ba1e79169",url:"./archives/2021/index.html"},{revision:"e8aa82a206bcc22a879b82b9196235a7",url:"./archives/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"472552604f19815d0a634bd3d953171e",url:"./assets/js/DPlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"b8a0c8168923dcf84117d22bb5085d48",url:"./atom.xml"},{revision:"8433b1c300e95754d4c2fa2c679fd3ba",url:"./bing.json"},{revision:"49e8507f869c66da5ead45f89ff1264a",url:"./box/about/index.html"},{revision:"b52179afabbfe94fb4ff22ec6ba61c94",url:"./box/index.html"},{revision:"b9304c0e80405a34290c6734afdcf712",url:"./categories/Live2d/index.html"},{revision:"b131ebf667962c7c4e315467db273fcd",url:"./categories/测试/index.html"},{revision:"c2549377937f9c409d6c76459e02bf61",url:"./categories/番剧/index.html"},{revision:"3f0f3b22eafa33c3e0fff0bc61e3991d",url:"./categories/设定/index.html"},{revision:"87c8faf8d1c836d2d89f7ea6a4a00164",url:"./category/live2d/atom.xml"},{revision:"c275b61c2f6e1d7b2abdbe6f18c5d864",url:"./category/live2d/feed.json"},{revision:"9fae9afbe0224e10c8d4a3312147171c",url:"./category/live2d/rss.xml"},{revision:"9aa31fb75dfaf5c1b2d277ef28c225c4",url:"./category/测试/atom.xml"},{revision:"e5366a3da54e454858b00444c3c1213c",url:"./category/测试/feed.json"},{revision:"3e87f6bb93dedbd708beb312e97a9f55",url:"./category/测试/rss.xml"},{revision:"9d5355ddd4d452c008e2bb98fb6585d0",url:"./category/番剧/atom.xml"},{revision:"ca7dae923f82ec51dc4fd0049dd06633",url:"./category/番剧/feed.json"},{revision:"22c23e088d13d941cef813f585123f81",url:"./category/番剧/rss.xml"},{revision:"257837f95f20b53d12385bac0b33ef33",url:"./category/设定/atom.xml"},{revision:"29fff92861c2f8e3b9e46349b565376a",url:"./category/设定/feed.json"},{revision:"24b3975decb4cc71db859ce9cc899c88",url:"./category/设定/rss.xml"},{revision:"e9257c4c12ccc6f1f570787e70412241",url:"./comments/index.html"},{revision:"808bbddc4f4c56aee97a7af07f1f364f",url:"./css/coin.css"},{revision:"3a1efd6a641c7d94fb480d9e35758bb0",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"3a7f2d597fd516958a23a7ae6b6982ce",url:"./feed.json"},{revision:"c37e968cd4994e8788b7f36ba8b87c7b",url:"./Gallery/biaoqing/furry/index.html"},{revision:"467dd26a37b20df0dfb0b5c87e5f5581",url:"./Gallery/biaoqing/index.html"},{revision:"612ba51c4f67d697d1488eca98f48c9d",url:"./Gallery/biaoqing/qita/index.html"},{revision:"a1bc80465b0b38aa8ed60088b7602fa8",url:"./Gallery/biaoqing/shadiao/index.html"},{revision:"9b7a12ab181ea1340d00c3e6145b1f7c",url:"./Gallery/images/index.html"},{revision:"ff4a0f03cb62997384b7cf29a9a38abf",url:"./Gallery/index.html"},{revision:"4e5493f4d498768328f2622fc936ee36",url:"./hpptalk/index.html"},{revision:"0f619d8ba8ade67c2b7824155cb1ca81",url:"./img/siteicon/browserconfig.xml"},{revision:"70db85b680fbebb2c276dc3f942044e6",url:"./img/siteicon/README.html"},{revision:"6c889fb16827b2d0bbcea17948fb1614",url:"./index.html"},{revision:"a5172ab3d42d6ab865ea4d6da4fccfde",url:"./JOJO/index.html"},{revision:"db0ef6fc56befa79cef5e478f9138324",url:"./js/coin.js"},{revision:"81ddbc1f1237d5537a8b1fd4e6cd6121",url:"./js/custom.js"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"a66edc73c59a46ac3cfdedcec9884e9c",url:"./kernel.html"},{revision:"2201ca5fe7e37f7ae874ac9def4b8d75",url:"./kongtiao/index.html"},{revision:"4e124ca7b14c7ed5be91e124f395aa16",url:"./link/index.html"},{revision:"2c6a5aa6a3f7bbd019b0055bd835709e",url:"./manifest.json"},{revision:"7ff3b581a9a3cc0f9cae5a3a84eebf0e",url:"./music/index.html"},{revision:"b6b35356db83e0e22ed988a7a562e8b6",url:"./posts/19660/index.html"},{revision:"0d0584f1eedd8dce1090b5021d2f3c1d",url:"./posts/19888/index.html"},{revision:"8437eddc47081df00878ce197dbf5d96",url:"./posts/200501/index.html"},{revision:"9266d9636d3559534f9d22f4c7a4a6d7",url:"./posts/2146/index.html"},{revision:"c2c76aa27bd5952fb6c5194a61a8432d",url:"./posts/28820/index.html"},{revision:"7a54fa42301911c4afaa01c9f08bf6c0",url:"./posts/4439/index.html"},{revision:"77d2e29e2cf2da30efbd0968d84768ee",url:"./posts/51727/index.html"},{revision:"4ebdb8f06abbcb59119fba18624de952",url:"./posts/61916/index.html"},{revision:"ff8c17643d61d0c27bd0e25680395182",url:"./posts/a2e0e64a/index.html"},{revision:"588e1d425964019e1743ff9e2829d742",url:"./rss.xml"},{revision:"e8f62c17a61d5a7799eeafc4e9fa3efc",url:"./search.xml"},{revision:"a9416bd490c921e3d6a3c277f5c9043d",url:"./sitemap.xml"},{revision:"4d0a5f7c7177e2dc5d063c38a1aac406",url:"./tag/hexo/atom.xml"},{revision:"71a99aeea0701520413f5c92f2d0e270",url:"./tag/hexo/feed.json"},{revision:"fd4159a4451f0cf432be12caaf92d5d7",url:"./tag/hexo/rss.xml"},{revision:"39391054de7712e20f90201df63ae0c6",url:"./tag/live2d/atom.xml"},{revision:"dbf01860fbea2a8468a0941d3d90a68a",url:"./tag/live2d/feed.json"},{revision:"70c6153a2c022854116a5c7e97ad1917",url:"./tag/live2d/rss.xml"},{revision:"c75195efad077569193dde9bc9a7a33b",url:"./tag/人设/atom.xml"},{revision:"6b48fd52ff495ea55f8846ed143d06bc",url:"./tag/人设/feed.json"},{revision:"b3eb49f9ea928abbc8d8a6f6b4bc4c5c",url:"./tag/人设/rss.xml"},{revision:"203dd9d856c155713cfde103162048cb",url:"./tag/兽圈/atom.xml"},{revision:"254e21163650c2de517e89b7a15f2966",url:"./tag/兽圈/feed.json"},{revision:"f2ca66ac3b7b18931787c1d33a0a556a",url:"./tag/兽圈/rss.xml"},{revision:"943a292b99d2144b996eff2111b6e728",url:"./tag/兽设/atom.xml"},{revision:"1dfb9f8637d44cd8cb0b496c70e93a24",url:"./tag/兽设/feed.json"},{revision:"f6968e59c2cbbc7f0834fe22acfa6195",url:"./tag/兽设/rss.xml"},{revision:"ced3aa00adf24d0008b60c8e3e30e65c",url:"./tag/动画/atom.xml"},{revision:"2dc862f074e339c2940c43687fef80c1",url:"./tag/动画/feed.json"},{revision:"9b0cf232498590cf003275f31c06d068",url:"./tag/动画/rss.xml"},{revision:"c36a82d7a208e05a3e02d5c915c5cc6d",url:"./tag/博客/atom.xml"},{revision:"292dc4aa06b28aaa20d7c9a082d3ce57",url:"./tag/博客/feed.json"},{revision:"d66e7dcec5b37429982aea82009347ff",url:"./tag/博客/rss.xml"},{revision:"236471b33763644a1a44e7422a8ec6d4",url:"./tag/视频/atom.xml"},{revision:"1c8e2792057bf8a2d69d4c3ee49af550",url:"./tag/视频/feed.json"},{revision:"3e59599f1318cb3c804a5d17ce69eebd",url:"./tag/视频/rss.xml"},{revision:"102a28a22f7b323d061b760f782e82e0",url:"./tag/设定/atom.xml"},{revision:"fd4ea6d05111c22065eaec43421d34bd",url:"./tag/设定/feed.json"},{revision:"9c2f6c7c20e063c748ca6a616e706c82",url:"./tag/设定/rss.xml"},{revision:"a4d5939407acfd491f1e98a28b3ef177",url:"./tags/Hexo/index.html"},{revision:"a8b22a1e36fc316b0cd4912f27986f17",url:"./tags/index.html"},{revision:"953fdf5995b6e51e2124cb9fe5abdd45",url:"./tags/Live2d/index.html"},{revision:"83fc80e889679ec58ad521a033b42b24",url:"./tags/人设/index.html"},{revision:"46718a7b4898d74c00a7fbe717c2fc3b",url:"./tags/兽圈/index.html"},{revision:"ecd0edb19ee0c0cd6b4c07b51939b3be",url:"./tags/兽设/index.html"},{revision:"7669641f65c279bdd4138ef73fa75a5c",url:"./tags/动画/index.html"},{revision:"d3fea8687db00a65ac062cd9ea66b353",url:"./tags/博客/index.html"},{revision:"db477ea8cb3d60b5e67789a7a13c1086",url:"./tags/视频/index.html"},{revision:"326f1ee41b31fb48c47f0fd58b6fcf82",url:"./tags/设定/index.html"},{revision:"0f9355af23b53788b1f9e5bbd2f0d483",url:"./videos/10/index.html"},{revision:"18e5e651af601cfac8cc1f9d4a6f3691",url:"./videos/11/index.html"},{revision:"11a303233d26df72e85614760d4a2daf",url:"./videos/12/index.html"},{revision:"ed9fefb2daa94102344eb921bba0ad05",url:"./videos/2/index.html"},{revision:"ab4a313c8507f3616bed0da667bd102c",url:"./videos/3/index.html"},{revision:"ae92199864762528bb4e2c8fa2610a7b",url:"./videos/4/index.html"},{revision:"694db4abb788a996c0ece1bf2ddc32d1",url:"./videos/5/index.html"},{revision:"d431a5b191c9d2fe7d9f77447101c6c9",url:"./videos/6/index.html"},{revision:"ca84f746faef872827374c3a304c02b9",url:"./videos/7/index.html"},{revision:"a5067f79f3f5f188405ee1622ee609a8",url:"./videos/8/index.html"},{revision:"c796c6e7ef02452f78c4476bf11ec8fd",url:"./videos/9/index.html"},{revision:"fc89b934dc48d24ce74b5eea56f0b20f",url:"./videos/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();