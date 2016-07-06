angular.module('starter.countries',[])
.factory('Countries', function($http){
  var theMessage = 'Lista de paises';
  var savedCountries = {};
  var selectCountry = {};
  var urlBase = 'https://restcountries.eu/rest/v1';
    savedCountries.getMessage =  function(){
      return theMessage;
    },
    savedCountries.all = function(){
       return $http.get(urlBase+'/all');
    }
    savedCountries.getSelectedCountry = function(){
       return selectCountry;
    }
    savedCountries.selectedCountry = function(country){
      selectCountry = country ;
      console.log('el pais seleccionado es ' + country.name  );
    }
    return savedCountries;
});
