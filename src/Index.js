import React from 'react';

import { Loading } from './components/Loading';

const Index = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Test HtmlWebpackPlugin and ExtractTextPlugin Config</title>
      </head>
      <body>
        <main>
          <Loading />
        </main>
      </body>
    </html>
  );
};

export { Index };
