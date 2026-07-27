// React 18's types only know the camelCase fetchPriority (which its runtime
// warns on); the lowercase attribute is the form React 18 passes to the DOM.
declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}
export {};
