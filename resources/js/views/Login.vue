<template>
  <div>
    <div class="container fill-height login">
      <div class="row">
        <h1 class="login__title transition-350ms">iSTART</h1>
      </div>
    <div class="login--desktop-card">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
          
          <form class="login__form">
            <h2 class="login__form-title">Login</h2>
            <div class="form-group">
              <label for="username" class="login__form-label">CSUN Username or Email</label>
              <input v-model="userInfoForm.username" type="username" class="form-control login__form-input"
              placeholder="CSUN Username or Email"
              required>
            </div>
            <div v-if="submitted && !userInfoForm.username" class="invalid-feedback ">Please enter your credentials</div>
            <div class="form-group">
              <label for="password" class="login__form-label">Password</label>
              <input v-model="userInfoForm.password" type="password" class="form-control login__form-input" placeholder="Password" required>
            </div>
            <!-- <div v-if="submitted && !userInfoForm.password" class="invalid-feedback">Please Enter your password</div> -->
            <div v-if="correctLoginInfo===false" class="invalid-feedback mt-0 mb-2 text-center">Login failed. Make sure you have the correct access rights.</div>
            <div class="form-group text-center">
              <button type="submit" @click.prevent="submitForm" class="btn btn-primary btn-lg">Sign In</button>
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
      this.submitted = true
      if (this.checkFormInputs()) {
        this.verifyUserData(this.userInfoForm)
      }
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
      'correctLoginInfo'
    ])
  }
}
</script>
