import axios from 'axios';

export const INITIAL_REQUEST = "INITIAL_REQUEST";
export const initialDataRequest = () => ({
	type: FETCH_INITIAL_REQUEST
});

export const initialDataSuccess = () => ({
	type: FETCH_INITIAL_REQUEST
});

export const initialDataError = () => ({
	type: FETCH_INITIAL_REQUEST
});

export const fetchInitialData = () => dispatch => {
	dispatch(requestInitialData);

	axios({
		  method: 'get',
		  url: 'http://miami.open.211.hsda.api.adopta.agency/services/full/',
		  data: {
		    user: 'brunos',
		    lastName: 'ilovenodejs'
		  }
		})
	.then(res => console.log(res))
	.catch(err => {
		console.log(err);
	});
};

