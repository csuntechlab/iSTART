<template>
    <div class="loginCardWrapper">
        <form>
        <p v-if="correctLoginInfo===false" class="form-required m-0">Login failed. Make sure you have the correct access rights.</p>
        <div class="form-group">
            <label for="username">CSUN Credentials</label>
            <p v-if="submitted && !form.username" class="form-required m-0">Please enter your credentials</p>
            <input v-model="form.username" type="username" class="form-control"
            placeholder="Enter credentials"
            required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <!-- <p v-if="submitted && !form.password" class="form-required m-0">Please Enter your password</p> -->
            <input v-model="form.password" type="password" class="form-control" placeholder="Password" required>
        </div>
        <button type="submit" @click.prevent="submitForm" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'login-card',
  data () {
    return {
      form: {
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
        this.verifyUserData(this.form)
      }
    },
    checkFormInputs () {
      if (this.form.username) {
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
