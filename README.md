# Stock Katalogue

Example stock application built using React, ES2015/Babel and Webpack.

## Installation

Ensure `npm` is installed.  You may also need to install Webpack globally with `npm install -g webpack`.

Clone the repo and run `npm install`.

`npm build` will output the app to `/dist`.

Run a local server inside `/dist` to play with the app.  I recommend `python -m SimpleHTTPServer` and visting your localhost on the reported port number.

## Development

I haven't bothered with a full tooling setup for this demo.  Webpack is used for JSX, Babel and uglify/compress transformation, but I have avoided a full Gulp workflow in favour of minimal `npm scripts` for autoprefixing, SCSS compilation and file output.  See `package.json`.

## Notes

I considered using Flux/Redux architecture for the application but ran with standard props/state to keep things more straightforward.  Obviously for scalability purposes I would want to refactor and add a Flux type setup with actions for adding stock etc.

The initial data is passed as a prop to the App component and is then passed down to the StockList - hydration could be performed here, either as a bootstrapped and rendered tag in the HTML payload, or via an XHR request on load.

I relied upon HTML5 native inputs in the AddStockForm component for basic validation and user feedback.  I was tempted to build out custom components for a more consistent/richer UX but elected to keep things basic.  The date picker UI is decent on Chrome/Webkit but varies wildly in other user agents.

The StockList component is read-only and could easily be extended with edit and delete actions.  I relied on `componentDidMount()` with passed-in `key` ordering to ensure the list renders properly when performing CSS 'new row added' effects.  Need to investigate the peformance implications of `key` use.  I also used the product `name` as a `key` which will obviously break if duplicates are involved.

CSS styling has been provided with a basic SCSS file for the entire app.  I didn't want to add Bootstrap/Material and bloat things out further.  Added `classNames` to the App subcomponents in order to hook into them.  In production I would want to inline the critical styles in the `<head>` of the page in order to reduce load times.

Speaking of progressive enhancement, an approach I want to explore is rendering a basic HTML 'app shell' from the server, then rendering the React app into its containers once loaded.  In this app, the `<header>` and placeholders for the two main components could have been rendered up-front, with spinners/tombstoning in place.  Planning to develop this approach in the future.

Unfortunately I didn't have time to provide unit tests, please forgive me. :)
