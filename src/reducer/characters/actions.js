import { API_URL} from '../../constants';

export const SET_CHARACTERS = 'SET_CHARACTERS';

export function getCharacters(){
    return dispatch => {
      fetch(`${API_URL}/people`, { mode: 'no-cors' })
      .then(res => res.json())
      .then(res => res.results)
      .then(characters =>
        dispatch(setCharacters(characters))
      );
    };
}

export function setCharacters() {
    return {
        type: SET_CHARACTERS,
        characters,
    };
}