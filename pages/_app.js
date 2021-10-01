import "../styles/globals.css";
import dynamic from "next/dynamic";

// import MessengerCustomerChat from "react-messenger-customer-chat";
const MessengerCustomerChat = dynamic(() =>
  import("react-messenger-customer-chat")
);

function MyApp({ Component, pageProps }) {
  return typeof window === "undefined" ? null : (
    <div suppressHydrationWarning={true}>
      <Component {...pageProps} />
      <MessengerCustomerChat pageId="671656946378930" appId="651615732489589" />
    </div>
  );
}

export default MyApp;
