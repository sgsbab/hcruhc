<template>
  <div class="container-fluid">
    <b-carousel id="carousel" :interval="4000">
      <!-- @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"-->
      <!-- Text slides with image -->
      <b-carousel-slide class="home_slider_background" img-src="@/assets/CSI_Img1.jpg">
        <div class="transbox">
          <p class="church_name">St. Peter's Church</p>
          <p class="church_place">Bangalore</p>
          <p class="church_slogan">"A candle loses nothing by lighting another candle."</p>
        </div>
      </b-carousel-slide>

      <b-carousel-slide class="home_slider_background" img-src="@/assets/CSI_Img2.jpg">
        <div class="transbox">
          <p class="church_name">St. Peter's Church</p>
          <p class="church_place">Bangalore</p>
          <p class="church_slogan">"A mind fixed on God has no room for evil thoughts."</p>
        </div>
      </b-carousel-slide>

      <b-carousel-slide class="home_slider_background" img-src="@/assets/CSI_Img3.jpg">
        <div class="transbox">
          <p class="church_name">St. Peter's Church</p>
          <p class="church_place">Bangalore</p>
          <p class="church_slogan">"Every saint has a past– every sinner has a future!"</p>
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="100" height="50"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>-->
    </b-carousel>
  </div>
</template>

<script>

export default {
  name: 'HomeCarousel',
  data () {
    return {}
  },
  methods: {
    // onSlideStart (slide) {
    //   this.sliding = true
    // },
    // onSlideEnd (slide) {
    //   this.sliding = false
    // }
  }
}
</script>

<style>
div home_slider_background
{
  opacity: 0.9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
div.transbox {
  opacity: 0.4;
  width: 100%;
  height: 160px;
  background: rgba(215, 219, 221);
  margin-top: 40px;
}
p.church_name {
  color: #060607;
  font-size: 50px;
  font-weight: 600;
  line-height: 60px;
}
p.church_place {
  color: #060607;
  font-size: 20px;
  font-weight: 700;
  line-height: 0px;
}
p.church_slogan {
  color: #060607;
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
  font-family: serif;
  line-height: 85px;
}
</style>
