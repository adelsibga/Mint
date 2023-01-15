import React, {Component} from 'react'

import './Franchise.scss'
import franchise from './images/franchise.jpg'

class Franchise extends Component {
    render() {
        return (
            <div className='franchise'>
                <div className='franchise__top-img-wrapper'>
                    <img src={franchise} alt='' className='franchise__top-img'/>
                    <h2 className='franchise__top-title'>
                        Вдохновляем
                    </h2>
                    <div className='franchise__button-wrapper'>
                        <a href='/error404' className='franchise__button'>
                            Посмотреть заведения
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <div className='franchise__owner'>
                        <h2 className='owner__title'>
                            Стань владельцем успешного бизнеса
                        </h2>
                        <div className='owner__item-wrapper'>
                            <div className='owner__item'>
                                <h3 className='owner__item-title'>
                                    Инвестиции от
                                </h3>
                                <p className='owner__item-text'>
                                    5 <span className='owner__item-text_small'>млн ₽</span>
                                </p>
                            </div>
                            <div className='owner__item'>
                                <h3 className='owner__item-title'>
                                    Открытие от
                                </h3>
                                <p className='owner__item-text'>
                                    28 <span className='owner__item-text_small'>дней</span>
                                </p>
                            </div>
                            <div className='owner__item'>
                                <h3 className='owner__item-title'>
                                    Доход от
                                </h3>
                                <p className='owner__item-text'>
                                    250 000 ₽
                                </p>
                            </div>
                            <div className='owner__item'>
                                <h3 className='owner__item-title'>
                                    Окупаемость от
                                </h3>
                                <p className='owner__item-text'>
                                    10
                                </p>
                                <span className='owner__item-text_small'>месяцев</span>
                            </div>
                            <div className='owner__item'>
                                <h3 className='owner__item-title'>
                                    Более
                                </h3>
                                <p className='owner__item-text'>
                                    7 лет
                                </p>
                                <span className='owner__item-text_small'>успешной работы</span>
                            </div>
                            <div className='owner__item'>
                                <h3 className='owner__item-title'>
                                    Открыто
                                </h3>
                                <p className='owner__item-text'>
                                    350
                                </p>
                                <span className='owner__item-text_small'>Lounge баров</span>
                            </div>
                        </div>
                    </div>
                    <div className='franchise__reseller'>
                        <h2 className='reseller__title'>
                            Став нашим партнером, вы получаете
                        </h2>
                        <div className='reseller__item-wrapper'>
                            <div className='reseller__item'>
                                <p className='reseller__text'>Личного куратора</p>
                            </div>
                            <div className='reseller__item'>
                                <p className='reseller__text'>Помощь при выборе места</p>
                            </div>
                            <div className='reseller__item'>
                                <p className='reseller__text'>Смету ремонтных работ</p>
                            </div>
                            <div className='reseller__item'>
                                <p className='reseller__text'>Рекомендации по дизайну интерьера</p>
                            </div>
                            <div className='reseller__item'>
                                <p className='reseller__text'>Контакты всех поставщиков</p>
                            </div>
                            <div className='reseller__item'>
                                <p className='reseller__text'>Поддержку опытных специалистов</p>
                            </div>
                        </div>
                        <div className='reseller__video'>
                            <video src='https://www.youtube.com/watch?v=55bZFy93zss&t=2s'></video>
                        </div>
                        <div className='reseller__button-wrapper'>
                            <a href='/error404' className='reseller__button'>Посмотреть заведения</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Franchise