import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import './Menu.scss'

class Menu extends Component {
    render() {
        return (
            <Router>
                <div className='menu'>
                    <div className='container_menu'>
                        <div className='menu__wrapper'>
                            <a href='/' className='menu__logo'></a>
                            <nav className='menu__nav'>
                                <ul className='menu__links'>
                                    <li>
                                        <a href='/place' className='menu__link'>
                                            Заведения
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/news' className='menu__link'>
                                            Новости
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/about' className='menu__link'>
                                            О нас
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/blog' className='menu__link'>
                                            Блог
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/franchise' className='menu__link'>
                                            Франшиза
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/contacts' className='menu__link'>
                                            Контакты
                                        </a>
                                    </li>
                                    <span className='menu__member'></span>
                                </ul>
                            </nav>
                        </div>
                        <a href='/loyalty' className='btn_download'>Скачать приложение</a>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Menu