var forEach = function (almostArray, callback) {
      for(var i = 0; i < almostArray.length; i++)
        callback(almostArray[i])
    }

require('./segment.io')

require('domready')(function () {
  forEach(document.querySelectorAll('.fadein'), function (elm) {
    elm.classList.add('run')
  })
})