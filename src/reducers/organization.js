import {
	FETCH_DATA_REQUEST
} from '../actions/action-types';

const initialState = {
	organization_id: null,
	service_id: null,
	phone: null,
	organization: null,
	loading: false
};

export const reducer = (state = initialState, action) => {
	if(action.type === FETCH_DATA_REQUEST) {
		return {
			...state, 
			loading: true
		};
	}

	return state;
};

export default reducer;