import React, {Component} from 'react'
import Slider from '../../components/Slider/Slider'
import News from '../../components/News/News'

import './Home.scss'

class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <News/>
            </div>
        )
    }
}

export default Home