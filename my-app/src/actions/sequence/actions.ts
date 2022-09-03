import { Dispatch } from 'react';
import { sequenceActions } from './consts';

export const addSentence = (sentence: any) => (dispatch: Dispatch<any>) => {
    dispatch({ type: sequenceActions.SENTENCE_CREATE_SUCCESS, payload: sentence});

}