const verifyUserDataAPI = (payload, success, error) => {
  window.axios.post('http://www.mocky.io/v2/5c734b2f330000e42176029b', payload)
  .then(
    response => {
      success(response.data);
    }
  ).catch(
    failure => { 
      error(failure)
    }
  )
}

export default {
  verifyUserDataAPI
}