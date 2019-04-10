<template>
  <div>
    <div class="badParticipants" v-if="categorizedParticipants.bad !== undefined">
      <h2>The following emails were not found: </h2>
      <table class="table table-striped" >
        <thead>
          <tr>
            <th scope="col">email</th>
            <th scope="col">participant ID</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="participant.participant_id" v-for="participant in categorizedParticipants.bad">
            <td>{{participant.email}}</td>
            <td>{{participant.participant_id}}</td>
          </tr>
        </tbody>    
      </table>
    </div>
    <div class="goodParticipants" v-if="categorizedParticipants.good !== undefined">
      <h2> The following emails can be submitted: </h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">email</th>
            <th scope="col">participant ID</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="participant.participant_id" v-for="participant in categorizedParticipants.good">
            <td>{{participant.email}}</td>
            <td>{{participant.participant_id}}</td>            
          </tr>
        </tbody>    
      </table>
      <h2>Would you like submit the good participants?</h2>

      <button class="btn btn-danger">No</button>
      <button class="btn btn-primary">Yes</button>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'Participants',
  computed: {
    ...mapGetters([
      'categorizedParticipants'
    ])
  },
  methods: {
    submitGoodParticipants() {
      console.log(this.categorizedParticipants.good)
      this.$store.dispatch.submitGoodParticipants(this.categorizedParticipants.good)
    }
  }
}
</script>
