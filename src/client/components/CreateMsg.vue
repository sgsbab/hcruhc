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
                        required
                        placeholder="Enter detailed message here..."
                        :rows="3"
                        :max-rows="10">
            </b-form-textarea>
            <br>
            <b-button type="submit" variant="success">Submit</b-button>
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
export default {
  name: 'CreateMsg',
  data () {
    return {
      msgOccasion: 'null',
      msgDesc: '',
      loginAuthToken: null,
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
      let url = 'http://localhost:3600/user/comm'
      let param = {
        authToken: this.loginAuthToken,
        msgOccasion: this.msgOccasion,
        msgDesc: this.msgDesc
      }
      axios.post(url, param).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
      this.msgOccasion = ''
      this.msgDesc = ''
    }
  },
  beforeMount: function () {
    this.loginAuthToken = this.$store.getters.GET_LOGIN_AUTHTOKEN
    console.log('loginAuthToken from store:', this.loginAuthToken)
  }
}
</script>

<style>
</style>
