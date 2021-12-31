import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { light } from '../themes/light';
import GlobalStyles from '@/styles/globalstyles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
