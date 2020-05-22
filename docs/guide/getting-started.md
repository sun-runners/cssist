# Getting Started

## Installation
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

