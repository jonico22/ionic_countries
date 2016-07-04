angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.theMessage = Chats.getMessage('Sergio');
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('CountriesCtrl', function($scope, Countries, $http) {
  $scope.theMessage = Countries.getMessage();
  $scope.getCountries = function(){
    $http.get('https://restcountries.eu/rest/v1/all')
    .then(function(response){
        $scope.theCountries = response.data;
    }, function(error){
        console.log(error)
    });
  }
  $scope.getCountries();
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Countries) {
  $scope.country = Countries.get($stateParams.chatId);
});
