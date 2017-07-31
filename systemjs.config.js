(function (global) {
  System.config({
    paths: {
      // псевдоним для пути к модулям
      'npm:': 'node_modules/'
    },
    // указываем загрузчику System, где искать модули
    map: {
      // наше приложение будет находиться в папке app
      app: 'app',
      // пакеты angular
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // остальные пакеты
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
    //Preloader
    'ng2-spinning-preloader':       'npm:ng2-spinning-preloader/src',
	  // the following is required by dragula
		'dragula': 'npm:dragula',
		'ng2-dragula': 'npm:ng2-dragula',
		'contra': 'npm:contra',
		'atoa': 'npm:atoa',
		'ticky': 'npm:ticky',
		'crossvent': 'npm:crossvent/src',
		'custom-event': 'npm:custom-event'
    },
    // пакеты, которые указывают загрузчику System, как загружать файлы без имени и расширения
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
	  // the following is required by dragula
		'dragula': {main: 'dragula.js', defaultExtension: 'js'},
		'ng2-dragula': {defaultExtension: 'js'},
		'contra': {main: 'contra.js', defaultExtension: 'js'},
		'atoa': {main: 'atoa.js', defaultExtension: 'js'},
		'ticky': {main: 'ticky.js', defaultExtension: 'js'},
		'crossvent': {main: 'crossvent.js', defaultExtension: 'js'},
		'custom-event': {main: 'index.js', defaultExtension: 'js'},
    //Preloader
    'ng2-spinning-preloader': {main: 'index.js', defaultExtension: 'js'}
    }
  });
})(this);