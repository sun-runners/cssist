## white-space
- Class prefix: `ws`
- Values: `n|nw|p|pl|pw`

The white-space CSS property sets how white space inside an element is handled.

`n` | `<normal>`
Sequences of white space are collapsed. Newline characters in the source are handled the same as other white space. Lines are broken as necessary to fill line boxes.
### Syntax
```html
<div class="w-500px h-100px d-fx ws-n">
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
</div>
```

`nw` | `<nowrap>`  
Collapses white space as for normal, but suppresses line breaks (text wrapping) within the source.
### Syntax

```html
<div class="w-500px h-100px d-fx ws-nw">
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
</div>
```

`p` | `pre`
Sequences of white space are preserved. Lines are only broken at newline characters in the source and at `<br>` elements.
### Syntax

```html
<div class="w-500px h-100px d-fx ws-p">
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
</div>
```

`pw` | `pre-wrap`
Sequences of white space are preserved. Lines are broken at newline characters, at `<br>`, and as necessary to fill line boxes.
### Syntax

```html
<div class=" w-500px h-100px d-fx ws-pw">
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
</div>
```

`pl` | `pre-line`
Sequences of white space are collapsed. Lines are broken at newline characters, at `<br>`, and as necessary to fill line boxes.
### Syntax

```html
<div class=" w-500px h-100px d-fx ws-pl">
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px ">Pick a boo.</span>
</div>
```
[Try Playground](../../../cssist/demo)
