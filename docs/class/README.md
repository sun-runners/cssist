# Properties 

## align-content
- Class prefix: `ac`
-Values: `fxs|fxe|c|sb|sa|s|`

The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

### Copy code and try Playground   
### Syntax
```html

<div class="d-fx ac-c">
    align-content center
    align-content space between
    align-content space around
    align-content start
</div>
```
[Try Playground](../../../demo)

## align-items
- Class prefix: `ai`
- Values: `fxs | fxe | c | bl | s `

The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

`fxs`| `flex-start`
The cross-start margin edges of the flex items are flushed with the cross-start edge of the line.

`fxe` | `flex-end`
The cross-end margin edges of the flex items are flushed with the cross-end edge of the line.

`c` | `center`
The flex items' margin boxes are centered within the line on the cross-axis. If the cross-size of an item is larger than the flex container, it will overflow equally in both directions.

`s` | `start`
The items are packed flush to each other toward the start edge of the alignment container in the appropriate axis.

`bl` | `baseline`
All flex items are aligned such that their flex container baselines align. The item with the largest distance between its cross-start margin edge and its baseline is flushed with the cross-start edge of the line.

### Syntax


```html
<div class="d-fx jc-c">
    <!-- align-items center -->
    <div class="h-100px w-200px bo-5px bo-EAEAEA d-fx ai-c">
        <button class="h-20px w-80px 
        f-12px bo-0.5px 
        bo-55555 bs-3_4_5_111111_80 b-gy20"> 
        ai-center </button>
    </div>

    <!-- align-items flex start -->
    <div class="h-100px w-200px bo-5px bo-EAEAEA d-fx ai-fxs">
        <button class="h-20px w-80px 
        f-12px bo-0.5px 
        bo-55555 bs-3_4_5_111111_80 b-gy20"> 
        ai_flex_start </button>
    </div>
    <!-- align-items flex end -->
    <div class="h-100px w-200px bo-5px bo-EAEAEA d-fx ai-fxe">
        <button class="h-20px w-80px 
        f-12px bo-0.5px 
        bo-55555 bs-3_4_5_111111_80 b-gy20"> 
        ai_flex_end </button>
    </div>

    <!-- align-items baseline -->
    <div class="h-100px w-200px bo-5px bo-EAEAEA d-fx ai-bl">
        <button class="h-20px w-80px 
        f-12px bo-0.5px 
        bo-55555 bs-3_4_5_111111_80 b-gy20"> 
        ai_baseline </button>
    </div>
    <!-- align-items start -->
    <div class="h-100px w-200px bo-5px bo-EAEAEA d-fx ai-s">
        <button class="h-20px w-80px 
        f-12px bo-0.5px 
        bo-55555 bs-3_4_5_111111_80 b-gy20"> 
        ai_start </button>
    </div>
</div>
```
[Try Playground](../../../demo)

## background-color
- Class prefix: `b`
- Values: `<HEX>` / `<#EAEAEA>`

The background-color CSS property sets the background color of an element.

### Syntax
```html
<!-- A square gray square with a text inside "sets background" -->
<div class="b-EAEAEA h-100px w-200px"> sets background</div>
 ```
[Try Playground](../../../demo) 

## border-radius
- Class prefix: `bor`
- Values: `<lenth>`

The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
```html
<!-- A square gray square with a text inside "CSSIST BOX" -->
<button class="h-100px w-200px 
    f-22px bo-1px bo-222222 
    b-EAEAEA bor-100px"> 
    CSSIST Box 
</button>
 ```
```html
<!-- A circle gray square with a text inside "CSSIST BOX" -->
<button class="h-200px w-200px 
    f-22px bo-1px bo-222222 
    b-EAEAEA bor-100"> 
    CSSIST Box 
</button>
 ```
[Try Playground](../../../demo)
## border
- Class prefix: `bo`
- Values: `<length>`

The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
### Syntax
```html
<!-- A square gray square with a text inside "sets background" -->
<button class="h-100px w-200px 
    f-22px bo-1px bo-222222 
    b-EAEAEA "> 
    CSSIST Box 
</button>
 ```
[Try Playground](../../../demo)


## box-shadow
- Class prefix: `b`
- Values: `<length>`

The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
### Syntax
```html
<!-- A square gray square with a text inside "CSSIST BOX" -->
<button class="h-100px w-200px 
    f-22px bo-0.5px bo-222222 
    bs-3_5_8_222222_60 b-EAEAEA  
    d-fx"> 
    CSSIST Box 
</button>
<!-- A square gray with a text inside "CSSIST BOX" -->
<button class="h-100px w-200px 
    f-22px bo-0.5px bo-222222 
    bs-3_5_8_222222_60 b-EAEAEA  
    d-fx"> 
    CSSIST Box 
</button>
 ```
[Try Playground](../../../demo)


## color
- Class prefix: `c`
- Values: `<hex>`

The `<color>` CSS data type represents a color in the sRGB color space. A `<color>` may also include an alpha-channel transparency value, indicating how the color should composite with its background. 
[see more colors.](/class/values.md) 

## display-flex
- Class prefix: `d-fx`

flex is a new value added to the CSS display property. Along with inline-flex it causes the element that it applies to to become a flex container, and the element's children to each become a flex item. The items then participate in flex layout, and all of the properties defined in the CSS Flexible Box Layout Module may be applied.

The flex property is a shorthand for the flexbox properties flex-grow, flex-shrink and flex-basis.

In addition `flex` can refer to a flexible length in CSS Grid Layout.

### Syntax
```html

<div class="d-fx"></div> <!-- Equivalent to margin-right: 200px; -->
```

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
[Try Playground](../../../demo)

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

## flex-wrap
- Class prefix: `fxw`
- Values: `w | nw | wrap_reverse `

The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

### Syntax

```html
<div class="w-100 pt-20px">  
        <div class="w-80 h-600px b-1px b-we d-fx fxw-w">
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
![image](/assets/images/flex_wrap/fx-w.png)

```html
<div class="w-100 pt-20px">  
        <div class="w-80 h-600px b-1px b-we d-fx fxw-nw">
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
![image](/assets/images/flex_wrap/fx-nw.png)
```html
<div class="w-100 pt-20px">  
        <div class="w-80 h-600px b-1px b-we d-fx fxw-wrap_reverse">
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

## font-weight
- Class prefix: `fw`
- Values: `n|m|b|br|lr|
            m|xxs|xs|s|l|xl|xxl|sr|lr`

The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family you are using.


### Syntax

```html
<div class="w-100 h-100px b-1px fw">
    <span class=" d-fx jc-c p-20px fw-m">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px fw-b">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px fw-br">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px fw-lr">Pick a boo.</span>
    </div>
```
[Try Playground](../../../demo)

## font
- Class prefix: `f`
- Values: `m|xxs|xs|s|l|xl|xxl|sr|lr`
            `<length>`

The font CSS property is a shorthand for font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family. Alternatively, it sets an element's font to a system font. 
-And also you can manually change the font-size whatever you want.

### Syntax

```html
<div class="w-100 h-100px b-1px">
    <span class=" d-fx jc-c p-20px f-m">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px f-xxs">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px f-xs">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px f-s">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px f-xl">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px f-xxl">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px f-sr">Pick a boo.</span>
    <span class=" d-fx jc-c p-20px f-lr">Pick a boo.</span>
</div>
```
![image](/assets/images/font/font_size_auto.png)

```html
<div class="w-100 h-100px b-1px fw">
    <span class="f-32px d-fx jc-c p-20px">Pick a boo.</span>
    <span class="f-42px d-fx jc-c p-20px">Pick a boo.</span>
    <span class="f-52px d-fx jc-c p-20px">Pick a boo.</span>
</div>
```
[Try Playground](../../../demo)


## gradient
- Class prefix: `b`
- Values: `l | r | rr | rl`

The `<gradient>` CSS data type is a special type of `<image>` that consists of a progressive transition between two or more colors.

### Syntax
```html
<button class="h-100px w-200px 
    f-22px bo-0.5px bo-222222 
    bs-3_5_8_222222_60  
    d-fx jc-c ai-c b-l_30d_rd900_oe500"> 
    <span class="c-oe50">
            CSSIST Box                 
    </span>
</button>
 ```
 ### Output
[Try Playground](../../../demo)

 
## height
- Class prefix: `h`
- Values: `<length>` or `<percent>`

The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.

### Syntax
```html
<!-- <length> values -->
<div class="h-100px"></div> <!-- Equivalent to height: 100px; -->
<div class="h-100em"></div> <!-- Equivalent to height: 100em; -->

<!-- <percent> value -->
<div class="h-100"></div> <!-- Equivalent to height: 100%; -->
```
[Try Playground](../../../demo)

## justify-content
- Class prefix: `jc`
- Values: `c | sb | sa | se | s`

The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

### Syntax


```html
<!-- center -->
<div class="h-100px w-200px bo-5px bo-EAEAEA d-fx jc-c">
    <span class="f-22px d-fx"> Pick a boo. </span>
</div>
```
[Try Playground](../../../demo)

```html
<!-- space-between -->
<div class="h-100px w-400px bo-5px bo-EAEAEA d-fx jc-sb ">
    <span class="f-22px"> Pick a boo. </span>
    <span class="f-22px"> Pick a bee. </span>
</div>
```
[Try Playground](../../../demo)

```html
<!-- space around -->
<div class="h-100px w-400px bo-5px bo-EAEAEA d-fx jc-sa">
    <span class="f-22px "> Pick a bee. </span>
    <span class="f-22px "> Pick a boo. </span>
</div>
```
[Try Playground](../../../demo)

```html
<!-- space evenly -->
<div class="h-100px w-400px bo-5px bo-EAEAEA d-fx jc-se">
    <span class="f-22px "> Pick a boo. </span>
    <span class="f-22px "> Pick a bee. </span>
</div>
```
[Try Playground](../../../demo)

```html

<!-- flex start -->
<div class="h-100px w-400px bo-5px bo-EAEAEA d-fx jc-fxs">
    <span class="f-22px "> Pick a boo. </span>
    <span class="f-22px "> Pick a bee. </span>
</div>
```
[Try Playground](../../../demo)

```html
<!-- flex end -->
<div class="h-100px w-400px bo-5px bo-EAEAEA d-fx jc-fxe">
    <span class="f-22px "> Pick a boo. </span>
    <span class="f-22px "> Pick a bee. </span>
</div>
```
[Try Playground](../../../demo)

## letter-spacing
- Class prefix: `ls`
- Values: `<length>`

The letter-spacing CSS property sets the spacing behavior between text characters.

### Syntax

```html
<div class="d-fx jc-c">
    <div class="w-800px bo-rd bo-1px p-10px ls-5px">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
        Ipsum.
    </div>
</div>
```
[Try Playground](../../../demo)


## line-height
- Class prefix: `lh`
- Values: `<length>`

The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.

### Syntax

```html
<div class="d-fx jc-c">
    <div class="w-800px h-500px bo-rd bo-1px p-10px lh-80px">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
        Ipsum.
    </div>
</div>
```
[Try Playground](../../../demo)

## margin-bottom
- Class prefix: `mb`
- Values: `<length>` or `<percent>` or auto `mb-a`

The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

### Syntax
```html
<!-- <length> values -->
<div class="mb-100px"></div> <!-- Equivalent to margin-bottom: 100px; -->
<div class="mb-100em"></div> <!-- Equivalent to margin-bottom: 100em; -->

<!-- <percent> value -->
<div class="mb-100"></div> <!-- Equivalent to margin-bottom: 100%; -->
```
[Try Playground](../../../demo)

## margin-left
- Class prefix: `ml`
- Values: `<length>` or `<percent>` or auto `ml-a`

The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

### Syntax
```html
<!-- <length> values -->
<div class="ml-200px"></div> <!-- Equivamlent to margin-left: 100px; -->
<div class="ml-100em"></div> <!-- Equivalment to margin-left: 100em; -->

<!-- <percent> value -->
<div class="ml-100"></div> <!-- Equivalent to margin-left: 100%; -->
```
[Try Playground](../../../demo)

## margin-right
- Class prefix: `mr`
- Values: `<length>` or `<percent>` or auto `mr-a`

The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

### Syntax
```html
<!-- <length> values -->
<div class="mr-200px"></div> <!-- Equivalent to margin-right: 200px; -->
<div class="mr-100em"></div> <!-- Equivalent to margin-right: 100em; -->

<!-- <percent> value -->
<div class="mr-100"></div> <!-- Equivalent to margin-right: 100%; -->
```
[Try Playground](../../../demo)

## margin-top
- Class prefix: `mt`
- Values: `<length>` or `<percent>` or auto `mt-a`

The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

### Syntax
```html
<!-- <length> values -->
<div class="mt-100px"></div> <!-- Equivalent to margin-top: 100px; -->
<div class="mt-100em"></div> <!-- Equivalent to margin-top: 100em; -->

<!-- <percent> value -->
<div class="mt-100"></div> <!-- Equivalent to margin-top: 100%; -->
```
[Try Playground](../../../demo)

## margin
- Class prefix: `m`
- Values: `<length>` or `<percent>`

The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

### Syntax
```html
<!-- <length> values -->
<div class="m-100px"></div> <!-- Equivalent to margin: 100px; -->
<div class="m-100em"></div> <!-- Equivalent to margin: 100em; -->

<!-- <percent> value -->
<div class="m-100"></div> <!-- Equivalent to margin: 100%; -->
```
[Try Playground](../../../demo)

## opacity
- Class prefix: `o`
- Values: `<length>`

The opacity attribute specifies the transparency of an object or of a group of objects, that is, the degree to which the background behind the element is overlaid.

### Syntax
```html
<button class="h-100px w-200px 
    f-22px bo-0.5px bo-222222 
    bs-3_5_8_222222_60  
    d-fx jc-c ai-c b-l_30d_rd900_oe500 o-50"> 
    <span class="c-oe50">
            CSSIST Box                 
    </span>
</button>
 ```
 [Try Playground](../../../demo)


## order
- Class prefix: `or`
- Values: `<number>`

The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.

```html
<div class="w-100 d-fx jc-se p-50px">
    <nav class="w-100px b-le500 or-3 t-c"> First </nav>
    <nav class="w-100px b-be500 or-1 t-c"> Second </nav>
    <nav class="w-100px b-tl500 or-2 t-c"> Third </nav>
</div>
```
### Output
[Try Playground](../../../demo)


## padding-bottom
- Class prefix: `pb`
- Values: `<length>` or `<percent>`

The `padding-bottom` CSS property sets the height of the padding area on the bottom of an element.

### Syntax
```html
<!-- <length> values -->
<div class="pb-100px"></div> <!-- Equivalent to padding-bottom: 100px; -->
<div class="pb-0"></div> <!-- Equivalent to padding-bottom: 0; -->
<div class="pb-100em"></div> <!-- Equivalent to padding-bottom: 100em; -->

<!-- <percent> value -->
<div class="pb-100"></div> <!-- Equivalent to padding-bottom: 100%; -->
```
[Try Playground](../../../demo)

## padding-left
- Class prefix: `pl`
- Values: `<length>` or `<percent>`

The `padding-left` CSS property sets the width of the padding area to the left of an element.

### Syntax
```html
<!-- <length> values -->
<div class="pl-100px"></div> <!-- Equivalent to padding-left: 100px; -->
<div class="pl-0"></div> <!-- Equivalent to padding-left: 0; -->
<div class="pl-100em"></div> <!-- Equivalent to padding-left: 100em; -->

<!-- <percent> value -->
<div class="p-100"></div> <!-- Equivalent to padding-left: 100%; -->
```
[Try Playground](../../../demo)

## padding-right
- Class prefix: `pr`
- Values: `<length>` or `<percent>`

The `padding-right` CSS property sets the width of the padding area to the right of an element.

### Syntax
```html
<!-- <length> values -->
<div class="pr-100px"></div> <!-- Equivalent to padding: 100px; -->
<div class="pr-100em"></div> <!-- Equivalent to padding: 100em; -->

<!-- <percent> value -->
<div class="pr-100"></div> <!-- Equivalent to padding: 100%; -->
```
[Try Playground](../../../demo)

## padding-top
- Class prefix: `pt`
- Values: `<length>` or `<percent>`

The `padding-top` CSS property sets the width of the padding area to the top of an element.

### Syntax
```html
<!-- <length> values -->
<div class="pt-100px"></div> <!-- Equivalent to padding: 100px; -->
<div class="pt-100em"></div> <!-- Equivalent to padding: 100em; -->

<!-- <percent> value -->
<div class="pt-100"></div> <!-- Equivalent to padding: 100%; -->
```
[Try Playground](../../../demo)

## padding
- Class prefix: `p`
- Values: `<length>` or `<percent>`

The padding CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.

### Syntax
```html
<!-- <length> values -->
<div class="p-100px"></div> <!-- Equivalent to padding: 100px; -->
<div class="p-100em"></div> <!-- Equivalent to padding: 100em; -->

<!-- <percent> value -->
<div class="p-100"></div> <!-- Equivalent to padding: 100%; -->
```
[Try Playground](../../../demo)

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

## text-align
- Class prefix: `t`
- Values: `c | l | r | j | s `

The text-align CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.

### Syntax and Results

```html
    <div class="d-fx jc-se ai-c">
        center
    <div class="h-100px w-200px bo-5px bo-EAEAEA t-c">
        <span class=""> 
        text-center 1 </span>
    </div>
```
![image](/assets/images/text-align/center.png)

```html

    left
    <div class="h-100px w-200px bo-5px bo-EAEAEA t-l">
        <span class=""> 
        text-left </span>
    </div>
```
![image](/assets/images/text-align/Screenshot_left.png)

```html
    right
    <div class="h-100px w-200px bo-5px bo-EAEAEA t-r">
        <span class=""> 
        text-right </span>
    </div>
```
![image](/assets/images/text-align/right.png)

```html
    <div class="h-100px w-200px bo-5px bo-EAEAEA t-j">
        <span class="t-j">
            text-justify1 
            text-justify2 
            text-justify3 
            text-justify5 
            text-justify6 
            text-justify7 
            text-justify8 
        </span>
    </div>
```
![image](/assets/images/text-align/justify.png)

```html
    <div class="h-100px w-200px bo-5px bo-EAEAEA t-s">
        <span class=""> 
            text-stretch1 
            text-stretch2
            text-stretch3
            text-stretch4
            text-stretch5
            text-stretch6
        </span>
    </div>
</div>
```
[Try Playground](../../../demo)


## text-transform
- Class prefix: `tt`
- Values: `c | u | l  `

The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

### Syntax

```html
<div class="w-500px b-le300 bo-1px bo-be50 tt-l p-10px">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
    Ipsum.
</div>
```
![image](/assets/images/tt/tt-l.png)
### Syntax

```html
<div class="w-500px b-le300 bo-1px bo-be50 tt-u p-10px">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
    Ipsum.
</div>
```
![image](/assets/images/tt/tt-u.png)
### Syntax

```html
<div class="w-500px b-le300 bo-1px bo-be50 tt-c p-10px">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
    Ipsum.
</div>
```
[Try Playground](../../../demo)


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
[Try Playground](../../../demo)

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
[Try Playground](../../../demo)

## width
- Class prefix: `w`
- Values: `<length>` or `<percent>`

The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.

```html
<!-- <length> values -->
<div class="w-100px"></div> <!-- Equivalent to width: 100px; -->
<div class="w-100em"></div> <!-- Equivalent to width: 100em; -->

<!-- <percent> value -->
<div class="w-100"></div> <!-- Equivalent to width: 100%; -->
```
[Try Playground](../../../demo)

## word-break
- Class prefix: `wb`
- Values: `b`

The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

### Values

`b` | `break`
Has the same effect as word-break: normal and overflow-wrap: anywhere, regardless of the actual value of the overflow-wrap property.

### Syntax

```html
<div class="w-500px b-le500 bo-1px bo-be50 tn-500ms d-fx wb-b p-10px">
    <span>Hello World</span>
</div>
```
[Try Playground](../../../demo)

## word-wrap
- Class prefix: `ww`
- Values: `b`

The word-wrap property allows long words to be able to be broken and wrap onto the next line.

### Values

`b` | `break`
Allows unbreakable words to be broken

### Syntax

```html
<div class="w-500px b-le500 bo-1px bo-be50 tn-500ms d-fx ww-b p-10px">
    <span>Hello World</span>
</div>
```
[Try Playground](../../../demo)

