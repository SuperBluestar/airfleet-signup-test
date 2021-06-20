import React, { useState} from 'react';
import { 
  Container, 
  Row,
  Col,
} from 'react-bootstrap';

import Card from '../../elements/Card';
import { SignUpForm } from '../../components/SignUpForm';
// Page Custom STYLE
import './SignUpPage.scss';

export interface ISignUpPageProps {
}

export default function SignUpPage (props: ISignUpPageProps): React.ReactElement {
    return (
        <div style={{width: "100%"}}>
            <Container fluid>
                <Row className="signup-page">
                    <Col className={`description col-phone-12 col-tablet-5 col-desktop-6 text-white`}>
                        <div className="mb-5">
                            <h1 className="mb-5">Learn to code by watching others</h1>
                            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                        </div>
                    </Col>
                    <Col className={`panel col-phone-12 col-tablet-7 col-desktop-6`}>
                        <Card className="title cur-default" bgColor="accent-blue" textColor="white">
                            <span><b className="font-weight-bolder">Try it free 7 days</b> then $20/mo. thereafter</span>
                        </Card>
                        <SignUpForm></SignUpForm>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
