import React, { Component } from 'react';
import Link from 'next/link';

import styles from '@/styles/resume.module.css';
import Layout, { PageWrapper } from '@/helpers/layout';
import NextArrow from '@/helpers/nextArrow';
import Footer from '@/components/footer';
import { myResumeEmbedURL, myResumeFilePath } from '@/utils/meUtils';

class Projects extends Component {
    render() {
        return (
            <Layout title="Resume">
                <PageWrapper title="Resumé.">
                    <br/>
                    <p className={styles.intro}>Reach out to me via my <Link href="/contact" id="cardHover">contact page</Link>. <a href={myResumeFilePath} id="cardHover">view</a> or <a href={myResumeFilePath} id="cardHover" download>download</a> the resume</p>
                    <div className={styles['my-resume']}>
                        <div className={styles['frame-container']}>
                            <iframe className={styles['frame']} loading="lazy" src={myResumeEmbedURL} allowFullScreen={false} allow="fullscreen" />
                        </div>
                    </div>
                    <NextArrow path="/contact" text="Are you convinced to contact me now?" className="icon-after" />
                    <Footer className="socials" />
                </PageWrapper>
            </Layout>
        );
    }
}

export default Projects;
