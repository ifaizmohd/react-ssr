import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "../client/Routes";
import serializeJavascript from "serialize-javascript";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script>
              if(window) {
                window.INITIAL_STATE = ${serializeJavascript(store.getState())}
              }
            </script>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;
};

// https://react-ssr-api.herokuapp.com