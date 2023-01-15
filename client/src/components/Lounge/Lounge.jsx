import React, {Component} from 'react'

import './Lounge.scss'
import party from './images/party.png'

class Lounge extends Component {
    render() {
        return (
            <div className='lounge'>
                <div className='container_lounge'>
                    <div className='lounge-card__wrapper'>
                        <a href='/error404' className='lounge'>
                            <div className='img'>
                                <img src={party} alt='' className='lounge-card__img'/>
                                <div className='lounge-card__description-wrapper'>
                                    <div className='lounge-card__content'>
											<span className='lounge-card__date'>
												5.0
											</span>
                                        <h2 className='lounge-card__title'>
                                            Мята Platinum | Лубянка
                                        </h2>
                                    </div>
                                    <a href='/error404' className='lounge-card__link'>Смотреть<span className='lounge-card__link-arrow'>&rarr;</span></a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='lounge-card__wrapper'>
                        <a href='/error404' className='lounge'>
                            <div className='img'>
                                <img src={party} alt='' className='lounge-card__img'/>
                                <div className='lounge-card__description-wrapper'>
                                    <div className='lounge-card__content'>
											<span className='lounge-card__date'>
												5.0
											</span>
                                        <h2 className='lounge-card__title'>
                                            Мята Platinum | Лубянка
                                        </h2>
                                    </div>
                                    <a href='/error404' className='lounge-card__link'>Смотреть<span className='lounge-card__link-arrow'>&rarr;</span></a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='lounge-card__wrapper'>
                        <a href='/error404' className='lounge'>
                            <div className='img'>
                                <img src={party} alt='' className='lounge-card__img'/>
                                <div className='lounge-card__description-wrapper'>
                                    <div className='lounge-card__content'>
											<span className='lounge-card__date'>
												5.0
											</span>
                                        <h2 className='lounge-card__title'>
                                            Мята Platinum | Лубянка
                                        </h2>
                                    </div>
                                    <a href='/error404' className='lounge-card__link'>Смотреть<span className='lounge-card__link-arrow'>&rarr;</span></a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='lounge-card__wrapper'>
                        <a href='/error404' className='lounge'>
                            <div className='img'>
                                <img src={party} alt='' className='lounge-card__img'/>
                                <div className='lounge-card__description-wrapper'>
                                    <div className='lounge-card__content'>
											<span className='lounge-card__date'>
												5.0
											</span>
                                        <h2 className='lounge-card__title'>
                                            Мята Platinum | Лубянка
                                        </h2>
                                    </div>
                                    <a href='/error404' className='lounge-card__link'>Смотреть<span className='lounge-card__link-arrow'>&rarr;</span></a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lounge