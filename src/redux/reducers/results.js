
const defaultState = [];

function reducer(state= defaultState, {type, payload}){
    switch (type){
        case 'findResults':{
            return [
                {
                    id:1,
                    name:'findResults'
                }
            ];
        }
        default:
            return state;
    }
}

export default reducer;