import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap globally

import { Quicksand } from 'next/font/google';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import { StateContext } from '../context/StateContext';

const quicksand = Quicksand({ subsets: ['latin'] });

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  .page-container {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .page-container.page-loading {
    opacity: 0;
  }
`;

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsPageLoading(true);
    const handleComplete = () => setIsPageLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <main className={quicksand.className}>
      <GlobalStyle />
      <div className={`page-container ${isPageLoading ? 'page-loading' : ''}`}>

          <Component {...pageProps} />

      </div>
    </main>
  );
};

export default App;


