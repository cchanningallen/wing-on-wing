import '../styles/tailwind.css';
import Header from '../components/header';

function App({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default App;
