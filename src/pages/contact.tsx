import React, { Component, FormEvent, ChangeEvent, createRef } from 'react';

import Layout, { PageWrapper } from '@/helpers/layout';
import styles from '@/styles/contact.module.css';

import NextArrow from '@/helpers/nextArrow';
import Footer from '@/components/footer';
import { myPersonalAndWorkEmail } from '@/utils/meUtils';
import { sendContactForm } from '@/lib/api';
import ErrorForm from '@/helpers/error';

interface ContactProps {}

interface ContactState {
    error: { 
        show: boolean, 
        fields: ErrorFields[] | never[], 
        message: string,
        status: boolean 
    };
    loader: boolean
}

type ErrorFields = {
    name?: string;
    email?: string;
    message?: string;
}

class Contact extends Component<ContactProps, ContactState> {
    formRef: React.RefObject<HTMLFormElement>; // Declare formRef here
    constructor(props: ContactProps) {
        super(props);
        this.state = { 
            error:  {
                show: false,
                fields: [],
                message: '',
                status: false 
            },
            loader: false,
        };
        
        this.formRef = createRef();
    }

    updateErrorState = () => {
        this.setState(prevState => ({
            error: {
                ...prevState.error,
                show: false,
            },
            loader: false
        }));
    };

    hasErrorField = (field: string, list: ErrorFields[]): string => {
        return list.some(fields => fields.hasOwnProperty(field)) ? styles['has-error'] : '';
    };

    onTypingField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const { error } = this.state;
        if(!error.message) return;
        this.setState(prevState => ({
            ...prevState,
            error: {
                ...prevState.error,
                fields: prevState.error.fields.filter(field => field.hasOwnProperty(name) ? !value.trim() : true)
                    .concat(!value.trim() ? { [name]: '' } : []),
            },
        }));
    };

    onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        this.setState(prevState => ({ ...prevState, loader: true }));

        setTimeout(async () => {
            try {
                const response = await sendContactForm(formData);
                const responseData = await response.json();
                if (!response.ok){
                    if (responseData.hasOwnProperty('error'))  {
                        return this.setState(prevState => ({
                            error: {
                                ...prevState.error,
                                fields: responseData.error.fields,
                                show: true,
                                message: responseData.message,
                                status: false,
                            },
                            loader: false
                        }));
                    }
                    return;
                }

                // Reset the form after successful submission
                if (this.formRef.current) {
                    this.formRef.current.reset();
                }

                return this.setState(prevState => ({
                    error: {
                        ...prevState.error,
                        fields: [],
                        show: true,
                        message: responseData.message,
                        status: true,
                    },
                    loader: false
                }));
            } catch (error : any) {
                this.setState(prevState => ({
                    error: {
                        ...prevState.error,
                        fields: [],
                        show: true,
                        message: 'Error submitting contact form: ' + error.message,
                        status: false,
                    },
                    loader: false
                }));
            }
        }, 600);
    }

    render() {
        const { error, loader } = this.state;
        const { show, message, status, fields } = error;

        return (
            <Layout title="Contact">
                <ErrorForm 
                    isError={show}
                    message={message} 
                    timeout={6000} 
                    updateErrorState={this.updateErrorState} 
                    status={status} />
                <PageWrapper title="Contact.">
                    <br/>
                    <p className={styles.intro}>
                        Get in touch or shoot me an email directly on&nbsp; 
                        <a href={`mailto:${myPersonalAndWorkEmail}`} id="cardHover">johncarlo.fullstackdev@gmail.com</a>
                    </p>
                    <form className={styles.form} onSubmit={this.onSubmit} ref={this.formRef}>
                        <div className={`${styles['form-cotntrol']} ${this.hasErrorField('name', fields)}`}>
                            <input type="text" name="name" placeholder="Name" onChange={this.onTypingField}/>
                        </div>
                        <div className={`${styles['form-cotntrol']} ${this.hasErrorField('email', fields)}`}>
                            <input type="text" name="email" placeholder="Email" onChange={this.onTypingField}/>
                        </div>
                        <div className={`${styles['form-cotntrol']} ${this.hasErrorField('message', fields)}`}>
                            <textarea name="message" rows={7} placeholder="Message" onChange={this.onTypingField}></textarea>
                        </div>
                        <button className={styles['btn-send']} id="cardHover">
                            {loader ? (
                                 <>
                                    <span className="loader"></span>
                                    Sending...
                                 </>
                            )  : 'Send Message'}
                        </button>
                    </form>
                    <NextArrow path="/" text="Go Back Home." className="icon-after" />
                    <Footer className="socials" />
                </PageWrapper>
            </Layout>
        );
    }
}

export default Contact;