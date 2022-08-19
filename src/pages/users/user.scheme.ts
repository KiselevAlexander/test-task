import * as yup from 'yup';

export const userScheme = yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email('Invalid email format').required(),
    age: yup.number().min(18).max(100).required(),
    password: yup.string().min(8).max(50).required(),
    rePassword: yup.string().when('password', {
        is: (value: string) => value,
        then: yup.string().min(8).max(50).required().test('re-password', (value, { path, parent, createError }) => {
            if (!parent.password || parent.password === value) {
                return true;
            }
            return createError({ path, message: 'Passwords do not match' });
        }),
    }),
});
