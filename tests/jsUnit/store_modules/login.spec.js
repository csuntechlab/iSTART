import loginStore from './../../../resources/js/store/modules/login/index';
import loginAPI from './../../../resources/js/api/login.js';
// jest.mock('axios');
jest.mock('./../../../resources/js/api/login.js')


//TESTING ACTIONS  
describe('loginStore/actions/VerifyUserData', () => {
  it('should commit to VERIFY_USER_DATA mutation when action is called', async() => {
    // let data;
    // const commit = jest.fn();
    // loginStore.actions.verifyUserData(commit, {usercredential: 'e', password: 'k'})
    // .then(()=> {
    //   expect(commit).toEqual(apiResponse);
    // })
    const apiResponse = {
      token: '1234',
      username: 'test123'
    } 
    loginAPI.verifyUserDataAPI.mockResolvedValue(apiResponse);
    const commit = jest.fn();
    await loginStore.actions.verifyUserData({commit}, apiResponse);
    expect(commit).toHaveBeenCalledWith('VERIFY_USER_DATA', apiResponse);
    });
});

describe('loginStore/actions/ClearUserData', () => {
  it('should commit to CLEAR_USER_DATA mutation when action is called', ()=>{
    const commit = jest.fn();
    loginStore.actions.clearUserData({commit});
    expect(commit).toHaveBeenCalledWith("CLEAR_USER_DATA");
  });
})

//TESTING MUTATIONS

describe('loginStore/mutations/VERIFY_USER_DATA', ()=> {
  it('should set user object with username, password, and correctLoginInfo to true when mutation is called', () =>{
    const state = {
      user: {},
      correctLoginInfo: null
    }
    loginStore.mutations.VERIFY_USER_DATA(state, {token: '123rke4', username: 'csunStudent123'});
    expect(state).toEqual({
      user: {
        token: '123rke4',
        username: 'csunStudent123'
      },
      correctLoginInfo: true
    }
    )
  })
});

describe('loginStore/mutations/CLEAR_USER_DATA', ()=> {
  it('should clear the user object and nullify correctLoginInfo when mutation is called', ()=> {
    const state = {
      user: {
        token: '123rke4',
        username: 'csunStudent123'
      },
      correctLoginInfo: true
    }
    loginStore.mutations.CLEAR_USER_DATA(state);
    expect(state).toEqual({
      user: {},
      correctLoginInfo: null

    });
  })
})