import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';

import { TUserForm } from '../../types/user';


type TUserFormProps = {
    disabled: boolean
}
export const UserForm: React.FC<TUserFormProps> = ({ disabled }) => {
    const { control, formState: { errors } } = useFormContext<TUserForm>();
    console.log(errors);
    return (
        <Form noValidate>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                <Form.Label>Name</Form.Label>
                <Controller
                    control={ control }
                    name='name'
                    render={ ({ field }) => (
                        <Form.Control
                            { ...field }
                            type='text'
                            isInvalid={ !!errors.name }
                            disabled={ disabled }
                        />
                    ) }
                />
                <Form.Control.Feedback type='invalid'>
                    { errors.name?.message }
                </Form.Control.Feedback>
            </Form.Group>
            <Row className='mb-3'>
                <Form.Group as={ Col } className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Email address</Form.Label>
                    <Controller
                        control={ control }
                        name='email'
                        render={ ({ field }) => (
                            <Form.Control
                                { ...field }
                                type='email'
                                placeholder='name@example.com'
                                isInvalid={ !!errors.email }
                                disabled={ disabled }
                            />
                        ) }
                    />
                    <Form.Control.Feedback type='invalid'>
                        { errors.email?.message }
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={ Col } className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Phone</Form.Label>
                    <Controller
                        control={ control }
                        name='phone'
                        render={ ({ field }) => (
                            <Form.Control
                                { ...field }
                                type='phone'
                                placeholder='+7 (000) 000-00-00'
                                isInvalid={ !!errors.phone }
                                disabled={ disabled }
                            />
                        ) }
                    />
                    <Form.Control.Feedback type='invalid'>
                        { errors.email?.message }
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                <Form.Label>Age</Form.Label>
                <Controller
                    control={ control }
                    name='age'
                    render={ ({ field }) => (
                        <Form.Control
                            { ...field }
                            type='text'
                            isInvalid={ !!errors.age }
                            inputMode='decimal'
                            disabled={ disabled }
                        />
                    ) }
                />
                <Form.Control.Feedback type='invalid'>
                    { errors.age?.message }
                </Form.Control.Feedback>
            </Form.Group>
            <Row className='mb-3'>
                <Form.Group as={ Col } className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Password</Form.Label>
                    <Controller
                        control={ control }
                        name='password'
                        render={ ({ field }) => (
                            <Form.Control
                                { ...field }
                                type='password'
                                isInvalid={ !!errors.password }
                                disabled={ disabled }
                            />
                        ) }
                    />
                    <Form.Control.Feedback type='invalid'>
                        { errors.password?.message }
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={ Col } className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Re password</Form.Label>
                    <Controller
                        control={ control }
                        name='rePassword'
                        render={ ({ field }) => (
                            <Form.Control
                                { ...field }
                                type='password'
                                isInvalid={ !!errors.rePassword }
                                disabled={ disabled }
                            />
                        ) }
                    />
                    <Form.Control.Feedback type='invalid'>
                        { errors.rePassword?.message }
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
        </Form>
    );
}
