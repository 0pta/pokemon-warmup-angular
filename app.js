(function () {
  angular.module('app', [])
  .component('pokerandom', {
    controller: controller,
    templateUrl: 'pokehtml.html'
  })

  controller.$inject = ['$http']

  function controller ($http) {
    const vm = this

    vm.generateMon = function () {
      const rand = Math.ceil(Math.random() * 722)

      $http.get(`http://pokeapi.co/api/v2/pokemon/${rand}`)
      .then(response => {
        vm.pokemon = {
          name: response.data.name,
          image: response.data.sprites.front_default,
        }
        console.log(vm.pokemon);
      })


    }

  }

})()
