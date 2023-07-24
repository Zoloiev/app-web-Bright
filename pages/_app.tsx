import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NotistackProvider from "@/components/NotistackProvider";
import JwtProvider from "@/components/authentication/JwtProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <NotistackProvider>
          <JwtProvider>
            <Component {...pageProps} />
          </JwtProvider>
        </NotistackProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
