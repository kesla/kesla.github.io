var imageLoaded = require('image-loaded')
  , forEach = function (almostArray, callback) {
      for(var i = 0; i < almostArray.length; i++)
        callback(almostArray[i])
    }

require('./segment.io')

require('domready')(function () {
  var img = document.querySelector('img')

  if (img) {
    imageLoaded(img, function () {
      forEach(document.querySelectorAll('.fadein'), function (elm) {
        elm.classList.add('run')
      })
    })
  } else {
    forEach(document.querySelectorAll('.fadein'), function (elm) {
      elm.classList.add('run')
    })
  }
})