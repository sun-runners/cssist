## visibility
- Class prefix: `v`
- Values: `v | h | c`

The visibility attribute lets you control the visibility of graphical elements. With a value of hidden or collapse the current graphics element is invisible.

 `v` | `visible`
    This value indicates that the element will be painted.

 `h` | `hidden` 
    This value indicates that the element will not be painted. Though it is still part of the rendering tree, i.e. it may receive pointer events depending on the pointer-events attribute, may receive focus depending on the tabindex attribute, contributes to bounding box calculations and clipping paths, and does affect text layout.

 `c` | `collapse`
    This value is equal to hidden.

### Syntax

```html
<div class="w-800px h-500px bo-rd bo-1px p-10px lh-80px">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <span class="v-v"> Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown </span>
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
    Ipsum.
</div>
```
![image](/assets/images/visibility/visible.png)

```html
<div class="w-800px h-500px bo-rd bo-1px p-10px lh-80px">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <span class="v-h"> Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown </span>
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
    Ipsum.
</div>
```
![image](/assets/images/visibility/hidden.png)

```html
<div class="w-800px h-500px bo-rd bo-1px p-10px lh-80px">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <span class="v-c"> Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown </span>
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
    Ipsum.
</div>
```
[Try Playground](../../../demo)

