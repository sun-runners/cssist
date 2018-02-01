ngGradient
=======

ngGradient is an angularjs library that creates gradient animations with granim.js

<br/>

DEMO
-------
https://kimsunwook.github.io/ngGradient

(granim.js: https://github.com/sarcadass/granim.js)

<br/>

INSTALL
-------

```
bower install ng-gradient --save
```

<br/>

Quick start
-------

Copy-paste the stylesheet <script> into your <body>.

```
<script src=".bower_components/ng-gradient/ngGradient.js"></script>
```
or
```
<script src=".bower_components/ng-gradient/ngGradient.min.js"></script>
```
or
```
<script src="https://raw.githubusercontent.com/KimSunWook/ngGradient/master/ngGradient.js"></script>
```
or
```
<script src="https://raw.githubusercontent.com/KimSunWook/ngGradient/master/ngGradient.min.js"></script>
```

<br/>

USAGE
-----

Make sure you include the module 'ngGradient' in your application config

app.js

```
angular.module('myApp', [
  'ngGradient',
  ...
]);
```

ctrl.js

```
'use strict';

angular.module('app')
  .controller('Ctrl', function($scope) {

    $scope.onStart = function() {
      console.log('start');
    };

    $scope.onChange = function(colorDetails) {
      console.log('change', colorDetails);
    };

    $scope.onEnd = function() {
      console.log('end');
    };

  });
```

template.html

```
<ng-gradient ng-gradient-option="{
  opacity: [1, 1],
  image : {
    source: 'https://source.unsplash.com/1600x900/?white',
    blendingMode: 'multiply'
  },
  states: {
    'default-state': {
      gradients: [
        ['#3F51B5', '#9C27B0'],
        ['#00BCD4', '#03A9F4'],
        ['#FFEB3B', '#8BC34A'],
        ['#F44336', '#FF9800']
      ]
    }
  }
}" on-start="onStart" on-change="onChange" on-end="onEnd"></ng-gradient>
```

<br/>

Easy!
