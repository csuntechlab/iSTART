<template>
  <div>
  <h1>Admin</h1>
  <div v-if="incorrectFileType" class="invalid-feedback ">Please enter an excel file</div>
  <div class="col-12">
    <label>File
      <input type="file" id="file" ref="file" @change="handleFileChange"/>
    </label>
    <button v-if="!incorrectFileType" @click.prevent="submitFile">Submit</button>
  </div>
  <div>
    <Participants v-if="participantsWereSubmitted===null"/>
    <h2 v-if="participantsWereSubmitted===true">Participants were submitted!</h2>
    <h2 v-if="participantsWereSubmitted===false"> Participants were not submitted</h2>
  </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex';

import { changeRouteTitle } from './../mixins/changeRouteTitle.js'
import XLSX from 'xlsx'
import Participants from './../components/admin/Participants.vue'

export default {
  name: 'admin',
  mixins: [changeRouteTitle],
  data () {
    return {
      participants: [],
      incorrectFileType: false
    }
  },
  components: {
    Participants
  },
  computed: {
    ...mapGetters([
      'participantsWereSubmitted'
    ])
  },
  methods: {
    handleFileChange (event) {
      var files = event.target.files;
      if (files && files[0]) {
        this.readFile(files[0]);
      } 
    },
    submitFile (event) {
      event.stopPropagation();
      event.preventDefault();
      this.$store.commit('PARTICIPANTS_WERE_SUBMITTED', null);
      this.$store.dispatch('verifyExcelSheet', this.participants);
    },
    readFile (file) {
      /* Boilerplate to set up FileReader */
      var reader = new FileReader();
      reader.onload = (e) => {
        var bstr = e.target.result;
        try {
          var wb = XLSX.read(bstr, { type: 'binary' });
          this.incorrectFileType = false;
          var fileName = this.$refs.file.files[0].name;

          if (this.checkFileType(fileName)) {
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            var data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            this.participants = this.parseFile(data);
          } else {
            this.incorrectFileType = true;
          }
        } catch (err) {
          this.incorrectFileType = true;
        }
      }
      reader.readAsBinaryString(file);
    },
    parseFile (excelSheetJSON) {
      var parsedExcelSheet = [];
      for (var i = 1; i < excelSheetJSON.length; i++) {
        var currentStudent = {
          email: excelSheetJSON[i][0],
          participant_id: excelSheetJSON[i][1]
        };
        parsedExcelSheet.push(currentStudent);
      }
      return parsedExcelSheet;
    },
    checkFileType (fileName) {
      var acceptedFileTypes = ['xlsx', 'xlsb', 'xlsm', 'xls', 'csv'];
      var fileIsAccepted = false;
      for (var i = 0; i < acceptedFileTypes.length; i++) {
        if (fileName.includes(acceptedFileTypes[i])) {
          fileIsAccepted = true;
        }
      }
      return fileIsAccepted;
    }
  }
}
</script>
