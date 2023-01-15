import React, {Component} from 'react'

import './About.scss'
import about from './images/about.jpg'
import mission from './images/mission.jpg'

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='about__top-img-wrapper'>
                    <img src={about} alt='' className='about__top-img'/>
                </div>
                <div className='container'>
                    <div className='about__history-section'>
                        <h2 className='about-page__title'>
                            Более 7 лет работы сети Lounge баров Мята
                        </h2>
                        <div className='about-page__title-wrapper'>
                            <p className='about__text'>
                                Мята - это уникальный формат заведения, выполненный
                                в индивидуально разработанном современном стиле. Именно
                                здесь у вас есть возможность окунуться из повседневности
                                в расслабляющую атмосферу, в которой царят уют, дружеская
                                обстановка. Xорошо
                                продуманный дизайн - важная часть нашиx заведений.
                            </p>
                            <p className='about__text'>
                                Здесь можно расслабиться,
                                поговорить по душам с друзьями за чашечкой чая
                                и с большим удовольствием провести время. Вечеринки, мероприятия,
                                акции - все это ждет вас в каждом заведении нашей сети.
                            </p>
                        </div>
                        <div className='about__mission'>
                            <img src={mission} alt='' className='about__mission-img'/>
                            <div className='about__mission-content'>
                                <h2 className='about-page__title'>
                                    Наша миссия
                                </h2>
                                <p className='about__mission-text'>
                                    Отдыx — это то, чего порой так
                                    не xватает в суете повседневной
                                    жизни. Мы стремимся сделать отдыx
                                    для гостей максимально комфортным
                                    и доступным.
                                </p>
                            </div>
                        </div>
                        <div className='about__life-line'>
                            <h2 className='about-page__title'>
                                История
                            </h2>
                            <div className='about__history'>
                                <div className='history__item'>
                                    <div className='item__year'>
                                        2014
                                    </div>
                                    <p className='item__text'>
                                        Открытие первого
                                        заведения Мята
                                        Lounge в г. Казань
                                    </p>
                                </div>
                                <div className='history__item'>
                                    <div className='item__year'>
                                        2015
                                    </div>
                                    <p className='item__text'>
                                        Подготовка и запуск
                                        продаж франшизы
                                        Мята Lounge
                                    </p>
                                </div>
                                <div className='history__item'>
                                    <div className='item__year'>
                                        2016
                                    </div>
                                    <p className='item__text'>
                                        Открытие франшиз Мята Lounge в странах СНГ
                                    </p>
                                </div>
                                <div className='history__item'>
                                    <div className='item__year'>
                                        2017
                                    </div>
                                    <p className='item__text'>
                                        Более 100 открытых заведений в России и странах СНГ
                                    </p>
                                </div>
                                <div className='history__item'>
                                    <div className='item__year'>
                                        2018
                                    </div>
                                    <p className='item__text'>
                                        Запуск продаж премиум-сегмента Мята Platinum
                                    </p>
                                </div>
                                <div className='history__item'>
                                    <div className='item__year'>
                                        2020
                                    </div>
                                    <p className='item__text'>
                                        Запуск приложения Мята Loyalty с системой бонусов
                                    </p>
                                </div>
                                <div className='history__item'>
                                    <div className='item__year'>
                                        2022
                                    </div>
                                    <p className='item__text'>
                                        Более 350 открытых заведений. Более чем в 120 городах
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='about__awards'>
                            <h2 className='about-page__title awards__title_indent'>
                                Достижения
                            </h2>
                            <div className='awards-wrapper'>
                                <p className='awards__text'>
                                    7 место в рейтинге «500 лучших франшиз» по версии BusinessMens.ru 2021
                                </p>
                                <p className='awards__text'>
                                    1 место в номинации «Lounge бары и антикафе» в премии 2GIS 2018-2019
                                </p>
                                <p className='awards__text'>
                                    Лучшая сеть lounge баров по версии John Calliano Awards 2017
                                </p>
                                <p className='awards__text'>
                                    1 место Hookah Battle USSR CUP 2017
                                </p>
                                <p className='awards__text'>
                                    1 место в самом крупном Hookah Battle 2015
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About