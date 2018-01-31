An example app to demonstrate an error I'm seeing when trying to import SCSS into the React component being rendered into the index.html by HtmlWebpackPlugin.

Run the following commands inside the folder you clone:
```
npm install
npm start
```
Then navigate to localhost:3001.

As can be seen in branch [no-loading-css](https://github.com//calumjames/htmlwebpackplugin-error-react-rendering/tree/no-loading-css), if [the line that imports the SCSS in the `Loading` component](src/components/Loading.js#L3) is commented out, the app runs fine and the component is rendered into the resulting index.html. When that line is commented out, you see the following error:

> Error: /Users/calumjames/htmlwebpackplugin-error-react-rendering/tools/webpack/indexRenderer:5396<br/>return window && document && document.all && !window.atob;<br/>^<br/>ReferenceError: window is not defined
