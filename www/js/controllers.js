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

.controller('CountriesCtrl', function($scope, Countries, $state) {
  $scope.theMessage = Countries.getMessage();
  $scope.getCountries = function(){
    Countries.all()
    .then(function (response) {
       $scope.theCountries = response.data;
    }, function(error){
        console.log(error)
    });
  }
  $scope.getCountries();
  $scope.showDetail = function(country){
    $state.go('tab.country-detail');
    Countries.selectedCountry(country);
  }
})
.controller('CountriesDetailCtrl', function($scope, Countries) {
  $scope.country = Countries.getSelectedCountry();
  console.log(Countries.getSelectedCountry());
});
