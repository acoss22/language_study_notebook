import { Dispatch } from 'react';
import { sequenceActions } from './consts';

export const addSentence = (sentence: any) => (dispatch: Dispatch<any>) => {
    dispatch({ type: sequenceActions.SENTENCE_CREATE_SUCCESS, payload: sentence});
}

export const editSentence = (newItem: any) => (dispatch: Dispatch<any>) => {
    console.log('Dispatch action editSentence called', newItem);
    dispatch({ type: sequenceActions.SENTENCE_EDIT_SUCCESS, payload: newItem});
}

export const deleteSentence = (index: any) => (dispatch: Dispatch<any>)=> {
    console.log('Dispatch action deleteSentence called', index);
    dispatch({ type: sequenceActions.SENTENCE_DELETE_SUCCESS, payload: index});
}
