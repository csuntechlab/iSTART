<template>
    <div class="login__form-wrapper">
        <form>
        <p v-if="correctLoginInfo===false" class="form-required m-0">Login failed. Make sure you have the correct access rights.</p>
        <div class="form-group">
            <label for="username">CSUN Credentials</label>
            <p v-if="submitted && !userInfoForm.username" class="form-required m-0">Please enter your credentials</p>
            <input v-model="userInfoForm.username" type="username" class="form-control"
            placeholder="Enter credentials"
            required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <!-- <p v-if="submitted && !userInfoForm.password" class="form-required m-0">Please Enter your password</p> -->
            <input v-model="userInfoForm.password" type="password" class="form-control" placeholder="Password" required>
        </div>
        <button type="submit" @click.prevent="submitForm" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'login-form',
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
