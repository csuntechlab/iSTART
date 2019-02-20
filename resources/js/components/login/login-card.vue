<template>
    <div>
        <form>
        <div class="form-group">
            <label for="email">CSUN email</label>
            <small v-if="submitted && !form.email">Please Enter your Email</small>
            <small v-if="submitted && !validEmail"> Please enter a <strong>Valid</strong> email</small>
            <input v-model="form.email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email" required>
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
export default {
  name: 'login-card',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      submitted: false,
      validEmail: true
    }
  },
  methods: {
    submitForm () {
      this.submitted = true
      if (this.checkFormInputs()) {
        console.log('inputs are good')
      } else {
        console.log('inputs are not good')
      }
    },
    checkFormInputs () {
      this.validEmailCheck()
      if (this.validEmail && this.form.password) {
        return true
      } else {
        return false
      }
    },
    validEmailCheck () {
      this.validEmail = this.form.email.includes('@')
    }
  }
}
</script>
