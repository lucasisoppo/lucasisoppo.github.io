var pessoasModulo = angular.module('pessoasModulo', []);

pessoasModulo.controller("pessoasController", function($scope, $http) {
    urlPessoas = 'http://localhost:3000/SistemaImoveis-1.0/rest/pessoas';
    $scope.listarPessoas = function () {
        $http.get(urlPessoas).success(function (pessoas) {
            console.log('Listou');
            $scope.pessoas = pessoas;
        }).error(function (erro) {
            alert(erro);
        });
    }
    $scope.selecionaPessoas = function (pessoaSelecionada) {
        console.log('Selecionou');
        $scope.pessoa = pessoaSelecionada;
    }
    $scope.limparCampos = function () {
        $scope.pessoa = "";
    }

    $scope.salvar = function() {
        console.log($scope.pessoa.codigo);
        if ($scope.pessoa.codigo == undefined) {
            console.log('Caiu no POST');
            $http.post(urlPessoas, $scope.pessoa).success(function(pessoa) {
                $scope.limparCampos();
                $scope.listarPessoas();
            }).error(function (erro) {
                alert(erro);
            });
        } else {
            console.log('Caiu no PUT');
            $http.put(urlPessoas, $scope.pessoa).success(function(pessoa) {
                $scope.listarPessoas();
                $scope.limparCampos();
            }).error(function (erro) {
                alert(erro);
            });
        }

    }

    $scope.excluir = function () {
        console.log($scope.pessoa.codigo);
        if ($scope.pessoa.codigo == undefined) {
            console.log('Sem pessoa selecionada');
        } else {
            $http.delete(urlPessoas+'/'+$scope.pessoa.codigo).success(function(){
                $scope.listarPessoas();
                $scope.limparCampos();
            }).error(function (erro) {
                alert(erro);
            });
        }
    }

    //executa
    $scope.listarPessoas();
});