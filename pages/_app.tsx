import type { AppProps } from "next/app";
import { IntlErrorCode, NextIntlProvider } from "next-intl";

function onError(error: any) {
  if (process.env.NODE_ENV !== "production") {
    if (error.code === IntlErrorCode.MISSING_MESSAGE) {
      console.warn(error);
    } else {
      console.error(error);
    }
  }
}

function getMessageFallback({ namespace, key, error }: any) {
  const path = [namespace, key].filter((part) => part != null).join(".");

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`;
  }
  return `Fix translation message at: ${path}`;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider
      messages={pageProps.messages}
      onError={onError}
      getMessageFallback={getMessageFallback}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
