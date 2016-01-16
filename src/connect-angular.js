import Connect from './connect'
import angular from 'angular'

function init (providerOptions, $http, $q, $location, $window, $document) {
  Connect.init(providerOptions, {
    http: {
      request: function (config) {
        return $http(config)
      },
      getData: function (response) {
        return response.data
      }
    },
    location: {
      hash: function () {
        return $location.hash()
      },
      path: function () {
        return $location.path()
      }
    },
    dom: {
      getWindow: function () {
        return $window
      },
      getDocument: function () {
        return $document[0]
      }
    }
  })
  return Connect
}

angular.module('connectAngular', [])

  .provider('ConnectAngular', function ConnectAngularProvider () {

    /**
     * Factory
     */

    ConnectAngular.$get = [
      '$q',
      '$http',
      '$rootScope',
      '$location',
      '$document',
      '$window', function ($q, $http, $rootScope, $location, $document, $window) {
        init(null, $http, $q, $location, $window, $document)
        console.log(arguments)
        return Connect
      }]

    return Anvil
  })
