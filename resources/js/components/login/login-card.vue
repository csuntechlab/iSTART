<template>
    <div class="loginCardWrapper">

        <form>
        <div class="form-group">
            <label for="userCredentials">CSUN Credentials</label>
            <small v-if="submitted && !form.userCredentials">Please enter your credentials</small>
            <input v-model="form.userCredentials" type="userCredentials" class="form-control"
            placeholder="Enter credentials"
            required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <small v-if="submitted && !form.password">Please Enter your password</small>
            <input v-model="form.password" type="password" class="form-control" placeholder="Password" required>
        </div>
        <button type="submit" @click.prevent="submitForm" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login-card',
  data () {
    return {
      form: {
        userCredentials: '',
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
        this.verifyUserData(this.form)
      }
    },
    checkFormInputs () {
      if (this.form.userCredentials && this.form.password) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
