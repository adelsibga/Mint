import React, {Component} from 'react'

import './News.scss'
import Lounge from '../../components/Lounge/Lounge'
import about from './images/news.jpg'

class News extends Component {
    render() {
        return (
            <div className='news'>
                <div className='news__top-img-wrapper'>
                    <img src={about} alt='' className='news__top-img'/>
                    <h2 className='news__top-title container'>
                        Новости и мероприятия федеральной сети
                    </h2>
                </div>
                <div className='container news__container'>
                    <div className='news__title-wrapper'>
                        <h2 className='news__title'>
                            Новости
                        </h2>
                        <select className='news__select' name='news__select' id=''>
                            <option value=''>Федеральные</option>
                        </select>
                    </div>
                    <Lounge/>
                </div>
            </div>
        )
    }
}

export default News