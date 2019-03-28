import adminStore from './../../../resources/js/store/modules/admin/index'
import adminAPI from './../../../resources/js/api/user'
import 'jest-extended'

jest.mock('./../../../resources/js/api/admin')


//VUEX Action Testing
describe('adminStore/actions/verifyExcelSheet', () => {
  const excelSheetJSON = [
    ["email", "participant_id"],
    ["liad.golan.736@my.csun.edu", 689679],
    ["brian.linggadjaja.785@my.csun.edu", 41210],
    ["joshua.magdaleno.472@my.csun.edu", 5784],
    ["mbenda.ndour.487@my.csun.edu", 11137],
    ["edgar.canozelaya.6@my.csun.edu", 43466]
  ];
  
  
})
