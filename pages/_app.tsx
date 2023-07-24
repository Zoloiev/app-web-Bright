import {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NotistackProvider from "@/components/NotistackProvider";
import JwtProvider from "@/components/authentication/JwtProvider";
import { SWRConfig } from "swr";
import { fetcher } from "@/api";
import { Loading } from '@/components/exception/Loading';
import { Error } from '@/components/exception/Error';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <NotistackProvider>
          <JwtProvider>
            {/* <ErrorBoundary fallback = {<Error />}>
            <Suspense fallback={<Loading />}> */}
          <SWRConfig value={{ fetcher}}>
            <Component {...pageProps} />
            </SWRConfig>
            {/* </Suspense>
            </ErrorBoundary> */}
          </JwtProvider>
        </NotistackProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
