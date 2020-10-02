import React, { useState } from 'react';
import { useNavigation, usenavigation } from '@react-navigation/native';
import {
    Container,
    CustomButton,
    CustomButtonText,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    InputArea,
    SignMessageButton
} from './styles';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

import SignInput from '../../componets/SignInput';

export default () => {
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }

    const handleSignClick = () => {

    }

    return (
        <Container>
            <BarberLogo width='100%' height='160' />

            <InputArea>
                <SignInput 
                IconSvg={EmailIcon} 
                placeholder='Digite seu e-mail'
                value={emailField}
                onChangeText={t => setEmailField(t)}
                />

                <SignInput 
                IconSvg={LockIcon} 
                placeholder='Digite sua senha'
                value={passwordField}
                onChangeText={t => setPasswordField(t)}
                password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possuí conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
} 