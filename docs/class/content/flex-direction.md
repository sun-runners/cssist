## flex-direction
- Class prefix: `d-fx fxd`
- Values: `r|rr|c|cr`

The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

`r` | `row`
The flex container's main-axis is defined to be the same as the text direction. The main-start and main-end points are the same as the content direction.

```html
<div class="w-100 d-fx fxd-r b-rd100">
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
</div>
```
[Try Playground](../../../demo)

`rr` | `row-reverse`
Behaves the same as row but the main-start and main-end points are permuted.

```html
<div class="w-100 d-fx fxd-rr b-rd100">
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
</div>
```
[Try Playground](../../../demo)

`c` | `column`
The flex container's main-axis is the same as the block-axis. The main-start and main-end points are the same as the before and after points of the writing-mode.

```html
<div class="w-100 d-fx fxd-c b-le100">
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
</div>
```
[Try Playground](../../../demo)

`cr` | `column-reverse`
Behaves the same as column but the main-start and main-end are permuted.
### Syntax

```html
<div class="w-100 d-fx fxd-cr b-le100">
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
    <span class="p-20px ">Pick a boo.</span>
</div>
```
### Output

[Try Playground](../../../demo)
