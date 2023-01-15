import React, {Component} from 'react'

import './News.scss'

import party from './images/dj-party.png'
import champ from './images/champ.png'
import anis from './images/dj-anis.png'
import weekend from './images/weekend.png'

class News extends Component {
    render() {
        return (
            <div className='container wall'>
                <div className='news-wall'>
                    <div className='container_news'>
                        <div className='news-card__wrapper'>
                            <a href='/error404' className='news'>
                                <div className='img'>
                                    <img src={party} alt='' className='news-card__img'/>
                                    <div className='news-card__description-wrapper'>
                                        <div className='news-card__content'>
											<span className='news-card__date'>
												19 ноября 2022
											</span>
                                            <h2 className='news-card__title'>
                                                Ok, Google! Где провести вечер в субботу?
                                            </h2>
                                        </div>
                                        <a href='/error404' className='news-card__link'>Смотреть<span className='news-card__link-arrow'>&rarr;</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='container_news'>
                        <div className='news-card__wrapper'>
                            <a href='/error404' className='news'>
                                <div className='img'>
                                    <img src={champ} alt='' className='news-card__img'/>
                                    <div className='news-card__description-wrapper'>
                                        <div className='news-card__content'>
											<span className='news-card__date'>
												18 ноября 2022
											</span>
                                            <h2 className='news-card__title'>
                                                Чемпионата мира по футболу 2022 в Мята Platinum | Кутузов ⚽
                                            </h2>
                                        </div>
                                        <a href='/error404' className='news-card__link'>Смотреть<span className='news-card__link-arrow'>&rarr;</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='container_news'>
                        <div className='news-card__wrapper'>
                            <a href='/error404' className='news'>
                                <div className='img'>
                                    <img src={anis} alt='' className='news-card__img'/>
                                    <div className='news-card__description-wrapper'>
                                        <div className='news-card__content'>
											<span className='news-card__date'>
												18 ноября 2022
											</span>
                                            <h2 className='news-card__title'>
                                                DJ Анис в Мята | Вернадка
                                            </h2>
                                        </div>
                                        <a href='/error404' className='news-card__link'>Смотреть<span className='news-card__link-arrow'>&rarr;</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='container_news'>
                        <div className='news-card__wrapper'>
                            <a href='/error404' className='news'>
                                <div className='img'>
                                    <img src={weekend} alt='' className='news-card__img'/>
                                    <div className='news-card__description-wrapper'>
                                        <div className='news-card__content'>
											<span className='news-card__date'>
												17 ноября 2022
											</span>
                                            <h2 className='news-card__title'>
                                                Weekend в Мята | Сретенка 😻
                                            </h2>
                                        </div>
                                        <a href='/error404' className='news-card__link'>Смотреть<span className='news-card__link-arrow'>&rarr;</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <a href='/news' className='news__button'>Смотреть все</a>
            </div>
        )
    }
}

export default News