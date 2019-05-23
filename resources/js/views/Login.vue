<template>
  <div>
    <div class="container container--desktop login">
      <div class="row">
        <h1 class="login__title transition-350ms">iSTART</h1>
      </div>
      <div>
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-6">
            <form class="loginForm">
              <loading-progress
                class="loading-form"
                v-if="loginIsLoading"
                :progress=".30"
                :indeterminate="true"
                :size="70"
              />
              <div v-bind:class="{'loginForm__loading':loginIsLoading}">
                <h2 class="loginForm__title">Login</h2>
                <div class="form-group">
                  <label for="username" class="loginForm__label">CSUN Username or Email</label>
                  <input v-model="userInfoForm.username" type="username" class="form-control form-control-lg"
                  placeholder="CSUN Username or Email" :disabled="loginIsLoading ? true: false"
                  required>
                </div>
                <div v-if="submitted && !userInfoForm.username" class="invalid-feedback ">Please enter your credentials</div>
                <div class="form-group">
                  <label for="password" class="loginForm__label">Password</label>
                  <input v-model="userInfoForm.password" type="password" class=" form-control form-control-lg" placeholder="Password"  :disabled="loginIsLoading ? true: false" required>
                </div>
                <!-- <div v-if="submitted && !userInfoForm.password" class="invalid-feedback">Please Enter your password</div> -->
                <div v-if="correctLoginInfo===false" class="invalid-feedback mt-0 mb-2 text-center">Login failed. Make sure you have the correct access rights.</div>
                <div class="form-group text-center">
                  <button type="submit" @click.prevent="submitForm" class="btn btn-primary btn-lg" :disabled="loginIsLoading">Sign In</button>
                  <!-- please leave comment below for development purposes -->
                  <router-link to="/module">Modules</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      userInfoForm: {
        username: '',
        password: ''
      },
      submitted: false
    }
  },

  methods: {
    ...mapActions([
      'verifyUserData'
    ]),

    submitForm () {
      let isCookiesPolicyAccepted = window.localStorage.isCookiesPolicyAccepted
      if (isCookiesPolicyAccepted && this.checkFormInputs()) {
        this.verifyUserData(this.userInfoForm)
      }

      this.submitted = true
    },

    checkFormInputs () {
      if (this.userInfoForm.username) {
        return true
      } else {
        return false
      }
    }
  },

  computed: {
    ...mapGetters([
      'correctLoginInfo',
      'loginIsLoading'
    ])
  }
}
</script>
