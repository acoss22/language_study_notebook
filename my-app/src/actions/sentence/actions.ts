import { Dispatch } from 'react';
import { sentenceActions } from './consts';

export const addSentence = (sentence: any) => (dispatch: Dispatch<any>) => {
    dispatch({ type: sentenceActions.SENTENCE_CREATE_SUCCESS, payload: sentence});
}

export const editSentence = (newItem: any) => (dispatch: Dispatch<any>) => {
    console.log('Dispatch action editSentence called', newItem);
    dispatch({ type: sentenceActions.SENTENCE_EDIT_SUCCESS, payload: newItem});
}

export const deleteSentence = (index: any) => (dispatch: Dispatch<any>)=> {
    console.log('Dispatch action deleteSentence called', index);
    dispatch({ type: sentenceActions.SENTENCE_DELETE_SUCCESS, payload: index});
}
