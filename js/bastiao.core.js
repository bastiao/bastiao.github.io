
function Ctrl($scope) {
  $scope.templates =
    [ { name: 'Home', url: 'templates/home.html'},
      { name: 'Projects', url: 'templates/projects.html'},
      { name: 'Publications', url: 'templates/publications.html'},
      { name: 'Blog', url: 'templates/blog.html'},
      { name: 'Contact', url: 'templates/contact.html'},
      { name: 'About', url: 'templates/about.html'} ];
  $scope.template = $scope.templates[0];
  $scope.loadTemplate = function(tmp){
    alert(tmp);
  };
};



