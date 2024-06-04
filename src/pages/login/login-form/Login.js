import { useState } from 'react'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { LOGIN_MODEL, validationSchema } from "./LoginModel"
import Input from "../../../components/input/Input"
import Button from "../../../components/button/Button"
import { MailIcon, LockIcon, EyeOpenIcon, HideIcon } from '../../../assets/icons/icons';
import { StyledLoginFormRoot } from '../styles';
import AuthAPI from '../../../http/user';
import { useNavigate } from 'react-router-dom';
import LocalStorageManager from '../../../utilities/local-storage-manager';
import { Link } from 'react-router-dom';
import { ROUTE_SIGNUP } from '../../../utilities/constants';


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
            const { data } = await AuthAPI.userLogin(values)
            LocalStorageManager.user.set(data?.id);
            navigate("/rezervation")
        }catch{

        }
    }


    return <>
      <StyledLoginFormRoot onSubmit={handleSubmit(onSubmit)} >
            <Input
                type={'email'}
                label={'Email address'}
                placeholder={'Enter your email'}
                touched={touchedFields[LOGIN_MODEL.email]}
                errors={errors[LOGIN_MODEL.email]}
                {...register(LOGIN_MODEL.email)}
                icon={<MailIcon />}
            />
            <Input
                type={showPassword ? 'text' : 'password'}
                label={'Password'}
                placeholder={'Enter your password'}
                touched={touchedFields[LOGIN_MODEL.password]}
                errors={errors[LOGIN_MODEL.password]}
                {...register(LOGIN_MODEL.password)}
                icon={<LockIcon />}
                statusIcon={showPassword ? <EyeOpenIcon /> : <HideIcon />} 
                statusIconCallback={() => setShowPassword(!showPassword)}
            />
            <Button type={'submit'} width={'100%'} variant={'filled'} data='primary'>
                Login
            </Button>
            <Link to={ROUTE_SIGNUP}> Sign Up </Link>
        </StyledLoginFormRoot>
    </>
}

export default LoginForm
