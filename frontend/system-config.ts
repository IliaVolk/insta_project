/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
declare var System: any;

System.config({
  paths: {
    // paths serve as alias
    'npm:': 'node_modules/'
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    'app': 'app',
    'main': 'app/main.js',

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
    '@angular/material': 'npm:@angular/material/material.umd.js',
    // other libraries
    'rxjs':                      'npm:rxjs',
    'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    'ng2-material':              'npm:ng2-material',
    '@angular2-material/toolbar': 'npm:@angular2-material/toolbar/toolbar.umd.js',
    '@angular2-material/input': 'npm:@angular2-material/input/input.umd.js',
    '@angular2-material/sidenav': 'npm:@angular2-material/sidenav/sidenav.umd.js',
    '@angular2-material/core': 'npm:@angular2-material/core/core.umd.js'
    //'@angular2-material/core' :'npm:@angular2-material/core/core.umd.js'
  },
  // packages tells the System loader how to load when no filename and/or no extension
  packages: {
    'app': { main: './main.js', defaultExtension: 'js' },
    'api' : { defaultExtension : 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular-in-memory-web-api': { main: './index.js', defaultExtension: 'js' },
    'ng2-material': {main: './index.js', defaultExtension: 'js'},
  }
});
