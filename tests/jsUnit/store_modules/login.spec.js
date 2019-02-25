import loginStore from './../../../resources/js/store/modules/login/index';
import loginAPI from './../../../resources/js/api/login';

//TESTING ACTIONS
// jest.mock('axios');
jest.mock('./../../../resources/js/api/login');
describe('loginStore/actions/VerifyUserData', () => {
  it('should commit to VERIFY_USER_DATA mutation', async () => {
    const commit = jest.fn();
    loginAPI.verifyUserDataAPI = jest.fn();
    const payload = {
      userCredentials: 'edgkano@gmail.com',
      password: 'password'
    };
    const apiResponse = {
      token: '123rke4',
      username: 'csunStudent123'
    }
    loginAPI.verifyUserDataAPI.mockResolvedValue(apiResponse);
    await loginStore.actions.verifyUserData({commit}, payload)
    expect(commit).toHaveBeenCalledWith("VERIFY_USER_DATA",
    payload);

  });
    
  
});

describe('loginStore/actions/ClearUserData', () => {
  it('should commit to CLEAR_USER_DATA mutation', ()=>{
    const commit = jest.fn();
    loginStore.actions.clearUserData({commit});
    expect(commit).toHaveBeenCalledWith("CLEAR_USER_DATA");
  });
})

//TESTING MUTATIONS

describe('loginStore/mutations/VERIFY_USER_DATA', ()=> {
  it('should set user object with username, password, and correctLoginInfo to true', () =>{
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
  it('should clear the user object and nullify correctLoginInfo', ()=> {
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