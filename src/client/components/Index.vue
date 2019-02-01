<template>
<div class="container">
        <TopBar></TopBar>
            <div>
                <p class="p-1"></p>
                <b-navbar variant="light" type="light" toggleable="md" style="font-weight: 550;">
                    <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
                    <b-navbar-brand>
                        <!--<span>Believe</span> -->
                        <p class="p-0"></p>
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
 <div class="ml-5 justify-content-center">
     <b-form @submit.prevent="onSubmit">
        <div class="row">
                <div class="form-group mr-5">
                    <b-form-select id="chDio" v-model="form.selDiocese" @change.native="getLocation" :options="dioceses" class="form-control-sm">
                      <b-tooltip v-if="errorChDio != null" target="chDio" show placement="bottom">{{ errorChDio }}</b-tooltip>
                    </b-form-select>
                </div>
                <div class="form-group mr-5">
                    <b-form-select id="chLoc" v-model="form.selChurchLocation" :options="churchLocation" @change.native="getChurchName" class="form-control-sm mr-4">
                      <b-tooltip v-if="errorChLoc != null" target="chLoc" show placement="bottom">{{ errorChLoc }}</b-tooltip>
                    </b-form-select>
                </div>
                <div class="form-group mr-5 mt-1">
                    <!-- <b-form-input v-model="form.selChurchName" type="text" autocomplete="churchName" style="font-size: 14px" placeholder="Enter Your Church Name" class="form-control-md mr-5" required/> -->
                    <vue-autosuggest id= "chNmAutoComp" :suggestions="filteredOptions" @selected="onSelected" :limit="3" :input-props = "{data:'autosuggest__input', onInputChange: this.onInputChange, placeholder:'Enter Your Church Name'}" class="form-control-md mr-5"></vue-autosuggest>
                    <b-tooltip v-if="errorChNm != null" target="chNmAutoComp" show placement="bottom">{{ errorChNm }}</b-tooltip>
                </div>
                <div class="form-group mr-5">
                    <b-button class="btn" type="submit" variant="outline-info">Search</b-button>
                    <!-- <input type="button" value="Send Request" > -->
                </div>
        </div>
     </b-form>
 </div>
</b-card>
            <div>
                <b-card class="text-center p-2 mt-3 bg-light">
                    <p class="card-text heading">CHURCH OF SOUTH INDIA</p>
                </b-card>
                <b-carousel class="mt-3 rounded border border-info" id="carousel" :interval="4000">
                    <b-carousel-slide img-src="@/assets/home_slider_background1.jpg">
                        <!-- <div class="transbox">
                        <p class="church_name">St. Peter's Church</p>
                        <p class="church_place">Bangalore</p>
                        <p class="church_slogan">"A candle loses nothing by lighting another candle."</p>
                        </div> -->
                    </b-carousel-slide>

                    <b-carousel-slide img-src="@/assets/home_slider_background2.jpg">
                        <!-- <div class="transbox">
                        <p class="church_name">St. Peter's Church</p>
                        <p class="church_place">Bangalore</p>
                        <p class="church_slogan">"A mind fixed on God has no room for evil thoughts."</p>
                        </div> -->
                    </b-carousel-slide>

                    <b-carousel-slide img-src="@/assets/home_slider_background3.jpg">
                        <!-- <div class="transbox">
                        <p class="church_name">St. Peter's Church</p>
                        <p class="church_place">Bangalore</p>
                        <p class="church_slogan">"Every saint has a past– every sinner has a future!"</p>
                        </div> -->
                    </b-carousel-slide>
                </b-carousel>
            </div>
            <div>
             <b-card class="p-2 mt-4"  bg-variant="light">
                 <div class="p-3">
                    <b-img src="@/assets/church_1.png" alt></b-img>
                    <h3 class="text-center">Welcome to Church of South India</h3>
                    <span class="text-center" style="font-family: Gotham A; font-style: italic">God loves us all</span>
                    <p></p>
                    <p class="p-2"></p>
                  </div>
                <div class="row">
                    <div class="col-sm-8">
                        <p class="text-justify" style="font-size: 18px; font-family: Montserrat', sans-serif; font-style: normal;">In Luke is recounted the story that Peter caught so large an amount of fish that he fell down before the feet of Jesus and was told by the Lord, Do not be afraid; from now on you will be catching men. Jesus also gave Simon a new name: Cephas, or the rock. Becoming a disciple of Jesus, Peter acknowledged him as …the Messiah, the son of the living God. Christ responded by saying: …you are Peter and upon this rock I will build my church… He added: I will give you the keys of the kingdom of heaven. Whatever you bind on earth shall be bound in heaven; and whatever you loose on earth shall be loosed in heaven.</p>
                    </div>
                    <div class="col-sm-4 d-none d-lg-block">
                        <b-img class="p-1" slot="aside" src="@/assets/CSI_photo.jpg" width="350" alt="placeholder" />
                    </div>
                </div>
           </b-card>
           </div>
           <div>
                <b-card  class="p-2 mt-3" bg-variant="light">
                    <div class="">
                    <b-img src="@/assets/church_7.png" alt></b-img>
                    <h3 class="text-center">Bishop Rt. Rev. Prasanna Kumar Samuel</h3>
                    <span class="text-center" style="font-family: Gotham A; font-style: italic">God loves us all</span>
                    <p></p>
                    <p class="p-2"></p>
                  </div>
                <div class="row">
                    <div class="col-sm-4 d-none d-lg-block">
                        <b-img class="p-1" slot="aside" src="@/assets/CSI_bishop.jpg" width="350" alt="placeholder" />
                    </div>
                    <div class="col-sm-8">
                        <p class="text-justify" style="font-size: 18px; font-family: Montserrat', sans-serif; font-style: normal;">Applauding and acknowledging the formation and growth of Karnataka Central Diocese, Bishop Gill avers, About thirty kilometres from Bangalore, just off the highway to Mysore, there is a magnificent banyan tree which covers several acres of land. No doubt that tree began its life with a single seed and first grew into a tree with a single trunk. In course of time its branches sent down suckers which rooted and it has continued to spread in ever widening circles over the centuries. This symbolic growth of Christianity in Karnataka resulted in the new and vibrant life of Karnataka Central Diocese.</p>
                    </div>
                </div>
            </b-card>
           </div>
           <b-card class="p-1 mt-3" style="background-color: rgb(0,0,0);">
               <div class="row justify-content-center p-3">
                    <b-img src="@/assets/church_2.png" style="width:40px; height:40px;"></b-img>
                    &nbsp;
                    <h5 class="card-title text-light heading-reverents">Reverents</h5>
                    &nbsp;
                    <b-img src="@/assets/church_2.png" style="width:40px; height:40px;"></b-img>
                </div>
           <b-container class="d-flex flex-row">
               <span class="rounded border-secondary img-hover p-1">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
           </b-container>
           <b-container class="d-flex flex-row">
               <span class="rounded border-secondary img-hover p-1">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
           </b-container>
           <b-container class="d-flex flex-row">
               <span class="rounded border-secondary img-hover p-1">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                           <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
               </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
                <span class="rounded border-secondary img-hover p-1">
                                        <b-img thumbnail fluid src="https://picsum.photos/600/300/?random" />
                </span>
           </b-container>
           </b-card>
</div>
</template>

<script>
import TopBar from './TopBar'
// import IndexCarousel from './IndexCarousel'
import axios from 'axios'
import router from '../router'

export default {
  name: 'Index',
  components: { TopBar },
  data () {
    return {
      chDetailsObj: null,
      chName: null,
      axios_url: null,
      errorChDio: null,
      errorChLoc: null,
      errorChNm: null,
      form: {
        selDiocese: null,
        selChurchLocation: null,
        selChurchName: null
      },
      dioceses: [ { value: null, text: 'Select Your Dioceses' } ],
      churchLocation: [ { value: null, text: 'Select Your Church Location' } ],
      filteredOptions: [],
      limit: 3,
      churchName: []
    }
  },
  mounted: function () {
    var tmpDioceses = []
    var position = null
    if (this.axios_url === null) {
      this.axios_url = process.env.AXIOS_BASE_URL
    }
    console.log('this.axios_url:', this.axios_url)
    let url = this.axios_url.concat('/ch/gach')
    axios.get(url).then((response) => {
      console.log('All Church data:', response.data)
      if (response.data != null) {
        this.chDetailsObj = response.data
        for (var i = 0; i < this.chDetailsObj.length; i++) {
          // console.log('churchName:', response.data[i].churchName)
        //   console.log('district:', chdata.district)
          // this.dioceses.push(this.chDetailsObj[i].diocese) { value: this.chDetailsObj[i].diocese, text: this.chDetailsObj[i].diocese }
          console.log('Church id:', this.chDetailsObj[i]._id)
          tmpDioceses = this.chDetailsObj[i].diocese
          position = this.dioceses.indexOf(tmpDioceses)
          if (!~position) {
            this.dioceses.push(tmpDioceses)
            console.log('dioceses push:', tmpDioceses)
          }
        }
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    getLocation (evt) {
      var position = null
      console.log('selected dioceses: ', evt.target.value)
      this.form.selDiocese = evt.target.value
      for (var i = 0; i < this.chDetailsObj.length; i++) {
        if (this.chDetailsObj[i].diocese === this.form.selDiocese) {
          var tmpLocation = this.chDetailsObj[i].district
          position = this.churchLocation.indexOf(tmpLocation)
          if (!~position) {
            this.churchLocation.push(tmpLocation)
          }
        }
      }
    },
    getChurchName (evt) {
      // var position = null
      console.log('selected Location: ' + evt.target.value + ' selected dioceses: ' + this.form.selDiocese)
      this.form.selChurchLocation = evt.target.value
      for (var i = 0; i < this.chDetailsObj.length; i++) {
        if (this.chDetailsObj[i].diocese === this.form.selDiocese && this.chDetailsObj[i].district === this.form.selChurchLocation) {
          var tmpchName = this.chDetailsObj[i].churchName
          this.churchName.push(tmpchName)
        }
      }
      console.log('Selected Church Name: ', this.churchName)
    },
    onInputChange (text, oldText) {
      if (text === null) {
        return
      }
      // Full customizability over filtering
      const filteredData = this.churchName.filter(item => {
        return item.toLowerCase().indexOf(text.toLowerCase()) > -1
      }).slice(0, this.limit)
      // Store data in one property, and filtered in another
      this.filteredOptions = [{ data: filteredData }]
    },
    onSelected (item) {
      console.log('onSelected: ', item.item)
      this.form.selChurchName = item.item
    },
    onSubmit (evt) {
      // evt.preventDefault()
      if (this.form.selDiocese === null) {
        this.errorChDio = 'Enter Your Diocese'
        return
      } else if (this.form.selChurchLocation === null) {
        this.errorChLoc = 'Enter Your Church Location'
        return
      } else if (this.form.selChurchName === null) {
        this.errorChNm = 'Enter Your Church Name'
        return
      }
      let searchChParam = {
        selDiocese: this.form.selDiocese,
        selChurchLocation: this.form.selChurchLocation,
        selChurchName: this.form.selChurchName
      }
      console.log('selDiocese: ', this.form.selDiocese)
      console.log('selChurchLocation: ', this.form.selChurchLocation)
      console.log('selChurchName: ', this.form.selChurchName)
      this.$store.commit('SET_SEARCH_CHPARAM', searchChParam)
      //  this.$store.commit('SET_SEARCH_CHPARAM', searchChParam)
      //   this.$store.dispatch('GET_CH_DETAILS_DB', searchChParam).then(() => {
      //     console.log('GET_CH_DETAILS_DB dispatched...')
      //   })
      //   router.push({ name: 'Home' })
      router.push({ path: '/x34ysd765kuysdksnst56mb9m' })
    }
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
    -webkit-transform:translateZ(0) scale(3); /* Safari and Chrome */
    -moz-transform:scale(3); /* Firefox */
    -ms-transform:scale(3); /* IE 9 */
    -o-transform:translatZ(0) scale(3); /* Opera */
    transform:translatZ(0) scale(3);
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
/* get church name text component */
#autosuggest__input {
    outline: none;
    position: relative;
    display: block;
    font-family: monospace;
    font-size: 18px;
    border: 2px solid #616161;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
#autosuggest__input.autosuggest__input-open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.autosuggest__results-container {
    position: relative;
    width: 100%;
}
.autosuggest__results {
    font-weight: 100;
    margin: 0;
    position: absolute;
    z-index: 10000001;
    width: 100%;
    border: 1px solid #e0e0e0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: white;
    padding: 0px;
    overflow: scroll;
    max-height: 200px;
}
.autosuggest__results ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}
.autosuggest__results .autosuggest__results_item {
    cursor: pointer;
    padding: 15px;
}
#autosuggest ul:nth-child(1) > .autosuggest__results_title {
    border-top: none;
}
.autosuggest__results .autosuggest__results_title {
    color: gray;
    font-size: 11px;
    margin-left: 0;
    padding: 15px 13px 5px;
    border-top: 1px solid lightgray;
}
.autosuggest__results .autosuggest__results_item:active,
.autosuggest__results .autosuggest__results_item:hover,
.autosuggest__results .autosuggest__results_item:focus,
.autosuggest__results .autosuggest__results_item.autosuggest__results_item-highlighted {
    background-color: #ddd;
}
.b-tooltip {
  .tooltip-inner {
    background-color: $primaryColour !important;
  }
}
</style>
