<template>
  <div id="cardLogin" class="container-fluid">
    <div class="row" align="center">
      <div class="col-sm-12">
        <b-card class="mb-2" title="Login" img-src="@/assets/communicationLogin.jpg" img-alt="Image" img-top style="max-width: 23rem;">
          <div>
            <div class="alert alert-danger" role="alert" v-if="error != null" style="height=20;">
              <p v-html="error"></p>
            </div>
            <b-form @submit.prevent="onSubmit" v-if="show">
            <b-form-group id="inputGroupLoginName" label-for="InputLoginName">
              <p style="text-align:left">User Name:</p>
              <b-form-input id="InputLoginName" class="form-control" type="text" v-model="form.loginName" required placeholder="Enter your signed up email id"></b-form-input>
            </b-form-group>
            <b-form-group id="inputGroupLoginPassword" label-for="InputLoginPassword">
              <p style="text-align:left">Password:</p>
              <b-form-input id="InputLoginPassword" class="form-control" type="password" v-model="form.loginPassword" required placeholder="Enter password"></b-form-input>
            </b-form-group>
            <!-- <router-link to="/events"> -->
              <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
            <!-- </router-link> -->
            <b-button class="btn" type="submit" variant="primary">Login</b-button>
            <b-button class="btn" type="clear" variant="success" @click="onClear">Clear</b-button>
            </b-form>
          </div>
        </b-card>
      </div>
    </div>
    <div class="row vbottom"></div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'Communication',
  data () {
    return {
      show: true,
      error: null,
      axios_url: null,
      form: {
        loginName: '',
        loginPassword: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      // evt.preventDefault()
      // if (event) event.preventDefault()
      if (this.axios_url === null) {
        this.axios_url = process.env.AXIOS_BASE_URL
      }
      let url = this.axios_url.concat('/user/vCred')
      let param = {
        loginName: this.form.loginName,
        loginPassword: this.form.loginPassword
      }
      axios.post(url, param).then((response) => {
        console.log('Communication Login response data: ', response)
        // var authResp = response.data
        if (response.status === 200) {
          if (response.data != null) {
            this.$store.commit('SET_LOGIN_AUTHTOKEN', response.data)
            router.push({ path: '/khhsn5hfbdj2j6jgski86gvnhc' })
          } else {
            this.error = 'Authentication failed.'
          }
        }
      }).catch((error) => {
        console.log('Communication error : ', error.response.data)
        this.error = error.response.data
      })
    },
    onClear (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.loginName = ''
      this.form.loginPassword = ''
      this.error = null
    }
  },
  mounted: function () {
    this.axios_url = process.env.AXIOS_BASE_URL
    console.log('axios_url: ', this.axios_url)
  }
}
</script>

<style>
</style>
