export var class_sets = {
  cen: {
    value_set: ['xy', 'x', 'y', null],
    get_classes: function (value) {
      var result;
      if (value == 'x') result = ['l-50', 'tn-X_50'];
      else if (value == 'y') result = ['t-50', 'tn-Y_50'];
      else result = ['t-50', 'l-50', 'tn-X_50Y_50'];
      return result;
    }
  },
  b: {
    value_set: ['img'],
    get_classes: function (value) {
      var result = ['background_size-cover', 'background_repeat-centerCenter', 'background_position-cc', 'object_fit-cover'];
      return result;
    }
  }
}
