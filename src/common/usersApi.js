import axios from 'axios';
import { API_URL, RESULTS } from './config';

export function fetchUserApi() {
  return axios.get(`${API_URL}?results=${RESULTS}`)
  .then( res => ( { res }))
  .catch( error => ( { error }));
}
