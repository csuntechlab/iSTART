// const verifyUserDataAPI = (payload, success, error) => {
//   window.axios.post('http://www.mocky.io/v2/5c734b2f330000e42176029b', payload)
//   .then(
//     response => {
//       success(response.data);
//     }
//   ).catch(
//     failure => { 
//       error(failure)
//     }
//   )
// }
// const verifyUserDataAPI = (payload) => {
//   console.log("hello");
//   return window.axios.post('http://www.mocky.io/v2/5c734b2f330000e42176029b', payload);

// }

export default {
  verifyUserDataAPI(payload) {
    return axios.post('http://www.mocky.io/v2/5c734b2f330000e42176029b', payload)
  },
}