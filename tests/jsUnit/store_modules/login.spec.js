import loginStore from '../../../resources/js/store/modules/login/index';

// describe('loginStore/actions/VerifyUserData', () => {
//   test('should commit to VERIFY_USER_DATA', async() => {
//     const commit = jest.fn();
//     const payload = {
//       email: 'edgkano@gmail.com',
//       password: 'password'
//     };
//     await loginStore.actions.verifyUserData(context, payload);
//     expect(commit)
    
//   })
  
// });

describe('loginStore/mutations/VERIFY_USER_DATA', ()=> {
  it('should set user object with username, password, and correctLoginInfo to true', () =>{
    const state = {
      user: {},
      correctLoginInfo: null
    }
    loginStore.mutations.VERIFY_USER_DATA(state, {token: 1234, username: 'csunStudent123'});
    expect(state).toEqual({
      user: {
        token: 1234,
        username: 'csunStudent123'
      },
      correctLoginInfo: true
    }
    )
  })
})