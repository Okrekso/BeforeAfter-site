import React from 'react';
 
function ProblemsItem({item}){
    let styles = {
        li: {
        background: `url(${item.pics[0]}) no-repeat center left / cover`,
        }
    }
    console.log(styles.li);
return(
    <li className="image-item" style={styles.li} >
        <div className="problem__content">
            <div className="problem__title">{item.title}</div>
            <div className="problem__text">{item.description}</div>
            <div className="problems__btn">
                <a className="btn--one donate__btn--one" href="#">Donate</a>
                <a className="btn--one problem__btn--one" href="#">Допомогти</a>
            </div>
        </div>
    </li>
);
}
export default ProblemsItem;