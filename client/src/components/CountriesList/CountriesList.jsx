import React, {Component} from 'react'

import './CountriesList.scss'

class CountriesList extends Component {
    render() {
        return (
            <div className='countries-wrapper'>
                <span className='country'>Армения</span>
                <span className='country'>Беларусь</span>
                <span className='country'>Казахстан</span>
                <span className='country'>Кыргызстан</span>
                <span className='country'>Польша</span>
                <span className='country active'>Россия</span>
                <span className='country'>Таджикистан</span>
                <span className='country'>Узбекистан</span>
                <span className='country'>Украина</span>
            </div>
        )
    }
}

export default CountriesList