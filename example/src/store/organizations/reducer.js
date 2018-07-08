import * as types from './actionTypes.js'

const initialState = {
	current_org: undefined
}

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case types.UPDATE_CURRENT_ORG:
			return {
				...state,
				current_org: action.current_org
			};
		default:
			return state;
	}
}

