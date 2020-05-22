## position
- Class prefix: `p`
- Values: `s|a|f|r|`

The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.

`Values`

`s` | `static`
    The element is positioned according to the normal flow of the document. The top, right, bottom, left, and z-index properties have no effect. This is the default value.

### Syntax
```html
    <div class="w-100px h-100px d-ib f-we b-rd300"> One </div>
    <div class="w-100px h-100px d-ib p-s mt-20px ml-20px f-we b-le100"> Two </div>
    <div class="w-100px h-100px d-ib f-we b-be100"> three </div>
    <div class="w-100px h-100px d-ib f-we b-io100"> Four </div>
```
### Output
![image](/assets/images/position/pos_static.png)

`r` | `relative`
The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.
This value creates a new stacking context when the value of z-index is not auto. Its effect on table-*-group, table-row, table-column, table-cell, and table-caption elements is undefined.

### Syntax
```html
    <div class="w-100px h-100px d-ib f-we b-rd300"> One </div>
    <div class="w-100px h-100px d-ib p-r mt-20px ml-20px f-we b-le100"> Two </div>
    <div class="w-100px h-100px d-ib f-we b-be100"> three </div>
    <div class="w-100px h-100px d-ib f-we b-io100"> Four </div>
```
### Output
![image](/assets/images/position/pos_relative.png)

`a` | `absolute`
The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block. Its final position is determined by the values of top, right, bottom, and left.
This value creates a new stacking context when the value of z-index is not auto. The margins of absolutely positioned boxes do not collapse with other margins.

### Syntax
```html
    <div class="w-100px h-100px d-ib f-we b-rd300"> One </div>
    <div class="w-100px h-100px d-ib p-a mt-20px ml-20px f-we b-le100"> Two </div>
    <div class="w-100px h-100px d-ib f-we b-be100"> three </div>
    <div class="w-100px h-100px d-ib f-we b-io100"> Four </div>
```
### Output
![image](/assets/images/position/pos_absolute.png)

`f` | `fixed`
The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to the initial containing block established by the viewport, except when one of its ancestors has a transform, perspective, or filter property set to something other than none (see the CSS Transforms Spec), in which case that ancestor behaves as the containing block. (Note that there are browser inconsistencies with perspective and filter contributing to containing block formation.) Its final position is determined by the values of top, right, bottom, and left.
This value always creates a new stacking context. In printed documents, the element is placed in the same position on every page.

### Syntax
```html
    <div class="w-100px h-100px d-ib f-we b-rd300"> One </div>
    <div class="w-100px h-100px d-ib p-f mt-20px ml-20px f-we b-le100"> Two </div>
    <div class="w-100px h-100px d-ib f-we b-be100"> three </div>
    <div class="w-100px h-100px d-ib f-we b-io100"> Four </div>
```
[Try Playground](../../../demo)
