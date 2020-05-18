// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";

interface helloProps {
  text: string;
}

const Hello = ({ text }:helloProps) => (
  <div>
    <h1>Hello World!</h1>
    <hr />
    <p>{text}</p>
  </div>
);

export default ((props: any) => {
  return `<!DOCTYPE html>
    ${
    ReactDOMServer.renderToString(
      (
        <Hello {...props} />
      ),
    )
  }
    `;
});
