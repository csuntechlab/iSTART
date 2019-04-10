import userStore from './../../../resources/js/store/modules/user/index'
import userAPI from './../../../resources/js/api/user'
import 'jest-extended'
import { promised } from 'q';

jest.mock('./../../../resources/js/api/user')

// VueX Action Testing
describe('userStore/actions/VerifyUserData', () => {
  const userInfo = {
    userCredentials: 'steve@csun.edu'
  }

  const apiResponse = {
    data: {
      user_id: 'studentMember',
      valid: '1',
      token: '123rke4',
      isAdmin: undefined,
      user_group: ''
    }
  }

  it('should commit to VERIFY_USER_DATA mutation when action is called', async () => {
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    let commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(commit).toHaveBeenCalled()
  })

  it('should check for userInfo.isAdmin to be false', async () => {
    apiResponse.data.isAdmin = false
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    let commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(apiResponse.data.isAdmin).toBeFalse()
  })

  it('should respond with isAdmin of true and check for userInfo.isAdmin to be true', async () => {
    apiResponse.data.isAdmin = true
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    let commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(apiResponse.data.isAdmin).toBeTrue()
  })

  it('should respond with isAdmin of true and check for userInfo.isAdmin to be null or undefined', async () => {
    apiResponse.data.isAdmin = null
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    let commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(apiResponse.data.isAdmin).toBeNil()
  })

  it('should respond with null user_group and check for userInfo.user_group to be null or undefined', async () => {
    apiResponse.data.user_group = null
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    let commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(apiResponse.data.user_group).toBeNil()
  })
})

describe('userStore/actions/logout', () => {
  it('should commit to CLEAR_USER_DATA mutation when action is called', () => {
    let commit = jest.fn()
    userStore.actions.clearUserData({ commit })
    expect(commit).toHaveBeenCalledWith('CLEAR_USER_DATA')
  })
});

describe('userStore/actions/verifyExcelSheet', ()=> {
  const apiResponse = {
    "good": [ 
      { "email": "nr_liad.golan.736@my.csun.edu", "participant_id": 689679, "user_id": "members:106771546" },
      { "email": "nr_brian.linggadjaja.785@my.csun.edu", "participant_id": 41210, "user_id": "members:108688604" }, 
      { "email": "nr_joshua.magdaleno.472@my.csun.edu", "participant_id": 5784, "user_id": "members:107046340" },
      { "email": "nr_mbenda.ndour.487@my.csun.edu", "participant_id": 11137, "user_id": "members:103338987" },
      { "email": "nr_edgar.canozelaya.6@my.csun.edu", "participant_id": 43466, "user_id": "members:108687187" } 
    ],
    "bad": [ 
      { "email": "nr_yeslawd@aol.com", "participant_id": 3849894 },
      { "email": "nr_imavirus@donottrustme.com", "participant_id": 0 } 
    ] 
  };
  const participants = [
    { "email": "nr_liad.golan.736@my.csun.edu", "participant_id": 689679},
    { "email": "nr_brian.linggadjaja.785@my.csun.edu", "participant_id": 41210}, 
    { "email": "nr_joshua.magdaleno.472@my.csun.edu", "participant_id": 5784},
    { "email": "nr_mbenda.ndour.487@my.csun.edu", "participant_id": 11137},
    { "email": "nr_edgar.canozelaya.6@my.csun.edu", "participant_id": 43466},
    { "email": "nr_yeslawd@aol.com", "participant_id": 3849894 },
    { "email": "nr_imavirus@donottrustme.com", "participant_id": 0 } 
  ];
  it('should commit to SET_CATEGORIZED_PARTICIPANTS when action is called', async() =>{
    userAPI.verifyExcelSheetAPI.mockImplementation(calledWith => {
      return calledWith === participants ? Promise.resolve(apiResponse) : promised.resolve();
    });
    let commit = jest.fn();
    await userStore.actions.verifyExcelSheet({commit}, participants);
    expect(commit).toHaveBeenCalled();
  });
});


// VueX Mutation Testing
describe('userStore/mutations/VERIFY_USER_DATA', () => {
  const state = {
    user: {},
    correctLoginInfo: null
  }

  const payload = {
    'user_id': 'studentMember',
    'valid': '1',
    'token': '123rke4',
    'user_group': ''
  }

  it('should set user object with username, password, and correctLoginInfo to true when mutation is called', () => {
    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state).toEqual({
      user: payload,
      correctLoginInfo: true
    })
  })

  it('should set user object group for control when mutation is called', () => {
    payload.user_group = 'control'
    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state.user.user_group).toEqual(payload.user_group)
  })

  it('should set user object group for comparison when mutation is called', () => {
    payload.user_group = 'comparison'
    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state.user.user_group).toEqual(payload.user_group)
  })

  it('should set user object group for intervention when mutation is called', () => {
    payload.user_group = 'intervention'
    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state.user.user_group).toEqual(payload.user_group)
  })

  it('should check user object group for null when mutation is called', () => {
    payload.user_group = null
    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state.user.user_group).toEqual(null);
  });
});

describe('userStore/mutations/CLEAR_USER_DATA', () => {
  it('should clear the user object and nullify correctLoginInfo when mutation is called', () => {
    const state = {
      user: {
        token: '123rke4',
        username: 'csunStudent123'
      },
      correctLoginInfo: true
    }

    userStore.mutations.CLEAR_USER_DATA(state)
    expect(state).toEqual({
      user: {},
      correctLoginInfo: null
    });
  });
});

describe('userStore/mutations/SET_CATEGORIZED_PARTICIPANTS',()=> {
  const state = { 
    categorizedParticipants: {}
  }
  const payload = {
    "good": [ 
      { "email": "nr_liad.golan.736@my.csun.edu", "participant_id": 689679, "user_id": "members:106771546" },
      { "email": "nr_brian.linggadjaja.785@my.csun.edu", "participant_id": 41210, "user_id": "members:108688604" }, 
      { "email": "nr_joshua.magdaleno.472@my.csun.edu", "participant_id": 5784, "user_id": "members:107046340" },
      { "email": "nr_mbenda.ndour.487@my.csun.edu", "participant_id": 11137, "user_id": "members:103338987" },
      { "email": "nr_edgar.canozelaya.6@my.csun.edu", "participant_id": 43466, "user_id": "members:108687187" } 
    ],
    "bad": [ 
      { "email": "nr_yeslawd@aol.com", "participant_id": 3849894 },
      { "email": "nr_imavirus@donottrustme.com", "participant_id": 0 } 
    ] 
  };
  it('should set categorizedParticipants to payload when SET_CATEGORIZED_PARTICIPANTS is called', ()=> {
    userStore.mutations.SET_CATEGORIZED_PARTICIPANTS(state,payload);
    expect(state).toEqual({
      categorizedParticipants: payloaddock
    })
  });
})


