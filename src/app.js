import './connect-angular'

angular
  .module('ConnectClient', [
    'connectAngular'
  ])

  .config(function ($locationProvider, $routeProvider, AnvilProvider) {
    console.log('config called', arguments)
  })
  .controller('SigninCtrl', function ($scope, Connect) {

    $scope.session = Connect.session;

    $scope.$watch(
      // proper formatting allows easier setting of breakpoints.
      function () {
        return Connect.session
      },
      function (newVal) {
        $scope.session = newVal
      },
      true
    );

  })
