const verifyUserDataAPI = (payload, success, error) => {
  window.axios.get(`https://jsonplaceholder.typicode.com/users/1`)
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