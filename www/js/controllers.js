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

.controller('AccountCtrl', function($scope,$ionicPopup) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.showAlert = function(){
    $ionicPopup.alert({
      title: "!Cuidado!",
      subTitle: "Esta es un alerta",
      cssClass: "myAlert",
      template:'<p>Estas generando una alerta</p>',
      okText : '!No me importa!',
      okType : 'button-assertive'
    });
  }
  $scope.showConfirm = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: "Sobre tu viaje",
      template:"¿Deseas viajar?",
      okType : 'button-assertive'
    })
    confirmPopup.then(function(response){
      if(response){
        console.log('si desea viajar');
      }else{
        console.log('se quedara aburrido en casa..');
      }
    })

  }
})

.controller('CountriesCtrl', function($scope, Countries, $state, $ionicLoading) {
  $scope.theMessage = Countries.getMessage();
  $ionicLoading.show({
    template: '<ion-spinner icon="spiral"></ion-spinner>',
    content : 'Cargando ..',
    animation :"fade-in",
    maxWidth: 200,
    showDelay:0
  });
  $scope.getCountries = function(){
    Countries.all()
    .then(function (response) {
       $scope.theCountries = response.data;
       $ionicLoading.hide();
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
});
