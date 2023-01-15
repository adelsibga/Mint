import React, {Component} from 'react'
import logo from './images/studie.jpg'
import './Error404.scss'

class Error404 extends Component {
    render() {
        return (
            <div className='container container_error'>
                <img src={logo} alt='' className='error__img'/>
                <h2 className='error__title'>
                    Ой...
                </h2>
                <p className='error__text'>
                    Похоже, вы перешли по недействительной ссылке
                    Может быть, это то, что вы ищете
                    <a href='/' className='error__link'> Home</a>
                </p>
            </div>
        )
    }
}

export default Error404