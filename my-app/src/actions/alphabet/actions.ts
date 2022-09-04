import { Dispatch } from 'react';
import { alphabetActions } from './consts';

export const addCharacter = (newCharacter: any) => (dispatch: Dispatch<any>) => {
    dispatch({ type: alphabetActions.ALPHABET_CREATE_SUCCSESS, payload: newCharacter});
}

export const editCharacter = (newCharacter: any) => (dispatch: Dispatch<any>) => {
    dispatch({ type: alphabetActions.ALPHABET_EDIT_SUCCSESS, payload: newCharacter});
}

export const deleteCharacter = (index: any) => (dispatch: Dispatch<any>) => {
    dispatch({ type: alphabetActions.ALPHABET_DELETE_SUCCSESS, payload: index});
} 
