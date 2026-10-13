import "react";

// WebMCP's Declarative API (https://github.com/webmachinelearning/webmcp) lets a
// plain HTML <form> register itself as an agent-callable tool via these attributes.
// They aren't in React's built-in JSX types yet, so declare them here.
declare module "react" {
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: boolean;
  }
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
  }
  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
  }
  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
  }
}
