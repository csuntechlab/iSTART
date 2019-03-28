import { shallowMount, createLocalVue } from '@vue/test-utils';
import Admin from './../../../resources/js/views/admin.vue';
const localVue = createLocalVue();

describe('Admin.vue', () => {
  const excelSheetJSON = [
    ["email", "participant_id"],
    ["liad.golan.736@my.csun.edu", 689679],
    ["brian.linggadjaja.785@my.csun.edu", 41210],
    ["joshua.magdaleno.472@my.csun.edu", 5784],
    ["mbenda.ndour.487@my.csun.edu", 11137],
    ["edgar.canozelaya.6@my.csun.edu", 43466]
  ];
  const parsedExcelSheet = [
    {
      email: "liad.golan.736@my.csun.edu",
      participant_id: 689679
    },
    {
      email: "brian.linggadjaja.785@my.csun.edu",
      participant_id: 41210
    },
    {
      email: "joshua.magdaleno.472@my.csun.edu",
      participant_id: 5784
    },
    {
      email: "mbenda.ndour.487@my.csun.edu",
      participant_id: 11137
    },
    {
      email: "edgar.canozelaya.6@my.csun.edu",
      participant_id: 43466
    },  
  ];
  
  const $route = {
    meta: {
      title: 'ISTART'
    } 
  }
  it('should parse the json version of the excel file to an object format when parseFile is called', ()=> {
    // localVue.mixin(mixin)
    const wrapper = shallowMount(Admin, {
      mocks: {$route} 
    });
    expect(wrapper.vm.parseFile(excelSheetJSON)).toEqual(parsedExcelSheet)
  })

})