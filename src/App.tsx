import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './layout';

const UsersListPage = React.lazy(() => import('./pages/users'));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={ <Suspense/> }>
                <Routes>
                    <Route path='/' element={ <Layout/> }>
                        <Route path='/users/*' element={ <UsersListPage/> }/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
