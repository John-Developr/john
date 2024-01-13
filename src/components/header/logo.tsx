import React, { Component, HTMLProps } from 'react';
import Router from 'next/router';
import { myName } from '@/utils/meUtils';

interface LogoProps extends HTMLProps<HTMLDivElement> {
    // Define any additional props specific to your component
    className: any;
}

class Logo extends Component<LogoProps> {
    handleGoToHome = () => {
        const { pathname } = Router;
        if (pathname !== '/') {
            return Router.push('/');
        }
    };

    render() {
        const { ...rest } = this.props;

        return (
            <div id="logo" onClick={this.handleGoToHome} {...rest}>
                <h1 id="cardHover">{`${myName.fname}`}</h1>
                <h2 id="cardHover">Full Stack Developer</h2>
            </div>
        );
    }
}

export default Logo;