import { useState } from 'react'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { SIGNUP_MODEL, validationSchema } from "./RegisterModel"
import Input from "../../../components/input/Input"
import Button from "../../../components/button/Button"
import { MailIcon, LockIcon, EyeOpenIcon, HideIcon } from '../../../assets/icons/icons';
import { StyledLoginFormRoot } from '../styles';
import AuthAPI from '../../../http/user';
import { useNavigate, Link } from 'react-router-dom';
import { ROUTE_LOGIN } from '../../../utilities/constants';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const methods = useForm({
        shouldUnregister: false,
        mode: 'onChange',
        reValidateMode: 'onChange',
        nativeValidation: false,
        shouldFocusError: true,
        resolver: yupResolver(validationSchema),
    })

    const {
        register,
        control,
        handleSubmit,
        formState: {errors,touchedFields},
    } = methods

    const onSubmit = async (values) => {
        try{
            const { data } = await AuthAPI.userSignup(values)
            navigate("/login")
        }catch (error) {
            console.log(error);
        }
    }


    return <>
      <StyledLoginFormRoot onSubmit={handleSubmit(onSubmit)} >
            <Input
                type={'text'}
                label={'Frist name'}
                placeholder={'Enter your first name'}
                touched={touchedFields[SIGNUP_MODEL.firstName]}
                errors={errors[SIGNUP_MODEL.firstName]}
                {...register(SIGNUP_MODEL.firstName)}
                icon={<MailIcon />}
            />
            <Input
                type={'text'}
                label={'Last name'}
                placeholder={'Enter your last name'}
                touched={touchedFields[SIGNUP_MODEL.lastName]}
                errors={errors[SIGNUP_MODEL.lastName]}
                {...register(SIGNUP_MODEL.lastName)}
                icon={<MailIcon />}
            />
            <Input
                type={'email'}
                label={'Email address'}
                placeholder={'Enter your email'}
                touched={touchedFields[SIGNUP_MODEL.email]}
                errors={errors[SIGNUP_MODEL.email]}
                {...register(SIGNUP_MODEL.email)}
                icon={<MailIcon />}
            />
            <Input
                type={showPassword ? 'text' : 'password'}
                label={'Password'}
                placeholder={'Enter your password'}
                touched={touchedFields[SIGNUP_MODEL.password]}
                errors={errors[SIGNUP_MODEL.password]}
                {...register(SIGNUP_MODEL.password)}
                icon={<LockIcon />}
                statusIcon={showPassword ? <EyeOpenIcon /> : <HideIcon />} 
                statusIconCallback={() => setShowPassword(!showPassword)}
            />
            <Input
                type={'text'}
                label={'Phone'}
                placeholder={'+355XXXXXXXXX'}
                touched={touchedFields[SIGNUP_MODEL.phone]}
                errors={errors[SIGNUP_MODEL.phone]}
                {...register(SIGNUP_MODEL.phone)}
                icon={<MailIcon />}
            />

            <Button type={'submit'} width={'100%'}>
                Register
            </Button>
            <Link to={ROUTE_LOGIN}> Log in </Link>
        </StyledLoginFormRoot>
    </>
}

export default LoginForm
