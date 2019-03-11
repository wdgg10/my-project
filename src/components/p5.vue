<template>
	<div class="pp5">
		<div id="loading">
					<img class="load" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/loading3.gif"/>
					<div class="loadTe">好运努力开启中</div>
		</div>
		<div class="p5" id="p5">
			<div id="export"></div>
			<main id="canv">
				
				<div id="sign-content">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/logo1.png" class="logo" />
					<div v-show="signs=='sign1'" class="sign1">
						<div class="page"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png"></div>
						<div class="st1"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st11.png"></div>
						<div class="s1 si1"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/s11.png"></div>
						<button class="sub-btn " type="submit" @click="again" name="button"><img class="btns" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png"></button>
					</div>

					<div v-show="signs=='sign2'" class="sign2">
						<div class="page"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png"></div>
						<div class="st2"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st21.png"></div>
						<div class="s1 si2"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/s21.png"></div>
						<button class="sub-btn " type="submit" @click="again" name="button"><img class="btns" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png"></button>
					</div>
					<div v-show="signs=='sign3'" class="sign3">
						<div class="page"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png"></div>
						<div class="st3"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st51.png"></div>
						<div class="s1 si3"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/s31.png"></div>
						<button class="sub-btn" type="submit" @click="again" name="button"><img class="btns" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png"></button>
					</div>
					<div v-show="signs=='sign4'" class="sign4">
						<div class="page"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png"></div>
						<div class="st4"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st31.png"></div>
						<div class="s1 si4"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/s41.png"></div>
						<button class="sub-btn" type="submit" @click="again" name="button"><img class="btns" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png"></button>
					</div>
					<div v-show="signs=='sign5'" class="sign5">
						<div class="page"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png"></div>
						<div class="st5"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st41.png"></div>
						<div class="s1 si5"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/s51.png"></div>
						<button class="sub-btn" type="submit" @click="again" name="button"><img class="btns" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png"></button>
					</div>
					<div v-show="signs=='prize1'||signs=='prize2'||signs=='prize3'||signs=='prize4'||signs=='prize5'||signs=='prize6'||signs=='prize7'" class="sign6">
						<div class="page"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/page2.png"></div>
						<div class="st6"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st61.png"></div>
						<!--<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/page.png" class="page">-->
						<!--<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st6.png" class="st6">-->
						<!--<img v-show="signs=='prize1'" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm1.png" class="s6">
              <img v-show="signs=='prize2'" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm2.png" class="s6">
              <img v-show="signs=='prize3'" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm3.png" class="s6">
              <img v-show="signs=='prize4'" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm4.png" class="s6">
              <img v-show="signs=='prize5'" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm5.png" class="s6">
              <img v-show="signs=='prize6'" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm6.png" class="s6">
              <img v-show="signs=='prize7'" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm7.png" class="s6">-->
						<div v-show="signs=='prize1'" class="s6 sm1">
							<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm111.png">
						</div>
						<div v-show="signs=='prize2'" class="s6 sm2">
							<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm211.png">
						</div>
						<div v-show="signs=='prize3'" class="s6 sm3">
							<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm311.png">
						</div>
						<div v-show="signs=='prize4'" class="s6 sm4">
							<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm411.png">
						</div>
						<div v-show="signs=='prize5'" class="s6 sm5">
							<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm511.png">
						</div>
						<div v-show="signs=='prize6'" class="s6 sm6">
							<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm611.png">
						</div>
						<div v-show="signs=='prize7'" class="s6 sm7">
							<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm711.png">
						</div>
						<img v-show="signs=='prize1'" class="gift" src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse4.png" />
						<img v-show="signs=='prize2'" class="gift" src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse7.png" />
						<img v-show="signs=='prize3'" class="gift" src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse8.png" />
						<img v-show="signs=='prize4'" class="gift" src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse1.png" />
						<img v-show="signs=='prize5'" class="gift" src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse5.png" />
						<img v-show="signs=='prize6'" class="gift" src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse6.png" />
						<img v-show="signs=='prize7'" class="gift" src="http://fmcc1912.dwechat.com/H5/release/imgs/p3/purse3.png" />
						<div class="sb6"> <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/stb61.png"></div>
						<button class="sub-btn" @click="again" type="submit" name="button"><img id="bt1" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png"></button>
						<button class="again-btn" @click="receive" type="submit" name="button"><img id="bt2" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/receive.png"></button>
					</div>

				</div>
				<img class="firecrackers1" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/firecrackers1.png" />
				<img class="firecrackers2" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/firecrackers2.png" />

				<div class="card"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/card.jpg"></div>
				<div class="bao"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/bao.png"></div>

				<div class="form-content">
					<img class="close" @click="close" src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/close.png" />
					<div class="backg">
						<input class="name" placeholder="姓名" type="text" />
						<input class="phone" placeholder="电话" type="tel" />
						<textarea placeholder="地址" class="address"></textarea>
						<button class="sub-button" type="submit" name="button" @click="submit"></button>
					</div>

				</div>
			</main>


	</div>
	</div>
		
</template>
<script>
	import global from '../components/global.js'
	import html2canvas from 'html2canvas'

	export default {
		name: 'p5',
		data() {
			return {
				img: [],
				//      pics:['http://leop1902.dwechat.com/h5/背景-海报.png','http://leop1902.dwechat.com/h5/背景-海报2.png','http://leop1902.dwechat.com/h5/背景-海报3.jpg'],
				index: 0,
				a: true,
				b: true,
				openId: "",
				userInfo: "",
				signs: localStorage.getItem('signs') || '',
				Isprize: localStorage.getItem('Isprize') || '', //1为抽中还未领取 0已领取
				prizeName: localStorage.getItem('prizeName') || '',
				resv: this.$route.params.resv || ""

			}
		},
		components: {},
		created() {},
		mounted() {
			var that = this;
			var storage = window.localStorage;
			if(that.resv == 1) {
				that.signs = that.$route.params.signs;
				storage.setItem("signs", that.signs);
				
				if(!localStorage.getItem('signs') || localStorage.getItem('signs')  == "undefined"){
					
					window.location.href = "http://fmcc1912.dwechat.com/h5/release/index.html";

				}
			} else {
				if(localStorage.getItem('signs') && localStorage.getItem('signs')  != "undefined"){

					that.signs = localStorage.getItem('signs');
				}else{
					
					window.location.href = "http://fmcc1912.dwechat.com/h5/release/index.html#/p1";
				}
			}

			this.saveing();

			var wechatAuth = new WECHATAUTH('http://fmcc1803.dwechat.com');
			var that = this;
			wechatAuth.onReady(function(res) {
				console.log("%c res", "color: pink", res);

				that.OpenId = res.Data.OpenId;
				that.userInfo = res.Data.userInfo;
				//微信头像

			})

		},
		methods: {
			load(){
				
					document.getElementById("loading").style.display = "none";
			
			},
			// 保存图片
			saveing() {
				var that = this;
				setTimeout(function() {
					var p5 = document.getElementById('p5');
					var w = $(p5).outerWidth(),
						h = $(p5).outerHeight();
					html2canvas(p5, {
						width: w,
						height: h,
						scale: window.devicePixelRatio * 2,
						onclone: function(){
							that.load()
							
						}
					}).then(function(canvas) {
						console.log(canvas);
						//        	console.log(window.devicePixelRatio*2,'window.devicePixelRatio*2')
						document.getElementById('export').style.display = 'block';
						document.getElementById('export').appendChild(canvas);
						var image = new Image();
						image.src = canvas.toDataURL("image/png", 1.0);
						document.getElementById('export').appendChild(image);
					});

				}, 1200);
				setTimeout(function() {
					var bt1 = document.getElementById('bt1');
					var bt2 = document.getElementById('bt2');
					var btn = document.getElementsByClassName("btns");
					var i;
					for(i = 0; i < btn.length; i++) {
						btn[i].style.pointerEvents = "auto";
					}
					bt1.style.pointerEvents = "auto";
					bt2.style.pointerEvents = "auto";
					console.log(111);
				}, 1200);

			},
			//填写信息点击领取
			submit() {
				var name = $(".name").val();
				var phone = $(".phone").val();
				var address = $(".address").val();
				var that = this;
				var teleYz = /0\d{2}-\d{7,8}/;
				var phoneYz = /^1(3|4|5|7|8)\d{9}$/;
				console.log(!(phoneYz.test(phone) && teleYz.test(phone)));
				if(name !== "" && phone !== "" && address !== "") {
					if(!(phoneYz.test(phone) || teleYz.test(phone))) {
						alert("请填写正确的电话格式");
					} else {
						$.ajax({
							type: "POST",
							url: "http://fmcc1912.dwechat.com/api/choujiang/adduserprizerecord",
							contentType: 'application/json',
							data: JSON.stringify({
								"Phone": phone,
								"PrizeName": that.prizeName,
								"Name": name,
								"Address": address,
								"OpenId": that.OpenId
							}),
							success: function(suc) {
								console.log(that.OpenId);
								console.log("success", suc);
								that.Isprize == 0;
								$(".form-content").hide();
								alert("领取成功");
								if(!window.localStorage) {
									return false;
								} else {
									var storage = window.localStorage;
									storage.setItem("Isprize", 0);
									that.Isprize = 0;
								}
							},
							error: function(err) {
								console.log(err)

							}
						});
					}

				} else {
					alert("请填写联系信息");
				}

			},
			//关闭弹窗
			close() {
				$(".form-content").hide();
			},
			receive() {
				var that = this;
				if(that.Isprize == 0) {
					alert("您已领取");
				} else {
					$(".form-content").show();

				}
			},
			//再刷一次
			again() {
				this.$router.replace({
					path: '/p3'
				});
				var storage = window.localStorage;
				storage.setItem("prizeName2", "");
			}
		}
	}
</script>
<style scoped>

	.p5 {
		background: url('http://fmcc1912.dwechat.com/H5/release/imgs/p5/bg.jpg') top center no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		height: 100%;
		width: 100%;
	}
	.pp5 {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	/*.bg{
 	width:100%;
 	height:100%;
 }
 .bg img{
 	width:100%;
 	position:absolute;
 	top:0;
 	left:0;
 	}*/
	
	.sign1,
	.sign2,
	.sign3,
	.sign4,
	.sign5,
	.sign6 {
		position: relative;
		bottom: -1.4rem;
		height: 86vh;
		width: 10rem;
		margin: 0 auto;
		padding-top: 1.3rem;
	}
	
	.page img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/page1.png)no-repeat;
  	background-size: contain;*/
		position: relative;
		height: 10vh;
		left: -1.3rem;
	}
	
	.st1 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/st1.png)no-repeat;
  	background-size: contain;*/
		height: 7vh;
		position: relative;
		display: block;
		margin: 0 auto;
	}
	
	.st2 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/st2.png)no-repeat;
  	background-size: contain;*/
		height: 7vh;
		position: relative;
		display: block;
		margin: 0 auto;
	}
	
	.st3 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/st3.png)no-repeat;
  	background-size: contain;*/
		height: 7vh;
		position: relative;
		display: block;
		margin: 0 auto;
	}
	
	.st4 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/st4.png)no-repeat;
  	background-size: contain;*/
		height: 7vh;
		position: relative;
		display: block;
		margin: 0 auto;
	}
	
	.st5 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/st5.png)no-repeat;
  	background-size: contain;*/
		height: 7vh;
		position: relative;
		display: block;
		margin: 0 auto;
	}
	
	.st6 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/st6.png)no-repeat;
  	background-size: contain;*/
		height: 11vh;
		position: relative;
		display: block;
		margin: 0 auto;
		margin-top: -3vh;
	}
	
	.s1 {
		/*height: 36vh;
    margin-top: 4vh;
		position: relative;
    z-index: 5;*/
	}
	
	.si1 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/s11.png)no-repeat;
    background-size: contain;*/
		height: 40vh;
		margin: 0 auto;
		margin-top: 4vh;
	}
	
	.si2 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/s21.png)no-repeat;
    background-size: contain;*/
		margin: 0 auto;
		height: 38vh;
		margin-top: 3vh;
		left: 0.3rem;
		position: relative;
	}
	
	.si3 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/s31.png)no-repeat;
    background-size: contain;*/
		height: 36vh;
		margin: 0 auto;
		margin-top: 4vh;
	}
	
	.si4 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/s41.png)no-repeat;
    background-size: contain;*/
		height: 36vh;
		margin: 0 auto;
		margin-top: 1vh;
	}
	
	.si5 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/s51.png)no-repeat;
    background-size: contain;*/
		height: 29vh;
		margin: 0 auto;
		margin-top: 6vh;
	}
	/*.s6{
  
    margin: 0 auto;
    margin-top: 3vh;
    width: 9.5rem;
    
  }*/
	/*.sm1 {
  	background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm71.png)no-repeat;
  	background-size: contain;
  	margin: 0 auto;
    margin-top: 3vh;
    height: 2.5rem;
    width: 9rem;
  }*/
	
	.sm1 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm11.png)no-repeat;
  	background-size: contain;*/
		margin: 0 auto;
		margin-top: 3vh;
		height: 15vh;
	}
	
	.sm2 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm21.png)no-repeat;
  	background-size: contain;*/
		margin: 0 auto;
		margin-top: 3vh;
		height: 15vh;
	}
	
	.sm3 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm31.png)no-repeat;
  	background-size: contain;*/
		margin: 0 auto;
		margin-top: 3vh;
		height: 15vh;
	}
	
	.sm4 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm41.png)no-repeat;
  	background-size: contain;*/
		margin: 0 auto;
		margin-top: 3vh;
		height: 15vh;
	}
	
	.sm5 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm51.png)no-repeat;
  	background-size: contain;*/
		margin: 0 auto;
		margin-top: 3vh;
		height: 15vh;
	}
	
	.sm6 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm61.png)no-repeat;
  	background-size: contain;*/
		margin: 0 auto;
		margin-top: 3vh;
		height: 15vh;
	}
	
	.sm7 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/sm71.png)no-repeat;
  	background-size: contain;*/
		margin: 0 auto;
		margin-top: 3vh;
		height: 15vh;
	}
	
	.gift {
		height: 10vh;
		position: relative;
		display: block;
		margin: 0 auto;
	}
	
	.sb6 img {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/stb61.png)no-repeat;
  	background-size: contain;*/
		height: 10vh;
		position: relative;
		margin: 0 auto;
		margin-top: 1vh;
	}
	
	.logo {
		width: 4rem;
		height: 0.9rem;
		position: absolute;
		left: 0.5rem;
		top: 0.5rem;
	}
	
	.sign1 {
		background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/signbg.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.sign2 {
		background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/signbg.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.sign3 {
		background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/signbg.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.sign4 {
		background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/signbg.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.sign5 {
		background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/signbg.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.sign6 {
		background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/signbg.png) no-repeat;
		background-size: 100% 100%;
	}
	
	main {
		height: 100%;
		width: 100%;
	}
	
	#sign-content {
		height: 100%;
	}
	
	.firecrackers1 {
		position: absolute;
		height: 5rem;
		z-index: 2;
		left: -1.2rem;
		top: 1.5rem;
	}
	
	.firecrackers2 {
		position: absolute;
		height: 5rem;
		z-index: 2;
		right: -0.2rem;
		top: 0rem;
	}
	
	.sub-btn img {
		/*background-image: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png);*/
		height: 1.2rem;
		width: 4rem;
		background-repeat: no-repeat;
		position: absolute;
		left: 3rem;
		bottom: 1.2rem;
		background-size: cover;
		z-index: 1000;
		border-radius: 30px;
		pointer-events: none;
	}
	
	#bt1 {
		/*background-image: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/btn.png);*/
		height: 1rem;
		width: 3.5rem;
		background-repeat: no-repeat;
		position: absolute;
		left: 1rem;
		bottom: 1.2rem;
		background-size: cover;
		z-index: 1000;
		border-radius: 30px;
		pointer-events: none;
	}
	
	#bt2 {
		/*background-image: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/receive.png);*/
		height: 1rem;
		width: 3.5rem;
		background-repeat: no-repeat;
		position: absolute;
		left: 5rem;
		bottom: 1.2rem;
		background-size: cover;
		z-index: 1000;
		border-radius: 30px;
		pointer-events: none;
	}
	
	.card {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/card.jpg)no-repeat;*/
		background-color: #fff;
		height: 1.7rem;
		width: 1.7rem;
		position: absolute;
		left: 0.4rem;
		bottom: 0.3rem;
		border-radius: 6px;
		background-size: contain;
	}
	
	.card img,
	.bao img {
		width: 100%;
	}
	
	.bao {
		position: absolute;
		left: 2.5rem;
		bottom: -0.7rem;
		width: 7.9rem;
		height: 2.4rem;
	}
	
	.form-content {
		position: fixed;
		z-index: 1010;
		width: 100%;
		height: 100%;
		top: 0;
		padding-top: 20%;
		background-color: rgba(74, 72, 72, 0.6);
		display: none;
	}
	
	.backg {
		background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/backg.png) no-repeat;
		height: 8.5rem;
		width: 84%;
		margin: 0 auto;
		background-size: cover;
	}
	
	.close {
		position: relative;
		height: 0.8rem;
		left: 3.8rem;
		top: 0.4rem;
	}
	
	.sub-button {
		background-image: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/sub-btn.png);
		height: 1.2rem;
		width: 4rem;
		background-repeat: no-repeat;
		position: absolute;
		left: 3rem;
		background-size: cover;
		z-index: 2;
		border-radius: 30px;
		margin-top: 2.5rem;
	}
	
	.name {
		background-color: #fff;
		width: 80%;
		height: 1rem;
		border-radius: 10px;
		margin-top: 2.2rem;
		padding-left: 0.3rem;
		font-size: 22px;
	}
	
	.phone {
		background-color: #fff;
		width: 80%;
		height: 1rem;
		border-radius: 10px;
		margin-top: 0.2rem;
		padding-left: 0.3rem;
		font-size: 22px;
	}
	
	.address {
		background-color: #fff;
		width: 80%;
		height: 1.5rem;
		border-radius: 10px;
		margin-top: 0.2rem;
		padding-left: 0.3rem;
		font-size: 22px;
	}
	
	#loading {
		/*background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/bg.png)no-repeat;
		background-size: cover;*/
		background: url(http://fmcc1912.dwechat.com/H5/release/imgs/p5/load1.png) no-repeat;
		background-size: 100% 100%;
		/*background: rgb(15,15,78);*/
		position: absolute;
		left: 0;
		top: 0;
		color: #fff;
		height: 100%;
		width: 100%;
		z-index: 1100;
	}
	.load{
		position: absolute;
    height: 2.6rem;
    width: 2.6rem;
    top: 28%;
    left: 51%;
    margin-top: -1.3rem;
    margin-left: -1.3rem;
		
	}
	.loadTe{
		
		position: absolute;
    width: 3.5rem;
    top: 28%;
    left: 48%;
    margin-top: 2rem;
    font-size: 18px;
    margin-left: -1.5rem;
		
	}
</style>