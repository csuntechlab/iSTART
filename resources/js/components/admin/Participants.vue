<template>
  <div>
    <div class="goodParticipants" v-if="categorizedParticipants.good !== undefined">
      <h2> Good to go</h2>
      {{categorizedParticipants}}
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">email</th>
            <th scope="col">participant ID</th>
            <th scope="col">user ID</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="participant.participant_id" v-for="participant in categorizedParticipants.good">
            <td>{{participant.email}}</td>
            <td>{{participant.participant_id}}</td>
            <td>{{participant.user_id}}</td>
          </tr>
        </tbody>    
      </table>
    </div>
    <div class="badParticipants" v-if="categorizedParticipants.bad !== undefined">
      <h2>Bad to go</h2>
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
  }
}
</script>
