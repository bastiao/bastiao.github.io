function Ctrl($scope) {
  $scope.templates =
    [ { name: 'Home', url: 'layout.html'},
      { name: 'Projects', url: 'layout.html'},
      { name: 'Publications', url: 'layout.html'},
      { name: 'Home', url: 'layout.html'},
      { name: 'Home', url: 'layout.html'}
    , { name: 'Projects', url: 'layout.html'} ];
  $scope.template = $scope.templates[0];
};
