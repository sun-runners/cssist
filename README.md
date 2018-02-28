cssist
=======

Cssist is a JavaScript library that automatically generates classes so that you can develop the web without css

<br/>

DEMO
-------
<!-- https://kimsunwook.github.io/cssist/index.html -->
https://kimsunwook.github.io/cssist

<br/>

INSTALL
-------

```
bower install cssist --save
```

<br/>

Quick start
-------

Copy-paste the ```<script>``` into your ```<body>```.

<br/>

cssist.js

```
<script src=".bower_components/cssist/cssist.js"></script>
```
or
```
<script src="https://raw.githubusercontent.com/KimSunWook/cssist/v1.1.15/cssist.js"></script>
```

<br/>

USAGE
-----

index.html
```
<!-- If you do not assign the CSSIST attribute to a specific element, it applies to the <body> element by default. -->
<body></body>
```
or
```
<body>
  ...
  <!-- Give the cssist attribute to the parent of the region you want to apply cssist to. ( Default: <body> ) -->
  <div cssist></div>
  ...
</body>
```

template.html (without css)
```
<div class="w-100px h-100px"></div> // width: 100px, height: 100px box
```

<br/>

Easy!
