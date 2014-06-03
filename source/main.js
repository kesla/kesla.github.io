var elementClass = require('element-class')
  , forEach = function (almostArray, callback) {
      for(var i = 0; i < almostArray.length; i++)
        callback(almostArray[i])
    }

require('domready')(function () {
  forEach(document.querySelectorAll('.fadein'), function (elm) {
    elementClass(elm).add('run')
  })
})