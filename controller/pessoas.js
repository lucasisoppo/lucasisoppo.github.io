pessoasModulo = angular.module('pessoasModulo', []);

pessoasModulo.controller("pessoasController", function ($scope) 
	{
	$scope.pessoas = [
		{codigo: 1, nome: "Lucas", sobrenome: "Isoppo"},
		{codigo: 2, nome: "Lucas", sobrenome: "Isoppo"},
		{codigo: 3, nome: "Lucas", sobrenome: "Isoppo"},
		{codigo: 4, nome: "Lucas", sobrenome: "Isoppo"}
		];

	$scope.selecionaPessoas = function(pessoaSelecionada){
		$scope.pessoa = pessoaSelecionada;
		}
	$scope.limparCampos = function () {
		$scope.pessoa = "";
		}
	$scope.salvar = function() {
		$scope.pessoas.push($scope.pessoa);
		$scope.limparCampos();
		}
	$scope.excluir = function(){
		$scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa),1);
		$scope.limparCampos();
		}
	});