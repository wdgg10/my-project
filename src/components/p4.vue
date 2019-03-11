<template>
  <div class="p4">
     <div class="toplogo">
       <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p4/logo1.png" class="logo" />
      <div class="bullet1">
        <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p4/bulletR.png" ref="bulletR" alt="">
      </div>
      <div class="bullet2">
        <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p4/bulletL.png" ref="bulletL" alt="">
      </div>
      <div class="topTitle">
        <img v-bind:src="this.HeadImgUrl" alt="">
      </div>
      <div class="title">
        <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p4/btitle4.png" alt="">
      </div>
      <div class="xtitle">
        <div v-show="signs=='sign1'" class="t1">
          <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st11.png" alt="">
        </div>
        <div v-show="signs=='sign2'" class="t1">
          <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st21.png" alt="">
        </div>
        <div v-show="signs=='sign3'" class="t1">
          <img  src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st51.png" alt="">
        </div>
        <div v-show="signs=='sign4'" class="t1">
          <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st31.png" alt="">
        </div>
        <div v-show="signs=='sign5'" class="t1">
          <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st41.png" alt="">
        </div>
        <div v-show="signs=='prize1'||signs=='prize2'||signs=='prize3'||signs=='prize4'||signs=='prize5'||signs=='prize6'||signs=='prize7'" class="t1">
          <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p5/st61.png" alt="">
        </div>
      </div>
    </div>
    <div class="check4">
      <img @click="look" src="http://fmcc1912.dwechat.com/H5/release/imgs/p4/check.png" alt="">
    </div>
    <div class="hand" @click="look">
      <img src="http://fmcc1912.dwechat.com/H5/release/imgs/p4/hand3.png" alt="">
    </div>
  </div>
</template>
<script>
  import global from '../components/global.js'
  export default {
       name: 'p2',
       data() {
         return {
         	//签
           signs:localStorage.getItem('signs') || '',
           HeadImgUrl: localStorage.getItem('HeadImgUrl') || '',
           prizeName:this.$route.params.prizeName //奖品名称
         }
       },
       components: {},
       created() {

     },
    mounted() {
    	
    	
    	console.log(this.HeadImgUrl)
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
    },
    methods: {
      look() {
      	this.$router.replace({path:'/p5',name:"p5",params:{signs:this.signs}});
      }
    }
  }
</script>

<style scoped>
.p4{background: url("http://fmcc1912.dwechat.com/H5/release/imgs/p4/bbg4.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.logo{
  width:4rem;
  height:0.9rem;
  position:absolute;
  left:0.5rem;
  top:0.5rem;
}
.toplogo{
  margin-top:-0.1rem !important;
  height: 7.8rem;
}
.bullet1,.bullet2{ 
  position: absolute;
}
.bullet1{
  width: 2.2rem;
  height: 4.5rem;
  right: -0.56rem;
  top:-0.75rem;
}
.bullet2{
  width: 2.2rem;
  height: 4.5rem;
  top:1.36rem;
  left:-1.1rem;
}
.topTitle{
  width:1.8rem;
  height:1.8rem;
  margin: 0 auto;
  top:2.4rem;
  left:4rem;
  border-radius: 1.8rem;
  position: absolute;
}
.title{
  width: 5.3rem;
  height: 2.8rem;
  position: absolute;
  top:22vh;
  left:2.2rem;
}
.topTitle img{
	border-radius: 50%;
}
.bullet1 img,.bullet2 img,.topTitle img,.title img,
.check4 img,.t1 img,
.hand img
{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.check4{
  width: 3.2rem;
  height: 2rem;
  position: relative;
  margin: 0 auto;
      top: 30vh;
}
.hand{
  width: 2rem;
  height: 2rem;
  position: relative;
  top:4rem;
  margin: 0 auto;
  left:2rem;
}

.xtitle{
  width: 6rem;
  height: 1.5rem;
  top: 35vh;
  position: relative;
  margin: 0 auto;
}
.t1{
     width: 5.5rem;
    height: 1.5rem;
    position: absolute;
    transform: rotate(-5deg);
    left: 0.2rem;
  
}
.tShow{display: block;}


 

</style>
