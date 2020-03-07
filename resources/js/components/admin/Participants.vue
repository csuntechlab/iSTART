<template>
  <div class="participants-container">
    <section class="participants__bad" v-if="categorizedParticipants.bad !== undefined">
      <h1 class="participants__header">The following <i>participant(s)</i> email cannot be added:</h1>
      <table class="table table-striped" >
        <thead>
          <tr>
            <th class="participants__table-header" scope="col">
              <span class="participants__table-description">Duplicate emails or emails not found in the system</span>
              <a href="#" @click="toggleBadParticipantsList">
                <i id="badParticipantChevron" class="fas fa-chevron-down"></i>
              </a>
            </th>
          </tr>
        </thead>
        <tbody id="badParticipants" class="participants__table-items hidden">
          <tr :key="participant.participant_id" v-for="participant in categorizedParticipants.bad">
            <td>{{participant.email}}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="participants__good" v-if="categorizedParticipants.good !== undefined">
      <h1 class="participants__header">The following <i>participant(s)</i> emails can be submitted:</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="participants__table-header" scope="col">
              <span class="participants__table-description">Emails that can be submitted</span>
              <a href="#" @click="toggleGoodParticipantsList">
                <i id="goodParticipantChevron" class="fas fa-chevron-up"></i>
              </a>
            </th>
          </tr>
        </thead>
        <tbody id="goodParticipants" class="participants__table-items">
          <tr :key="participant.participant_id" v-for="participant in categorizedParticipants.good">
            <td>{{participant.email}}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <div>
      <h1 v-if="participantsWereSubmitted === true" class="participants__header"><b>Participants were submitted!</b></h1>
    </div>

    <section class="participants__submission">
      <button class="btn participants__button participants__button-return" @click="enableSubmit(); returnToImport();">Return back to Import</button>
      <button v-if="participantsWereSubmitted !== true" :class="isSubmissionButtonEnabled ? 'btn button-primary participants__button' : 'hide'" @click="disableSubmit(); submitGoodParticipants();">Submit Good Participants</button>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Participants',
  computed: {
    ...mapGetters([
      'participantsWereSubmitted',
      'isSubmissionButtonEnabled',
      'categorizedParticipants'
    ])
  },

  mounted () {
    this.enableSubmit()
  },

  methods: {
    returnToImport () {
      this.$store.dispatch('hideParticipantList')
    },

    enableSubmit () {
      this.$store.commit('TOGGLE_SUBMISSION_BUTTON', true)
    },

    disableSubmit () {
      this.$store.commit('TOGGLE_SUBMISSION_BUTTON', false)
    },

    submitGoodParticipants () {
      this.$store.dispatch('submitGoodParticipants', this.categorizedParticipants.good)
    },

    participantsWillNotBeSubmitted () {
      this.$store.commit('PARTICIPANTS_WERE_SUBMITTED', false)
    },

    toggleBadParticipantsList () {
      let badParticipantlist = document.getElementById('badParticipants').classList
      let chevron = document.getElementById('badParticipantChevron').classList

      if (badParticipantlist.contains('hidden')) {
        badParticipantlist.remove('hidden')
        chevron.replace('fa-chevron-down', 'fa-chevron-up')
      } else {
        badParticipantlist.add('hidden')
        chevron.replace('fa-chevron-up', 'fa-chevron-down')
      }
    },

    toggleGoodParticipantsList () {
      let goodParticipantList = document.getElementById('goodParticipants').classList
      let chevron = document.getElementById('goodParticipantChevron').classList

      if (goodParticipantList.contains('hidden')) {
        goodParticipantList.remove('hidden')
        chevron.replace('fa-chevron-down', 'fa-chevron-up')
      } else {
        goodParticipantList.add('hidden')
        chevron.replace('fa-chevron-up', 'fa-chevron-down')
      }
    }
  }
}
</script>
