# Installation

## cssist
You can use bower or npm to install this package

```shell
# for bower
bower install cssist --save

# for npm
npm install cssist

```
## Usage

Paste the `<script>` tag into the `<body>` of your html file

```html
<!-- If you are using bower -->
<script src="./bower_components/cssist/cssist.js"></script>

<!-- If you are using npm -->
<script src="./node_modules/cssist/cssist.js"></script>

```

Set the root element.

```html    
<!-- Default: It calculates the class of every element inside the body by default. -->
...
<body></body>
...

<!-- Optional: Set cssist attribute to specific element. It optionally computes the class of all elements within a particular element. -->
...
<div cssist></div>
...
```

## Quick Start

### CssistCDN

Looking to quickly use cssist classes on your project? you can use cssist CDN, this can be used as free. Here is for you.
- Copy-paste the script into your html project and now you can use our cssist classes.

```html
    <script src="https://cssist.s3-ap-northeast-1.amazonaws.com/cssist-2.1.3.min.js"></script>
    <script src="https://cssist.s3-ap-northeast-1.amazonaws.com/cssist-2.1.3.js"></script>
```

## cssist-cli
Compiles all the cssist classes used in a project.

```shell
npm install cssist-cli

#cssist build
cssist build -p /path/of/files/to/compile --dp /path/to/write/cssfile
```


