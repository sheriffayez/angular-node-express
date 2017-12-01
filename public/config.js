(function(){



	angular
	.module("app")
	.config(function($routeProvider){
      $routeProvider
      .when("/list",{
       template:"<list-component></list-component>"

      })
	  .when("/contact",{
      template:"<contact-component></contact-component>"

	  });
	});
})();