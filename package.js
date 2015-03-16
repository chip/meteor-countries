Package.describe({
  name: 'chipcastle:countries',
  summary: 'Provides a list of countries',
  version: '1.0.2',
  git: 'https://github.com/chip/meteor-countries.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(["spacebars", "ui"], "client");
  api.addFiles('countries.js', 'client');

  if (typeof api.export !== 'undefined') {
    api.export("Countries", ["client"]);
  }
});

Package.onTest(function(api) {
  api.use(['tinytest', 'ui', 'underscore'], 'client');
  api.addFiles(['countries.js', 'countries-tests.js'], 'client');
});
