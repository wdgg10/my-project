<template>
	<div class="p2">
		<v-touch @swipeup="swipeUp" @swipedown="swipeDown" class="touchWrapper">
			<div class="toplogo">
				<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/logo1.png" class="logo" />
				<div class="bullet1">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/bulletR.png" ref="bulletR" alt="">
				</div>
				<div class="bullet2">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/bulletL.png" ref="bulletL" alt="">
				</div>
				<div class="topTitle">
					<img ref="t1" src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/titley2.png" alt="">
				</div>
			</div>
			<div class="content">
				<div ref="conl1" class="conl1"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl1.png" alt=""></div>
				<div ref="conl2" class="conl2"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl2.png" alt=""></div>
				<div ref="conl3" class="conl3"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl3.png" alt=""></div>
				<div ref="conr1" class="conr1"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr1.png" alt=""></div>
				<div ref="conr2" class="conr2"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr2.png" alt=""></div>
				<div ref="conl4" class="conl4"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl4.png" alt=""></div>
				<div ref="conl5" class="conl5"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl5.png" alt=""></div>
				<div ref="conl6" class="conl6"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl6.png" alt=""></div>
				<div ref="conr3" class="conr3"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr3.png" alt=""></div>
				<div ref="conr4" class="conr4"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr4.png" alt=""></div>
                <div ref="conl7" class="conl7"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl1.png" alt=""></div>
				<!-- <div ref="conl8" class="conl8"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl2.png" alt=""></div>
                <div ref="conl9" class="conl4"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl4.png" alt=""></div>
				<div ref="conl10" class="conl5"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conl5.png" alt=""></div> -->
                <!-- <div ref="conr5" class="conr3"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr3.png" alt=""></div>-->
				 <div ref="conr6" class="conr4"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr4.png" alt=""></div>
               <div ref="conr7" class="conr7"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr1.png" alt=""></div>
				 <div ref="conr8" class="conr8"><img src="http://fmcc1912.dwechat.com/H5/release/imgs/p2/conr2.png" alt=""></div> 
			</div>
			<div ref="sh" class="nextj">
				<img src="../assets/img/nextj.png" alt="">
			</div>
			<div class="bot">
				<img src="../assets/img/bot.png" alt="">
			</div>
		</v-touch>
	</div>
</template>
<script>
	import global from '../components/global.js'
	export default {
		name: 'p2',
		data() {
			return {
				img: []
			}
		},
		components: {},
		created() {

		},
		mounted() {
			
			TweenMax.fromTo(this.$refs.bulletR, 1, {
				transform: 'rotate(3deg)',
				transformOrigin: "top center"
			}, {
				// opacity:1,
				transform: 'rotate(-3deg)',
				transformOrigin: "top center",
				ease: 'linear',
				yoyo: true,
				repeat: -1,
			});
			TweenMax.fromTo(this.$refs.bulletL, 1, {
				transform: 'rotate(3deg)',
				transformOrigin: "top center"
			}, {
				// opacity:1,
				transform: 'rotate(-3deg)',
				transformOrigin: "top center",
				ease: 'linear',
				yoyo: true,
				repeat: -1,
				delay:1
			});
			TweenMax.fromTo(this.$refs.t1, 1, {
				opacity: 0,
				width: '200%',
				height: '200%'
			}, {
				opacity: 1,
				width: '90%',
				height: '90%',
				yoyo: true,
				ease: 'linear',

				onComplete: this.t1
			});

			TweenMax.fromTo(this.$refs.conl1, 6, {
				marginLeft: "12rem",
				opacity: 1,
				repeat: true
			}, {
				opacity: 1,
				marginLeft: "-9rem",
				yoyo: true,
				ease: 'linear',
				delay:3,
				onComplete: this.conl1
			});


			TweenMax.fromTo(this.$refs.conl2, 8, {
				marginLeft: "9rem",
				opacity: 1,
				repeat: true
			}, {
				opacity: 1,
				marginLeft: "-9rem",
				yoyo: true,
				ease: 'linear',
				delay:1,
				onComplete: this.conl2
			});


			TweenMax.fromTo(this.$refs.conl3, 15, {
				marginLeft: "9rem",
				opacity: 1,
				repeat: true,
				delay:5
			}, {
				opacity: 1,
				marginLeft: "-9rem",
				yoyo: true,
				ease: 'linear',
				onComplete: this.conl3
			});


			TweenMax.fromTo(this.$refs.conr2, 5, {
				marginLeft: "-10rem",
				opacity: 1,
				repeat: true,
			}, {
				opacity: 1,
				marginLeft: "10rem",
				yoyo: true,
				ease: 'linear',
				onComplete: this.conr2
			});


			TweenMax.fromTo(this.$refs.conr1, 5, {
				marginLeft: "-10rem",
				opacity: 1,
				repeat: true,
			}, {
				opacity: 1,
				marginLeft: "10rem",
				yoyo: true,
				ease: 'linear',
				delay:1,
				onComplete: this.conr1
			});


			TweenMax.fromTo(this.$refs.conl4, 15, {
				marginLeft: "10rem",
				opacity: 1,
				repeat: true,
			}, {
				opacity: 1,
				marginLeft: "-10rem",
				yoyo: true,
				ease: 'linear',
				onComplete: this.conl4
			});


			TweenMax.fromTo(this.$refs.conl5, 10, {
				marginLeft: "10rem",
				opacity: 1,
				repeat: true,
			}, {
				opacity: 1,
				marginLeft: "-10rem",
				yoyo: true,
				ease: 'linear',
				delay:2,
				onComplete: this.conl5
			});


			TweenMax.fromTo(this.$refs.conl6, 8, {
				marginLeft: "10rem",
				opacity: 1,
				repeat: true,
			}, {
				opacity: 1,
				marginLeft: "-10rem",
				yoyo: true,
				ease: 'linear',
				onComplete: this.conl6
		   });
		   
		   this.conr6()
		   this.conr7()
		   this.conr8()
		   this.conl7()
		   this.conl9()
		   this.conl10()
		   this.conl11()
		   this.conl12()
		   this.conl13()
		   this.conl14()
		   this.conl15()

			TweenMax.fromTo(this.$refs.conr3, 10, {
				marginLeft: "-10rem",
				opacity: 1,
				repeat: true,
			}, {
				opacity: 1,
				marginLeft: "10rem",
				yoyo: true,
				ease: 'linear',
				onComplete: this.conr3
			});
			TweenMax.fromTo(this.$refs.conr4, 8, {
				marginLeft: "-10rem",
				opacity: 1,
				repeat: true,
			}, {
				opacity: 1,
				marginLeft: "10rem",
				yoyo: true,
				ease: 'linear',
				onComplete: this.conr4
		   });
		   
			// 上划箭头
			TweenMax.fromTo(this.$refs.sh, 0.4, {
				bottom: '0rem',
			}, {
				opacity: 1,
				bottom: '0.2rem',
				ease: 'linear',
				yoyo: true,
				repeat: -1,
			});
		},
		methods: {
			swipeUp() {
				let orderId = this.$root.ORDERID;
			alert("p2"+orderId);
				this.global.transitionName = 'up';
				this.$router.replace('/p3');
			},
			swipeDown() {
				this.global.transitionName = 'down';
				this.$router.replace('/');
			},
			t1() {
				TweenMax.fromTo(this.$refs.t1, 0.1, {
					width: '90%',
					height: '90%'
				}, {
					width: '100%',
					height: '100%',
					yoyo: true,
					ease: 'linear',
					onComplete: this.conl1
				});
			},
			conl1() {
				TweenMax.fromTo(this.$refs.conl1, 9, {
					marginLeft: "20rem",
					opacity: 1
				}, {
					opacity: 1,
					marginLeft: "-9rem",
					yoyo: true,
					ease: 'linear',
					onComplete: this.conl1
				});
			},
			conl2() {
				TweenMax.fromTo(this.$refs.conl2, 9, {
					marginLeft: "9rem",
					opacity: 1
				}, {
					opacity: 1,
					marginLeft: "-9rem",
					yoyo: true,
					ease: 'linear',
					onComplete: this.conl2
				});
			},
			conl3() {
				TweenMax.fromTo(this.$refs.conl3, 15, {
					marginLeft: "25rem",
					opacity: 1
				}, {
					opacity: 1,
					marginLeft: "-9rem",
					yoyo: true,
					ease: 'linear',
					delay:5,
					onComplete: this.conl3
				});
			},
			conr2() {
				TweenMax.fromTo(this.$refs.conr2, 8, {
					marginLeft: "-10rem",
					opacity: 1
				}, {
					opacity: 1,
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:3,
					onComplete: this.conr2
				});
			},
			conr1() {
				TweenMax.fromTo(this.$refs.conr1, 6, {
					marginLeft: "-10rem",
				}, {
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:1,
					onComplete: this.conr1
				});
			},
			conl4() {
				TweenMax.fromTo(this.$refs.conl4, 10, {
					marginLeft: "10rem",
				}, {
					marginLeft: "-10rem",
					yoyo: true,
					ease: 'linear',
					onComplete: this.conl4
				});
			},
			conl5() {
				TweenMax.fromTo(this.$refs.conl5, 10, {
					marginLeft: "10rem",
				}, {
					marginLeft: "-10rem",
					yoyo: true,
					ease: 'linear',
					delay:5,
					onComplete: this.conl5
				});
			},
			conl6() {
				TweenMax.fromTo(this.$refs.conl6, 6, {
					marginLeft: "10rem",
				}, {
					marginLeft: "-15rem",
					yoyo: true,
					ease: 'linear',
					delay:4,
					onComplete: this.conl6
				});
			},

			conl9() {
				TweenMax.fromTo(this.$refs.conl6, 6, {
					marginLeft: "10rem",
				}, {
					marginLeft: "-15rem",
					yoyo: true,
					ease: 'linear',
					delay:6,
					onComplete: this.conl9
				});
			},

			conl10() {
				TweenMax.fromTo(this.$refs.conl6, 6, {
					marginLeft: "10rem",
				}, {
					marginLeft: "-15rem",
					yoyo: true,
					ease: 'linear',
					delay:20,
					onComplete: this.conl10
				});
			},

			conl11() {
				TweenMax.fromTo(this.$refs.conl7, 6, {
					marginLeft: "10rem",
				}, {
					marginLeft: "-15rem",
					yoyo: true,
					ease: 'linear',
					delay:19,
					onComplete: this.conl11
				});
			},


            conl12() {
				TweenMax.fromTo(this.$refs.conr3, 9, {
					marginLeft: "-10rem",
				}, {
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:21,
					onComplete: this.conl12
				});
			},

			conl13() {
				TweenMax.fromTo(this.$refs.conr4, 9, {
					marginLeft: "-10rem",
				}, {
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:23,
					onComplete: this.conl13
				});
			},

			conl14() {
				TweenMax.fromTo(this.$refs.conl1, 9, {
					marginLeft: "-10rem",
				}, {
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:23,
					onComplete: this.conl14
				});
			},

			conl15() {
				TweenMax.fromTo(this.$refs.conl3, 9, {
					marginLeft: "-10rem",
				}, {
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:20,
					onComplete: this.conl15
				});
			},

           conl7() {
			TweenMax.fromTo(this.$refs.conl7, 16, {
				marginLeft: "10rem",
				opacity: 1,
				repeat: true,
			}, {
				opacity: 1,
				marginLeft: "-10rem",
				yoyo: true,
				ease: 'linear',
				delay:10,
				onComplete: this.conl7
			});
		    },

			conr3() {
				TweenMax.fromTo(this.$refs.conr3, 9, {
					marginLeft: "-10rem",
				}, {
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:2,
					onComplete: this.conr3
				});
			},
			conr4() {
				TweenMax.fromTo(this.$refs.conr4, 8, {
					marginLeft: "-10rem",
				}, {
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:5,
					onComplete: this.conr4
				});
			},
			conr6() {
				TweenMax.fromTo(this.$refs.conr6, 8, {
					marginLeft: "-10rem",
				}, {
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:8,
					onComplete: this.conr6
				});
			},

			conr7() {
				TweenMax.fromTo(this.$refs.conr7, 8, {
					marginLeft: "-10rem",
				}, {
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:11,
					onComplete: this.conr7
				});
			},

			conr8() {
				TweenMax.fromTo(this.$refs.conr8, 8, {
					marginLeft: "-10rem",
				}, {
					marginLeft: "10rem",
					yoyo: true,
					ease: 'linear',
					delay:1,
					onComplete: this.conr8
				});
			},
		}
	}
</script>

<style scoped>
	.p2 {
		background: url("http://fmcc1912.dwechat.com/H5/release/imgs/p2/bbg2.jpg") no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
	}
	
	.logo {
		width: 4rem;
		height: 0.9rem;
		position: absolute;
		left: 0.5rem;
		top: 0.5rem;
	}
	
	.toplogo {
		margin-top: -0.1rem !important;
		height: 6rem;
	}
	
	.bullet1,
	.bullet2 {
		position: absolute;
	}
	
	.bullet1 {
		width: 2.2rem;
		height: 4.5rem;
		right: -0.56rem;
		top: -0.75rem;
	}
	
	.bullet2 {
		width: 2.2rem;
		height: 4.5rem;
		top: 1.36rem;
		left: -1.1rem;
	}
	
	.topTitle {
		width: 7rem;
		height: 1.6rem;
		margin: 0 auto;
		top: 20vh;
		position: relative;
	}
	
	.content {
		width: 8.5rem;
		height: 50%;
		bottom: 1.6rem;
		position: absolute;
		left: 0.8rem;
	}
	
	
	.bullet1 img,
	.bullet2 img,
	.topTitle img,
	.conl1 img,
	.conl2 img,
	.conl4 img,
	.conl5 img,
	.conl6 img,
	.conr1 img,
	.conr2 img,
	.conr3 img,
	.conr4 img,
  .conl7 img,
	.bot img,
  .conr8 img,
  .conr7 img,
  .conr5 img,
  .conr6 img,
  .conl8 img,
	.nextj img {
		width: 120%;
		height: 120%;
		object-fit: contain;
	}
	.conl3 img{
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.conl1 {
		width: 2.8rem;
		height: 0.9rem;
		margin-left: 0.2rem;
		position: absolute;
		top: 3%;
	}
  .conl7 {
		width: 2.8rem;
		height: 0.9rem;
		margin-left: 3rem;
		position: absolute;
		top: 30%;
	}
	
	.conl2 {
		width: 2.8rem;
		height: 0.9rem;
		margin-left: 6.2rem;
		position: absolute;
		top: 69%;
	}
	.conl8 {
		width: 2.8rem;
		height: 0.9rem;
		margin-left: 5.5rem;
		position: absolute;
		top: 15%;
	}
	.conl3 {
		width: 3.2rem;
		height: 0.9rem;
		margin-left: 2rem;
		position: absolute;
		top: 20%;
	}
	
	.conl4 {
		width: 7.2rem;
		height: 0.8rem;
		margin-left: 0.2rem;
		position: absolute;
		top: 49%;
	}
	
	.conl5 {
		width: 3.9rem;
		height: 1.5rem;
		display: inline-table;
		position: absolute;
		top: 20%;
    left:4.2rem;
	}
	
	.conl6 {
		width: 3rem;
		height: 1rem;
		display: inline-table;
		margin-left: 1.2rem;
		position: absolute;
		top: 58%;
	}
	
	.conr1 {
		width: 3.6rem;
		height: 0.9rem;
		display: inline-table;
		position: absolute;
		top: 39%;
	}
	.conr7 {
		width: 3.6rem;
		height: 0.9rem;
		display: inline-table;
		position: absolute;
    left:-0.1rem;
		top: 28%;
	}
	.conr2 {
		width: 2.8rem;
		height: 0.9rem;
		display: inline-table;
		margin-left: 2rem;
		position: absolute;
		top: 28%;
	}
  .conr8{
		width: 2.8rem;
		height: 0.9rem;
		display: inline-table;
		margin-left: -1rem;
		position: absolute;
		top: 68%;
	}
	
	.conr3 {
		width: 2.8rem;
		height: 0.9rem;
		margin-left: 0.8rem;
		position: absolute;
		z-index: 100;
		top: 65%;
	}
	
	.conr4 {
		width: 4.5rem;
		height: 0.9rem;
		margin-left: 2.6rem;
		position: absolute;
		top: 77%;
	}
	
	.bot {
		width: 2rem;
		height: 2rem;
		margin-left: 1.5rem;
		z-index: 100;
		position: relative;
		display: inline-table;
		position: absolute;
		bottom: 0.5rem;
		right: 0.8rem;
	}
	
	.nextj {
		width: 1rem;
		height: 1rem;
		position: absolute;
		display: block;
		margin: 0 auto;
		bottom: 0.1rem;
		left: 50%;
		margin-left: -0.5rem;
	}

</style>