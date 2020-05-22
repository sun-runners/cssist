## transition-property
- Class prefix: `tn`
- Values: `<none> | <all> | <custom-ident>  `

The transition-property CSS property sets the CSS properties to which a transition effect should be applied.

### Values

`n` | `none`
No properties will transition.

### Syntax

```html
<div class="w-500px b-le500 bo-1px bo-be50 tn-500ms tn-n p-10px">
    <span>Hello World</span>
</div>
```
`a` | `all`
All properties that can transition will.

### Syntax
```html
<div class="w-500px b-le500 bo-1px bo-be50 tn-500ms tn-a p-10px">
    <span>Hello World</span>
</div>
```
`<custom-ident>`
A string identifying the property to which a transition effect should be applied when its value changes.

```html
<div class="w-500px b-le500 bo-1px bo-be50 tn-500ms d-fx wb-b p-10px">
    <span>Hello World</span>
</div>
```
[Try Playground](../../../demo)
