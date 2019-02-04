import React, { Component } from 'react';
import logo from './splash.svg';
import './index.scss';
import {Container, Row, Col} from 'reactstrap';

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Container>
                        <Row>
                            <Col md="6" xs='12'>
                                <div className='divCenter'>
                                    <div>
                                        <h4 className='subText'>
                                            EXTRACT COLORS FROM LOGOS <br/>
                                            AND IMAGES
                                        </h4>
                                        <p>&nbsp;</p>
                                        <p className='text'>
                                            RBGCOLORS also powers Multicolr, our color search lab, and is available for licensing as a hosted API. Learn more about MulticolorEngine, its pricing and documentation.
                                        </p>
                                        <p className='text'>
                                            RBGCOLORS also powers Multicolr, our color search lab, and is available for licensing as a hosted API. Learn more about MulticolorEngine, its pricing and documentation.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" xs='12'><img src={logo} alt='logo'/></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default HomePage;
