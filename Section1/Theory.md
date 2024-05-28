## Theory

## Q: What is `Emmet`?

A: `Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`.

For `example` :
1. html:5 gives:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html> 
```

## Q: What is `CDN` ? Why do we use it?

A: CDN is Known as `Content Delivery Network` that provides us different type of assests/features/libraries created by others over the internet.Using CDN reduces our effort to implement a functionality that is already existing somewhere else that we can simply use via cdn

## Q: Why is `React` Known as `React`?

A: It's called `React` because it `reacts`. It was developed by Facebook to improve the user interface development and more effectively change(react to) what the user sees when they are doing things like mouse clicking, submitting and typing..

## Q: What is `crossorigin in script tag`?

A: The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request .The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it used to handle the CORS request.It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
### _Syntax_

```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?
A: `React` is a js library used for buliding user interfaces whereas `ReactDOM` is also a js library that allows `React to interact with the DOM`

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?

A: react.development.js is used for development purpose and the code is not compressed while react.production.js is used for production purposes and the code for this library is compressed.

## Q: What are `async and differ` attributes in `<script>` tag?

A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
```
<script async src="demo_async.js"></script>
```
`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.
```sh
<script defer src="demo_defer.js"></script>
```


## Q: Difference between a `Library and Framework`?

A: A `library` is a piece of code that we can incorporate in our existing project via a CDN or as a package. A library does not affect our project structure whereas a `framework` is a structured set of libraries and packages implementing a particular methodology that we have to follow to create a project.
