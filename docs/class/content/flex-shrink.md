## flex-shrink
- Class prefix: `fxs`
- Values: `<number>`

The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.

In use, flex-shrink is used alongside the other flex properties flex-grow and flex-basis, and normally defined using the flex shorthand.
### Syntax

```html
<div class="p-50px d-fx">
    <div class="w-500px h-100px fxs-1 b-rd300 bo-yw50">Shrink 1</div>
    <div class="w-500px h-100px fxs-2 b-le300 bo-yw50">Shrink 2</div>
    <div class="w-500px h-100px fxs-3 b-be300 bo-yw50">Shrink 3</div>
</div>
```
[Try Playground](../../../demo)
