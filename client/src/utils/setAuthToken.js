import axios from 'axios';

// check if there is a token in localStorage
const setToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.headers.common['x-auth-token'];
  }
};

export default setToken;
