<template>
        <div class="container">
              <p class="p-0"></p>
              <b-carousel id="carousel" class="rounded border border-info" :interval="4000">
                <!-- @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"-->
                <!-- Text slides with image -->
                <b-carousel-slide class="rounded home_slider_background" img-src="@/assets/CSI_Img1.jpg">
                  <div class="transbox d-none d-lg-block">
                    <p class="church_name">{{ chName }}</p>
                    <p class="church_place">Bangalore</p>
                    <p class="church_slogan">"A candle loses nothing by lighting another candle."</p>
                  </div>
                </b-carousel-slide>

                <b-carousel-slide class="rounded home_slider_background" img-src="@/assets/CSI_Img2.jpg">
                  <div class="transbox d-none d-lg-block">
                    <p class="church_name">{{ chName }}</p>
                    <p class="church_place">Bangalore</p>
                    <p class="church_slogan">"A mind fixed on God has no room for evil thoughts."</p>
                  </div>
                </b-carousel-slide>

                <b-carousel-slide class="rounded home_slider_background" img-src="@/assets/CSI_Img3.jpg">
                  <div class="transbox d-none d-lg-block">
                    <p class="church_name">{{ chName }}</p>
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
             <b-card class="mt-3" bg-variant="light">
                 <div class="p-1">
                    <b-img src="@/assets/church_1.png" alt></b-img>
                    <!-- <h3 class="text-center">Welcome to St. Peter's Church</h3> -->
                    <h3 class="text-center">Welcome to {{ chName }}</h3>
                    <span class="text-center" style="font-family: Gotham A; font-style: italic">God loves us all</span>
                    <p class="p-1"></p>
                  </div>
                <div class="row">
                    <div class="col-sm-8">
                        <p class="text-justify" style="font-size: 18px; font-family: Montserrat', sans-serif; font-style: normal;">{{ chDesc }}</p>
                    </div>
                    <div class="col-sm-4 d-none d-lg-block">
                        <b-img class="p-1" slot="aside" src="@/assets/CSI_photo.jpg" width="350" alt="placeholder" />
                        <!-- <b-img class="p-1" slot="aside" v-bind:src="getChImg()" width="400" alt="placeholder" /> -->
                        <!-- <b-img class="p-1" slot="aside" width="400" :src="getChImg"></b-img> -->
                    </div>
                </div>
             </b-card>
             <b-card class="mt-3 text-white" style="background-color: rgb(27, 79, 114);">
                 <div class="p-0">
                    <b-img src="@/assets/church_2.png" alt></b-img>
                    <p class="p-1"></p>
                    <!-- <h3 class="text-center">Welcome to St. Peter's Church</h3> -->
                    <h2 class="text-center">Our Church Main Activities</h2>
                    <span class="text-center" style="font-family: Gotham A; font-style: italic">God loves us all</span>
                    <p class="p-1"></p>
                  </div>
                <div>
                   <p class="text-justify col-sm-15" style="font-size: 18px; font-family: Montserrat', sans-serif; font-style: normal;">There are many wonderful Christmas events you can participate in as a church, and the Christmas season is also a great time to intentionally reach out to your community.
                     Many non-churchgoers are on the lookout for family Christmas activities or where to attend a Christmas Eve service, and there may be some families in need within your community who could use a little help this Christmas.</p>
                </div>
                <div class="row mt-2">
                  <div class="col-lg-2 col-md-4 col-sm-6">
                  <p class="p-2"></p>
                  <div class="activities_item">
                    <b-img src="@/assets/eventsLink.png" alt/>
                  </div>
                  <div class="activities_title">
                    <b-link><span class="text-white text-center" style="font-size: 18px; font-family: Montserrat', sans-serif;">Events</span></b-link>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                  <p class="p-2"></p>
                  <div class="activities_item">
                    <b-img src="@/assets/churchEventsLink.png" alt/>
                  </div>
                  <div class="activities_title">
                    <b-link><span class="text-white text-center" style="font-size: 18px; font-family: Montserrat', sans-serif;">Church Timings</span></b-link>
                  </div>
                </div>
                  <div class="col-lg-2 col-md-4 col-sm-6">
                    <p class="p-2"></p>
                    <div class="activities_item">
                      <b-img src="@/assets/sermonsLink.png" alt/>
                    </div>
                    <div class="activities_title">
                      <b-link><span class="text-white text-center" style="font-size: 18px; font-family: Montserrat', sans-serif;">Sermons</span></b-link>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-4 col-sm-6">
                    <p class="p-2"></p>
                    <div class="activities_item">
                      <b-img src="@/assets/dailyMassLink.png" alt/>
                    </div>
                    <div class="activities_title">
                      <b-link><span class="text-white text-center" style="font-size: 18px; font-family: Montserrat', sans-serif;">Daily Mass</span></b-link>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-4 col-sm-6">
                    <p class="p-2"></p>
                    <div class="activities_item">
                      <b-img src="@/assets/dailyPrayersLink.png" alt/>
                    </div>
                    <div class="activities_title">
                      <b-link><span class="text-white text-center" style="font-size: 18px; font-family: Montserrat', sans-serif;">Daily Prayers</span></b-link>
                    </div>
                  </div>
                </div>
             </b-card>
        </div>
</template>

<script>
import axios from 'axios'

// global.jQuery = require('jquery')
// var $ = global.jQuery
// window.$ = $

export default {
  name: 'AboutChurch',
  data () {
    return {
      searchChParamObj: '',
      chDetailsObj: '',
      chImg: null,
      chName: null,
      chDesc: null,
      axios_url: null
    }
  },
  methods: {
    // onSubmit (evt) {
    //   let url = 'http://localhost:3600/user/vCred'
    //   console.log('Login Name: ', this.form.loginName)
    //   let param = {
    //     selDiocese: this.form.selDiocese,
    //     selChurchLocation: this.form.selChurchLocation,
    //     selChurchName: this.form.selChurchName
    //   }
    //   axios.post(url, param).then((response) => {
    //     console.log(response)
    //     // router.push({ name: 'CreateEvents' })
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // },
    getChDetails: function () {
      // console.log('window.sessionStorage.getItem(chInfo): ', window.sessionStorage.getItem('chInfo').chDetailsObj)
      if (this.$store.getters.GET_CH_DETAILS_OBJ === null) {
        let searchChParamObj = this.$store.getters.GET_SEARCH_CHPARAM
        console.log('Ab getters PARAM payload: ', searchChParamObj)
        if (this.axios_url === null) {
          this.axios_url = process.env.AXIOS_BASE_URL
        }
        // let url = 'http://localhost:3600/ch/getch'
        let url = this.axios_url.concat('/ch/getch')
        let param = {
          selDiocese: searchChParamObj.selDiocese,
          selChurchLocation: searchChParamObj.selChurchLocation,
          selChurchName: searchChParamObj.selChurchName
        }
        axios.post(url, param).then((response) => {
          // console.log(response)
          // var chObj = JSON.stringify(response.data)
          var chDetailsObj = response.data
          this.chName = chDetailsObj.churchName
          this.chDesc = chDetailsObj.churchDesc
          this.chImg = chDetailsObj.img
          console.log('chObject: ', chDetailsObj)
          let chParamStore = {
            chNameStore: chDetailsObj.churchName,
            chDescStore: chDetailsObj.churchDesc,
            chImgStore: chDetailsObj.img
          }
          this.$store.commit('SET_CH_DETAILS_DB', chParamStore)
          console.log('getChDetailsObjStore chDetailsObj 1: ', window.sessionStorage.getItem('chInfo'))
        }).catch((error) => {
          console.log(error)
        })
      } else {
        var getChDetailsObjStore = JSON.parse(window.sessionStorage.getItem('chInfo'))
        console.log('getChDetailsObjStore chDetailsObj 2: ', getChDetailsObjStore.chDetailsObj.chNameStore)
        if (getChDetailsObjStore.chDetailsObj.chNameStore !== this.chName) {
          this.$store.commit('GET_CH_DETAILS_OBJ', null)
          if (this.axios_url === null) {
            this.axios_url = process.env.AXIOS_BASE_URL
          }
          let searchChParamObj = this.$store.getters.GET_SEARCH_CHPARAM
          // let url = 'http://localhost:3600/ch/getch'
          let url = this.axios_url.concat('/ch/getch')
          let param = {
            selDiocese: searchChParamObj.selDiocese,
            selChurchLocation: searchChParamObj.selChurchLocation,
            selChurchName: searchChParamObj.selChurchName
          }
          axios.post(url, param).then((response) => {
            // console.log(response)
            // var chObj = JSON.stringify(response.data)
            var chDetailsObj = response.data
            this.chName = chDetailsObj.churchName
            this.chDesc = chDetailsObj.churchDesc
            this.chImg = chDetailsObj.img
            console.log('chObject: ', chDetailsObj)
            let chParamStore = {
              chNameStore: chDetailsObj.churchName,
              chDescStore: chDetailsObj.churchDesc,
              chImgStore: chDetailsObj.img
            }
            this.$store.commit('SET_CH_DETAILS_DB', chParamStore)
            console.log('getChDetailsObjStore chDetailsObj 1: ', window.sessionStorage.getItem('chInfo'))
          }).catch((error) => {
            console.log(error)
          })
        }
        // var getChDetailsObjStore = window.sessionStorage.getItem('chInfo')
        this.chName = getChDetailsObjStore.chDetailsObj.chNameStore
        this.chDesc = getChDetailsObjStore.chDetailsObj.chDescStore
        this.chImg = getChDetailsObjStore.chDetailsObj.chImgStore
        console.log('chInfo SessionStorage: ', getChDetailsObjStore)
      }
    },
    getChObjFromStore: function () {
      var getChDetailsObjStore = window.sessionStorage.getItem('chInfo')
      this.chName = getChDetailsObjStore.chName
      this.chDesc = getChDetailsObjStore.chDesc
      this.chImg = getChDetailsObjStore.chImg
      console.log('chInfo SessionStorage: ', getChDetailsObjStore)

      // let searchChParamObj = this.$store.getters.GET_SEARCH_CHPARAM
      // this.searchChParamObj = searchChParamObj
      // console.log('Ab getters PARAM payload: ', searchChParamObj)

      // this.chDetailsObj = this.$store.getters.GET_CH_DETAILS_OBJ
      // console.log('ab Store DB OBJ: ', chDetailsObj)
      // this.chName = chDetailsObj.churchName
      // this.chDesc = chDetailsObj.churchDesc
      // this.chImg = chDetailsObj.img

      // let url = 'http://localhost:3600/ch/getch'
      // let param = {
      //   selDiocese: searchChParamObj.selDiocese,
      //   selChurchLocation: searchChParamObj.selChurchLocation,
      //   selChurchName: searchChParamObj.selChurchName
      // }
      // axios.post(url, param).then((response) => {
      //   var chDetailsObj = response.data
      //   this.chName = chDetailsObj.churchName
      //   this.chDesc = chDetailsObj.churchDesc
      //   this.chImg = chDetailsObj.img
      // })
      // this.chName = searchChParamObj.churchName
      // this.chDesc = searchChParamObj.churchDesc
      // this.chImg = searchChParamObj.img
      // console.log('About chObject: ', chDetailsObj)
      // console.log('Abch name: ', chDetailsObj.churchName)
      // console.log('Abch Desc: ', chDetailsObj.churchDesc)
      // console.log('Abch Img: ', chDetailsObj.img)
    }
  },
  // beforeCreate: function () {
  //   this.getchDetails()
  //   this.getChObjFromStore()
  // }
  beforeMount: function () {
    // if (window.sessionStorage.getItem('chInfo') === null) {
    //   this.getchDetails()
    // } else {
    //   this.getChObjFromStore()
    // }
    this.getChDetails()
    // this.getChObjFromStore()
  }
  // computed: {
  //   getChImg: function () {
  //     console.log('Abch getChImg: ', this.chImg)
  //     return '@/assets/CSI_photo.jpg'
  //   }
  // }
}
</script>

<style>
.activities_item {
    width: 140%;
    margin-bottom: 10px;
}
.activities_title {
    width: 140%;
    display: inline-block;
    font-size: 18px;
    color: #FFFFFF;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}
div home_slider_background
{
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
div.transbox {
  opacity: 0.7;
  width: 100%;
  height: 160px;
  background: rgba(248, 250, 240, 0.4);
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
