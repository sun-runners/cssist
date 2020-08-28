## flex-wrap
- Class prefix: `fxw`
- Values: `w | nw | wrap_reverse `

The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

### Syntax

```html
<div class="w-100 pt-20px">  
        <div class="w-80 h-600px b-1px b-we d-fx fxw-w">
            <div class="w-400px h-100px b-1px b-gy300">
                <span class=" d-fx jc-c p-20px">item 1</span>
            </div>
            <div class="w-400px h-100px b-1px b-rd300">
                <span class=" d-fx jc-c p-20px">item 2</span>
            </div>
            <div class="w-400px h-100px b-1px b-be300">
                <span class=" d-fx jc-c p-20px">item 3</span>
            </div>
            <div class="w-400px h-100px b-1px b-yw300">
                <span class=" d-fx jc-c p-20px">item 4</span>
            </div>
            <div class="w-400px h-100px b-1px b-tl300">
                <span class=" d-fx jc-c p-20px">item 5</span>
            </div>
            <div class="w-400px h-100px b-1px b-lb300">
                <span class=" d-fx jc-c p-20px">item 6</span>
            </div>
            <div class="w-400px h-100px b-1px b-io300">
                <span class=" d-fx jc-c p-20px">item 6</span>
            </div>
        </div>
```
![image](/assets/images/flex_wrap/fx-w.png)

```html
<div class="w-100 pt-20px">  
        <div class="w-80 h-600px b-1px b-we d-fx fxw-nw">
            <div class="w-400px h-100px b-1px b-gy300">
                <span class=" d-fx jc-c p-20px">item 1</span>
            </div>
            <div class="w-400px h-100px b-1px b-rd300">
                <span class=" d-fx jc-c p-20px">item 2</span>
            </div>
            <div class="w-400px h-100px b-1px b-be300">
                <span class=" d-fx jc-c p-20px">item 3</span>
            </div>
            <div class="w-400px h-100px b-1px b-yw300">
                <span class=" d-fx jc-c p-20px">item 4</span>
            </div>
            <div class="w-400px h-100px b-1px b-tl300">
                <span class=" d-fx jc-c p-20px">item 5</span>
            </div>
            <div class="w-400px h-100px b-1px b-lb300">
                <span class=" d-fx jc-c p-20px">item 6</span>
            </div>
            <div class="w-400px h-100px b-1px b-io300">
                <span class=" d-fx jc-c p-20px">item 6</span>
            </div>
        </div>
```
![image](/assets/images/flex_wrap/fx-nw.png)
```html
<div class="w-100 pt-20px">  
        <div class="w-80 h-600px b-1px b-we d-fx fxw-wrap_reverse">
            <div class="w-400px h-100px b-1px b-gy300">
                <span class=" d-fx jc-c p-20px">item 1</span>
            </div>
            <div class="w-400px h-100px b-1px b-rd300">
                <span class=" d-fx jc-c p-20px">item 2</span>
            </div>
            <div class="w-400px h-100px b-1px b-be300">
                <span class=" d-fx jc-c p-20px">item 3</span>
            </div>
            <div class="w-400px h-100px b-1px b-yw300">
                <span class=" d-fx jc-c p-20px">item 4</span>
            </div>
            <div class="w-400px h-100px b-1px b-tl300">
                <span class=" d-fx jc-c p-20px">item 5</span>
            </div>
            <div class="w-400px h-100px b-1px b-lb300">
                <span class=" d-fx jc-c p-20px">item 6</span>
            </div>
            <div class="w-400px h-100px b-1px b-io300">
                <span class=" d-fx jc-c p-20px">item 6</span>
            </div>
        </div>
```
[Try Playground](../../../cssist/demo)
