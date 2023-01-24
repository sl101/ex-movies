import { api_url } from './../data/base_url';
import { api_key } from './../data/apikey';

export const getPosts = () => {
	fetch(`${api_url}3/movie/550${api_key}`)
		.then((resp) => resp.json())
		.then((data) => console.log(data));
};
