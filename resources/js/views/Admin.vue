<template>
  <div class="admin container">
    <div class="admin-wrap">
      <nav class="admin__nav">
        <img class="admin__logo" src="images/logos/logo_white.svg" alt="iStart Logo"/>
        <div>
          <router-link to="/demo" class="admin__link">
            Demo Mode
          </router-link>
          <router-link to="/logout" class="admin__link">
            Logout
          </router-link>
        </div>
      </nav>
      <main>
        <section v-if="!isParticipantsListShown" class="admin__container">
          <h1>Import Participants</h1>
          <p>Upload file to verify and add participant emails to the system.</p>
          <div class="admin__upload">
            <i class="admin__file-icon fas fa-file-excel"></i>
            <label class="admin__upload-label" for="file">File</label>
            <input id="file" class="admin__upload-file" type="file" ref="file" @change="handleFileChange">
            <span v-if="incorrectFileType" class="admin__upload-description--invalid">*Please upload an excel file</span>
            <span v-else-if="!incorrectFileType && !initialFileUpload" class="admin__upload-description">{{ fileName }}</span>
            <span v-else class="admin__upload-description">Upload an excel file</span>
          </div>
          <p>
            <b>Accepted File Formats</b>
            .xls & .xlsx
          </p>
          <button v-if="!incorrectFileType && !initialFileUpload" :class="(isSubmissionButtonEnabled ? 'admin__button btn button-primary btn-lg' : 'hide')" @click="disableSubmit();" @click.prevent="submitFile">Submit</button>
        </section>
        <section v-if="isParticipantsListShown">
          <participants/>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'
import { idleTimeout } from './../mixins/idleTimeout'
import XLSX from 'xlsx'
import Participants from './../components/admin/Participants.vue'

export default {
  name: 'admin',
  mixins: [
    changeRouteTitle,
    idleTimeout
  ],

  data () {
    return {
      participants: [],
      fileName: null,
      initialFileUpload: true,
      incorrectFileType: false
    }
  },

  components: {
    Participants
  },

  computed: {
    ...mapGetters([
      'isParticipantsListShown',
      'isSubmissionButtonEnabled'
    ])
  },

  methods: {
    handleFileChange (event) {
      var files = event.target.files
      if (files && files[0]) {
        this.readFile(files[0])
      }
    },

    enableSubmit () {
      this.$store.commit('TOGGLE_SUBMISSION_BUTTON', true)
    },

    disableSubmit () {
      this.$store.commit('TOGGLE_SUBMISSION_BUTTON', false)
    },

    submitFile (event) {
      event.stopPropagation()
      event.preventDefault()
      this.$store.commit('PARTICIPANTS_WERE_SUBMITTED', null)
      this.$store.dispatch('verifyExcelSheet', this.participants)
      this.resetIdleTimer()
    },

    readFile (file) {
      /* Boilerplate to set up FileReader */
      var reader = new FileReader()
      reader.onload = (e) => {
        var binaryString = e.target.result
        try {
          var workBook = XLSX.read(binaryString, { type: 'binary' })
          this.incorrectFileType = false
          this.initialFileUpload = false
          this.fileName = this.$refs.file.files[0].name
          var fileName = this.fileName

          if (this.checkFileType(fileName)) {
            var worksheetName = workBook.SheetNames[0]
            var ws = workBook.Sheets[worksheetName]
            var data = XLSX.utils.sheet_to_json(ws, { header: 1 })
            this.participants = this.parseFile(data)
          } else {
            this.incorrectFileType = true
          }
        } catch (err) {
          this.incorrectFileType = true
          this.initialFileUpload = false
        }
      }
      reader.readAsBinaryString(file)
    },

    parseFile (excelSheetJSON) {
      var parsedExcelSheet = []
      for (let i = 1; i < excelSheetJSON.length; i += 1) {
        let currentStudent = {
          email: excelSheetJSON[i][0],
          participant_id: excelSheetJSON[i][1]
        }
        currentStudent.participant_id = i
        parsedExcelSheet.push(currentStudent)
      }
      return parsedExcelSheet
    },

    checkFileType (fileName) {
      var acceptedFileTypes = ['xlsx', 'xlsb', 'xlsm', 'xls', 'csv']
      var fileIsAccepted = false
      for (var i = 0; i < acceptedFileTypes.length; i++) {
        if (fileName.includes(acceptedFileTypes[i])) {
          fileIsAccepted = true
        }
      }
      return fileIsAccepted
    }
  }
}
</script>
