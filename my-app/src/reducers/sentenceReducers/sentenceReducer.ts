import { Reducer } from 'redux';
import { sequenceActions } from '../../actions/sequence/consts';
import { Action, Keys } from '../../types/index';

type ActionsType = Keys<typeof sequenceActions>;

const initialState : any = { items : []};

const sentenceReducer: Reducer = (state = initialState, action: Action<ActionsType>) => {
    switch(action.type) {
        case sequenceActions.SENTENCE_CREATE_REQUEST:
            return { 
                ...state,
                loading: true,
            };
        case sequenceActions.SENTENCE_CREATE_SUCCESS:
            return {
                ...state, 
                loading: false, 
                success: true, 
                items: [...state.items, action.payload]
                };
        case sequenceActions.SENTENCE_CREATE_FAIL:
            return { 
                ...state,
                 loading: false,
                error: action.payload 
            };
    default:
        return state;
    }
};

export default sentenceReducer;
