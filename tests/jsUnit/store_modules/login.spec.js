import userStore from './../../../resources/js/store/modules/user/index';
import userAPI from './../../../resources/js/api/user';
jest.mock('./../../../resources/js/api/user');


//TESTING ACTIONS  
describe('userStore/actions/VerifyUserData', () => {
  it('should commit to VERIFY_USER_DATA mutation when action is called', async () => {
    const userInfo = {
      userCredentials: 'eddy',
      password: 'password'
    }
    const apiResponse = {
      token: '1234',
      username: 'test123'
    } 
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    var commit = jest.fn()
    await userStore.actions.verifyUserData({commit}, userInfo);
    expect(commit).toHaveBeenCalled();
  });
});

describe('userStore/actions/ClearUserData', () => {
  it('should commit to CLEAR_USER_DATA mutation when action is called', ()=>{
    const commit = jest.fn();
    userStore.actions.clearUserData({commit});
    expect(commit).toHaveBeenCalledWith("CLEAR_USER_DATA");
  });
})

//TESTING MUTATIONS

describe('userStore/mutations/VERIFY_USER_DATA', ()=> {
  it('should set user object with username, password, and correctLoginInfo to true when mutation is called', () =>{
    const state = {
      user: {},
      correctLoginInfo: null
    }
    userStore.mutations.VERIFY_USER_DATA(state, {token: '123rke4', username: 'csunStudent123'});
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

describe('userStore/mutations/CLEAR_USER_DATA', ()=> {
  it('should clear the user object and nullify correctLoginInfo when mutation is called', ()=> {
    const state = {
      user: {
        token: '123rke4',
        username: 'csunStudent123'
      },
      correctLoginInfo: true
    }
    userStore.mutations.CLEAR_USER_DATA(state);
    expect(state).toEqual({
      user: {},
      correctLoginInfo: null

    });
  })
})