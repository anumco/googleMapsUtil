/*!
 * DistanceMatrix
 * Copyright(c) 2013 Shunsuke <qfoori@gmail.com>
 * MIT Licensed
 */

var Gmap       = require('./_googlemaps'),
    __extends  = require('./_extends'),
    objectutil = require('./objectutil');
    
var DistanceMatrix = (function (_super) {
  __extends(DistanceMatrix, _super);

  function DistanceMatrix() {
    _super.call(this);
    this._service = 'distancematrix/';
  }

  DistanceMatrix.prototype.distancematrix = function(origins, destinations, options, cb, sensor, isHttps) {
    if (!origins || !destinations) {
      var err = new Error('address is not set');
      if (cb) {
        cb(err);
      }
      return;
    }

    var sensor = sensor || 'false';
    var componenturi;
    var param;
    var params = {};
    try {
      params.origins      = this._cvtAddress(origins);
      params.destinations = this._cvtAddress(destinations);
    } catch (err) {
      console.log(err);
      if (cb) {
        cb(err);
      }
      return;
    }
    
    this._setOptions(options, params);
    params.sensor = sensor;

    this._request(params, isHttps, cb);
  };


  return DistanceMatrix;
})(Gmap);

module.exports = DistanceMatrix;
