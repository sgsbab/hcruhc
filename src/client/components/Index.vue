<template>
<div class="mx-5">
        <TopBar></TopBar>
            <div>
                <b-navbar class="ml-auto" variant="light" type="light" toggleable style="font-weight: 600;">
                    <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
                    <b-navbar-brand>
                        <!--<span>Believe</span> -->
                        <img src="@/assets/CSI_logo.jpg" height="80" width="80" alt class="align-top"/>
                        <!-- <b-img src="@/static/CSI_logo.jpg" /> -->
                        <!--<span>St. Peter's, Bangalore</span>-->
                    </b-navbar-brand>
                    <!-- <p class="heading p-1">CHURCH OF SOUTH INDIA</p> -->
                    <b-collapse is-nav id="nav_text_collapse">
                            <b-navbar-nav class="ml-auto">
                                <b-nav-item>
                                    <router-link to="/" exact active-class="activeHome" style="color: #353535;">Home</router-link>
                                </b-nav-item>
                                <b-nav-item>
                                    <router-link to="/" exact style="color: #353535;">Ministries</router-link>
                                </b-nav-item>
                                <b-nav-item>
                                    <router-link to="/" exact style="color: #353535;">Sermons</router-link>
                                </b-nav-item>
                                <b-nav-item>
                                    <router-link to="/" exact style="color: #353535;">Events</router-link>
                                </b-nav-item>
                                <b-nav-item>
                                    <router-link  to="/zkj4dnhstd3hdhd7fhd4fvwsg7" exact style="color: #353535;">Communication</router-link>
                                </b-nav-item>
                                <b-nav-item>
                                    <router-link to="/" exact style="color: #353535;">Contacts</router-link>
                                </b-nav-item>
                                <b-nav-item>
                                    <router-link to="/" exact style="color: #008000;" data-toggle="collapse"
                                    data-target="#churchSearchPanel" aria-expanded="false" aria-controls="churchSearchPanel">Find Your Church</router-link>
                                </b-nav-item>
                            </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
<b-card class="collapse" id="churchSearchPanel" bg-variant="warning">
 <div>
     <b-form @submit.prevent="onSubmit">
     <div class="row align-items-center justify-content-center">
         <div class="col-md-3 pt-2">
             <div class="form-group">
                 <b-form-select v-model="form.selDiocese" :options="dioceses" class="mb-2" required/>
             </div>
         </div>
          <div class="col-md-3 pt-2">
             <div class="form-group">
                <b-form-select v-model="form.selChurchLocation" :options="churchLocation" class="mb-2" required/>
             </div>
          </div>
          <div class="col-md-3">
             <div class="form-group">
                <b-form-input v-model="form.selChurchName" type="text" placeholder="Enter Your Church Name" class="mb-3" required/>
             </div>
          </div>
          <div class="col-md-1">
             <div class="form-group">
                <b-button class="btn btn-block" type="submit" variant="primary">Search</b-button>
                <!-- <input type="button" value="Send Request" > -->
             </div>
          </div>
     </div>
     </b-form>
 </div>

</b-card>
            <div>
                <b-card class="text-center p-2 mt-3">
                    <p class="card-text heading">CHURCH OF SOUTH INDIA</p>
                </b-card>
                <b-carousel class="mt-5" id="carousel" :interval="4000">
                    <b-carousel-slide img-src="@/assets/CSI_Img1.jpg">
                        <!-- <div class="transbox">
                        <p class="church_name">St. Peter's Church</p>
                        <p class="church_place">Bangalore</p>
                        <p class="church_slogan">"A candle loses nothing by lighting another candle."</p>
                        </div> -->
                    </b-carousel-slide>

                    <b-carousel-slide img-src="@/assets/CSI_Img2.jpg">
                        <!-- <div class="transbox">
                        <p class="church_name">St. Peter's Church</p>
                        <p class="church_place">Bangalore</p>
                        <p class="church_slogan">"A mind fixed on God has no room for evil thoughts."</p>
                        </div> -->
                    </b-carousel-slide>

                    <b-carousel-slide img-src="@/assets/CSI_Img3.jpg">
                        <!-- <div class="transbox">
                        <p class="church_name">St. Peter's Church</p>
                        <p class="church_place">Bangalore</p>
                        <p class="church_slogan">"Every saint has a past– every sinner has a future!"</p>
                        </div> -->
                    </b-carousel-slide>
                </b-carousel>
            </div>
            <div>
             <b-card class="p-2 mt-5"  bg-variant="light">
                 <div class="p-3">
                    <b-img src="@/assets/church_1.png" alt></b-img>
                    <h3 class="text-center">Welcome to Church of South India</h3>
                    <span class="text-center" style="font-family: Gotham A; font-style: italic">God loves us all</span>
                    <p></p>
                    <p class="p-3"></p>
                  </div>
                <div class="row">
                    <div class="col-sm-8">
                        <p class="text-left" style="font-size: 18px; font-family: Montserrat', sans-serif; font-style: normal;">In Luke is recounted the story that Peter caught so large an amount of fish that he fell down before the feet of Jesus and was told by the Lord, Do not be afraid; from now on you will be catching men. Jesus also gave Simon a new name: Cephas, or the rock. Becoming a disciple of Jesus, Peter acknowledged him as …the Messiah, the son of the living God. Christ responded by saying: …you are Peter and upon this rock I will build my church… He added: I will give you the keys of the kingdom of heaven. Whatever you bind on earth shall be bound in heaven; and whatever you loose on earth shall be loosed in heaven.</p>
                    </div>
                    <div class="col-sm-4">
                        <b-img class="p-1" slot="aside" src="@/assets/CSI_photo.jpg" width="350" alt="placeholder" />
                    </div>
                </div>
           </b-card>
           </div>
           <div>
                <b-card  class="p-2 mt-5" bg-variant="light">
                <div class="row">
                    <div class="col-sm-4">
                        <b-img class="p-1" src="@/assets/CSI_bishop.jpg" width="350" alt="placeholder" />
                    </div>
                    <div class="col-sm-8">
                        <h5>Bishop Rt. Rev. Prasanna Kumar Samuel</h5>
                        <p class="p-2"></p>
                        <p class="text-center" style="font-size: 18px; font-family: Montserrat', sans-serif; font-style: normal;">Applauding and acknowledging the formation and growth of Karnataka Central Diocese, Bishop Gill avers, About thirty kilometres from Bangalore, just off the highway to Mysore, there is a magnificent banyan tree which covers several acres of land. No doubt that tree began its life with a single seed and first grew into a tree with a single trunk. In course of time its branches sent down suckers which rooted and it has continued to spread in ever widening circles over the centuries. This symbolic growth of Christianity in Karnataka resulted in the new and vibrant life of Karnataka Central Diocese.</p>
                    </div>
                </div>
            </b-card>
           </div>
           <!-- <div>
                <IndexCarousel></IndexCarousel>
           </div> -->
           <!-- <b-card class="p-1 mt-5">
               <div class="row justify-content-center p-3">
                    <b-img src="@/assets/church_2.png" style="width:30px; height:30px;"></b-img>
                    &nbsp;
                    <h5 class="card-title heading-reverents">Reverents</h5>
                    &nbsp;
                    <b-img src="@/assets/church_2.png" style="width:30px; height:30px;"></b-img>
                </div>
           <b-container class="d-flex flex-row">
               <span class="border border-secondary img-hover">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
           </b-container>
           <b-container class="d-flex flex-row">
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>

                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>

                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>

                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>

                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>

                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>

                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
           </b-container>
           <b-container class="d-flex flex-row">
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>

                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
           </b-container>
           <b-container class="d-flex flex-row">
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
           </b-container>
           <b-container class="d-flex flex-row">
               <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
           </b-container>
           <b-container class="d-flex flex-row">
               <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
           </b-container>
           <b-container class="d-flex flex-row">
               <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="border border-secondary img-hover" >
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="border border-secondary img-hover" >
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
           </b-container>
           </b-card> -->
</div>
</template>

<script>
import TopBar from './TopBar'
// import IndexCarousel from './IndexCarousel'
// import axios from 'axios'
import router from '../router'

export default {
  name: 'Index',
  components: {TopBar},
  data () {
    return {
      chDetailsObj: null,
      chName: null,
      form: {
        selDiocese: '',
        selChurchLocation: '',
        selChurchName: ''
      },
      dioceses: [
        { value: '', text: 'Please select Your Diocese' },
        { value: 'KCD', text: 'Karnataka Central Diocese (KCD)' }
      ],
      churchLocation: [
        { value: '', text: 'Please select Your Church Location' },
        { value: 'Bangalore', text: 'Bangalore' },
        { value: 'tumkur', text: 'Tumkur' },
        { value: 'hassan', text: 'Hassan' },
        { value: 'shimoga', text: 'Shimoga' }
      ]
    }
  },
  mounted: function () {
    // this.getChurchDetails()
  },
  methods: {
    // onSubmit (evt) {
    //   let url = 'http://localhost:3600/ch/getch'
    //   console.log('Diocese: ', this.form.selDiocese)
    //   let param = {
    //     selDiocese: this.form.selDiocese,
    //     selChurchLocation: this.form.selChurchLocation,
    //     selChurchName: this.form.selChurchName
    //   }
    //   axios.post(url, param).then((response) => {
    //     // console.log(response)
    //     // var chObj = JSON.stringify(response.data)
    //     var chDetailsObj = response.data
    //     this.chName = chDetailsObj.churchName
    //     console.log('chObject: ', chDetailsObj)
    //     console.log('ch name: ', chDetailsObj.churchName)
    //     console.log('ch Desc: ', chDetailsObj.churchDesc)
    //     console.log('ch Img: ', chDetailsObj.img)
    //     this.$store.commit('SET_CHDETAILS_OBJ', chDetailsObj)
    //     router.push({ name: 'Home' })
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // },
    onSubmit (evt) {
      let searchChParam = {
        selDiocese: this.form.selDiocese,
        selChurchLocation: this.form.selChurchLocation,
        selChurchName: this.form.selChurchName
      }
      this.$store.commit('SET_SEARCH_CHPARAM', searchChParam)
      //  this.$store.commit('SET_SEARCH_CHPARAM', searchChParam)
      //   this.$store.dispatch('GET_CH_DETAILS_DB', searchChParam).then(() => {
      //     console.log('GET_CH_DETAILS_DB dispatched...')
      //   })
      //   router.push({ name: 'Home' })
      router.push({ path: '/x34ysd765kuysdksnst56mb9m' })
    }
    // getChurchDetails: function () {
    //   console.log('Called getChurchDetails method')
    //   let url = 'http://localhost:3600/ch/getch'
    //   let param = {}
    //   axios.post(url, param).then((response) => {
    //     console.log(response)
    //     var chObj = JSON.parse(response.data).results[0]
    //     this.chObj = chObj
    //     console.log('chObj: ', this.chObj)
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // }
  }
}
</script>

<style>
.container-fluid {
    height: auto;
}
.heading {
    font-size: 30px;
    font-family: "Gotham A";
    font-style: normal;
    font-weight: 400;
    padding: 2;
}
.heading-reverents {
    font-size: 33px;
    font-family: 'Times New Roman', Times, serif;
    font-style: initial;
}
.activeHome {
  color: red !important;
}
.wrapper2 {
  max-width: 800px;
  float: none;
  margin: 0 auto;
  height: 150px;
}
.img-hover img {
    -webkit-transition: all .3s ease; /* Safari and Chrome */
    -moz-transition: all .3s ease; /* Firefox */
    -o-transition: all .3s ease; /* IE 9 */
    -ms-transition: all .3s ease; /* Opera */
    transition: all .3s ease;
}
.img-hover img:hover {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform:translateZ(0) scale(7); /* Safari and Chrome */
    -moz-transform:scale(7); /* Firefox */
    -ms-transform:scale(7); /* IE 9 */
    -o-transform:translatZ(0) scale(7); /* Opera */
    transform:translatZ(0) scale(7);
}
.img-hover:hover:after {
    content:"";
    position:absolute;
    top:0;
    left:0;
    z-index:2;
    width:30px;
    height:30px;
}
.grayscale {
    -webkit-filter: brightness(1.10) grayscale(100%) contrast(90%);
    -moz-filter: brightness(1.10) grayscale(100%) contrast(90%);
    filter: brightness(1.10) grayscale(100%);
}
.search_1 {
    height: 13px;
    width: 14px;
}
</style>
