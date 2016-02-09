angular.module('starter.controllers', ['firebase'])

  .controller('LoginCtrl', LoginCtrl)

  .controller('DashCtrl', DashCtrl)

  .controller('ChatsCtrl', ChatsCtrl)

  .controller('ChatDetailCtrl', ChatDetailCtrl)

  .controller('AccountCtrl', AccountCtrl)

  .controller('NavCtrl', NavCtrl);

function NavCtrl($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  };


function LoginCtrl(Auth, $state) {

  this.loginWithGoogle = function loginWithGoogle() {
    Auth.$authWithOAuthPopup('google')
      .then(function(authData) {
        $state.go('tab.dash');
      });
  };
  //this.loginWithFacebook = function loginWithFacebook() {
  //  Auth.$authWithOAuthPopup('facebook')
  //    .then(function(authData){
  //      $state.go('tab.dash');
  //    });
  //};

}
LoginCtrl.$inject = ['Auth', '$state'];

function DashCtrl($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
};

function ChatsCtrl($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}
ChatsCtrl.$inject = ['$scope', 'Chats'];

function ChatDetailCtrl($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}
ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];

function AccountCtrl($scope) {
  $scope.settings = {
    enableFriends: true
  };
}
AccountCtrl.$inject = ['$scope'];
