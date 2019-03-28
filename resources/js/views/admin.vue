<template>
  <div>
  <h1>Admin</h1>
  <div v-if="incorrectFileType" class="invalid-feedback ">Please enter an excel file</div>
  <div class="col-12">
    <label>File
      <input type="file" id="file" ref="file" @change="handleFileChange"/>
    </label>
    <button @click.prevent="submitFile">Submit</button>
  </div>
  </div>
  
</template>

<script>
import { changeRouteTitle } from './../mixins/changeRouteTitle.js'
import XLSX from 'xlsx';

export default {
  name: 'admin',
  mixins: [changeRouteTitle],
  data() {
    return {
      participants: [],
      incorrectFileType: false
    }
  },
  methods: {
    handleFileChange(evt) {
      const files = evt.target.files;
			if(files && files[0]) this.readFile(files[0]);
		},
    submitFile(evt) {
      evt.stopPropagation(); 
      evt.preventDefault();
      this.$store.dispatch('verifyExcelSheet', this.participants);
    },
    readFile(file) {
			/* Boilerplate to set up FileReader */
			const reader = new FileReader();
			reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result;
        try {
          const wb = XLSX.read(bstr, {type:'binary'})
          this.incorrectFileType = false;
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws, {header:1});
          this.participants = this.parseFile(data);
        }
        catch(err){
          this.incorrectFileType = true
        }       
      };
      reader.readAsBinaryString(file);
    },
    parseFile(excelSheetJSON) {
      console.table(excelSheetJSON)
      const parsedExcelSheet = [];
        for (var i = 1; i <excelSheetJSON.length; i++) {
          var currentStudent = {
            email: excelSheetJSON[i][0],
            participant_id: excelSheetJSON[i][1]
          }
          parsedExcelSheet.push(currentStudent);
        }
      return parsedExcelSheet;
    }
  }
}
</script>
