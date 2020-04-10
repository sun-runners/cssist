export var value_sets = {};
var debug = false;



var getValueFromValues = function (value) { return this.values[value]; }
var getValueFromOriginalValue = function (value) { return value; }




// CONSTANT
value_sets.auto = {
  regex: '(?:a|auto)',
  values: { a: 'auto', auto: 'auto' },
  examples: ['a', 'auto'],
  getValue: getValueFromValues
};

value_sets.all = {
  regex: '(?:a|all)',
  values: { a: 'all', all: 'all' },
  examples: ['a', 'all'],
  getValue: getValueFromValues
};

value_sets.initial = {
  regex: '(?:il|initial)',
  values: { il: 'initial', initial: 'initial' },
  examples: ['il', 'initial'],
  getValue: getValueFromValues
};

value_sets.inherit = {
  regex: '(?:it|inherit)',
  values: { it: 'inherit', inherit: 'inherit' },
  examples: ['it', 'inherit'],
  getValue: getValueFromValues
};

value_sets.infinite = {
  regex: '(?:i|infinite)',
  values: { i: 'infinite', infinite: 'infinite' },
  examples: ['i', 'infinite'],
  getValue: getValueFromValues
};

value_sets.none = {
  regex: '(?:n|none)',
  values: { n: 'none', none: 'none' },
  examples: ['n', 'none'],
  getValue: getValueFromValues
};

value_sets.normal = {
  regex: '(?:n|normal)',
  values: { n: 'normal', normal: 'normal' },
  examples: ['n', 'normal'],
  getValue: getValueFromValues
};



// KIND
value_sets.align_content_kind = {
  regex: '(?:fxs|fxe|c|sb|sa|s|flex_start|flex_end|center|space_between|space_around|stretch)',
  values: {
    fxs: 'flex-start', fxe: 'flex-end', c: 'center', sb: 'space-between', sa: 'space-around', s: 'stretch',
    flex_start: 'flex-start', flex_end: 'flex-end', center: 'center', space_between: 'space-between', space_around: 'space-around', strech: 'stretch'
  },
  examples: ['fxs', 'flex_start'],
  getValue: getValueFromValues
};

value_sets.align_items_kind = {
  regex: '(?:fxs|fxe|c|bl|s|flex_start|flex_end|center|baseline|stretch)',
  values: {
    fxs: 'flex-strech', fxe: 'flex-end', c: 'center', bl: 'baseline', s: 'stretch',
    flex_start: 'flex-start', flex_end: 'flex-end', center: 'center', baseline: 'baseline', strech: 'stretch'
  },
  examples: ['fxs', 'flex_start'],
  getValue: getValueFromValues
};

value_sets.animation_direction = {
  regex: '(?:n|r|a|ar|normal|reverse|alternate|alternate_reverse)',
  values: { n: 'normal', r: 'reverse', a: 'alternate', ar: 'alternate-reverse', normal: 'normal', reverse: 'reverse', alternate: 'alternate', alternate_reverse: 'alternate-reverse' },
  examples: ['n', 'alternate_reverse'],
  getValue: getValueFromValues
};

value_sets.box_sizing_kind = {
  regex: '(?:c|b|content_box|border_box)',
  values: { c: 'content-box', b: 'border-box', content_box: 'content-box', border_box: 'border-box' },
  examples: ['c', 'b'],
  getValue: getValueFromValues
};

value_sets.background_size_kind = {
  regex: '(?:l|r|b|left|right|both)',
  values: { l: 'left', r: 'right', b: 'both', left: 'left', right: 'right', both: 'both' },
  examples: ['l', 'both'],
  getValue: getValueFromValues
};

value_sets.clear_kind = {
  regex: '(?:cr|cn|cover|contain)',
  values: { cr: 'cover', cn: 'contain', cover: 'cover', contain: 'contain' },
  examples: ['cr', 'contain'],
  getValue: getValueFromValues
};

value_sets.display_kind = {
  regex: '(?:i|b|fx|ib|inline|block|flex|inline_block|inline_flex|inline_table|list_item|run_in|table|table_caption|table_column_group|table_header_group|table_footer_group|table_row_group|table_cell|table_column|table_row)',
  values: {
    i: 'inline', b: 'block', fx: 'flex', ib: 'inline-block',
    inline: 'inline', block: 'block', flex: 'flex', inline_block: 'inline-block', inline_flex: 'inline-flex',
    inline_table: 'inline-table', list_item: 'list-item', run_in: 'run-in',
    table: 'table', table_caption: 'table-caption', table_column_group: 'table-column-group', table_header_group: 'table-header-group',
    table_footer_group: 'table-footer-group', table_row_group: 'table-row-group', table_cell: 'table-cell', table_column: 'table-column', table_row: 'table-row'
  },
  examples: ['i', 'table_row'],
  getValue: getValueFromValues
};

value_sets.direction_kind = {
  regex: '(?:l|r|t|b|c|left|right|top|bottom|center)',
  values: { l: 'left', r: 'right', t: 'top', b: 'bottom', c: 'center', left: 'left', right: 'right', top: 'top', bottom: 'bottom', center: 'center' },
  examples: ['l', 'center'],
  getValue: getValueFromValues
};

value_sets.direction_2D_kind = {
  regex: '(?:lt|lc|lb|rt|rc|rb|ct|cc|cb|left_top|left_center|left_bottom|right_top|right_center|right_bottom|center_top|center_center|center_bottom)',
  values: {
    lt: 'left top', lc: 'left center', lb: 'left bottom', rt: 'right top', rc: 'right center', rb: 'right bottom', ct: 'center top', cc: 'center center', cb: 'center bottom',
    left_top: 'left top', left_center: 'left center', left_bottom: 'left bottom', right_top: 'right top', right_center: 'right center', right_bottom: 'right bottom', center_top: 'center top', center_center: 'center center', center_bottom: 'center bottom'
  },
  examples: ['lt', 'cc'],
  getValue: getValueFromValues
};

value_sets.flex_flow_kind = {
  regex: '(?:fxd|fxw|flex_direction|flex_wrap)',
  values: {
    fxd: 'flex-direction', fxw: 'flex-wrap',
    flex_direction: 'flex-direction', flex_wrap: 'flex-wrap'
  },
  examples: ['fxd', 'flex_direction'],
  getValue: getValueFromValues
};

value_sets.float_kind = {
  regex: '(?:l|r|left|right)',
  values: { l: 'left', r: 'right', left: 'left', right: 'right' },
  examples: ['l', 'right'],
  getValue: getValueFromValues
};

value_sets.flex_direction_kind = {
  regex: '(?:r|rr|c|cr|row|row_reverse|column|column_reverse)',
  values: {
    r: 'row', rr: 'row-reverse', c: 'column', cr: 'column-reverse',
    row: 'row', row_reverse: 'row-reverse', column: 'column', column_reverse: 'column-reverse'
  },
  examples: ['r', 'row'],
  getValue: getValueFromValues
};

value_sets.flex_wrap_kind = {
  regex: '(?:nw|w|wr|nowrap|wrap|wrap_reverse)',
  values: {
    nw: 'nowrap', w: 'wrap', wr: 'wrap-reverse',
    nowrap: 'nowrap', wrap: 'wrap', wrap_reverse: 'wrap-reverse'
  },
  examples: ['nw', 'nowrap'],
  getValue: getValueFromValues
};

value_sets.font_size_kind = {
  regex: '(?:m|xxs|xs|s|l|xl|xxl|sr|lr|medium|xx_small|x_small|small|large|x_large|xx_large|smaller|larger)',
  values: {
    m: 'medium', xxs: 'xx-small', xs: 'x-small', s: 'small', l: 'large', xl: 'x-large', xxl: 'xx-large', sr: 'smaller', lr: 'larger',
    medium: 'medium', xx_small: 'xx-small', x_small: 'x-small', s: 'small', l: 'large', x_large: 'x-large', xx_large: 'xx-large', smaller: 'smaller', larger: 'larger'
  },
  examples: ['m', 'larger'],
  getValue: getValueFromValues
};

value_sets.font_weight_kind = {
  regex: '(?:n|m|b|br|lr|normal|medium|bold|bolder|lighter)',
  values: {
    n: 'normal', m: 'medium', b: 'bold', br: 'bolder', lr: 'lighter',
    normal: 'normal', medium: 'medium', bold: 'bold', bolder: 'bolder', lighter: 'lighter',
  },
  examples: ['n', 'lighter'],
  getValue: getValueFromValues
};

value_sets.justify_content_kind = {
  regex: '(?:fxs|fxe|c|sb|sa|se|flex_start|flex_end|center|space_between|space_around|space_evenly)',
  values: {
    fxs: 'flex-start', fxe: 'flex-end', c: 'center', sb: 'space-between', sa: 'space-around', se: 'space-evenly',
    flex_start: 'flex-start', flex_end: 'flex-end', center: 'center', space_between: 'space-between', space_around: 'space-around', space_evenly: 'space-evenly'
  },
  examples: ['fxs', 'flex_start'],
  getValue: getValueFromValues
};

value_sets.gradient_kind = {
  regex: '(?:rl|rr|l|r)',
  values: { l: 'linear-gradient', r: 'radial-gradient', rl: 'repeating-linear-gradient', rr: 'repeating-radial-gradient' },
  examples: ['l', 'rr'],
  getValue: getValueFromValues
};

value_sets.length_unit_kind = {
  regex: '(?:em|ex|ch|rem|vw|vh|vmax|vmin|cm|mm|in|px|pt|pc|p|n)',
  values: { em: 'em', ex: 'ex', ch: 'ch', rem: 'rem', vw: 'vw', vh: 'vh', vmax: 'vmax', vmin: 'vmin', cm: 'cm', mm: 'mm', in: 'in', px: 'px', pt: 'pt', pc: 'pc', p: '%', n: '' },
  examples: ['em', 'n'],
  getValue: getValueFromValues
};

value_sets.overflow_kind = {
  regex: '(?:h|o|s|v|hidden|overlay|scroll|visible)',
  values: {
    h: 'hidden', o: 'overlay', s: 'scroll', v: 'visible',
    hidden: 'hidden', overlay: 'overlay', scroll: 'scroll', visible: 'visible'
  },
  examples: ['h', 'visible'],
  getValue: getValueFromValues
};

value_sets.position_kind = {
  regex: '(?:s|a|f|r|static|absolute|fixed|relative)',
  values: {
    s: 'static', a: 'absolute', f: 'fixed', r: 'relative',
    static: 'static', absolute: 'absolute', fixed: 'fixed', relative: 'relative'
  },
  examples: ['s', 'relative'],
  getValue: getValueFromValues
};

value_sets.text_overflow_kind = {
  regex: '(?:c|e|s|clip|ellipsis|string)',
  values: {
    c: 'clip', e: 'ellipsis', s: 'string',
    clip: 'clip', ellipsis: 'ellipsis', string: 'string'
  },
  examples: ['c', 's'],
  getValue: getValueFromValues
};

value_sets.align_kind = {
  regex: '(?:l|r|c|j|s|left|right|center|justify|stretch)',
  values: {
    l: 'left', r: 'right', c: 'center', j: 'justify', s: 'stretch',
    left: 'left', right: 'right', center: 'center', justify: 'justify', strech: 'strech'
  },
  examples: ['l', 'j'],
  getValue: getValueFromValues
};

value_sets.thick_kind = {
  regex: '(?:m|tn|tk|medium|thin|thick)',
  values: { m: 'medium', tn: 'thin', tk: 'thick' },
  examples: ['m', 'tk'],
  getValue: getValueFromValues
};

value_sets.transition_timing_function_kind = {
  regex: '(?:l|e|ei|eo|eio|ss|se|linear|ease|ease_in|ease_out|ease_in_out|step_start|step_end)',
  values: { l: 'linear', e: 'ease', ei: 'ease-in', eo: 'ease-out', eio: 'ease-in-out', ss: 'step-start', se: 'step-end' },
  examples: ['l', 'se'],
  getValue: getValueFromValues
};

value_sets.text_trasform_kind = {
  regex: '(?:c|u|l|capitalize|uppercase|lowercase)',
  values: { c: 'capitalize', u: 'uppercase', l: 'lowercase', capitalize: 'capitalize', uppercase: 'uppercase', lowercase: 'lowercase' },
  examples: ['c', 'lowercase'],
  getValue: getValueFromValues
};

value_sets.vertical_align_kind = {
  regex: '(?:be|sb|sr|t|tt|m|b|tb|baseline|sub|super|top|text_top|middle|bottom|text_bottom)',
  values: {
    be: 'baseline', sb: 'sub', sr: 'super', t: 'top', tt: 'text-top	', m: 'middle', b: 'bottom', tb: 'text-bottom',
    baseline: 'baseline', sub: 'sub', super: 'super', top: 'top', text_top: 'text-top	', middle: 'middle', bottom: 'bottom', text_bottom: 'text-bottom'
  },
  examples: ['be', 'text_bottom'],
  getValue: getValueFromValues
};

value_sets.visibility_kind = {
  regex: '(?:v|h|c|visible|hidden|collapse)',
  values: {
    v: 'visible', h: 'hidden', c: 'collapse',
    visible: 'visible', hidden: 'hidden', collapse: 'collapse'
  },
  examples: ['v', 'c'],
  getValue: getValueFromValues
};

value_sets.white_space_kind = {
  regex: '(?:n|nw|p|pl|pw|normal|nowrap|pre|pre_line|pre_wrap)',
  values: {
    n: 'normal', nw: 'nowrap', p: 'pre', pl: 'pre-line', pw: 'pre-wrap',
    normal: 'normal', nowrap: 'nowrap', pre: 'pre', pre_line: 'pre-line', pre_wrap: 'pre-wrap'
  },
  examples: ['n', 'normal'],
  getValue: getValueFromValues
};

value_sets.word_wrap_kind = {
  regex: '(?:b|break_word)',
  values: {
    b: 'break-word',
    break_word: 'break-word'
  },
  examples: ['b', 'break_word'],
  getValue: getValueFromValues
};



// NUMBER

value_sets.integer = {
  regex: '(?:_?[0-9]+)',
  examples: ['_100', '100'],
  getValue: function (value) { return value.replace(/_/g, '-'); }
};

value_sets.integer_0 = {
  regex: '(?:[0-9]+)',
  examples: ['100'],
  getValue: function (value) {
    var result = Math.abs(value);
    if (isNaN(result)) return null;
    else return result;
  }
};

value_sets.integer_0_12 = {
  regex: '(?:10|11|12|[0-9])',
  examples: ['0', '12'],
  getValue: function (value) { return Math.floor(value) % 13; }
};

value_sets.integer_0_255 = {
  regex: '(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))',
  examples: ['0', '255'],
  getValue: function (value) { return Math.floor(value) % 256; }
};

value_sets.integer_hundred = {
  regex: '(?:[1-9]00)',
  examples: ['100', '900'],
  getValue: getValueFromOriginalValue
};

value_sets.integer_3digits = {
  regex: '(?:_?[0-9]{1,3})',
  examples: ['_999', '999'],
  getValue: function (value) { return Math.floor(value_sets.integer.getValue(value)) % 1000; }
};

value_sets.float = {
  regex: value_sets.integer.regex + '(?:o' + value_sets.integer_0.regex + ')?',
  examples: ['0', '7o777', '_7o777'],
  getValue: function (value) { return value.replace(/o/g, '.'); }
};

value_sets.float_0_100 = {
  regex: '(?:100|[0-9]?[0-9])(?:o[0-9]+)?',
  examples: ['0', '10', '100', '7o777'],
  getValue: function (value) { return value_sets.float.getValue(value.replace(/_/g, '-')) % 101; }
};

value_sets.float_0 = {
  regex: value_sets.integer.regex + '(?:o' + value_sets.integer_0.regex + ')?',
  examples: ['0', '7o777'],
  getValue: function (value) { return value_sets.float.getValue(value.replace(/_/g, '-')); }
};



// OPACITY

value_sets.opacity = {
  regex: value_sets.float_0_100.regex,
  examples: ['0', '50o50', '100'],
  getValue: function (value) { return value_sets.float_0_100.getValue(value) * 0.01; }
};



// LENGTH

value_sets.length = {
  regex: value_sets.float_0.regex + '(?:' + value_sets.length_unit_kind.regex + ')?',
  examples: ['0px', '50p', '50', '100vw', '3n'],
  getValue: function (value) {
    var regex = new RegExp('(' + value_sets.float_0.regex + ')(' + value_sets.length_unit_kind.regex + ')?');
    var matches = value.match(regex);
    var result = '';
    if (value_sets.float_0.getValue(matches[1])) { // 길이 값
      result = value_sets.float_0.getValue(matches[1]);
    }
    if (matches[2]) { // 길이 단위
      result += value_sets.length_unit_kind.getValue(matches[2]);
    } else {
      result += '%';
    }
    return result;
  }
};

value_sets.symbol = {
  regex: '(?:__|_|M|D)',
  examples: ['__', '_', 'D', 'M'],
  getValue: function (value) {
    var result = null;
    if (value == '__') { result = '+'; }
    else if (value == '_') { result = '-'; }
    else if (value == 'M') { result = '*'; }
    else if (value == 'D') { result = '/'; }
    return result;
  }
};

value_sets.length_calc = {
  regex: '(?:' + value_sets.symbol.regex + '?' + value_sets.length.regex + ')+',
  examples: ['0', '50', '50px', '100_100px', '100M2_100vwD3__100cmD4_100pxD5_100M6_100vwD7__100cmD8_100pxD9'],
  getValue: function (value) {
    var terms = value.match(new RegExp('(' + value_sets.symbol.regex + '?' + value_sets.length.regex + ')', 'g'));
    var result = '';

    // Loop terms
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];

      // Set symbol and number
      var matches_each = term.match(new RegExp('(' + value_sets.symbol.regex + ')?(' + value_sets.length.regex + ')'));
      var symbol = matches_each[1];
      var value = matches_each[2];

      // Get symbols
      if (symbol) result += (i==0?'':' ')+value_sets.symbol.getValue(symbol)+(i==0?'':' ');
      if (symbol=='D' || symbol=='M') { // Divide or Multiply (Don't need unit) ex 10 -> 10
        result += value;
      } else { // + or - (Need unit) ex 10->10%
        result += value_sets.length.getValue(value);
      }
    }

    if(terms.length>1) return 'calc( ' + result + ' )';
    return result;
  }
};

value_sets.length_calc_2D = {
  regex: '(?:[X|Y]' + value_sets.length_calc.regex + ')+',
  examples: ['X100pxY50px', 'X100_10pxY50pxM10', 'X100M2_100vwD3__100cmD4_100pxD5_100M6_100vwD7__100cmD8_100pxD9'],
  getValue: function (value) {
    var result = '';
    var regex_X = new RegExp('X(' + value_sets.length_calc.regex + ')');
    var matches_X = value.match(regex_X);
    if (matches_X) {
      result += value_sets.length_calc.getValue(matches_X[0]);
    } else {
      result += 0;
    }
    result += ' ';
    var regex_Y = new RegExp('Y(' + value_sets.length_calc.regex + ')');
    var matches_Y = value.match(regex_Y);
    if (matches_Y) {
      result += value_sets.length_calc.getValue(matches_Y[0]);
    } else {
      result += 0;
    }
    return result;
  }
};



// FLEX

value_sets.flexbox_flex = {
  regex: '(?:(?:' + value_sets.integer.regex + ')' + '(?:' + value_sets.integer.regex + ')?' + '(?:' + value_sets.length.regex + ')?)',
  examples: ['1', '1_1_100px', '1_1_100'],
  getValue: function (value) {
    var result = '';
    var regex = new RegExp('^(' + value_sets.integer.regex + ')' + '(?:_(' + value_sets.integer.regex + '))?' + '(?:_(' + value_sets.length.regex + '))?$');
    var matches = value.match(regex);
    if (!(matches)) return null;
    var flexes = [];
    for (var i = 1; i <= 3; i++) {
      if (!matches[i]) continue;
      if (i == 3){
        flexes.push(value_sets.length.getValue(matches[i]));
      }
      else{
        flexes.push(value_sets.integer.getValue(matches[i]));
      }
    }
    result = flexes.join(' ');
    return result;
  }
};



// DEGREE

value_sets.degree = {
  regex: '(?:_?[0-9]+)(?:d)',
  examples: ['180d', '_90d'],
  getValue: function (value) { return value.replace(/d/g, 'deg'); }
};



// TIME

value_sets.hour = {
  regex: value_sets.integer_0.regex + 'h',
  examples: ['0h', '100h'],
  getValue: getValueFromOriginalValue
};

value_sets.hour_0_12 = {
  regex: value_sets.integer_0_12.regex + 'h',
  examples: ['0h', '12h'],
  getValue: getValueFromOriginalValue
};

value_sets.second = {
  regex: value_sets.float_0.regex + 's',
  examples: ['0s', '100s'],
  getValue: getValueFromOriginalValue
};

value_sets.millisecond = {
  regex: value_sets.float_0.regex + 'ms',
  examples: ['0ms', '100ms'],
  getValue: getValueFromOriginalValue
};



// TRANSFORM

value_sets.translate_length_calc_2D = {
  regex: '(?:[X|Y]' + value_sets.length_calc.regex + ')+',
  examples: ['X100pxY50px', 'X100_10pxY50pxM10', 'X100M2_100vwD3__100cmD4_100pxD5_100M6_100vwD7__100cmD8_100pxD9'],
  getValue: function (value) {
    var result = 'translate( ';
    var regex_X = new RegExp('X(' + value_sets.length_calc.regex + ')');
    var matches_X = value.match(regex_X);
    if (matches_X) {
      result += value_sets.length_calc.getValue(matches_X[0]);
    } else {
      result += 0;
    }
    result += ', ';
    var regex_Y = new RegExp('Y(' + value_sets.length_calc.regex + ')');
    var matches_Y = value.match(regex_Y);
    if (matches_Y) {
      result += value_sets.length_calc.getValue(matches_Y[0]);
    } else {
      result += 0;
    }
    result += ' )';
    return result;
  }
};



// COLOR

value_sets.hex_color = {
  regex: '(?:[0-9A-F]{6})',
  examples: ['000000', 'FFFFFF'],
  getValue: function (value) {
    var result = 'rgba(';
    result += parseInt(value.substring(0, 2), 16) + ', ';
    result += parseInt(value.substring(2, 4), 16) + ', ';
    result += parseInt(value.substring(4, 6), 16);
    result += ', 100)';
    return result;
  },
  getObject: function (value) {
    var result = {
      red: parseInt(value.substring(0, 2), 16),
      green: parseInt(value.substring(2, 4), 16),
      blue: parseInt(value.substring(4, 6), 16)
    };
    return result;
  }
};

value_sets.google_color = {
  regex: '(?:red|pink|purple|deeppurple|indigo|blue|lightblue|cyan|teal|green|lightgreen|lime|yellow|amber|orange|deeporange|brown|grey|bluegrey|black|white|rd|pk|pe|dp|io|be|lb|cn|tl|gn|lg|le|yw|ar|oe|de|bn|gy|by|bk|we)(?:[1-9]00|50)?',
  values: {
    rd: 'F44336', rd50: 'FFEBEE', rd100: 'FFCDD2', rd200: 'EF9A9A', rd300: 'E57373', rd400: 'EF5350', rd500: 'F44336', rd600: 'E53935', rd700: 'D32F2F', rd800: 'C62828', rd900: 'B71C1C', //Red
    red: 'F44336', red50: 'FFEBEE', red100: 'FFCDD2', red200: 'EF9A9A', red300: 'E57373', red400: 'EF5350', red500: 'F44336', red600: 'E53935', red700: 'D32F2F', red800: 'C62828', red900: 'B71C1C', //Red

    pk: 'E91E63', pk50: 'FCE4EC', pk100: 'F8BBD0', pk200: 'F48FB1', pk300: 'F06292', pk400: 'EC407A', pk500: 'E91E63', pk600: 'D81B60', pk700: 'C2185B', pk800: 'AD1457', pk900: '880E4F', //Pink
    pink: 'E91E63', pink50: 'FCE4EC', pink100: 'F8BBD0', pink200: 'F48FB1', pink300: 'F06292', pink400: 'EC407A', pink500: 'E91E63', pink600: 'D81B60', pink700: 'C2185B', pink800: 'AD1457', pink900: '880E4F', //Pink

    pe: '9C27B0', pe50: 'F3E5F5', pe100: 'E1BEE7', pe200: 'CE93D8', pe300: 'BA68C8', pe400: 'AB47BC', pe500: '9C27B0', pe600: '8E24AA', pe700: '7B1FA2', pe800: '6A1B9A', pe900: '4A148C', //Purple
    purple: '9C27B0', purple50: 'F3E5F5', purple100: 'E1BEE7', purple200: 'CE93D8', purple300: 'BA68C8', purple400: 'AB47BC', purple500: '9C27B0', purple600: '8E24AA', purple700: '7B1FA2', purple800: '6A1B9A', purple900: '4A148C', //Purple

    dp: '673AB7', dp50: 'EDE7F6', dp100: 'D1C4E9', dp200: 'B39DDB', dp300: '9575CD', dp400: '7E57C2', dp500: '673AB7', dp600: '5E35B1', dp700: '512DA8', dp800: '4527A0', dp900: '311B92', //Deep Purple
    deeppurple: '673AB7', deeppurple50: 'EDE7F6', deeppurple100: 'D1C4E9', deeppurple200: 'B39DDB', deeppurple300: '9575CD', deeppurple400: '7E57C2', deeppurple500: '673AB7', deeppurple600: '5E35B1', deeppurple700: '512DA8', deeppurple800: '4527A0', deeppurple900: '311B92', //Deep Purple

    io: '3F51B5', io50: 'E8EAF6', io100: 'C5CAE9', io200: '9FA8DA', io300: '7986CB', io400: '5C6BC0', io500: '3F51B5', io600: '3949AB', io700: '303F9F', io800: '283593', io900: '1A237E', //Indigo
    indigo: '3F51B5', indigo50: 'E8EAF6', indigo100: 'C5CAE9', indigo200: '9FA8DA', indigo300: '7986CB', indigo400: '5C6BC0', indigo500: '3F51B5', indigo600: '3949AB', indigo700: '303F9F', indigo800: '283593', indigo900: '1A237E', //Indigo

    be: '2196F3', be50: 'E3F2FD', be100: 'BBDEFB', be200: '90CAF9', be300: '64B5F6', be400: '42A5F5', be500: '2196F3', be600: '1E88E5', be700: '1976D2', be800: '1565C0', be900: '0D47A1', //Blue
    blue: '2196F3', blue50: 'E3F2FD', blue100: 'BBDEFB', blue200: '90CAF9', blue300: '64B5F6', blue400: '42A5F5', blue500: '2196F3', blue600: '1E88E5', blue700: '1976D2', blue800: '1565C0', blue900: '0D47A1', //Blue

    lb: '03A9F4', lb50: 'E1F5FE', lb100: 'B3E5FC', lb200: '81D4FA', lb300: '4FC3F7', lb400: '29B6F6', lb500: '03A9F4', lb600: '039BE5', lb700: '0288D1', lb800: '0277BD', lb900: '01579B', //Light Blue
    lightblue: '03A9F4', lightblue50: 'E1F5FE', lightblue100: 'B3E5FC', lightblue200: '81D4FA', lightblue300: '4FC3F7', lightblue400: '29B6F6', lightblue500: '03A9F4', lightblue600: '039BE5', lightblue700: '0288D1', lightblue800: '0277BD', lightblue900: '01579B', //Light Blue

    cn: '00BCD4', cn50: 'E0F7FA', cn100: 'B2EBF2', cn200: '80DEEA', cn300: '4DD0E1', cn400: '26C6DA', cn500: '00BCD4', cn600: '00ACC1', cn700: '0097A7', cn800: '00838F', cn900: '006064', //Cyan
    cyan: '00BCD4', cyan50: 'E0F7FA', cyan100: 'B2EBF2', cyan200: '80DEEA', cyan300: '4DD0E1', cyan400: '26C6DA', cyan500: '00BCD4', cyan600: '00ACC1', cyan700: '0097A7', cyan800: '00838F', cyan900: '006064', //Cyan

    tl: '009688', tl50: 'E0F2F1', tl100: 'B2DFDB', tl200: '80CBC4', tl300: '4DB6AC', tl400: '26A69A', tl500: '009688', tl600: '00897B', tl700: '00796B', tl800: '00695C', tl900: '004D40', //Teal
    teal: '009688', teal50: 'E0F2F1', teal100: 'B2DFDB', teal200: '80CBC4', teal300: '4DB6AC', teal400: '26A69A', teal500: '009688', teal600: '00897B', teal700: '00796B', teal800: '00695C', teal900: '004D40', //Teal

    gn: '4CAF50', gn50: 'E8F5E9', gn100: 'C8E6C9', gn200: 'A5D6A7', gn300: '81C784', gn400: '66BB6A', gn500: '4CAF50', gn600: '43A047', gn700: '388E3C', gn800: '2E7D32', gn900: '1B5E20', //Green
    green: '4CAF50', green50: 'E8F5E9', green100: 'C8E6C9', green200: 'A5D6A7', green300: '81C784', green400: '66BB6A', green500: '4CAF50', green600: '43A047', green700: '388E3C', green800: '2E7D32', green900: '1B5E20', //Green

    lg: '8BC34A', lg50: 'F1F8E9', lg100: 'DCEDC8', lg200: 'C5E1A5', lg300: 'AED581', lg400: '9CCC65', lg500: '8BC34A', lg600: '7CB342', lg700: '689F38', lg800: '558B2F', lg900: '33691E', //Light Green
    lightgreen: '8BC34A', lightgreen50: 'F1F8E9', lightgreen100: 'DCEDC8', lightgreen200: 'C5E1A5', lightgreen300: 'AED581', lightgreen400: '9CCC65', lightgreen500: '8BC34A', lightgreen600: '7CB342', lightgreen700: '689F38', lightgreen800: '558B2F', lightgreen900: '33691E', //Light Green

    le: 'CDDC39', le50: 'F9FBE7', le100: 'F0F4C3', le200: 'E6EE9C', le300: 'DCE775', le400: 'D4E157', le500: 'CDDC39', le600: 'C0CA33', le700: 'AFB42B', le800: '9E9D24', le900: '827717', //Lime
    lime: 'CDDC39', lime50: 'F9FBE7', lime100: 'F0F4C3', lime200: 'E6EE9C', lime300: 'DCE775', lime400: 'D4E157', lime500: 'CDDC39', lime600: 'C0CA33', lime700: 'AFB42B', lime800: '9E9D24', lime900: '827717', //Lime

    yw: 'FFEB3B', yw50: 'FFFDE7', yw100: 'FFF9C4', yw200: 'FFF59D', yw300: 'FFF176', yw400: 'FFEE58', yw500: 'FFEB3B', yw600: 'FDD835', yw700: 'FBC02D', yw800: 'F9A825', yw900: 'F57F17', //Yellow
    yellow: 'FFEB3B', yellow50: 'FFFDE7', yellow100: 'FFF9C4', yellow200: 'FFF59D', yellow300: 'FFF176', yellow400: 'FFEE58', yellow500: 'FFEB3B', yellow600: 'FDD835', yellow700: 'FBC02D', yellow800: 'F9A825', yellow900: 'F57F17', //Yellow

    ar: 'FFC107', ar50: 'FFF8E1', ar100: 'FFECB3', ar200: 'FFE082', ar300: 'FFD54F', ar400: 'FFCA28', ar500: 'FFC107', ar600: 'FFB300', ar700: 'FFA000', ar800: 'FF8F00', ar900: 'FF6F00', //Amber
    amber: 'FFC107', amber50: 'FFF8E1', amber100: 'FFECB3', amber200: 'FFE082', amber300: 'FFD54F', amber400: 'FFCA28', amber500: 'FFC107', amber600: 'FFB300', amber700: 'FFA000', amber800: 'FF8F00', amber900: 'FF6F00', //Amber

    oe: 'FF9800', oe50: 'FFF3E0', oe100: 'FFE0B2', oe200: 'FFCC80', oe300: 'FFB74D', oe400: 'FFA726', oe500: 'FF9800', oe600: 'FB8C00', oe700: 'F57C00', oe800: 'EF6C00', oe900: 'E65100', //Orange
    orange: 'FF9800', orange50: 'FFF3E0', orange100: 'FFE0B2', orange200: 'FFCC80', orange300: 'FFB74D', orange400: 'FFA726', orange500: 'FF9800', orange600: 'FB8C00', orange700: 'F57C00', orange800: 'EF6C00', orange900: 'E65100', //Orange

    de: 'FF5722', de50: 'FBE9E7', de100: 'FFCCBC', de200: 'FFAB91', de300: 'FF8A65', de400: 'FF7043', de500: 'FF5722', de600: 'F4511E', de700: 'E64A19', de800: 'D84315', de900: 'BF360C', //Deep Orange
    deeporange: 'FF5722', deeporange50: 'FBE9E7', deeporange100: 'FFCCBC', deeporange200: 'FFAB91', deeporange300: 'FF8A65', deeporange400: 'FF7043', deeporange500: 'FF5722', deeporange600: 'F4511E', deeporange700: 'E64A19', deeporange800: 'D84315', deeporange900: 'BF360C', //Deep Orange

    bn: '795548', bn50: 'EFEBE9', bn100: 'D7CCC8', bn200: 'BCAAA4', bn300: 'A1887F', bn400: '8D6E63', bn500: '795548', bn600: '6D4C41', bn700: '5D4037', bn800: '4E342E', bn900: '3E2723', //Brown
    brown: '795548', brown50: 'EFEBE9', brown100: 'D7CCC8', brown200: 'BCAAA4', brown300: 'A1887F', brown400: '8D6E63', brown500: '795548', brown600: '6D4C41', brown700: '5D4037', brown800: '4E342E', brown900: '3E2723', //Brown

    gy: '9E9E9E', gy50: 'FAFAFA', gy100: 'F5F5F5', gy200: 'EEEEEE', gy300: 'E0E0E0', gy400: 'BDBDBD', gy500: '9E9E9E', gy600: '757575', gy700: '616161', gy800: '424242', gy900: '212121', //Grey
    grey: '9E9E9E', grey50: 'FAFAFA', grey100: 'F5F5F5', grey200: 'EEEEEE', grey300: 'E0E0E0', grey400: 'BDBDBD', grey500: '9E9E9E', grey600: '757575', grey700: '616161', grey800: '424242', grey900: '212121', //Grey

    by: '607D8B', by50: 'ECEFF1', by100: 'CFD8DC', by200: 'B0BEC5', by300: '90A4AE', by400: '78909C', by500: '607D8B', by600: '546E7A', by700: '455A64', by800: '37474F', by900: '263238', //Blue Grey
    bluegrey: '607D8B', bluegrey50: 'ECEFF1', bluegrey100: 'CFD8DC', bluegrey200: 'B0BEC5', bluegrey300: '90A4AE', bluegrey400: '78909C', bluegrey500: '607D8B', bluegrey600: '546E7A', bluegrey700: '455A64', bluegrey800: '37474F', bluegrey900: '263238', //Blue Grey

    bk: '000000', //Black
    black: '000000', //Black

    we: 'FFFFFF', //White
    white: 'FFFFFF' //White
  },
  examples: ['yw', 'rd500'],
  getValue: function (value) {
    return value_sets.hex_color.getValue(this.values[value]);
  },
  getObject: function (value) {
    return value_sets.hex_color.getObject(this.values[value]);
  }
};

value_sets.rgb_color = {
  regex: value_sets.integer_0_255.regex + '(?:_' + value_sets.integer_0_255.regex + '){2}',
  examples: ['0_0_0', '10_10_10', '100_100_100', '255_255_255'],
  getValue: function (value) {
    var splits = value.split('_');
    if (!(splits && splits.length == 3)) return null;
    var result = 'rgba(';
    result += splits[0] + ', ';
    result += splits[1] + ', ';
    result += splits[2];
    result += ', 100)';
    return result;
  },
  getObject: function (value) {
    var splits = value.split('_');
    if (!(splits && splits.length == 3)) return null;
    var result = {
      red: splits[0],
      green: splits[1],
      blue: splits[2]
    };
    return result;
  }
};

value_sets.rgba_color = {
  regex: '(?:' + value_sets.google_color.regex + '|' + value_sets.hex_color.regex + '|' + value_sets.rgb_color.regex + ')' + '(?:_' + value_sets.opacity.regex + ')?',
  examples: ['rd_0', 'yw500_25', '123456_50', '255_255_255_100', '255_255_255'],
  getValue: function (value) {
    var regex = new RegExp('(?:(' + value_sets.google_color.regex + ')|(' + value_sets.hex_color.regex + ')|(' + value_sets.rgb_color.regex + '))' + '(?:_(' + value_sets.opacity.regex + '))?');
    var matches = value.match(regex);
    var object_rgb, opacity, matches_each;
    if (matches[1]) {
      var regex_each = new RegExp('(' + value_sets.google_color.regex + ')(?:_(' + value_sets.opacity.regex + '))?');
      matches_each = value.match(regex_each);
      object_rgb = value_sets.google_color.getObject(matches_each[1]);
      if (matches_each[2]) opacity = value_sets.opacity.getValue(matches_each[2]);
    }
    else if (matches[2]) {
      var regex_each = new RegExp('(' + value_sets.hex_color.regex + ')(?:_(' + value_sets.opacity.regex + '))?');
      matches_each = value.match(regex_each);
      object_rgb = value_sets.hex_color.getObject(matches_each[1]);
      if (matches_each[2]) opacity = value_sets.opacity.getValue(matches_each[2]);
    }
    else if (matches[3]) {
      var regex_each = new RegExp('(' + value_sets.rgb_color.regex + ')(?:_(' + value_sets.opacity.regex + '))?');
      matches_each = value.match(regex_each);
      object_rgb = value_sets.rgb_color.getObject(matches_each[1]);
      if (matches_each[2]) opacity = value_sets.opacity.getValue(matches_each[2]);
    }
    if (!object_rgb) return null;
    if (matches_each[2]) {
      return 'rgba(' + object_rgb.red + ',' + object_rgb.green + ',' + object_rgb.blue + ',' + opacity + ')';
    } else {
      return 'rgb(' + object_rgb.red + ',' + object_rgb.green + ',' + object_rgb.blue + ')';
    }
  }
};



// GRADIENT

value_sets.gradient = {
  regex: '(?:' + value_sets.gradient_kind.regex + '_)?' + '(?:' + value_sets.degree.regex + ')((?:_' + value_sets.rgba_color.regex + '){2,})',
  examples: ['l_30d_rd_oe_yw_gn_be_io_pe'],
  getValue: function (value) {
    var result = '';
    var regex = new RegExp('(?:(' + value_sets.gradient_kind.regex + ')_)?(' + value_sets.degree.regex + ')((?:_' + value_sets.rgba_color.regex + '){2,})');
    var matches = value.match(regex);
    var gradient_kind = null, degree = null, hour = null, rgba_colors = [];
    if (matches[1]) gradient_kind = value_sets.gradient_kind.getValue(matches[1]);
    if (matches[2]) degree = value_sets.degree.getValue(matches[2]);
    if (matches[3]) {
      var regex_rgba_color = new RegExp('(?:_(' + value_sets.rgba_color.regex + '))(?:_(' + value_sets.rgba_color.regex + '))');
      var matches_rgba_color = matches[3].match(regex_rgba_color);
      for (var i = 1; i < matches_rgba_color.length; i++) {
        var rgba_color = value_sets.rgba_color.getValue(matches_rgba_color[i]);
        if (rgba_color) rgba_colors.push(rgba_color);
      }
    }
    if (gradient_kind && degree && rgba_colors.length >= 1) {
      return gradient_kind + '(' + degree + ',' + rgba_colors.join(', ') + ')';
    }
  }
};



// SHADOW

value_sets.shadow = {
  regex: value_sets.integer_3digits.regex + '(?:_' + value_sets.integer_3digits.regex + '){0,3}(?:_' + value_sets.rgba_color.regex + ')',
  examples: ['2_2_bk_30', '2_2_2_000000_50'],
  getValue: function (value) {
    var result = '';
    var regex = new RegExp('(' + value_sets.integer_3digits.regex + ')(?:_(' + value_sets.integer_3digits.regex + '))?(?:_(' + value_sets.integer_3digits.regex + '))?(?:_(' + value_sets.integer_3digits.regex + '))?(?:_(' + value_sets.rgba_color.regex + '))');
    var matches = value.match(regex);
    if (!(matches)) return null;
    var shadows = [];
    for (var i = 1; i <= 4; i++) { 
      if (/_/g.test(matches[i])) shadows.push(matches[i].replace(/_/g, '-')); 
      else shadows.push(matches[i]); 
    }
    result = shadows.join('px ') + value_sets.rgba_color.getValue(matches[5]);
    return result;    
  }
};


// URL

value_sets.file_name = {
  regex: '[a-zA-Z0-9_-]+',
  examples: ['aA0_zZ9'],
  getValue: function (value) { return value; }
};

value_sets.image_extension = {
  regex: '(?:png|jpg|gif|PNG|JPG|GIF)',
  examples: ['png', 'GIF'],
  getValue: function (value) { return value; }
};

value_sets.image_url = {
  regex: value_sets.file_name.regex + '([__]' + value_sets.file_name.regex + ')*' + '_' + value_sets.image_extension.regex,
  examples: ['images__image_png'],
  getValue: function (value) { return value; }
};



// VARIABLE

value_sets.variable = {
  regex: '(?:[a-z]+)(?:[A-Z][a-z]+)*',
  examples: ['linear', 'ease', 'easeIn', 'easeOut', 'easeInOut'],
  getValue: function (value) {
    var result = value.replace(/[A-Z]/g, function (letter, index) {
      return index == 0 ? letter.toLowerCase() : '-' + letter.toLowerCase();
    }).replace(/\s+/g, '');
    return result;
  }
};

value_sets.variables = {
  regex: value_sets.variable.regex + '(?:_' + value_sets.variable.regex + ')*',
  examples: ['width_backgroundColor'],
  getValue: function (value) {
    var splits = value.split('_');
    var result = '';
    for (var i = 0; i < splits.length; i++) {
      if (result.length >= 1) { result += ' ' }
      result += value_sets.variable.getValue(splits[i]);
    }
    return result;
  }
};



var test = function(){
  // Loop value_sets
  for(var key in value_sets){
    console.log('\n\n'+key);

    // Set value_set
    var value_set = value_sets[key];
    if(!value_set) continue;

    // Set examples
    var examples = value_set.examples;
    if(!examples) continue;

    // Loop examples
    for(var i=0; i<examples.length; i++){
      var example = examples[i];
      var result = value_set.getValue(example);
      if(!(result==undefined||result==null)) console.log('example', example, 'result', result);
      else console.error('example', example, 'result', result);
    }
  }
}

if(debug) test();
