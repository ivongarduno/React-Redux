import { apiGetHero } from '../../lib/api';

const defaultState = {
    results: []
};

//type of action
const GET_HERO = 'GET_HERO';

 //action
const getHero = (results) => ({ type: GET_HERO, payload: results });

//funcion usada en search que desencadena la action
export const fetchGetHero = (name) => {
    console.log(name);
    return (dispatch) => {
        //llamamos a la funcion de la API
        apiGetHero(name)
            .then(res => {
                dispatch(getHero(res));
            });
            // .catch(res => {
            //     console.log(res);
            // })
    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        //en todos los casos regresamos un objeto nuevo en el cual incluimos todos las propiedades del objeto state con ...state
        case GET_HERO: {
            if(!action.payload){
                return { ...state,  };
            }
            return { ...state, results: action.payload };
        }    
        default:
            return { ...state };
    }
}