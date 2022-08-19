import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TUserForm } from '../../types/user';
import { UserForm } from './user-form';
import { userScheme } from './user.scheme';
import { useUsersListContext } from '../../context/users-list.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


type TUserAddModalProps = {
    open: boolean,
    onClose: () => void,
}
export const UserAddModal: React.FC<TUserAddModalProps> = ({ open, onClose }) => {
    const { saveUser, loadingSave } = useUsersListContext();
    const methods = useForm<TUserForm>({
        resolver: yupResolver(userScheme),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            rePassword: '',
            age: '',
        },
    });

    const { handleSubmit } = methods;

    async function handlerSubmit(fields: TUserForm) {
        await saveUser(fields);
        onClose();
    }

    return (
        <Modal show={ open } onHide={ onClose }>
            <Modal.Header closeButton>
                <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormProvider { ...methods }>
                    <UserForm disabled={ loadingSave }/>
                </FormProvider>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant='primary'
                    onClick={ handleSubmit(handlerSubmit) }
                    disabled={ loadingSave }
                >
                    { loadingSave ? 'Saving…' : 'Save' }
                </Button>
                <Button
                    variant='secondary'
                    onClick={ onClose }
                    disabled={ loadingSave }
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
