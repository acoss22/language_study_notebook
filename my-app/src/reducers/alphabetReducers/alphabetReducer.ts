import { Reducer } from "redux";
import { alphabetActions } from "../../actions/alphabet/consts";
import { Action, Keys } from "../../types/index";

type ActionsType = Keys<typeof alphabetActions>;

const initialState: any = { items: [] };

const alphabetReducer: Reducer = (
    state = initialState,
    action: Action<ActionsType>
) => {
    switch (action.type) {
        case alphabetActions.ALPHABET_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case alphabetActions.ALPHABET_CREATE_SUCCSESS:
            return {
                ...state,
                loading: true,
                success: true,
                items: [...state.items, action.payload],
            };
        case alphabetActions.ALPHABET_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case alphabetActions.ALPHABET_EDIT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case alphabetActions.ALPHABET_EDIT_SUCCSESS:
            return {
                ...state,
                loading: false,
                success: true,
                items: state.items.map((item: any, i: any) =>
                    i === action.payload.index ? action.payload.newValue : item
                ),
            };
        case alphabetActions.ALPHABET_EDIT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case alphabetActions.ALPHABET_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case alphabetActions.ALPHABET_DELETE_SUCCSESS:
            return {
                ...state,
                loading: false,
                success: true,
                items: state.items.filter(
                    (item: any, index: any) => index !== action.payload
                ),
            };
        case alphabetActions.ALPHABET_DELETE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default alphabetReducer;
