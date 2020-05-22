## display
- Class prefix: `d`
- Values: `fx | i | ib | b`

The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.

Formally, the display property sets an element's inner and outer display types. The outer type sets an element's participation in flow layout; the inner type sets the layout of children. Some values of display are fully defined in their own individual specifications; for example the detail of what happens when display: flex is declared is defined in the CSS Flexible Box Model specification

### Syntax

```html
    <div class="w-80 h-600px b-1px b-we d-i">
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
![image](/assets/images/display/d-i.png)

```html
    <div class="w-80 h-600px b-1px b-we d-fx">
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
[Try Playground](../../../demo)
