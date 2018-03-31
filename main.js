angular.module('app', [])

angular.module('app')
   .controller('MeuController', MeuController);

function MeuController($http) {
    var vm = this;

    vm.nome = '';
    vm.peso = '';
    vm.altura = '';
    vm.mensagens = [];

    vm.calcular = function() {
        $http.get('/api/imc?nome=' + vm.nome +'&peso='+vm.peso+'&altura='+vm.altura )
          .then(function(response){
              vm.mensagens.push(response.data.mensagem);
          });
    };
}