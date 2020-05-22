import React from 'react'
import SimpleMap from './map';
import '../scss/donatePage.scss'
import photo from '../img/png/123.png'
function donatePage(){
    return(
        <div>
            <div className="header">
            <ul> 
                    <li><a href="/#problem">Проблеми</a></li>
                    <li><a href="#">Донати</a></li>
                    <li><a href="/">Головна</a></li>    
            </ul>
            </div>

                <p className="HeaderText">Відмітка нової проблеми на карті</p>
                <div className="Content">
                        <p className="HeaderTextContent">Загальний опис проблеми</p>
                        <p className="TextAbove">це поле будуть бачити інші користувачі, як заголовок проблеми</p>
                        <form action="">
                            <textarea name="Detail" className="DetailReview"></textarea><br /><br />
                        </form>
                        <p className="TextAbove">Опишіть проблему як можна детальніше. Чим краще Ви поясните свою проблему тим простіше ми знайдемо для неї вирішення</p>
                        <div className="content2">
                            <p className="png"><img src={photo} width="50" height="50" /></p>
                            <p className="fotoand">Фото або відео</p>
                        </div>
                        <div id="map-canvas"> 
                            <SimpleMap />
                         </div>
                        <p className="TextAbove">Позначте місце знахоження проблеми на карті</p>
                        <p className="HeaderTextContent">Початковий внесок</p>
                        <button className="button">1$</button> <button className="button2">5$</button> <button className="button3">10$</button>
                        <p className="TextAbove">10$+</p>

                            <input className="UnderTenDoll" type="text" size="31" />
                            <br/>
                            <button className="buttonSend">Відправити</button>
                </div>
        </div>
    );
}
export default donatePage;