
import {FETCH_INITIAL_REQUEST} from '../actions';



const initialState = {
	organization_id: null,
	service_id: null,
	phone: null,
	organization: null,
	loading: false
};

export const reducer = (state = initialState, action) => {
	if(action.type === FETCH_INITIAL_REQUEST) {
		return {
			...state, 
			loading: true
		};
	}

	return state;
};