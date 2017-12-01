(function(){
   function ContactService($http){

   	return{
     
     getContacts:getContacts,
     addContact: addContact,
     deleteContact: deleteContact,
     editContact:editContact
      
      };
function deleteContact(id){
	console.log(id)
	return $http({
		url:"/contacts/" +id,
		method:"DELETE"
	}).then(function(response){
		return response;
	});
}
function editContact(newObj){

	return $http({
		url:"/contacts/" + newObj.id,
		method:"PUT",
		data: newObj
	}).then(function(response){
		return response;
	});
}
function addContact(newContact){
      	return $http({

      		url:"/contacts",
      		method:"POST",
      		data:newContact
      	}).then(function(response){
      		return response;
      	});
}

      function getContacts(){
      	return $http({

      		url:"/contacts",
      		method:"GET"

      	}).then(function(response){
      		return response;
      	});
      }
}

angular
.module("app")
.factory("ContactService", ContactService)

})();