function Ctrl($scope) {
  $scope.templates =
    [ { name: 'Home', url: 'h.omehtml'},
      { name: 'Projects', url: 'projects.html'},
      { name: 'Publications', url: 'publications.html'},
      { name: 'Blog', url: 'blog.html'},
      { name: 'Contact', url: 'contact.html'},
      { name: 'About', url: 'about.html'} ];
  $scope.template = $scope.templates[0];
};
