import React, {Component} from 'react'
import TinySlider from 'tiny-slider-react'

import './Slider.scss'
import 'tiny-slider/dist/tiny-slider.css'

const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
}

class Slider extends Component {
    render() {
        return (
            <div>
                Slider
            </div>
        )
    }
}

export default Slider