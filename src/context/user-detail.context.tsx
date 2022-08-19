import React, { useEffect } from 'react';
import { TUser } from '../types/user';
import { useFetch } from '../hooks/use-fetch';
import { userDetail } from '../services/users';
import { useParams } from 'react-router';

type TUserDetailContext = {
    user: TUser | null,
    loading: boolean,
}
const UserDetailContext = React.createContext<TUserDetailContext>({
    user: null,
    loading: false,
});

export const useUserDetailContext = () => {
    return React.useContext(UserDetailContext);
}

export function UserDetailProvider({ children }: React.PropsWithChildren) {
    const { userId } = useParams<{ userId: string }>()

    const { loading, data: user } = useFetch<TUser>(
        () => userDetail(parseInt(userId as string, 10)),
        [ userId ],
    );

    return (
        <UserDetailContext.Provider value={ {
            user,
            loading,
        } }>
            { children }
        </UserDetailContext.Provider>
    )
}
