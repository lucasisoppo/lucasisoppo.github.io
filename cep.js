angular.module('app')
   .controller('BuscaCEP', BuscaCEP);

function BuscaCEP($http) {
    var vm = this;

    vm.cep = '';
    vm.logradouro = '';
    vm.bairro = '';
    vm.cidade = '';
    vm.uf = '';

    vm.consultar = function() {
        $http.get('http://apicorreios.herokuapp.com/api/cep/'+vm.cep )
          .then(function(response){
              vm.logradouro=(response.data.logradouro);
              vm.bairro=(response.data.bairro);
              vm.cidade=(response.data.cidade);
              vm.uf=(response.data.uf);
          });
    };
}