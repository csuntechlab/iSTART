import AdminAPI from './../../../api/admin'
export default {
  async verifyExcelSheet({commit}, payload) { 
    return AdminAPI.verifyExcelSheetAPI(payload)
    .then(
      response => {
        console.log(response);
      }
    ).catch(
      failure => console.error(failure)
    )
  }
}