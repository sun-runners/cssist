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
[Try Playground](../../../cssist/demo)
