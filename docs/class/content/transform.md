## transform
- Class prefix: `tn`
- Values: `flat | preserve-3d`

The transform-style CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

## transition-duration
- Class prefix: `tn`
- Values: `<time>`

The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.

### Values

`<time>`

Is a `<time>` denoting the amount of time the transition from the old value of a property to the new value should take. A time of 0s indicates that no transition will happen, that is the switch between the two states will be instantaneous. A negative value for the time renders the declaration invalid.

### Syntax

```html
<div class="w-500px b-le500 bo-1px bo-be50 tn-500ms p-10px">
    <span>Hello World</span>
</div>
```
[Try Playground](../../../cssist/demo)
