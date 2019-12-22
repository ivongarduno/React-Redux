import React from 'react';
import './itemHero.css';


const ItemHero = ({ hero: { name, image, biography, work }}) => {
    
    const srcImage = `${image.url}`
    const firstAppearance = biography['first-appearance']

    return (
      <li className="ListItem">
        <div className="card">
        <h3 className="card-title">{name}</h3>
          <img
            className="card-img-top"
            src={srcImage}
            alt=""
          />
          <div className="card-body">
            <p className="card-text"><b>First Appearance:</b> {firstAppearance}</p>
            <p className="card-text"><b>Publisher:</b> {biography.publisher}</p>
            <p className="card-text"><b>Occupation:</b> {work.occupation}</p>
          </div>
        </div>
      </li>
    )
  }

export default ItemHero;
