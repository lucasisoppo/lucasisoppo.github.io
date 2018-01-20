casasModulo = angular.module('casasModulo', []);

casasModulo.controller("casasController", function ($scope) 
	{
	$scope.casas = [
		{codigo: 1, endereco: "Rua x Nro 916", valor: 1000, proprietario:{codigo: 1, nome: "Lucas", sobrenome: "Isoppo"}},
		{codigo: 2, endereco: "Rua x Nro 917", valor: 2000, proprietario:{codigo: 2, nome: "Miguel", sobrenome: "Isoppo"}},
		{codigo: 3, endereco: "Rua x Nro 918", valor: 3000, proprietario:{codigo: 3, nome: "Daniela", sobrenome: "Isoppo"}},
		{codigo: 4, endereco: "Rua x Nro 919", valor: 4000, proprietario:{codigo: 4, nome: "Silvio", sobrenome: "Isoppo"}},
		];

	$scope.pessoas = [
		{codigo: 1, nome: "Lucas", sobrenome: "Isoppo"},
		{codigo: 2, nome: "Miguel", sobrenome: "Isoppo"},
		{codigo: 3, nome: "Daniela", sobrenome: "Isoppo"},
		{codigo: 4, nome: "Silvio", sobrenome: "Isoppo"}
		];	
		
	$scope.selecionaCasas = function(casaSelecionada){
		$scope.casa = casaSelecionada;
		}
	$scope.limparCampos = function () {
		$scope.casa = "";
		}
	$scope.salvar = function() {
		$scope.casas.push($scope.casa);
		$scope.limparCampos();
		}
	$scope.excluir = function(){
		$scope.casas.splice($scope.casas.indexOf($scope.casa),1);
		$scope.limparCampos();
		}
	});