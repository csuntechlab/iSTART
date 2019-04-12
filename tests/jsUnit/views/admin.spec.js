import { shallowMount, createLocalVue } from '@vue/test-utils';
import Admin from './../../../resources/js/views/Admin.vue';

describe('Admin.vue', () => {
  
  
  const $route = {
    meta: {
      title: 'ISTART'
    } 
  }
  const wrapper = shallowMount(Admin, {
    mocks: {$route} 
  });
  it('should parse the json version of the excel file to an object format when parseFile is called', ()=> {
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
    
    expect(wrapper.vm.parseFile(excelSheetJSON)).toEqual(parsedExcelSheet)
  });

  it('should return true when checkFileType is called', () =>{
    var filesToTest = ['excelSheet.xls', 'excel.xlsb', 'excel.xlsm', 'sheet.xls', 'excelsheet34.csv']
    var testPasses = false;
    filesToTest.forEach( file => {
      if(wrapper.vm.checkFileType(file)) {
        testPasses = true;
      }
    });
    expect(testPasses).toBe(true)
  });

  it('should return false when checkFileType is called', () => {
    var faultyFilesToTest = ['word.word', 'coolPowerPoint.ppt', 'mywebsite.html', 'uhhhhh.uhhhh']
    var testPasses = true; 
    faultyFilesToTest.forEach(file => {
      if(!wrapper.vm.checkFileType(file)) {
        testPasses = false;
      }
    })
    expect(testPasses).toBe(false) 

  })

}); 
