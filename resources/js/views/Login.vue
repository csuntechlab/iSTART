<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-12 align-self-center">
          <div class="row">
            <div class="col-12 text-center py-5">
              <img class="login__logo" src="/images/logos/logo_color.svg" alt="iStart Logo"/>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-lg-4 px-5 px-md-3">
              <form class="loginForm">
                <loading-progress
                  class="loading-form"
                  v-if="loginIsLoading"
                  :progress=".30"
                  :indeterminate="true"
                  :size="70"
                />
                <div v-bind:class="{'loginForm__loading':loginIsLoading}">
                  <div class="form-group">
                    <label for="username" class="loginForm__label">CSUN Username or Email</label>
                    <input v-model="userInfoForm.username" type="username" class="form-control"
                    placeholder="CSUN Username or Email" :disabled="loginIsLoading ? true: false"
                    required>
                  </div>
                  <div v-if="submitted && !userInfoForm.username" class="invalid-feedback ">Please enter your credentials</div>
                  <div class="form-group">
                    <label for="password" class="loginForm__label">Password</label>
                    <input v-model="userInfoForm.password" type="password" class=" form-control" placeholder="Password"  :disabled="loginIsLoading ? true: false" required>
                  </div>
                  <!-- <div v-if="submitted && !userInfoForm.password" class="invalid-feedback">Please Enter your password</div> -->
                  <div v-if="correctLoginInfo===false" class="invalid-feedback mt-0 mb-2 text-center">Login failed. Make sure you have the correct access rights.</div>
                  <div class="form-group text-center pt-5">
                    <button type="submit" @click.prevent="submitForm" class="btn button-primary btn-lg" :disabled="loginIsLoading">Sign In</button>
                  </div>
                </div>
              </form>
            </div>
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
