import { GeistSans } from 'geist/font/sans';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Router from 'next/router';
import nProgress from 'nprogress';
import '../styles/nprogress.css';
import Footer from '@/components/layout/Footer';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

export default function App({ Component, pageProps }) {
    return (
        <main className={GeistSans.className}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </main>
    );
}
