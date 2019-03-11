// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'amfe-flexible/index.min.js'
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import 'animate.css'
//touch插件
import VueTouch from 'vue-touch'
// console.log(VueTouch)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(ElementUI)
import global from './components/global'
import utils from './components/util'
import axios from 'axios'
import FileLoader from './DT_FileLoader'

//测试
//axios.defaults.baseURL = 'https://b.t3sting.com';
//正式
axios.defaults.baseURL = 'http://fmcc1912.dwechat.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.timeout = 10000;
Vue.prototype.utils = utils;
Vue.prototype.global = global;
Vue.prototype.axios = axios;
Vue.config.productionTip = false

// router.beforeEach((to,from,next)=>{
//   if(to.name == 'p9'){
//     console.log(3);
//     wechat.onReady(function(){
//       var openId = wechat.wechatInfo.Data.OpenId;
//       var nickName = wechat.wechatInfo.Data.Nickname;
//       axios({
//           method: 'post',
//           url:'/api/json/QueryByMultipleCriterion',
//           data:JSON.stringify({
//               Criterion:[
//                   {
//                       Key:"userOpenId",
//                       Value:openId,
//                       Method:'EQ'
//                   }
//               ],
//               DataSecrets:'',
//               CollectionName:'fmcc1807_signup'
//           })
//       }).then(function(data){
//           if(data.data.Result == 'Success' && data.data.Data.length > 0){
//             next();
//           }else{
//             next('/p8');
//           }
//       }).catch(function(error){
//           next('/p8');
//           console.log(error);
//       })
//     })
//   }else{
//     next();
//   }
// })

/* eslint-disable no-new */

//   var wechatAuth = new WECHATAUTH('http://leop1800wechat.dwechat.com');
//     wechatAuth.onReady(function (res) {
//     global.userInfo=res.Data;
    
// })


var fileLoader = new FileLoader([
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/purse_four.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/logo1.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/purse_one.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/purse_two.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/purse_three.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/2019.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/p1_title.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/purse.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/p11_fu.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/fireworks3.png",
//"http://fmcc1912.dwechat.com/H5/release/imgs/audio/music1.mp3",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/person.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/year.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/fireworks1.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/fireworks2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/arrow.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/logo1.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/bulletR.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/bulletL.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/titley2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl1.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl3.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr1.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl4.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl5.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl6.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr3.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr4.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl1.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr4.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr1.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/present.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/bulletR.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/bulletL.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/toptitle3.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/p3_purse.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse_three.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse_three.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/shuoming.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/hand3.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p4/logo1.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p4/bulletR.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p4/bulletL.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p4/btitle4.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st11.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st21.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st51.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st31.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st41.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p4/check.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p4/hand3.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/loading3.gif",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/logo1.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st11.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/s11.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st21.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/s21.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st51.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/s31.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st31.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/s41.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st41.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/s51.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st61.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm111.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm211.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm311.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm411.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm511.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm611.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm711.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse4.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse7.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse8.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse1.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse5.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse6.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse3.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/stb61.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/st61.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/receive.png",
"http://fmcc1912.dwechat.com/H5/release/imgs/p1/p1_bg.jpg",
"http://fmcc1912.dwechat.com/H5/release/imgs/p2/bbg2.jpg",
"http://fmcc1912.dwechat.com/H5/release/imgs/p3/bbg3.jpg",
"http://fmcc1912.dwechat.com/H5/release/imgs/p4/bbg4.jpg",
"http://fmcc1912.dwechat.com/H5/release/imgs/p5/bg.jpg"

        ]);
        
fileLoader.WhenOneLoaded = function (loadedUrl, loadedCount, totalCounnt) { 
	//console.log(loadedUrl + '" loaded: ' + loadedCount + "/" + totalCounnt); 
	document.querySelector("#homeLoading .loadP").innerText = "好运正在加载中 "+parseInt(loadedCount/totalCounnt*100) + "%"
}
fileLoader.Done = function (totalCount) {
	console.log(totalCount + ' Files loaded.'); 
	document.querySelector("#homeLoading").remove();
//  new Vue({
//	  el: '#app',
//	  router,
//	  components: { App },
//	  template: '<App/>'
//	});
	new Vue({
	    router,
	    data: function(){
	        return {
	            ORDERID: 'PLD',
	        }
	    },
	    render: h => h(App)
	}).$mount('#app');
}
fileLoader.StartLoading();

