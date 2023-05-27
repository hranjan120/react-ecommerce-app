import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import PageTitleComp from "../../components/PageTitleComp"
import DashboardPage from './DashboardPage';
import FavouritePage from './FavouritePage';
import UserOrdersPage from './UserOrdersPage';
import DashboardError from './DashboardError';

export default function DashboardLayout() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayoutInternsl />}>
                <Route index element={<DashboardPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="favourite" element={<FavouritePage />} />
                <Route path="orders" element={<UserOrdersPage />} />
                <Route path="*" element={<DashboardError />} />
            </Route>
        </Routes>
    );
}


function DashboardLayoutInternsl() {
    const [pageTitle, setPageTitles] = useState('Dashboard');
    const location = useLocation();
    const urls = location.pathname;
    useEffect(() => {
        if (urls === '/user/' || urls === '/user' || urls === '/user/dashboard' || urls === '/user/dashboard/') {
            setPageTitles('Dashboard')
        }
        if (urls === '/user/favourite' || urls === '/user/favourite/') {
            setPageTitles('Favourite')
        }
        if (urls === '/user/orders' || urls === '/user/orders/') {
            setPageTitles('Orders')
        }
    }, [urls]);

    return (
        <>
            <PageTitleComp title={'User / ' + pageTitle} />
            <Container>
                <Row>
                    <Col xs={3} md={3} lg={3} className='mt-4 mb-4 p-5'>
                        <div className="list-group">
                            <Link className='list-group-item list-group-item-action' to="/user/dashboard">User Dashboard</Link>
                            <Link className='list-group-item list-group-item-action' to="/user/favourite">Favourite Items</Link>
                            <Link className='list-group-item list-group-item-action' to="/user/orders">User Orders</Link>
                        </div>
                    </Col>
                    <Col xs={9} md={9} lg={9} className='mt-4 mb-4 p-5'>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>

    );
}