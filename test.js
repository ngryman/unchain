/*eslint-env mocha */
/*global expect:true */

'use strict'

var unchain = require('./')
  , chai = require('chai')
  , expect = chai.expect
  , sinon = require('sinon')

chai.use(require('sinon-chai'))

describe('unchain', function() {

  it('chains functions', function(done) {
    var spy1 = sinon.spy()
      , spy2 = sinon.spy()

    unchain(spy1, spy2, function() {
      expect(spy1).to.have.been.called
      expect(spy2).to.have.been.called
      expect(spy1).to.have.been.calledBefore(spy2)
      done()
    })()
  })

  it('accepts an array of functions', function(done) {
    var spy1 = sinon.spy()
      , spy2 = sinon.spy()

    unchain([spy1, spy2, function() {
      expect(spy1).to.have.been.called
      expect(spy2).to.have.been.called
      expect(spy1).to.have.been.calledBefore(spy2)
      done()
    }])()
  })

  it('can delay functions', function(done) {
    var spy1 = sinon.spy()
      , spy2 = sinon.spy()
      , before, after

    unchain(
      spy1,
      function() { before = Date.now() },
      100,
      function() { after = Date.now() },
      spy2, function() {
        expect(after - before).to.be.at.least(100)
        expect(spy1).to.have.been.called
        expect(spy2).to.have.been.called
        expect(spy1).to.have.been.calledBefore(spy2)
        done()
      })()
  })

})
