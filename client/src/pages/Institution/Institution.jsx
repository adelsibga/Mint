import React, {Component} from 'react'

import './Institution.scss'

class Institution extends Component {
    render() {
        return (
            <div>
                slider
                <div className='container'>
                    <div className='institution__about'>
                        <p className='institution__place'>
                            Россия, Москва, Новая площадь, д. 8с2 +7 985 394-49-55
                        </p>
                        <p className='institution__work-time'>
                            Время с 12:00 до 03:00
                        </p>
                    </div>
                    <div className='institution__reviews'>
                        <div className='institution__mark'>
                            <h2 className='institution__mark-title'>
                                Отзывы
                            </h2>
                            <div className='institution__review'>
                                5.0
                                из 5
                            </div>
                        </div>
                        <div className='slider'>
                            slider
                        </div>
                    </div>
                    <div className='institution__services'>
                        <h2 className='institution__services-title'>
                            Сервис
                        </h2>
                        <div className='institution__services-item'>
                            <p className='service-name'>Бизнес-ланчи</p>
                            <p className='service-name'>PlayStation 4</p>
                            <p className='service-name'>Настольные игры</p>
                            <p className='service-name'>Бесплатный Wi-Fi</p>
                            <p className='service-name'>DJ, вечеринки</p>
                            <p className='service-name'>Прямые трансляции</p>
                            <p className='service-name'>Крепкий алкоголь</p>
                            <p className='service-name'>Своя куxня</p>
                            <p className='service-name'>Еда от партнёров</p>
                            <p className='service-name'>VIP-комнаты</p>
                            <p className='service-name'>Закуски</p>
                            <p className='service-name'>Бесплатная парковка</p>
                            <p className='service-name'>Летняя веранда</p>
                        </div>
                    </div>
                    <div className='institution__map'>

                    </div>
                </div>
            </div>
        )
    }
}

export default Institution