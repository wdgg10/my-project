<template>
  <div class="p3">
    <v-touch  @swipedown="swipeDown" class="touchWrapper">
      <div class="toplogo">
        <!-- <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/logo1.png" class="logo" /> -->
        <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/present.png" class="present">
        <div class="bullet1">
          <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/bulletR.png" ref="bulletR" alt="">
        </div>
        <div class="bullet2">
          <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/bulletL.png" ref="bulletL" alt="">
        </div>
        <div class="topTitle">
          <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/toptitle3.png" alt="" ref="toptitle3">
        </div>
      </div>
    <div class="content">
      <div class="cir1" ref="cir1"></div>
      <!-- <div class="cir2" ref="cir2"><img src="../assets/img/toptitle3.png" alt=""></div> -->
      <div class="cir3" ref="cir3"></div>
      <div class="cir4" ref="cir4"></div>
      <div class="cir5" ref="cir5"></div>
      <div class="cir6" ref="cir6"></div>
      <div class="cir7" ref="cir7"></div>
      <div class="cir8" ref="cir8"></div>
    </div>
    <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/p3_purse.png" class="p3_purse">
    <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse_three.png" class="purse_three" ref="purse_three">
    <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse_three.png" class="purse_four" ref="purse_four">
    <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/shuoming.png" class="shuoming">
    <div class="openClick" @click="openClick"></div>
    <div class="hand3" @click="openClick">
      <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/hand3.png" alt="" ref="hand3">
    </div>
    </v-touch>
  </div>
</template>
<script>
	import global from '../components/global.js'
	export default {
		name: 'p3',
		data() {
			return {
				Islottery: false, //true为抽过奖
				sign1: [0], //健康常在签
				sign2: [1], //透亮生活签
				sign3: [2], //财运逆天签
				sign4: [3], //爱神之箭签
				sign5: [4], //事业爆发签

				OpenId: "",
				userInfo: "",
				HeadImgUrl: "",
				prizeName:"",//奖品名称
				
				isSwitching:false,
				switchAniFin:false
			}
		},
		components: {},
		created() {

		},
		mounted() {
			
			//鞭炮动画
			TweenMax.fromTo(this.$refs.bulletR, 1, {
        transform: 'rotate(3deg)',
        transformOrigin:"top center"
			}, {
        // opacity:1,
        transform: 'rotate(-3deg)',
        transformOrigin:"top center",
		    ease: 'linear',
		    yoyo: true,
		    repeat: -1,
    });
    TweenMax.fromTo(this.$refs.bulletL, 1, {
        transform: 'rotate(3deg)',
        transformOrigin:"top center"
		}, {
        // opacity:1,
        transform: 'rotate(-3deg)',
        transformOrigin:"top center",
		    ease: 'linear',
		    yoyo: true,
		    repeat: -1,
    });

			TweenMax.fromTo(this.$refs.cir1,0.5,{
          width: '0rem',
          height: '0rem',
          left:' 5rem',
          top: '12.9rem',
        }, {
           width: '1.7rem',
           height: '1.7rem',
           left:'1.7rem',
           top:'6.9rem',
           ease: 'linear',
           yoyo: true,
           delay:1,
        }),


       TweenMax.fromTo(this.$refs.cir3,0.5, {
          width: '0rem',
          height: '0rem',
          top: '13rem',
          right: '4rem',
         
        }, {
           width: '2.08rem',
           height: '2.08rem',
           top: '6.5rem',
           right:'0.5rem',
           delay:1,
           ease: 'linear',
           yoyo: true,
        }),


       TweenMax.fromTo(this.$refs.cir4,0.5, {
          width: '0rem',
          height: '0rem',
          left:' 5.5rem',
          top: '12.9rem',
         
        }, {
           width: '2rem',
           height: '2rem',
           top:'10rem',
           left:'2.7rem',
           ease: 'linear',
           yoyo: true,
           delay:1,
        }),

        TweenMax.fromTo(this.$refs.cir5,0.5, {
          width: '0rem',
          height: '0rem',
          top:' 12.8rem',
          left:' 5rem',
          
        }, {
           width: '2.08rem',
           height: '2.08rem',
            top:'8.8rem',
            left:'0.6rem',
             delay:1,
           ease: 'linear',
           yoyo: true,
        }),

        TweenMax.fromTo(this.$refs.cir6,0.5, {
          width: '0rem',
          height: '0rem',
          top:' 12.8rem',
          left:' 5.5rem',
         
        }, {
             width: '2.5rem',
           height: '2.5rem',
            top:'7.5rem',
            left:'3.3rem',
             delay:1,
           ease: 'linear',
           yoyo: true,
        }),

        TweenMax.fromTo(this.$refs.cir7,0.5, {
         width: '0rem',
          height: '0rem',
          top:' 12.8rem',
          left:' 5.5rem',
         
        }, {
             width: '3rem',
           height: '3rem',
            top: '7.9rem',
            right: '1.8rem',
           ease: 'linear',
           yoyo: true,
           delay:1,
        }),

        TweenMax.fromTo(this.$refs.cir8,0.5, {
          width: '0rem',
          height: '0rem',
           right: '4.2rem',
           top: '13rem',
           
        }, {
          width: '1.7rem',
           height: '1.7rem',
            right:'0.2rem',
            top:'9rem',
             delay:1,
           ease: 'linear',
           yoyo: true,
        }),
      TweenMax.fromTo(this.$refs.hand3,0.8, {
        opacity:1,
        width:'100%'
      }, {
        opacity:0,
        width:'80%',
        ease: 'linear',
        yoyo: true,
        repeat: -1,
      }),
      TweenMax.fromTo(this.$refs.purse_three, 1.2, {
        opacity:0,
        top:0
      }, {
        opacity:1,
        top: '13.7rem',
        ease: 'linear',
        yoyo: true,
      }),

      TweenMax.fromTo(this.$refs.purse_four, 0.8, {
        opacity:0,
        top:0
      }, {
        opacity:1,
        top: '14.2rem',
        ease: 'linear',
        yoyo: true,
      })
			
			var that = this;

			var wechatAuth = new WECHATAUTH('http://fmcc1803.dwechat.com');
			wechatAuth.onReady(function(res) {
				console.log("%c res", "color: pink", res);
				that.OpenId = res.Data.OpenId;
				that.userInfo = res.Data.userInfo;
				that.HeadImgUrl = res.Data.HeadImgUrl;
				//微信头像
				var storage = window.localStorage;
				storage.setItem("HeadImgUrl", res.Data.HeadImgUrl);
				
				
				//判断用户是否抽过奖
				var queryAjax = $.ajax({
					type: "POST",
					url: "http://fmcc1912.dwechat.com/api/json/QueryByMultipleCriterion",
					contentType: 'application/json',
					data: JSON.stringify({
						"Criterion": [{
							"Key": "likeId",
							"Value": that.OpenId,
							"Method": "EQ"
						}],
						"DataSecrets": '',
						"CollectionName": "fmccLikess"

					}),
					success: function(suc) {
						console.log("querysuccess", suc);
						//存储得用户记录
						var result = suc.Data;
						var n = result.length;
						if(n > 0) {
							console.log("用户已抽过奖");
							that.Islottery = true;
						} else {
							console.log("用户未抽过奖");
							that.Islottery = false;
						}

						if(suc.Result == "Success") { 
						} else {
							console.log("用户登录过");
						}
					},
					error: function(err) {
						console.log(err);

					}

				});
			})

		},
		methods: {
     swipeDown() {
        this.global.transitionName = 'down';
        this.$router.replace('/p2');
      },
      openClick() {
        var that = this;
        that.switch();
        TweenMax.fromTo(this.$refs.cir1,0.5,{
           width: '1.7rem',
           height: '1.7rem',
           left:'1.7rem',
           top:'6.9rem',
        }, {
           width: '1.7rem',
           height: '1.7rem',
           left:'-1.7rem',
           top:'0rem',
           ease: 'linear',
           yoyo: true,
        })
    
        TweenMax.fromTo(this.$refs.cir3,0.5, {
           width: '2.08rem',
           height: '2.08rem',
           top: '6.5rem',
           right:'0.5rem',
         
        }, {
           width: '2.08rem',
           height: '2.08rem',
           right: '-2.5rem',
           top: '3.5rem',
           ease: 'linear',
           yoyo: true,
           
        })
        
        


       TweenMax.fromTo(this.$refs.cir4,0.5, {
           width: '2rem',
           height: '2rem',
           top:'10rem',
           left:'2.7rem',
         
        }, {
           width: '2rem',
           height: '2rem',
           top:'22rem',
           left:'0rem',
           ease: 'linear',
           yoyo: true,
           
        })

        TweenMax.fromTo(this.$refs.cir5,0.5, {
           width: '2.08rem',
           height: '2.08rem',
            top:'8.8rem',
            left:'0.6rem',
          
        }, {
           width: '2.08rem',
           height: '2.08rem',
            top:'7.8rem',
            left:'-2.08rem',
           ease: 'linear',
           yoyo: true,
        })

        TweenMax.fromTo(this.$refs.cir6,0.5, {
            width: '2.5rem',
            height: '2.5rem',
            top:'7.5rem',
            left:'3.3rem',
        }, {
            width: '2.5rem',
            height: '2.5rem',
            top:'5.5rem',
            left:'-2.5rem',
            ease: 'linear',
            yoyo: true,
        })

        TweenMax.fromTo(this.$refs.cir7,0.5, {
           width: '3rem',
           height: '3rem',
           top: '7.9rem',
           right: '1.8rem',
        }, {
            width: '3rem',
            height: '3rem',
            top: '22rem',

            right: '-3rem',
           ease: 'linear',
           yoyo: true,
        })

        TweenMax.fromTo(this.$refs.cir8,0.5, {
           width: '1.7rem',
           height: '1.7rem',
            right:'0.2rem',
            top:'9rem',
        }, {
          width: '1.7rem',
           height: '1.7rem',
            right:'-1.7rem',
            top:'10rem',
           ease: 'linear',
           yoyo: true,

        })

      },
			switch() {
				
				var that = this;
				//奖品和幸运签
				
				if(that.isSwitching){
					
					return
				}else{
					that.isSwitching = true;
				}
				var prize;
				var storage = window.localStorage;
				var wechatAuth = new WECHATAUTH('http://fmcc1803.dwechat.com');
				wechatAuth.onReady(function(res) {
					console.log("%c res", "color: pink", res);
					that.OpenId = res.Data.OpenId;
					that.userInfo = res.Data.userInfo;
					that.HeadImgUrl = res.Data.HeadImgUrl;
					//微信头像
					console.log(res.Data.HeadImgUrl);
					
					//点击抽奖
					var queryAjax = $.ajax({
						type: "POST",
						url: "http://fmcc1912.dwechat.com/api/choujiang/runchoujiang",
						contentType: 'application/json',
						data: JSON.stringify({
							"CollectioNname":"test_PrizeRecord",
								"OpenId":that.OpenId,
								"DataSecrets":[],
								"Criterion":[
									{
										"Key":"IsSend",
										"Value":"false",
										"Method":"EQ"
									}]

						}),
						success: function(suc) {
							console.log("querysuccess", suc);
							//未抽中 抽虚拟签
							if(suc.Result == "Fail"){
								var luckNum = Math.floor(Math.random() * 5);
								console.log(luckNum);
								if(that.sign1.indexOf(luckNum) !== -1) {
									prize = "sign1"
								}
								if(that.sign2.indexOf(luckNum) !== -1) {
									prize = "sign2"
								}
								if(that.sign3.indexOf(luckNum) !== -1) {
									prize = "sign3"
								}
								if(that.sign4.indexOf(luckNum) !== -1) {
									prize = "sign4"
								}
								if(that.sign5.indexOf(luckNum) !== -1) {
									prize = "sign5"
								}
								storage.setItem("signs", prize);
								
								
								storage.setItem("Isprize", 0);
									storage.setItem("signs", prize);
									storage.setItem("signs2", prize);
									storage.setItem("prizeName", "");
									storage.setItem("prizeName2", "");
								
								
								
									//未抽中奖品跳转p4
								that.$router.replace({
									path: '/p4',
									name: "p4",
									params: {
										signs: prize,

									}
								});
								that.isSwitching = false;
							}
							//已抽中
							if(suc.Result == "Success"){
								console.log(suc.Data.Name);
								that.prizeName =  suc.Data.Name;
								if(suc.Data.Name == "定制药盒"){//耳机	
									 prize = "prize1";
								}
								if(suc.Data.Name == "定制保温杯"){//保温壶
									 prize = "prize2";
								}
								if(suc.Data.Name == "充电宝"){
									 prize = "prize3";
								}
								if(suc.Data.Name == "随行杯"){//保温杯
									 prize = "prize4";
								}
								if(suc.Data.Name == "关爱包"){//时尚手包
									 prize = "prize5";
								}
								if(suc.Data.Name == "暖心小熊"){//小熊
									 prize = "prize6";
								}
								if(suc.Data.Name == "定制收纳袋"){//收纳袋
									 prize = "prize7";
								}
								//抽中奖品跳转p4
								that.$router.replace({
									path: '/p4',
									name: "p4",
									params: {
										signs: prize,
										prizeName:that.prizeName,

									}
								});
								that.isSwitching = false;
								
								
									storage.setItem("Isprize", 1);
									storage.setItem("signs", prize);
									storage.setItem("signs2", prize);
									storage.setItem("prizeName", that.prizeName);
									storage.setItem("prizeName2", suc.Data.Name);
//									var sStorage = window.sessionStorage;
//									sStorage.setItem("prizeName", that.prizeName);
								
							}		
						},
						error: function(err) {
							console.log(err);

						}

					});
				})

			}
		}
	}
</script>

<style scoped>
.p3{background: url("http://fmcc1912.dwechat.com/H5/release/imgs/p3/bbg3.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  position:relative;
  /*z-index:-2;*/
}
.toplogo{
  margin-top:-0.1rem !important;
  height: 6.6rem;
}
.logo{
  width:4rem;
  height:0.9rem;
  position:absolute;
  left:0.5rem;
  top:0.5rem;
}
.present{
  position:absolute;
  width:1.48rem;
  height:1.57rem;
  top: 2.4rem;
  left: 5.55rem;
}
.bullet1,.bullet2{ 
  position: absolute;
}
.bullet1{
  width: 2.2rem;
  height: 4.5rem;
  right: -0.7rem;
  top:-0.75rem;
}
.bullet2{
  width: 2.2rem;
  height: 4.5rem;
  top:1.36rem;
  left:-1.1rem;
}
.topTitle{
  width: 9.6rem;
  height:4rem;
  margin: 0 auto;
  top:2.5rem;
  position: relative;
}

.bullet1 img,.bullet2 img,.topTitle img,
.cir1 img,.cir2 img,.cir3 img,
.cir4 img,.cir5 img,.cir6 img,
.cir7 img,.cir8 img,.cir9 img,
.hand3 img
{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.cir1,.cir2,.cir3,.cir4,.cir5,.cir6,.cir7,.cir8{
  position:absolute;
  z-index:1;
}
.cir1{
  width: 1.7rem;
  height: 1.7rem;
  left:1.7rem;
  top:6.9rem;
  background:url(http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse1.png) no-repeat;
  background-size:100%;
}
.cir3{
  width: 2.08rem;
  height: 2.08rem;
  top: 6.5rem;
  right:0.5rem;
  background:url(http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse3.png) no-repeat;
  background-size:100%;
}
.cir4{
  width: 2rem;
  height: 2rem;
  top:10rem;
  left:2.7rem;
  background:url(http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse4.png) no-repeat;
  background-size:100%;
}
.cir5{
  width: 2.08rem;
  height: 2.08rem;
  top:8.8rem;
  left:0.6rem;
  background:url(http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse5.png) no-repeat;
  background-size:100%;
}
.cir6{
  width: 2.5rem;
  height: 2.5rem;
  top:7.5rem;
  left:3.3rem;
  background:url(http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse6.png) no-repeat;
  background-size:100%;
}
.cir7{
  width: 3rem;
  height: 3rem;
  top: 7.9rem;
  right: 1.8rem;
  background:url(http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse7.png) no-repeat;
  background-size:100%;
}
.cir8{
  width: 1.7rem;
  height: 1.7rem;
  right:0.2rem;
  top:9rem;
  background:url(http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse8.png) no-repeat;
  background-size:100%;
}

.p3_purse{
  position:absolute;
  width:11rem;
  height:16rem;
  left:1.2rem;
  top:8.1rem;
  /*z-index:-1;*/
}
.purse_three{
  width:1.4rem;
  height:1.4rem;
  top: 13.7rem;
  left:1.8rem;
  position:absolute;
  z-index:2;
}
.purse_four{
  width:0.8rem;
  height:0.8rem;
  top: 14.2rem;
  left:0.6rem;
  position:absolute;
  z-index:2;
}
.shuoming{
  position:absolute;
  bottom:0.1rem;
  width:5.5rem;
  height:0.5rem;
  left:0.4rem;
}
.hand3{
  width: 2.8rem;
  height: 2.8rem;
  left:6.5rem;
  top: 12.2rem;
  position: absolute;
}
.openClick {
	  height: 3rem;
    width: 3rem;
    position: absolute;
    right: 1.8rem;
    top: 11rem;
    z-index: 1000;
}

</style>