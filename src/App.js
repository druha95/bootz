import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <nav className={'navbar navbar-dark bg-dark'}>
                        <ul className={'navbar-nav'}>
                            <li className={'nav-item active'}>
                                <Link className={'nav-link'} to='/'>Products</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={'container-fluid'}>
                        <Route path='/' component={MainPage} />
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default AppRouter;