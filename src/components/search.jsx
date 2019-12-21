import React from 'react';
import { connect } from 'react-redux';

const Search = ({results}) => (
    
    <section>
        <input type='text'></input>
        <button>Buscar</button>
        {
            results.map(hero=>(
            <h1>{hero.name}</h1>
            ))
        }
    </section>
)

const mapStateToProps = state =>({
    results: state.results
    
})

const mapDispatchProps = dispatch =>({})

export default connect(mapStateToProps, mapDispatchProps)(Search);