const BASEURL = 'https://www.superheroapi.com/api.php/10221041764491302/search/';

export const apiGetHero = (name) => {
    const URL = BASEURL + name ;
    console.log(name)
    console.log(URL)
    return fetch(URL)
        .then(response => response.json())
        .then(recurso => {
            console.log(recurso.results)
            if(recurso.results === undefined){
                const error = 'fallo';
                return error;
            }
            return recurso.results;
        })
        // .catch(error => {
        //     console.log(error)
        //     return error
        // })
};

// export default apiGetHero;