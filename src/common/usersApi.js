import axios from 'axios';
import { API_URL, RESULTS } from './config';

export function fetchRandomUserApi(page) {
  return axios.get(`${API_URL}?results=${RESULTS}&page=${page}`)
  .then( res => ( { res }))
  .catch( error => ( { error }));
}
