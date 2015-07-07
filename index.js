'use strict'

module.exports = function(queue) {
  if (!Array.isArray(queue)) {
    queue = arguments
  }

  return [].reduceRight.call(queue, function(chain, fn) {
    var delay = 'number' === typeof fn ? fn : 0
    return function() {
      setTimeout(function() {
        chain()
        if (!delay) fn()
      }, delay)
    }
  }, function() {})
}
