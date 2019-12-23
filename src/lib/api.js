const BASEURL = 'https://www.superheroapi.com/api.php/10221041764491302/search/';

export const apiGetHero = (name) => {
    const URL = BASEURL + name ;
    // console.log(name)
    // console.log(URL)
    return fetch(URL)
        .then(response => response.json())
        .then(recurso => {
            // console.log(recurso.results)
            return recurso.results;
        })
};