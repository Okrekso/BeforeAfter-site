import React from 'react';
import userImg from '../../img/png/ic_account_circle_24px.png';
import posImg from '../../img/png/ic_explore_24px.png';

function ProblemsItem({item}){
    let styles = {
        background: `url(${item.pics[0]}) no-repeat center left / cover`,
    }
    console.log(item)
     return(
        <li className="image-item"  >
            <div className="problem__content">
                <div className="title">
                    <div className="name">{item.title}</div>
                    <div className="pos">
                        <img src={posImg} alt="Position" />
                        <p>{item.pos}</p>
                    </div>
                </div>
                <div className="body" style={styles}></div>
                <div className="info">
                    <div className="price">
                        <p>Бюджет:</p>
                        <div className="capital">{item.capital}/</div>
                        <div className="minBudget">{item.minBudget}</div>
                    </div>
                    <div className="user">
                        <img src={userImg} alt="User" />
                        <p>{item.userName}</p>
                    </div>
                </div>
            </div>
            <div className="problem__hidden">
                <div className="problem__description">{item.description}</div>
                <div className="problems__btn">
                    <a className="btn--one donate__btn--one" href="#">Donate</a>
                    <a className="btn--one problem__btn--one" href="#">Допомогти</a>
                </div>
            </div>
    </li>
    );
}
export default ProblemsItem;