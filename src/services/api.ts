import axios from 'axios';
import { Platform } from 'react-native';

const baseURL = '';

`${Platform.OS === 'android' ? 'localhost' : '10.0.2.2'}`;

const api = axios.create({
  baseURL,
});

export default api;
