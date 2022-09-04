import { Reducer } from "redux";
import { sentenceActions } from "../../actions/sentence/consts";
import { Action, Keys } from "../../types/index";

type ActionsType = Keys<typeof sentenceActions>;

const initialState: any = { items: [] };

const sentenceReducer: Reducer = (
    state = initialState,
    action: Action<ActionsType>
) => {
    switch (action.type) {
        case sentenceActions.SENTENCE_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case sentenceActions.SENTENCE_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                items: [...state.items, action.payload],
            };
        case sentenceActions.SENTENCE_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case sentenceActions.SENTENCE_EDIT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case sentenceActions.SENTENCE_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                items: state.items.map((item: any, i: any) => (i === action.payload.index) ? action.payload.newValue : item ),
            };
        case sentenceActions.SENTENCE_EDIT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case sentenceActions.SENTENCE_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case sentenceActions.SENTENCE_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                items: state.items.filter((item :any, index:any) => index !== action.payload),
            };
        case sentenceActions.SENTENCE_DELETE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default sentenceReducer;
