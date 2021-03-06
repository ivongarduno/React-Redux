import React from 'react';
import './itemHero.css';


const ItemHero = ({ hero: { id, name, image, biography, work }}) => {
    
    const srcImage = `${image.url}`;
    const firstAppearance = biography['first-appearance'];
    const fullName = biography['full-name'];

    return (
                            
      <div key={id} className='card-wrap'>               
        <div className='card'>
          <div className='card_front'>
            <img
              className="card_img"
              src={srcImage}
              alt=""
            />
            <h2 className="card_title">{name}</h2>
          </div>
          <div className="card_back">
            <p className="card_text"><b>Full Name:</b> {fullName}</p>
            <p className="card_text"><b>First Appearance:</b> {firstAppearance}</p>
            <p className="card_text"><b>Publisher:</b> {biography.publisher}</p>
            <p className="card_text"><b>Occupation:</b> {work.occupation}</p>
            <p className="card_text"><b>Occupation:</b> {biography.alignment}</p>
          </div>
        </div>
      </div>
    )

  }

export default ItemHero;
