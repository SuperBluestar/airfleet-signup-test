import React, { useState } from 'react';
import Validator from 'validator';

import Card from '../../elements/Card';
import ValidInput from '../../elements/ValidInput';
import Button from '../../elements/Button';
import { Loader1 } from '../../elements/LoadingSpin';

import './SignUpForm.scss';

export default function SignUpForm () {
    const [firstName, firstNameHandler] = useState('');
    const [firstNameErr, firstNameErrHandler] = useState('');
    const [lastName, lastNameHandler] = useState('');
    const [lastNameErr, lastNameErrHandler] = useState('');
    const [email, emailHandler] = useState('');
    const [emailErr, emailErrHandler] = useState('');
    const [password, passwordHandler] = useState('');
    const [passwordErr, passwordErrHandler] = useState('');
    const [loading, loadingHandler] = useState(false);
    const SubmitHandler = () => {
        let submit$ = true;
        if (firstName == "") {
            firstNameErrHandler("First Name cannot be empty");
            submit$ = false;
        } else {
            firstNameErrHandler("");
        }
        if (lastName == "") {
            lastNameErrHandler("Last Name cannot be empty");
            submit$ = false;
        } else {
            lastNameErrHandler("");
        }
        if (email == "") {
            emailErrHandler("Email cannot be empty");
            submit$ = false;
        }
        else if (!Validator.isEmail(email)) {
            emailErrHandler("Looks like this is not an email");
            submit$ = false;
        } else {
            emailErrHandler("");
        }
        if (password == "") {
            passwordErrHandler("Password cannot be empty");
            submit$ = false;
        } else {
            passwordErrHandler("");
        }
        if (submit$) {
            alert("Done")

            loadingHandler(true)
            setTimeout(() => {
                loadingHandler(false)
            }, 2000);
        }
        return true
    }
  return (
    <Card className="mt-4 signup-form" bgColor="white" textColor="neutral-dark-blue">
        <ValidInput 
            type="text"
            inputValue={firstName}
            inputValueHandler={firstNameHandler}
            validation={firstNameErrHandler}
            errorMessage={firstNameErr}
            placeholder="First Name"
        ></ValidInput>
        <ValidInput 
            type="text"
            inputValue={lastName}
            inputValueHandler={lastNameHandler}
            validation={lastNameErrHandler}
            errorMessage={lastNameErr}
            placeholder="Last Name"
        ></ValidInput>
        <ValidInput 
            type="email"
            inputValue={email}
            inputValueHandler={emailHandler}
            validation={emailErrHandler}
            errorMessage={emailErr}
            placeholder="Email Address"
        ></ValidInput>
        <ValidInput 
            type="password"
            inputValue={password}
            inputValueHandler={passwordHandler}
            validation={passwordErrHandler}
            errorMessage={passwordErr}
            placeholder="Password"
        ></ValidInput>
        <Button 
            bgColor="primary-green"
            textColor="white"
            className={`claim-button font-weight-bold ${true ? '' : 'invalid'}`}
            onClickTrigger={SubmitHandler}
        >
            CLAIM YOUR FREE TRIAL
        </Button>
        <p className={`text-neutral-grayish-blue terms-of-use mt-2 ml-3 mr-3 mb-0 cur-default`}>By clicking the button, you are agreeing to our <a href="" target="_blank" className={`font-weight-bolder text-primary-red cur-pointer `}>Terms and Services</a></p>
        { loading ? 
            <div className="cover">
                <Loader1 />
            </div>
        : ""}
    </Card>
  );
}
