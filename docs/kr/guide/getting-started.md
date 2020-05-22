# 시작하기

## 설치
bower 또는 npm을 사용하여이 패키지를 설치할 수 있습니다

```shell
# bower
bower install cssist --save

# npm
npm install cssist
```

## 용법

`<script>`태그를 html 파일의`<body>`에 붙여 넣기

```html
<!-- bower를 사용하는 경우 -->
<script src="./bower_components/cssist/cssist.js"></script>

<!-- npm을 사용하는 경우 -->
<script src="./node_modules/cssist/cssist.js"></script>

```

루트 요소를 설정하십시오.

```html    
<!-- 기본: 기본적으로 본문 내부의 모든 요소의 클래스를 계산합니다. -->
...
<body></body>
...

<!-- 선택 사항: cssist 속성을 특정 요소로 설정하십시오. 선택적으로 특정 요소 내 모든 요소의 클래스를 계산합니다. -->
...
<div cssist></div>
...
```

