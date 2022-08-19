import { TRole } from './role';

export type TUserId = number;

export type TUser = {
    id: TUserId;
    name: string;
    phone: string;
    website: string;
    email: string;
    roles: TRole[];
    company: {
        name: string;
    };
}


export type TUserForm = Pick<TUser, 'name' | 'email' | 'phone' | 'roles'> & {
    age: string;
    password: string;
    rePassword: string;
}
