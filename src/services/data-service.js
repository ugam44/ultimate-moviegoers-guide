import axios from 'axios';
let movieAPIKey = "89835e8482c6060a7265d6ebd1e42cb4";

const getApiGenerator = next => (route, name) => {
  return axios.get(route).then((response) => {
    const data = response.data;
    next({
      type: `${name}_SUCCESS`,
      data
    })
  }).catch((error) => {
    next({
      type: `${name}_ERROR`,
      err
    })

  });
};
  
const postApiGenerator = next => (route, payload, name) => {
  return axios.post(route, payload).then((response) => {
    const data = response.data;
    next({
      type: `${name}_SUCCESS`,
      data
    })
  }).catch((error) => {
    next({
      type: `${name}_ERROR`,
      err
    })

  });
};

const dataService = store => next => action => {
  next(action)
  const getApi = getApiGenerator(next)
  switch (action.type) {
    case 'GET_MOVIES':
      getApi('/data/todo-data.json', 'GET_MOVIES')
      break
    default:
      break
  }
};

export default dataService
