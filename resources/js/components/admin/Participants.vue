<template>
  <div>
    <div class="participants__bad" v-if="categorizedParticipants.bad !== undefined">
      <h2>The following emails were not found: </h2>
      <table class="table table-striped" >
        <thead>
          <tr>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="participant.participant_id" v-for="participant in categorizedParticipants.bad">
            <td>{{participant.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="participants__good" v-if="categorizedParticipants.good !== undefined">
      <h2> The following emails can be submitted: </h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="participant.participant_id" v-for="participant in categorizedParticipants.good">
            <td>{{participant.email}}</td>
          </tr>
        </tbody>
      </table>
      <h2>Would you like submit the good participants?</h2>
      <button class="btn btn-danger" @click="participantsWillNotBeSubmitted">No</button>
      <button class="btn button-primary" @click="submitGoodParticipants">Yes</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Participants',
  computed: {
    ...mapGetters([
      'categorizedParticipants'
    ])
  },
  methods: {
    submitGoodParticipants () {
      this.$store.dispatch('submitGoodParticipants', this.categorizedParticipants.good)
    },
    participantsWillNotBeSubmitted () {
      this.$store.commit('PARTICIPANTS_WERE_SUBMITTED', false)
    }
  }
}
</script>
