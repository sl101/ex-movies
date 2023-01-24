import axios from 'axios';
import { api_url } from './../data/base_url';

export default axios.create({
	baseURL: `${api_url}`,
});
