import { Request } from '../utils/request';
import { TUserForm, TUserId } from '../types/user';

export function usersList() {
    return Request.get('https://jsonplaceholder.typicode.com/users');
}

export function userDetail(id: TUserId) {
    return Request.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

export function createUser(userFields: TUserForm) {
    return Request.post('https://jsonplaceholder.typicode.com/users/', userFields);
}
