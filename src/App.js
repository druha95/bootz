import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.scss';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <h1 className={'logo'}>
                        Boozt
                    </h1>
                    <nav className={'navbar navbar-dark bg-dark'}>
                        <ul className={'navbar-nav'}>
                            <li className={'nav-item active'}>
                                <Link className={'nav-link'} to='/'>All Products</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={'container'}>
                        <Route path='/' component={MainPage} />
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default AppRouter;