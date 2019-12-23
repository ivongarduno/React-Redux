import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchGetHero } from '../../redux/reducers/resultsReducer';
import ItemHero from '../itemHero/itemHero';

import './search.css';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''

        }
    }
  
    hanldeChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        console.log(value);
        this.setState({ [`${name}`]: value });
    }

    handleGet = (event) => {
        event.preventDefault();
        this.props.fetchGetHero(this.state.text);
        this.setState({ text: ''});
    }

    render(){
        
        const results = this.props.results;
        console.log(results)

        
        return(
            <Fragment>
            <div className='container-form'>
                <img src='../../img/dc-logo.jpg' alt='' />
                <form onSubmit={this.handleGet} className='form-search'>
                    <input name='text' 
                    placeholder='Ex: Batman' 
                    value={this.state.text} 
                    onChange={this.hanldeChange} />
                    <button type='submit' className='btn btn-2'>Buscar</button>  
                </form>
            </div>
            <div className='container-results'>
                {
                    results.map( hero => { return <ItemHero hero={hero}/> })   
                } 
            </div>
            </Fragment>
        )
    }
    
}

export default connect(
    //función que mapea propiedades del state con propiedades del componente
    (state) => ({
        results: state.results.results
    }),
    //mapeo de funciones
    {
        fetchGetHero
    }
)(Search);