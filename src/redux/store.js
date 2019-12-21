import { createStore } from 'redux';

const initialState ={
    results:[{
        id:1,
        name: 'yo'
    },
    {
       id:2,
       name:'otro' 
    }]
}

//encargada de hacer los cambios
const reducerHero = (state = initialState, action) => {
    return state
}

export default createStore(reducerHero);