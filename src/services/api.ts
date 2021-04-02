// import axios from 'axios';
// import { Platform } from 'react-native';
// // @ts-ignore
// import { API_URL } from '@env';

// let baseURL = '';

// // https://github.com/axios/axios/issues/973#issuecomment-437221047
// if (__DEV__ && Platform.OS === 'android') {
//   baseURL = API_URL.replace('localhost', '10.0.2.2');
// } else {
//   baseURL = API_URL;
// }

// const api = axios.create({
//   baseURL,
// });

// export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
