<template>
        <div class="container-fluid">
             <b-card class="mt-5">
                 <div class="p-1">
                    <b-img src="@/assets/church_1.png" alt></b-img>
                    <!-- <h3 class="text-center">Welcome to St. Peter's Church</h3> -->
                    <h3 class="text-center">Welcome to {{ chName }}</h3>
                    <div class="text-center">God loves us all</div>
                    <p class="p-1"></p>
                  </div>
                <div class="row">
                    <div class="col-sm-8">
                        <p class="text-left" style="font-size: 19px; font-family: Open Sans; font-style: normal;">{{ chDesc }}</p>
                    </div>
                    <div class="col-sm-4">
                        <b-img class="p-1" slot="aside" src="@/assets/CSI_photo.jpg" width="400" alt="placeholder" />
                        <!-- <b-img class="p-1" slot="aside" v-bind:src="getChImg()" width="400" alt="placeholder" /> -->
                        <!-- <b-img class="p-1" slot="aside" width="400" :src="getChImg"></b-img> -->
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
      console.log('window.sessionStorage.getItem(chInfo): ', window.sessionStorage.getItem('chInfo').chDetailsObj)
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
        // var getChDetailsObjStore = window.sessionStorage.getItem('chInfo')
        // this.chName = getChDetailsObjStore.chNameStore
        // this.chDesc = getChDetailsObjStore.chDescStore
        // this.chImg = getChDetailsObjStore.chImgStore
        // console.log('chInfo SessionStorage: ', getChDetailsObjStore)

        // console.log('ch name: ', chDetailsObj.churchName)
        // console.log('ch Desc: ', chDetailsObj.churchDesc)
        // console.log('ch Img: ', chDetailsObj.img)
        }).catch((error) => {
          console.log(error)
        })
      } else {
        // var getChDetailsObjStore = window.sessionStorage.getItem('chInfo')
        var getChDetailsObjStore = JSON.parse(window.sessionStorage.getItem('chInfo'))
        console.log('getChDetailsObjStore chDetailsObj 2: ', getChDetailsObjStore.chDetailsObj.chNameStore)
        this.chName = getChDetailsObjStore.chDetailsObj.chNameStore
        this.chDesc = getChDetailsObjStore.chDetailsObj.chDescStore
        this.chImg = getChDetailsObjStore.chDetailsObj.chImgStore
        console.log('chInfo SessionStorage: ', getChDetailsObjStore)
      }

      // let searchChParamObj = this.$store.getters.GET_SEARCH_CHPARAM
      // console.log('Ab getters PARAM payload: ', searchChParamObj)
      // var d = $.Deferred()
      // this.$store.dispatch('GET_CH_DETAILS_DB', searchChParamObj).then(() => {
      //   console.log('GET_CH_DETAILS_DB dispatched...')
      // })
      // setTimeout(function () {
      //   this.$store.dispatch('GET_CH_DETAILS_DB', searchChParamObj)
      //   this.chDetailsObj = this.$store.getters.GET_CH_DETAILS_OBJ
      //   d.resolve(this.chDetailsObj)
      // }, 2000)
      // return d.promise()
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

</style>
