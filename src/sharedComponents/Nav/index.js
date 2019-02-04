import React,{Component} from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import Logo from './icon.svg';

class Navigation extends Component{

    state = {
        open: false,
        hamburger: "&#9776;",
        navbarWhite: '',

    }

    componentDidMount (){
        window.addEventListener('scroll',()=>{
            window.scrollY > 0  && this.setState({navbarWhite:'white'});
            window.scrollY === 0  && this.setState({navbarWhite:''});
        })

    }

    openNav = e => {
        e.preventDefault();
        this.setState({open:!this.state.open});
    }

    render(){
        const {open,navbarWhite} = this.state;
        return(

            <div className= 'fm-navbar-menu'>
                <div className={open ? 'bg-white' : ''}>
                    <div className={`fm-navbar-body ${navbarWhite}`}>
                        <div className='logo'>
                            <div className={open ? 'txt-black' : ''}>
                                <span>
                                    <img src={Logo} style={{width:"100%", height:"100%"}}/>
                                </span>
                            </div>
                            <div className='nav-lg'>
                                <div>
                                    <Link to='/'>
                                        <span> Home</span>
                                    </Link>
                                    <Link to='/products'>
                                        <span>Products</span>
                                    </Link>
                                    <Link to='/about'>
                                        <span> About</span>
                                    </Link>
                                    <Link to='/contact'>
                                        <span> Contact</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='fm-navbar-nav'>
                            <div className='bt-menu' onClick={(e)=>this.openNav(e)}>&#9776;
                            </div>
                            { open &&
                            <div>
                                <div className='nav'>
                                    <Link to='/'>
                                        <span> Home</span>
                                    </Link>
                                    <Link to='/products'>
                                        <span>Products</span>
                                    </Link>
                                    <Link to='/about'>
                                        <span> About</span>
                                    </Link>
                                    <Link to='/contact'>
                                        <span> Contact</span>
                                    </Link>
                                </div>
                                <div className='fm-navbar-social'>
                                    <ul>
                                        <li><b>Instagram</b></li>
                                        <li><b>Facebook</b></li>
                                        <li><b>Twitter</b></li>
                                    </ul>
                                </div>
                            </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        )


    }

}

export default Navigation