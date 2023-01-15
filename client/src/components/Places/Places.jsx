import React, {Component} from 'react'

import './Places.scss'
import Lounge from '../Lounge/Lounge'

class Places extends Component {
    render() {
        return (
            <div className='places'>
                <h2 className='places__title'>
                    Федеральная сеть Lounge баров Мята
                </h2>
                <div className='places-wrapper'>
                    <h2 className='places__country'>
                        Россия
                    </h2>
                </div>
                <Lounge/>
            </div>
        )
    }
}

export default Places