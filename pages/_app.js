import "../styles/globals.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* app won't render anything unless the window object is defined; instead the server just returns null */}
      {typeof window === "undefined" ? null : (
        <div>
          <Component {...pageProps} />
          <MessengerCustomerChat
            pageId="671656946378930"
            appId="651615732489589"
          />
        </div>
      )}
    </>
  );
}

export default MyApp;
