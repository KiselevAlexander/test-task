import React, { useEffect, useState } from 'react';
import { TUser, TUserForm } from '../types/user';
import { useFetch, useFetcher } from '../hooks/use-fetch';
import { createUser, usersList } from '../services/users';

type TUsersListContext = {
    users: TUser[],
    loading: boolean,
    loadingSave: boolean,
    saveUser: (user: TUserForm) => Promise<void>
}
const UsersListContext = React.createContext<TUsersListContext>({
    users: [],
    loading: false,
    loadingSave: false,
    saveUser: async (user: TUserForm) => Promise.reject('Not implemented'),
});

export const useUsersListContext = () => {
    return React.useContext(UsersListContext);
}

export function UsersListContextProvider({ children }: React.PropsWithChildren) {
    const [ users, setUsers ] = useState<TUser[]>([]);
    const { loading, data } = useFetch<TUser[]>(usersList);
    const { loading: loadingSave, execute } = useFetcher<TUser>(createUser);

    useEffect(() => {
        setUsers(data || []);
    }, [ data ]);

    async function saveUser(userFields: TUserForm) {
        const newUser = await execute(userFields);
        setUsers((current) => [
            newUser,
            ...current,
        ]);
    }

    return (
        <UsersListContext.Provider value={ {
            users: users || [],
            loading,
            loadingSave,
            saveUser,
        } }>
            { children }
        </UsersListContext.Provider>
    );
}
