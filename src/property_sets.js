import { value_sets } from './value_sets.js'


export var property_sets = [
  {
    properties: { ac: 'align-content', align_content: 'align-content' },
    value_sets: [value_sets.align_content_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { ai: 'align-items', align_items: 'align-items' },
    value_sets: [value_sets.align_items_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { as: 'align-self', align_self: 'align-self' },
    value_sets: [value_sets.align_items_kind, value_sets.auto, value_sets.initial, value_sets.inherit]
  }, {
    properties: { an: 'animation-iteration-count', animation_iteration_count: 'animation-iteration-count' },
    value_sets: [value_sets.integer_0, value_sets.infinite, value_sets.initial, value_sets.inherit]
  }, {
    properties: { b: 'background', background: 'background' },
    value_sets: [value_sets.rgba_color, value_sets.gradient, value_sets.none, value_sets.initial, value_sets.inherit]
  }, {
    properties: { bi: 'background-image', background_image: 'background-image' },
    value_sets: [value_sets.image_url, value_sets.none, value_sets.initial, value_sets.inherit]
  }, {
    properties: { bs: 'background-size', background_size: 'background-size' },
    value_sets: [value_sets.auto, value_sets.length_calc_2D, value_sets.background_size_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { bs: 'box-shadow', ts: 'text-shadow', box_shadow: 'box-shadow', text_shadow: 'text-shadow' },
    value_sets: [value_sets.shadow]
  }, {
    properties: { bs: 'box-sizing', box_sizing: 'box-sizing' },
    value_sets: [value_sets.box_sizing_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: {
      bo: 'border-width', bo_t: 'border-top-width', bo_b: 'border-bottom-width', bo_l: 'border-left-width', bo_r: 'border-right-width',
      border_width: 'border-width', border_top_width: 'border-top-width', border_bottom_width: 'border-bottom-width', border_left_width: 'border-left-width', border_right_width: 'border-right-width'
    },
    value_sets: [value_sets.length, value_sets.auto, value_sets.initial, value_sets.inherit, value_sets.thick_kind]
  }, {
    properties: { bp: 'background-position', background_position: 'background-position' },
    value_sets: [value_sets.direction_2D_kind, value_sets.length_calc_2D, value_sets.initial, value_sets.inherit]
  }, {
    properties: {
      c: 'color', pc: { name: 'color', afters: ['::placeholder'] },
      color: 'color', placeholder: { name: 'color', afters: ['::placeholder'] },
      bc: 'background-color', background_color: 'background-color',
      bo: 'border-color', bo_t: 'border-top-color', bo_b: 'border-bottom-color', bo_l: 'border-left-color', bo_r: 'border-right-color',
      border_color: 'border-color', border_top_color: 'border-top-color', border_bottom_color: 'border-bottom-color', border_left_color: 'border-left-color', border_right_color: 'border-right-color'
    },
    value_sets: [value_sets.rgba_color]
  }, {
    properties: { c: 'clear', clear: 'clear' },
    value_sets: [value_sets.clear_kind, value_sets.none, value_sets.initial, value_sets.inherit]
  }, {
    properties: { d: 'display', display: 'display' },
    value_sets: [value_sets.display_kind, value_sets.none, value_sets.initial, value_sets.inherit]
  }, {
    properties: { fx: 'flex', flex: 'flex' },
    // CONTINUE HERE...
    value_sets: [value_sets.flexbox_flex, value_sets.initial, value_sets.inherit]
  }, {
    properties: { fxf: 'flex-flow', flex_flow: 'flex-flow' },
    value_sets: [value_sets.flex_flow_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { fxg: 'flex-grow', flex_grow: 'flex-grow' },
    value_sets: [value_sets.integer_0, value_sets.initial, value_sets.inherit]
  }, {
    properties: { fxs: 'flex-shrink', flex_shrink: 'flex-shrink' },
    value_sets: [value_sets.integer_0, value_sets.initial, value_sets.inherit]
  }, {
    properties: { f: 'float', float: 'float' },
    value_sets: [value_sets.none, value_sets.float_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { f: 'font-size', font_size: 'font-size' },
    value_sets: [value_sets.font_size_kind, value_sets.length_calc, value_sets.initial, value_sets.inherit]
  }, {
    properties: { fxb: 'flex-basis', flex_basis: 'flex-basis' },
    value_sets: [value_sets.length_calc, value_sets.auto, value_sets.initial, value_sets.inherit]
  }, {
    properties: { fxd: 'flex-direction', flex_direction: 'flex-direction' },
    value_sets: [value_sets.flex_direction_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { fxw: 'flex-wrap', flex_direction: 'flex-wrap' },
    value_sets: [value_sets.flex_wrap_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { fw: 'font-weight', font_weight: 'font-weight' },
    value_sets: [value_sets.font_weight_kind, value_sets.integer_hundred, value_sets.initial, value_sets.inherit]
  }, {
    properties: { jc: 'justify-content', justify_content: 'justify-content' },
    value_sets: [value_sets.justify_content_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { t: 'text-align', text_align: 'text-align' },
    value_sets: [value_sets.align_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { tt: 'text-transform', text_transform: 'text-transform' },
    value_sets: [value_sets.text_trasform_kind, value_sets.none, value_sets.initial, value_sets.inherit]
  }, {
    properties: { lh: 'line-height', line_height: 'line-height' },
    value_sets: [value_sets.normal, value_sets.length_calc, value_sets.initial, value_sets.inherit]
  }, {
    properties: { ls: 'letter-spacing', letter_spacing: 'letter-spacing' },
    value_sets: [value_sets.normal, value_sets.length_calc, value_sets.initial, value_sets.inherit]
  }, {
    properties: { o: 'opacity', opacity: 'opacity' },
    value_sets: [value_sets.opacity]
  }, {
    properties: { or: 'order', order: 'order' },
    value_sets: [value_sets.integer_0]
  }, {
    properties: { o: 'overflow', ox: 'overflow-x', oy: 'overflow-y', overflow: 'overflow', overflow_x: 'overflow-x', overflow_y: 'overflow-y' },
    value_sets: [value_sets.overflow_kind, value_sets.auto, value_sets.initial, value_sets.inherit]
  }, {
    properties: { p: 'position', position: 'position' },
    value_sets: [value_sets.position_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: {
      p: 'padding', pb: 'padding-bottom', pl: 'padding-left', pr: 'padding-right', pt: 'padding-top',
      padding: 'padding', padding_bottom: 'padding-bottom', padding_left: 'padding-left', padding_right: 'padding-right', padding_top: 'padding-top',
      bor: 'border-radius', bor_tl: 'border-top-left-radius', bor_tr: 'border-top-right-radius', bor_bl: 'border-bottom-left-radius', bor_br: 'border-bottom-right-radius',
      border_radius: 'border-radius', border_top_left_radius: 'border-top-left-radius', border_top_right_radius: 'border-top-right-radius', border_bottom_left_radius: 'border-bottom-left-radius', border_bottom_right_radius: 'border-bottom-right-radius',
    },
    value_sets: [value_sets.length_calc, value_sets.initial, value_sets.inherit]
  }, {
    properties: { to: 'text-overflow', text_overflow: 'text-overflow' },
    value_sets: [value_sets.text_overflow_kind]
  }, {
    properties: { tn: 'transform', transform: 'transform' },
    value_sets: [value_sets.translate_length_calc_2D]
  }, {
    properties: { tn: 'transition-property', transition_property: 'transition-property' },
    value_sets: [value_sets.none, value_sets.all, value_sets.variables, value_sets.initial, value_sets.inherit]
  }, {
    properties: { tn: 'transition-duration', tnd: 'transition-delay', an: 'animation-duration', and: 'animation-delay', transition_duration: 'transition-duration', transition_delay: 'transition-delay', animation_duration: 'animation-duration', animation_delay: 'animation-delay' },
    value_sets: [value_sets.second, value_sets.millisecond, value_sets.initial, value_sets.inherit]
  }, {
    properties: { tn: 'transition-timing-function', an: 'animation-timing-function', transition_timing_function: 'transition-timing-function', animation_timing_function: 'animation-timing-function' },
    value_sets: [value_sets.transition_timing_function_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { v: 'visibility', visibility: 'visibility' },
    value_sets: [value_sets.visibility_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { v: 'vertical-align', vertical_align: 'vertical-align' },
    value_sets: [value_sets.vertical_align_kind, value_sets.length_calc, value_sets.initial, value_sets.inherit]
  }, {
    properties: { ws: 'white-space', white_space: 'white-space' },
    value_sets: [value_sets.white_space_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { wb: 'word-break', word_break: 'word-break' },
    value_sets: [value_sets.white_break_kind, value_sets.initial, value_sets.inherit]
  }, {
    properties: { ww: 'word-wrap', word_wrap: 'word-wrap' },
    value_sets: [value_sets.word_wrap_kind, value_sets.initial, value_sets.inherit]
  }, {
    test: true,
    properties: {
      w: 'width', xw: 'max-width', nw: 'min-width', h: 'height', xh: 'max-height', nh: 'min-height',
      width: 'width', max_width: 'max-width', min_width: 'min-width', height: 'height', max_height: 'max-height', min_height: 'min-height',
      b: 'bottom', r: 'right', t: 'top', l: 'left',
      bottom: 'bottom', right: 'right', top: 'top', left: 'left',
      m: 'margin', mb: 'margin-bottom', ml: 'margin-left', mr: 'margin-right', mt: 'margin-top',
      margin: 'margin', margin_bottom: 'margin-bottom', margin_left: 'margin-left', margin_right: 'margin-right', margin_top: 'margin-top',
      ws: 'word-spacing', word_spacing: 'word-spacing'
    },
    value_sets: [value_sets.length_calc, value_sets.auto, value_sets.initial, value_sets.inherit]
  }, {
    properties: { z: 'z-index', z_index: 'z-index' },
    value_sets: [value_sets.auto, value_sets.integer, value_sets.initial, value_sets.inherit]
  }, {
    properties: {
      color: 'color', opacity: 'opacity',
      background: 'background', background_attachment: 'background-attachment', background_blend_mode: 'background-blend-mode', background_color: 'background-color', background_image: 'background-image', background_position: 'background-position', background_repeat: 'background-repeat', background_clip: 'background-clip', background_origin: 'background-origin', background_size: 'background-size', border: 'border', border_bottom: 'border-bottom', border_bottom_color: 'border-bottom-color', border_bottom_left_radius: 'border-bottom-left-radius', border_bottom_right_radius: 'border-bottom-right-radius', border_bottom_style: 'border-bottom-style', border_bottom_width: 'border-bottom-width', border_color: 'border-color', border_image: 'border-image', border_image_outset: 'border-image-outset', border_image_repeat: 'border-image-repeat', border_image_slice: 'border-image-slice', border_image_source: 'border-image-source', border_image_width: 'border-image-width', border_ltransitioneft: 'border-left', border_left_color: 'border-left-color', border_left_style: 'border-left-style', border_left_width: 'border-left-width', border_radius: 'border-radius', border_right: 'border-right', border_right_color: 'border-right-color', border_right_style: 'border-right-style', border_right_width: 'border-right-width', border_style: 'border-style', border_top: 'border-top', border_top_color: 'border-top-color', border_top_left_radius: 'border-top-left-radius', border_top_right_radius: 'border-top-right-radius', border_top_style: 'border-top-style', border_top_width: 'border-top-width', border_width: 'border-width', box_decoration_break: 'box-decoration-break', box_shadow: 'box-shadow',
      bottom: 'bottom', clear: 'clear', clip: 'clip', display: 'display', float: 'float', height: 'height', left: 'left', margin: 'margin', margin_bottom: 'margin-bottom', margin_left: 'margin-left', margin_right: 'margin-right', margin_top: 'margin-top', max_height: 'max-height', max_width: 'max-width', min_height: 'min-height', min_width: 'min-width', overflow: 'overflow', overflow_x: 'overflow-x', overflow_y: 'overflow-y', padding: 'padding', padding_bottom: 'padding-bottom', padding_left: 'padding-left', padding_right: 'padding-right', padding_top: 'padding-top', position: 'position', right: 'right', top: 'top', visibility: 'visibility', width: 'width', vertical_align: 'vertical-align', z_index: 'z-index',
      align_content: 'align-content', align_items: 'align-items', align_self: 'align-self', flex: 'flex', flex_basis: 'flex-basis', flex_direction: 'flex-direction', flex_flow: 'flex-flow', flex_grow: 'flex-grow', flex_shrink: 'flex-shrink', flex_wrap: 'flex-wrap', justify_content: 'justify-content', order: 'order',
      hanging_punctuation: 'hanging-punctuation', hyphens: 'hyphens', letter_spacing: 'letter-spacing', line_break: 'line-break', line_height: 'line-height', overflow_wrap: 'overflow-wrap', tab_size: 'tab-size', text_align: 'text-align', text_align_last: 'text-align-last', text_combine_upright: 'text-combine-upright', text_indent: 'text-indent', text_justify: 'text-justify', text_transform: 'text-transform', white_space: 'white-space', word_break: 'word-break', word_spacing: 'word-spacing', word_wrap: 'word-wrap',
      text_decoration: 'text-decoration', text_decoration_color: 'text-decoration-color', text_decoration_line: 'text-decoration-line', text_decoration_style: 'text-decoration-style', text_shadow: 'text-shadow', text_underline_position: 'text-underline-position', text_fill_color: 'text-fill-color',
      font: 'font', font_family: 'font-family', font_feature_settings: 'font-feature-settings', font_kerning: 'font-kerning', font_language_override: 'font-language-override', font_size: 'font-size', font_size_adjust: 'font-size-adjust', font_stretch: 'font-stretch', font_style: 'font-style', font_synthesis: 'font-synthesis', font_variant: 'font-variant', font_variant_alternates: 'font-variant-alternates', font_variant_caps: 'font-variant-caps', font_variant_east_asian: 'font-variant-east-asian', font_variant_ligatures: 'font-variant-ligatures', font_variant_numeric: 'font-variant-numeric', font_variant_position: 'font-variant-position', font_weight: 'font-weight', direction: 'direction', text_orientation: 'text-orientation', text_combine_upright: 'text-combine-upright', unicode_bidi: 'unicode-bidi', user_select: 'user-select', writing_mode: 'writing-mode', border_collapse: 'border-collapse', border_spacing: 'border-spacing', caption_side: 'caption-side', empty_cells: 'empty-cells', table_layout: 'table-layout', counter_increment: 'counter-increment', counter_reset: 'counter-reset', list_style: 'list-style', list_style_image: 'list-style-image', list_style_position: 'list-style-position', list_style_type: 'list-style-type',
      animation: 'animation', animation_delay: 'animation-delay', animation_direction: 'animation-direction', animation_duration: 'animation-duration', animation_fill_mode: 'animation-fill-mode', animation_iteration_count: 'animation-iteration-count', animation_name: 'animation-name', animation_play_state: 'animation-play-state', animation_timing_function: 'animation-timing-function',
      backface_visibility: 'backface-visibility', perspective: 'perspective', perspective_origin: 'perspective-origin', transform_origin: 'transform-origin', transform_style: 'transform-style',
      transition_property: 'transition-property', transition_duration: 'transition-duration', transition_timing_function: 'transition-timing-function', transition_delay: 'transition-delay',
      box_sizing: 'box-sizing', content: 'content', cursor: 'cursor', ime_mode: 'ime-mode', nav_down: 'nav-down', nav_index: 'nav-index', nav_left: 'nav-left', nav_right: 'nav-right', nav_up: 'nav-up', outline: 'outline', outline_color: 'outline-color', outline_offset: 'outline-offset', outline_style: 'outline-style', outline_width: 'outline-width', resize: 'resize', text_overflow: 'text-overflow',
      break_after: 'break-after', break_before: 'break-before', break_inside: 'break-inside', column_count: 'column-count', column_fill: 'column-fill', column_gap: 'column-gap', column_rule: 'column-rule', column_rule_color: 'column-rule-color', column_rule_style: 'column-rule-style', column_rule_width: 'column-rule-width', column_span: 'column-span', column_width: 'column-width', columns: 'columns', widows: 'widows',
      orphans: 'orphans', page_break_after: 'page-break-after', page_break_before: 'page-break-before', page_break_inside: 'page-break-inside',
      marks: 'marks', quotes: 'quotes',
      filter: 'filter',
      image_orientation: 'image-orientation', image_rendering: 'image-rendering', image_resolution: 'image-resolution', object_fit: 'object-fit', object_position: 'object-position',
      mask_type: 'mask-type',
      mark: 'mark', mark_after: 'mark-after', mark_before: 'mark-before', phonemes: 'phonemes', rest: 'rest', rest_after: 'rest-after', rest_before: 'rest-before', voice_balance: 'voice-balance', voice_duration: 'voice-duration', voice_pitch: 'voice-pitch', voice_pitch_range: 'voice-pitch-range', voice_rate: 'voice-rate', voice_stress: 'voice-stress', voice_volume: 'voice-volume',
      marquee_direction: 'marquee-direction', marquee_play_count: 'marquee-play-count', marquee_speed: 'marquee-speed', marquee_style: 'marquee-style',
    },
    value_sets: [value_sets.variable]
  }
];
