import { injectGlobal } from 'styled-components';
import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript } from 'next/document';

injectGlobal`
  body {
    margin: 0;
    font-family: rubik;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>User Finder</title>
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:300,400,500"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
