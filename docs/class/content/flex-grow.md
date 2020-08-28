## flex-grow
- Class prefix: `d-fx fxg`
- Values: `<number>`

The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).

The main size is either width or height of the item which is dependent on the flex-direction value.

The remaining space is the size of the flex container minus the size of all flex items' sizes together. If all sibling items have the same flex grow factor, then all items will receive the same share of remaining space, otherwise it is distributed according to the ratio defined by the different flex grow factors.

flex-grow is used alongside the other flex properties flex-shrink and flex-basis, and normally defined using the flex shorthand to ensure all values are set.

```html
<div class="w-500px d-fx ml-a mr-a mt-15px z-500">
    <div class="w-100px h-100px b-oe500 fxg-1">1</div>
    <div class="w-100px h-100px b-gn500">2</div>
    <div class="w-100px h-100px b-le500">3</div>
    <div class="w-100px h-100px b-pe500">4</div>
</div>
```
[Try Playground](../../../cssist/demo)
