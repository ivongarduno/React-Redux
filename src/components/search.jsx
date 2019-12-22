import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGetHero } from '../redux/reducers/resultsReducer';

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
        this.setState({ text: '' });
    }

    render(){
        
            const results = this.props.results;
            console.log(results);

        return(
            <form onSubmit={this.handleGet}>
            <input name="text" placeholder="Name Here!" value={this.state.text} onChange={this.hanldeChange} />
            <button type="submit">Buscar</button>
            
            { 
                
                results.map(h=>(
                    
                    <div>
                        <h1 key={h.id}>{h.name}</h1>
                        <img src={h.image.url} alt={h.name}></img>
                    </div>
                    ))
            } 
        
            
            </form>
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