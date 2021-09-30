import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{/* code that you want to add to the header */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <div id="fb-root"></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "671656946378930");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
            `,
          }}
        />

        <div className="fb-customerchat" id="fb-customer-chat"></div>
      </Html>
    );
  }
}
