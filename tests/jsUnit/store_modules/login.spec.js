import loginStore from '../../../resources/js/store/modules/login/index';
import login from '../../../resources/js/api/login';

//TESTING ACTIONS

// describe('loginStore/actions/VerifyUserData', () => {
//   it('should commit to VERIFY_USER_DATA', async() => {
//     const commit = jest.fn();
//     const payload = {
//       email: 'edgkano@gmail.com',
//       password: 'password'
//     };
//     await loginStore.actions.verifyUserData(context, payload);
//     expect(commit)
    
//   })
  
// });



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