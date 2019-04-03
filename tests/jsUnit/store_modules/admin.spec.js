import adminStore from './../../../resources/js/store/modules/admin/index'
import adminAPI from './../../../resources/js/api/user'
import 'jest-extended'

jest.mock('./../../../resources/js/api/admin')


//VUEX Action Testing

//TODO: MAKE CORRECT TEST DEPENDING ON THE KIND OF DATA THAT IS RECEIVED FROM THE BACKEND
it('adminStore/actions/verifyExcelSheet',()=>{
  expect(1+1).toBe(2)
})
