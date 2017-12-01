(function() {
  var contactComponent = {
    template: `
    <form ng-submit="$ctrl.addContact($ctrl.newContact);">
      <input type="text" placeholder="Name" ng-model="$ctrl.newContact.name">
      <input type="text" placeholder="Phone Number" ng-model="$ctrl.newContact.phone">
      <input type="text" placeholder="Email" ng-model="$ctrl.newContact.email">
      <input type="text" placeholder="Relation" ng-model="$ctrl.newContact.relation">
      <button>Add Contact</button>
    </form>
    <div>
      <div ng-repeat="contact in $ctrl.contactList"> 
        <span>{{ contact.name }}</span> <span>{{ contact.phone }}</span> <span>{{ contact.email }}</span> <span>{{ contact.relation }}</span> <a ng-click="$ctrl.deleteContact(contact.id);" href="">X</a> <a ng-click="$ctrl.showEdit(contact);" href="">Edit</a>
      </div>
      <form ng-show="$ctrl.showFields" ng-submit="$ctrl.saveEdit($ctrl.editObj);">
        <input type="text" ng-model="$ctrl.editObj.name">
        <input type="text" ng-model="$ctrl.editObj.phone">
        <input type="text" ng-model="$ctrl.editObj.email">
        <input type="text" ng-model="$ctrl.editObj.relation">
        <button>Save</button>
      </form>
    </div>
    `,
    controller: function(ContactService) {
      var vm = this;
      vm.contactList = [];
      vm.showFields = false;
      vm.editObj = {};
      ContactService.getContacts().then(function(response) {
        vm.contactList = response.data;
      });
      vm.saveEdit = function(newObj) {
        console.log(newObj);
        vm.showFields = false;
        vm.editObj = {};
        
        ContactService.editContact(newObj).then(function(response){
          vm.contactList = response.data;
        });
      };
      vm.showEdit = function(contactObj) {
        vm.showFields = true;
        vm.editObj = contactObj;
        console.log(contactObj);
      };
      vm.deleteContact = function(id) {
        ContactService.deleteContact(id).then(function(response) {
          vm.contactList = response.data;
        });
      };
      vm.addContact = function(newContact) {
        ContactService.addContact(newContact).then(function(response) {
          vm.contactList = response.data;
        });
      };
    }
  };

  angular
    .module("app")
    .component("contactComponent", contactComponent);
})();