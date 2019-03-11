<template>
	<div class="p1">
			<v-touch @swipeup="swipeUp"  class="touchWrapper">
				<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/purse_four.png" class="purse_four" ref="purse_four">
				<div class="content">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/logo1.png" class="logo" />
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/purse_one.png" class="purse_one" ref="purse_one">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/purse_two.png" class="purse_two" ref="purse_two">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/purse_three.png" class="purse_three" ref="purse_three">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/2019.png" class="year">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/p1_title.png" class="title">
                    <!-- <div class="purse"></div> -->
              
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/purse.png" class="purse">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/p11_fu.png" class="fu" ref="fu">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/fireworks3.png" class="fireworks_three" ref="fireworks_three">
				</div>
                <div class="bottom">
					<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/person.png" class="person">
                	<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/year.png" class="outline" ref="outline">
                	<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/fireworks1.png" class="fireworks_one" ref="fireworks_one">
                	<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/fireworks2.png" class="fireworks_two" ref="fireworks_two">
                	<img src="http://fmcc1912.dwechat.com/H5/release/imgs/p1/arrow.png" class="arrow" ref="arrow">
					  
                </div>
			</v-touch>
	</div>
</template>
<script>
	import global from '../components/global.js'
	export default {
		name: 'p1',
		data() {
			return {
				Isprize:localStorage.getItem('Isprize') || '',
				prizeName:localStorage.getItem('prizeName') || '',
				signs:localStorage.getItem('signs2') || '',
			}
		},
	components: {

	},
	created() {
		var that = this;

	},
	mounted() {
		this.$root.ORDERID = "xxxxx";
    	var that = this;
		if(this.Isprize == 1 ){
			this.$router.replace({
						path: '/p5',
						name: "p5",
						params: {
							signs: that.signs,
							prizeName: that.prizeName,
							resv:1
						}
					});
		}else{
			var storage = window.localStorage;
    		storage.setItem("prizeName2", "");
		}
		
		TweenMax.fromTo(this.$refs.fu, 1, {
				transform: 'rotate(5deg)',
				transformOrigin: "top center"
			}, {
				// opacity:1,
				transform: 'rotate(-15deg)',
				transformOrigin: "top center",
				ease: 'linear',
				yoyo: true,
				repeat: -1,
			});
        // 上划箭头
        TweenMax.fromTo(this.$refs.arrow, 0.4, {
            bottom: '0rem',
        }, {
          opacity:1,
          bottom: '0.2rem',
          ease: 'linear',
          yoyo: true,
          repeat: -1,
		});


	       // 底部标题
        TweenMax.fromTo(this.$refs.outline,1, {
            opacity:0,
            width:'0%'
        }, {
          opacity:1,
          width:'6.4rem',
          ease: 'linear',
          yoyo: true,
		});
		
		// purse_one
		TweenMax.fromTo(this.$refs.purse_one, 0.7, {
		    opacity:0,
		    top:0
		}, {
		    opacity:1,
		    top:'3.1rem',
		    ease: 'linear',
		    yoyo: true,
		    onComplete: this.purse_two
		})
        
        // purse_three
		TweenMax.fromTo(this.$refs.purse_three, 1, {
		    opacity:0,
		    top:0
		}, {
		    opacity:1,
		    top:'5.8rem',
		    ease: 'linear',
		    yoyo: true,
		})


		// purse_four
		TweenMax.fromTo(this.$refs.purse_four, 1, {
		    opacity:0,
		    top:0
		}, {
		    opacity:1,
		    top:'10.6rem',
		    ease: 'linear',
		    yoyo: true,
		})

        // fireworks_three
		TweenMax.fromTo(this.$refs.fireworks_three, 0.5, {
		    opacity:0,
		}, {
		    opacity:1,
		    ease: 'linear',
		    yoyo: true,
		    repeat: -1,
		})
		
		setTimeout(function(){ 

          }, 1000);
		
		
		

	},
	methods: {
		

		swipeUp() {
			let orderId = this.$root.ORDERID;
			alert("p1"+orderId);
			this.global.transitionName = 'up';
			this.$router.replace('/p2');
		},
			
		purse_two(){
			TweenMax.fromTo(this.$refs.purse_two, 0.6, {
		           opacity:0,
		           top:0
		       }, {
		           opacity:1,
		           top:'4rem',
		           ease: 'linear',
		           yoyo: true,
		    })
		},



	}
};
</script>
<style scoped>
.logo{
  width:4rem;
  height:0.9rem;
  position:absolute;
  left:0.5rem;
  top:0.5rem;
}
	.p1 {
		background: url('http://fmcc1912.dwechat.com/H5/release/imgs/p1/p1_bg.jpg') top center no-repeat;
		background-size: 100% 100%;
		position:relative;
		overflow:hidden;
	}
	img{position:absolute;}
    .touchWrapper{
    	width:100%;
    	height:100%;
    }
    .purse_one{
    	width:1.28rem;
    	height:1.4rem;
        left: 2rem;
        z-index:1;
    }
    .purse_two{
    	width:1rem;
    	height:1.2rem;
    	opacity: 0;
        right:0.4rem;

        z-index:1;
    }
    .purse_three{
    	width:0.96rem;
    	height:0.84rem;
    	top: 5.8rem;
        right:1.3rem;
        z-index:1;
    }
    .year{
    	width:3.74rem;
    	height:1.8rem;
    	top:2.5rem;
        left:50%;
        transform:translateX(-40%);
    }
    .title{
    	width:7.57rem;
    	height:3.04rem;
    	top:3.75rem;
        left:50%;
        transform:translateX(-53%);
    }
    .fu{
    	width:1.44rem;
    	height:2rem;
    	top: 6.7rem;
        left: 0.8rem;
        z-index:1;
    }
    .fireworks_three{
    	width:0.59rem;
    	height:0.51rem;
    	top: 8.6rem;
        left: 0.97rem;
    }
    .purse{
    	/*width:8.4rem;
    	height:10.1rem;*/
    	/*width:7.1rem;
    	height:8.5rem;*/
    	top:6rem;
        width:92%;
    	left:50%;
    	transform:translateX(-50%);
    	z-index:0;
    }
    .bottom{
    	background:url(http://fmcc1912.dwechat.com/H5/release/imgs/p1/Cloud.png) no-repeat;
        background-size:cover;
    	height:9.1rem;
    	width:100%;
    	bottom:0;
    	position:absolute;
    	/*top:8rem;*/
    }
    .outline{
    	width:6.4rem;
    	height:2.3rem;
    	left:50%;
    	transform:translateX(-56%);
    	bottom:1.4rem;
    }
    .fireworks_one{
    	bottom:0;
    	width:1.1rem;
    	height:0.96rem;
    	left:3rem;
    }
    .fireworks_two{
    	bottom:0;
    	width:0.69rem;
    	height:0.64rem;
    	right: 0.3rem;
        bottom: 0.2rem;
    }
    .arrow{
    	width:0.99rem;
    	height:0.79rem;
    	left:50%;
    	transform:translateX(-56%);
    	bottom:0.2rem;
    }
	.person{
		width:10rem;
		height:7rem;
		position:absolute;
		bottom:0;
		left:0;
    	/* height:8.5rem; */
	}
	.purse_four{
		width:0.8rem;
		height:0.6rem;
		top:10.6rem;
		z-index:2;
	}


</style>