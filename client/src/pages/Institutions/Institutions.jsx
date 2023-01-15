import React, {Component} from 'react'
import CountriesList from '../../components/CountriesList/CountriesList'

import './Institutions.scss'
import map from './images/map.png'
import Places from '../../components/Places/Places'

class Institutions extends Component {
    render() {
        return (
            <div className='institutions'>
                <div className='container'>
                    <div className='institutions__map'>
                        <div className='institutions__countries'>
                            <CountriesList/>
                        </div>
                        <img src={map} alt='map' className='map'/>
                    </div>
                    <div className='institutions__places'>
                        <Places/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Institutions