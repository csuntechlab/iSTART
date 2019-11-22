import axios from 'axios'

export default {
  verifyExcelSheetAPI (payload) {
    return axios.post('verify-excel-sheet', payload)
  }

  getModuleProgressAPI (payload) {
    
  }
}
