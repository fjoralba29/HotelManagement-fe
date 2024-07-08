// import * as yup from 'yup'

// const LOGIN_MODEL = {
//     email: 'email',
//     password: 'password',
// }

// const loginValidationSchema = yup.object().shape({
//     [LOGIN_MODEL.email]: yup
//         .string()
//         .email('Email not valid')
//         .required('Email is mandatory'),
//     [LOGIN_MODEL.password]: yup.string().required('Password is mandatory'),
// })

// export { LOGIN_MODEL, loginValidationSchema as validationSchema }

import { z } from 'zod';

const LOGIN_MODEL = {
    email: 'email',
    password: 'password',
};

const loginValidationSchema = z.object({
    email: z
        .string()
        .email('Email not valid')
        .nonempty('Email is mandatory'),
    password: z
        .string()
        .nonempty('Password is mandatory'),
});

export { LOGIN_MODEL, loginValidationSchema as validationSchema };