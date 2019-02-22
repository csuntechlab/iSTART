const verifyUserDataAPI = (payload, success, error) => {
  console.log('this is from the api call');
  console.log(payload);
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