import { Route, Routes } from 'react-router-dom';
import { UserDetail } from './user-detail';
import { UserList } from './users-list';
import { UsersListContextProvider } from '../../context/users-list.context';
import { UserDetailProvider } from '../../context/user-detail.context';

export const UsersListPage = () => (
    <div>
        <h1>Users</h1>
        <Routes>
            <Route path='/' element={
                <UsersListContextProvider>
                    <UserList/>
                </UsersListContextProvider>
            }/>
            <Route path=':userId' element={
                <UserDetailProvider>
                    <UserDetail/>
                </UserDetailProvider>
            }/>
        </Routes>
    </div>
)

export default UsersListPage;
