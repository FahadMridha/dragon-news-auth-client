import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header';
import LeftSideNav from '../pages/shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../pages/shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2">
                    <h2><LeftSideNav></LeftSideNav></h2>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;<Outlet></Outlet>