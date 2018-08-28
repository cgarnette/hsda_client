import axios from 'axios';
import {FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from './action-types';

export const orgDataRequest = () => ({
	type: FETCH_DATA_REQUEST
});

export const orgDataSuccess = () => ({
	type: FETCH_DATA_SUCCESS
});

export const orgDataError = () => ({
	type: FETCH_DATA_ERROR
});

export const fetchInitialData = () => dispatch => {
	// dispatch(orgDataRequest);

	// axios({
	// 	  method: 'get',
	// 	  url: 'http://miami.open.211.hsda.api.adopta.agency/services/full/',
	// 	  data: {
	// 	    user: 'brunos',
	// 	    lastName: 'ilovenodejs'
	// 	  }
	// 	})
	// .then(res => console.log(res))
	// .catch(err => {
	// 	console.log(err);
	// });
};

