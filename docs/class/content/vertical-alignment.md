## vertical-alignment
- Class prefix: `v`
- Values `be|sb|sr|t|tt|m|b|tb|`

The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.

### Values
`be` | `baseline`
Aligns the baseline of the element with the baseline of its parent. The baseline of some replaced elements, like `<textarea>`, is not specified by the HTML specification, meaning that their behavior with this keyword may vary between browsers.
### Syntax
```html
<div>This <img class="v-be" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> is my alignment</div>
```
### Output
![image](/assets/images/vert-al/v-be.png)

`sb` | `sub`
Aligns the baseline of the element with the subscript-baseline of its parent.
### Syntax
```html
<div>This <img class="v-sb" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> is my alignment</div>
```
### Output
![image](/assets/images/vert-al/v-sb.png)

`sr` | `super`
Aligns the baseline of the element with the superscript-baseline of its parent.
### Syntax
```html
<div>This <img class="v-sr" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> is my alignment</div>
```
### Output
![image](/assets/images/vert-al/v-sr.png)

`tt` | `text-top`
Aligns the top of the element with the top of the parent element's font.
### Syntax
```html
<div>This <img class="v-tt" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> is my alignment</div>
```
### Output
![image](/assets/images/vert-al/v-tt.png)

`tb` | `text-bottom`
Aligns the bottom of the element with the bottom of the parent element's font.
### Syntax
```html
<div>This <img class="v-tb" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> is my alignment</div>
```
### Output
![image](/assets/images/vert-al/v-tb.png)

`m` | `middle`
Aligns the middle of the element with the baseline plus half the x-height of the parent.
### Syntax
```html
<div>This <img class="v-m" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> is my alignment</div>
```
### Output
![image](/assets/images/vert-al/v-m.png)

`<length>`
Aligns the baseline of the element to the given length above the baseline of its parent. A negative value is allowed.

`<percentage>`
Aligns the baseline of the element to the given percentage above the baseline of its parent, with the value being a percentage of the line-height property. A negative value is allowed.

`Line-relative values`
The following values vertically align the element relative to the entire line:

`t` | `top`
Aligns the top of the element and its descendants with the top of the entire line.
### Syntax
```html
<div>This <img class="v-t" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> is my alignment</div>
```
### Output
![image](/assets/images/vert-al/v-t.png)

`b` " `bottom`
Aligns the bottom of the element and its descendants with the bottom of the entire line.
For elements that do not have a baseline, the bottom margin edge is used instead.
### Syntax
```html
<div>This <img class="v-be" src="https://mdn.mozillademos.org/files/12245/frame_image.svg" alt="link" width="32" height="32" /> is my alignment</div>
```
[Try Playground](../../../demo)

