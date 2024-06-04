import * as yup from 'yup'

const SIGNUP_MODEL = {
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone'
}

const loginValidationSchema = yup.object().shape({
    [SIGNUP_MODEL.email]: yup
        .string()
        .email('Email not valid')
        .required('Email is mandatory'),
    [SIGNUP_MODEL.password]: yup.string().required('Password is mandatory'),
    [SIGNUP_MODEL.firstName]: yup.string(),
    [SIGNUP_MODEL.lastName]: yup.string(),
    [SIGNUP_MODEL.phone]: yup.string(),
})

export { SIGNUP_MODEL, loginValidationSchema as validationSchema }