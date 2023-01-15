import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <Router>
                    <div className='container container_footer'>
                        <div className='footer__content-wrapper'>
                            <div className='footer__connect'>
                                <h4 className='connect__title'>
                                    Присоединиться
                                </h4>
                                <div className='connect__nav-wrapper'>
                                    <a href='/loyalty' className='connect__link'>Программа лояльности</a>
                                    <a href='/franchise' className='connect__link'>Франшиза</a>
                                </div>
                            </div>
                            <div className='footer__about'>
                                <h4 className='about__title'>
                                    О нас
                                </h4>
                                <div className='about__nav-wrapper'>
                                    <a href='/about' className='about__link'>История компании</a>
                                    <a href='/contacts' className='about__link'>Контакты</a>
                                </div>
                            </div>
                            <div className='footer__member'>
                                <h4 className='member__title'>
                                    Участник
                                </h4>
                            </div>
                        </div>
                        <div className='footer__social-media'>
                            <a href='mailto:info@myataofficial.com' className='social-media__mail'>info@myataofficial.com</a>
                            <div className='footer__media-wrapper'>
                                <a href='https://vk.com/myata.official' target='_blank' className='vk'></a>
                                <a href='https://t.me/myatalounge_official' target='_blank' className='telegram'></a>
                            </div>
                        </div>
                    </div>
                    <div className='footer__law-info'>
                        ООО "Миловидов" ИНН 1659121320 КПП 773001001 <br className='footer__law-info_transfer'/> ОГРН 1121690047214. 2022 Все права
                        защищены
                    </div>
                </Router>
            </footer>
        )
    }
}

export default Footer