import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";

const Contacts = () => {
    return (
        <div>
            <div className="location">
                <div className="textLocation">
                    <p>г. Ташкент, ул. Буюк Ипак Йули 114/3 (ориентир - гостиница "Саёхат")</p>
                    <p>+998 (90) 788-66-47</p>
                    <p>+998 (90) 926-89-93</p>
                    <p>info@pro-consult.uz</p>
                </div>
                <div className="mapLocation">
                    <YMaps>
                        <Map
                            defaultState={{
                                center: [41.327289, 69.333528],
                                zoom: 16,
                            }}
                            width={800}
                            height={320}>
                            <Placemark geometry={[41.327289, 69.333528]}/>
                        </Map>
                    </YMaps>

                </div>
            </div>
        </div>
    );
};

export default Contacts;