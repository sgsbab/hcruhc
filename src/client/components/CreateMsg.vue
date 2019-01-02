<template>
<div align="center">
  <div v-if="loginAuthToken != null">
    <b-card title="Send Message"
          img-src="https://picsum.photos/600/300/?random"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 35rem;"
          class="mb-2">
          <div>
            <b-form @submit.prevent="onSubmit">
            <b-form-select v-model="msgOccasion" :options="options" class="mb-3" required/>
            <b-form-textarea id="textarea1"
                        v-model="msgDesc"
                        placeholder="Enter detailed message here..."
                        :rows="3"
                        required
                        :max-rows="10">
            </b-form-textarea>
            <br>
            <b-button type="submit" variant="success">Submit</b-button>
            <b-button type="logout" variant="danger" @click="onLogout">Logout</b-button>
            </b-form>
          </div>
    </b-card>
  </div>
  <div v-else>
      <h3>*** PLEASE LOGIN TO SEND MESSAGE ***</h3>
      <h3>***** Thank You *****</h3>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'CreateMsg',
  data () {
    return {
      msgOccasion: 'null',
      msgDesc: null,
      loginAuthToken: null,
      axios_url: null,
      fieldRequired: true,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'Birthday Wishes', text: 'Birthday Wishes' },
        { value: 'Anniversary Wishes', text: 'Anniversary Wishes' },
        { value: 'Engagement Wishes', text: 'Engagement Wishes' },
        { value: 'Marriage Wishes', text: 'Marriage Wishes' },
        { value: 'Condolence', text: 'Condolence' }
      ]
    }
  },
  methods: {
    onSubmit (event) {
      // event.preventDefault()
      // alert('hello')
      // if (event) event.preventDefault()
      console.log('Message Occasion: ', this.msgOccasion)
      console.log('Message Description: ', this.msgDesc)
      if (this.axios_url === null) {
        this.axios_url = process.env.AXIOS_BASE_URL
      }
      let url = this.axios_url.concat('/user/comm')
      var hearders = {
        'Content-Type': 'application/json',
        'Authorization': this.loginAuthToken
      }
      let param = {
        // authToken: this.loginAuthToken,
        msgOccasion: this.msgOccasion,
        msgDesc: this.msgDesc
      }
      axios.post(url, param, {hearders: hearders}).then((response) => {
        console.log('Response: ', response.status)
      }).catch((error) => {
        console.log(error)
      })
      this.msgOccasion = ''
      this.msgDesc = ''
    },
    onLogout (event) {
      this.$store.commit('SET_LOGIN_AUTHTOKEN', null)
      router.push({ path: '/x34ysd765kuysdksnst56mb9m' })
    }
  },
  beforeMount: function () {
    this.loginAuthToken = this.$store.getters.GET_LOGIN_AUTHTOKEN
    console.log('loginAuthToken from store:', this.loginAuthToken)
  },
  mounted: function () {
    this.axios_url = process.env.AXIOS_BASE_URL
    console.log('axios_url: ', this.axios_url)
  }
}
</script>

<style>
</style>
