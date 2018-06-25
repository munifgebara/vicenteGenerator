const fs = require("fs");


function mkDir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}


function gerapackagejson(project, angularPath) {
    let src = `
    {
        "name": "project",
        "version": "0.0.0",
        "scripts": {
          "ng": "ng",
          "start": "ng serve",
          "build": "ng build",
          "test": "ng test",
          "lint": "ng lint",
          "e2e": "ng e2e"
        },
        "private": true,
        "dependencies": {
          "@angular/animations": "^6.0.3",
          "@angular/common": "^6.0.3",
          "@angular/compiler": "^6.0.3",
          "@angular/core": "^6.0.3",
          "@angular/forms": "^6.0.3",
          "@angular/http": "^6.0.3",
          "@angular/platform-browser": "^6.0.3",
          "@angular/platform-browser-dynamic": "^6.0.3",
          "@angular/router": "^6.0.3",
          "core-js": "^2.5.4",
          "rxjs": "^6.0.0",
          "rxjs-compat": "^6.2.1",
          "zone.js": "^0.8.26",
          "ng-pick-datetime": "^5.1.6",
          "ng2-currency-mask": "^5.3.1",
          "ng2-tooltip-directive": "^2.0.2",
          "ngx-bootstrap": "^2.0.2"
      
        },
        "devDependencies": {
          "@angular/compiler-cli": "^6.0.3",
          "@angular-devkit/build-angular": "~0.6.6",
          "typescript": "~2.7.2",
          "@angular/cli": "~6.0.7",
          "@angular/language-service": "^6.0.3",
          "@types/jasmine": "~2.8.6",
          "@types/jasminewd2": "~2.0.3",
          "@types/node": "~8.9.4",
          "codelyzer": "~4.2.1",
          "jasmine-core": "~2.99.1",
          "jasmine-spec-reporter": "~4.2.1",
          "karma": "~1.7.1",
          "karma-chrome-launcher": "~2.2.0",
          "karma-coverage-istanbul-reporter": "~2.0.0",
          "karma-jasmine": "~1.1.1",
          "karma-jasmine-html-reporter": "^0.2.2",
          "protractor": "~5.3.0",
          "ts-node": "~5.0.1",
          "tslint": "~5.9.1"
        }
      }
          
    `;
    fs.writeFileSync(`${angularPath}/package.json`, src, `utf8`);
}

function geratsconfigjson(project, angularPath) {
    let src = `
    {
        "compileOnSave": false,
        "compilerOptions": {
          "baseUrl": "./",
          "outDir": "./dist/out-tsc",
          "sourceMap": true,
          "declaration": false,
          "moduleResolution": "node",
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true,
          "target": "es5",
          "typeRoots": [
            "node_modules/@types"
          ],
          "lib": [
            "es2017",
            "dom"
          ]
        }
      }
      
    `;
    fs.writeFileSync(`${angularPath}/tsconfig.json`, src, `utf8`);
}

function geratslintjson(project, angularPath) {
    let src = `
    {
        "rulesDirectory": [
          "node_modules/codelyzer"
        ],
        "rules": {
          "arrow-return-shorthand": true,
          "callable-types": true,
          "class-name": true,
          "comment-format": [
            true,
            "check-space"
          ],
          "curly": true,
          "deprecation": {
            "severity": "warn"
          },
          "eofline": true,
          "forin": true,
          "import-blacklist": [
            true,
            "rxjs/Rx"
          ],
          "import-spacing": true,
          "indent": [
            true,
            "spaces"
          ],
          "interface-over-type-literal": true,
          "label-position": true,
          "max-line-length": [
            true,
            140
          ],
          "member-access": false,
          "member-ordering": [
            true,
            {
              "order": [
                "static-field",
                "instance-field",
                "static-method",
                "instance-method"
              ]
            }
          ],
          "no-arg": true,
          "no-bitwise": true,
          "no-console": [
            true,
            "debug",
            "info",
            "time",
            "timeEnd",
            "trace"
          ],
          "no-construct": true,
          "no-debugger": true,
          "no-duplicate-super": true,
          "no-empty": false,
          "no-empty-interface": true,
          "no-eval": true,
          "no-inferrable-types": [
            true,
            "ignore-params"
          ],
          "no-misused-new": true,
          "no-non-null-assertion": true,
          "no-shadowed-variable": true,
          "no-string-literal": false,
          "no-string-throw": true,
          "no-switch-case-fall-through": true,
          "no-trailing-whitespace": true,
          "no-unnecessary-initializer": true,
          "no-unused-expression": true,
          "no-use-before-declare": true,
          "no-var-keyword": true,
          "object-literal-sort-keys": false,
          "one-line": [
            true,
            "check-open-brace",
            "check-catch",
            "check-else",
            "check-whitespace"
          ],
          "prefer-const": true,
          "quotemark": [
            true,
            "single"
          ],
          "radix": true,
          "semicolon": [
            true,
            "always"
          ],
          "triple-equals": [
            true,
            "allow-null-check"
          ],
          "typedef-whitespace": [
            true,
            {
              "call-signature": "nospace",
              "index-signature": "nospace",
              "parameter": "nospace",
              "property-declaration": "nospace",
              "variable-declaration": "nospace"
            }
          ],
          "unified-signatures": true,
          "variable-name": false,
          "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type"
          ],
          "no-output-on-prefix": true,
          "use-input-property-decorator": true,
          "use-output-property-decorator": true,
          "use-host-property-decorator": true,
          "no-input-rename": true,
          "no-output-rename": true,
          "use-life-cycle-interface": true,
          "use-pipe-transform-interface": true,
          "component-class-suffix": true,
          "directive-class-suffix": true
        }
      }
          
    `;
    fs.writeFileSync(`${angularPath}/tslint.json`, src, `utf8`);
}


function geraangularjson(project, angularPath) {
    let src = `
    {
        "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
        "version": 1,
        "newProjectRoot": "projects",
        "projects": {
          "project": {
            "root": "",
            "sourceRoot": "src",
            "projectType": "application",
            "prefix": "vic",
            "schematics": {
              "@schematics/angular:component": {
                "inlineTemplate": true,
                "inlineStyle": true,
                "spec": false
              },
              "@schematics/angular:class": {
                "spec": false
              },
              "@schematics/angular:directive": {
                "spec": false
              },
              "@schematics/angular:guard": {
                "spec": false
              },
              "@schematics/angular:module": {
                "spec": false
              },
              "@schematics/angular:pipe": {
                "spec": false
              },
              "@schematics/angular:service": {
                "spec": false
              }
            },
            "architect": {
              "build": {
                "builder": "@angular-devkit/build-angular:browser",
                "options": {
                  "outputPath": "dist/project",
                  "index": "src/index.html",
                  "main": "src/main.ts",
                  "polyfills": "src/polyfills.ts",
                  "tsConfig": "src/tsconfig.app.json",
                  "assets": [
                    "src/favicon.ico",
                    "src/assets"
                  ],
                  "styles": [
                    "src/styles.css"
                  ],
                  "scripts": []
                },
                "configurations": {
                  "production": {
                    "fileReplacements": [
                      {
                        "replace": "src/environments/environment.ts",
                        "with": "src/environments/environment.prod.ts"
                      }
                    ],
                    "optimization": true,
                    "outputHashing": "all",
                    "sourceMap": false,
                    "extractCss": true,
                    "namedChunks": false,
                    "aot": true,
                    "extractLicenses": true,
                    "vendorChunk": false,
                    "buildOptimizer": true
                  }
                }
              },
              "serve": {
                "builder": "@angular-devkit/build-angular:dev-server",
                "options": {
                  "browserTarget": "project:build"
                },
                "configurations": {
                  "production": {
                    "browserTarget": "project:build:production"
                  }
                }
              },
              "extract-i18n": {
                "builder": "@angular-devkit/build-angular:extract-i18n",
                "options": {
                  "browserTarget": "project:build"
                }
              },
              "test": {
                "builder": "@angular-devkit/build-angular:karma",
                "options": {
                  "main": "src/test.ts",
                  "polyfills": "src/polyfills.ts",
                  "tsConfig": "src/tsconfig.spec.json",
                  "karmaConfig": "src/karma.conf.js",
                  "styles": [
                    "src/styles.css"
                  ],
                  "scripts": [],
                  "assets": [
                    "src/favicon.ico",
                    "src/assets"
                  ]
                }
              },
              "lint": {
                "builder": "@angular-devkit/build-angular:tslint",
                "options": {
                  "tsConfig": [
                    "src/tsconfig.app.json",
                    "src/tsconfig.spec.json"
                  ],
                  "exclude": [
                    "**/node_modules/**"
                  ]
                }
              }
            }
          },
          "project-e2e": {
            "root": "e2e/",
            "projectType": "application",
            "architect": {
              "e2e": {
                "builder": "@angular-devkit/build-angular:protractor",
                "options": {
                  "protractorConfig": "e2e/protractor.conf.js",
                  "devServerTarget": "project:serve"
                },
                "configurations": {
                  "production": {
                    "devServerTarget": "project:serve:production"
                  }
                }
              },
              "lint": {
                "builder": "@angular-devkit/build-angular:tslint",
                "options": {
                  "tsConfig": "e2e/tsconfig.e2e.json",
                  "exclude": [
                    "**/node_modules/**"
                  ]
                }
              }
            }
          }
        },
        "defaultProject": "project"
      }
    `;
    fs.writeFileSync(`${angularPath}/angular.json`, src, `utf8`);

}

function gera_Doteditorconfig(project, angularPath) {
    let src = `
    # Editor configuration, see http://editorconfig.org
    root = true
    
    [*]
    charset = utf-8
    indent_style = space
    indent_size = 2
    insert_final_newline = true
    trim_trailing_whitespace = true
    trim_trailing_whitespace = true
    
    [*.md]
    max_line_length = off
    trim_trailing_whitespace = false
    `;
    fs.writeFileSync(`${angularPath}/.editorconfig`, src, `utf8`);
}

function gerabrowserslist(project, angularPath) {
    let src = `
  # This file is currently used by autoprefixer to adjust CSS to support the below specified browsers
  # For additional information regarding the format and rule options, please see:
  # https://github.com/browserslist/browserslist#queries
  # For IE 9-11 support, please uncomment the last line of the file and adjust as needed
  > 0.5%
  last 2 versions
  Firefox ESR
  not dead
  # IE 9-11
    `;
    fs.writeFileSync(`${angularPath}/src/browserslist`, src, `utf8`);
}




function gerakarma_conf_js(project, angularPath) {
    let src = `
  // Karma configuration file, see link for more information
  // https://karma-runner.github.io/1.0/config/configuration-file.html
  
  module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, '../coverage'),
        reports: ['html', 'lcovonly'],
        fixWebpackSourcePaths: true
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false
    });
  };
    `;
    fs.writeFileSync(`${angularPath}/src/karma.conf.js`, src, `utf8`);
}


function gerastyles_css(project, angularPath) {
    let src = `
  /* You can add global styles to this file, and also import other style files */
  
    `;
    fs.writeFileSync(`${angularPath}/src/styles.css`, src, `utf8`);
}




function geratsconfig_spec_json(project, angularPath) {
    let src = `
  {
    "extends": "../tsconfig.json",
    "compilerOptions": {
      "outDir": "../out-tsc/spec",
      "module": "commonjs",
      "types": [
        "jasmine",
        "node"
      ]
    },
    "files": [
      "test.ts",
      "polyfills.ts"
    ],
    "include": [
      "**/*.spec.ts",
      "**/*.d.ts"
    ]
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/tsconfig.spec.json`, src, `utf8`);
}




function geramain_ts(project, angularPath) {
    let src = `
  
  import 'rxjs/add/operator/toPromise';
  import 'rxjs/add/operator/switchMap';

  import { enableProdMode } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  
  import { AppModule } from './app/app.module';
  import { environment } from './environments/environment';
  
  if (environment.production) {
    enableProdMode();
  }
  
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
  
    `;
    fs.writeFileSync(`${angularPath}/src/main.ts`, src, `utf8`);
}




function geratest_ts(project, angularPath) {
    let src = `
  // This file is required by karma.conf.js and loads recursively all the .spec and framework files
  
  import 'zone.js/dist/zone-testing';
  import { getTestBed } from '@angular/core/testing';
  import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
  } from '@angular/platform-browser-dynamic/testing';
  
  declare const require: any;
  
  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  // Then we find all the tests.
  const context = require.context('./', true, /\.spec\.ts\$/);
  // And load the modules.
  context.keys().map(context);
  
    `;
    fs.writeFileSync(`${angularPath}/src/test.ts`, src, `utf8`);
}




function geratslint_json(project, angularPath) {
    let src = `
  {
      "extends": "../tslint.json",
      "rules": {
          "directive-selector": [
              true,
              "attribute",
              "vic",
              "camelCase"
          ],
          "component-selector": [
              true,
              "element",
              "vic",
              "kebab-case"
          ]
      }
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/tslint.json`, src, `utf8`);
}




function geraindex_html(project, angularPath) {
    let src = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Project</title>
    <base href="/">
  
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>
  <body>
    <vic-root></vic-root>
  </body>
  </html>
  
    `;
    fs.writeFileSync(`${angularPath}/src/index.html`, src, `utf8`);
}




function gerapolyfills_ts(project, angularPath) {
    let src = `
  /**
   * This file includes polyfills needed by Angular and is loaded before the app.
   * You can add your own extra polyfills to this file.
   *
   * This file is divided into 2 sections:
   *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
   *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
   *      file.
   *
   * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
   * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
   * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
   *
   * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
   */
  
  /***************************************************************************************************
   * BROWSER POLYFILLS
   */
  
  /** IE9, IE10 and IE11 requires all of the following polyfills. **/
  // import 'core-js/es6/symbol';
  // import 'core-js/es6/object';
  // import 'core-js/es6/function';
  // import 'core-js/es6/parse-int';
  // import 'core-js/es6/parse-float';
  // import 'core-js/es6/number';
  // import 'core-js/es6/math';
  // import 'core-js/es6/string';
  // import 'core-js/es6/date';
  // import 'core-js/es6/array';
  // import 'core-js/es6/regexp';
  // import 'core-js/es6/map';
  // import 'core-js/es6/weak-map';
  // import 'core-js/es6/set';
  
  /** IE10 and IE11 requires the following for NgClass support on SVG elements */
  // import 'classlist.js';  // Run \`npm install --save classlist.js\`.
  
  /** IE10 and IE11 requires the following for the Reflect API. */
  // import 'core-js/es6/reflect';
  
  
  /** Evergreen browsers require these. **/
  // Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
  import 'core-js/es7/reflect';
  
  
  /**
   * Web Animations \`@angular/platform-browser/animations\`
   * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
   * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
   **/
  // import 'web-animations-js';  // Run \`npm install --save web-animations-js\`.
  
  /**
   * By default, zone.js will patch all possible macroTask and DomEvents
   * user can disable parts of macroTask/DomEvents patch by setting following flags
   */
  
   // (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
   // (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
   // (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
  
   /*
   * in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
   * with the following flag, it will bypass \`zone.js\` patch for IE/Edge
   */
  // (window as any).__Zone_enable_cross_context_check = true;
  
  /***************************************************************************************************
   * Zone JS is required by default for Angular itself.
   */
  import 'zone.js/dist/zone';  // Included with Angular CLI.
  
  
  
  /***************************************************************************************************
   * APPLICATION IMPORTS
   */
  
    `;
    fs.writeFileSync(`${angularPath}/src/polyfills.ts`, src, `utf8`);
}




function geratsconfig_app_json(project, angularPath) {
    let src = `
  {
    "extends": "../tsconfig.json",
    "compilerOptions": {
      "outDir": "../out-tsc/app",
      "module": "es2015",
      "types": []
    },
    "exclude": [
      "src/test.ts",
      "**/*.spec.ts"
    ]
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/tsconfig.app.json`, src, `utf8`);
}




function geraenvironment_prod_ts(project, angularPath) {
    let src = `
  export const environment = {
    production: true
  };
  
    `;
    fs.writeFileSync(`${angularPath}/src/environments/environment.prod.ts`, src, `utf8`);
}




function geraenvironment_ts(project, angularPath) {
    let src = `
  // This file can be replaced during build by using the \`fileReplacements\` array.
  // \`ng build ---prod\` replaces \`environment.ts\` with \`environment.prod.ts\`.
  // The list of file replacements can be found in \`angular.json\`.
  
  export const environment = {
    production: false
  };
  
  /*
   * In development mode, to ignore zone related error stack frames such as
   * \`zone.run\`, \`zoneDelegate.invokeTask\` for easier debugging, you can
   * import the following file, but please comment it out in production mode
   * because it will have performance impact when throw error
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
  
    `;
    fs.writeFileSync(`${angularPath}/src/environments/environment.ts`, src, `utf8`);
}





function geraapp_routing_module_ts(project, angularPath) {
    let src = `
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule, Router } from '@angular/router';
    import { PrincipalComponent } from './vic-components/comum/principal/principal.component';
    import { NaoexisteComponent } from './vic-components/comum/naoexiste/naoexiste.component';
    import { LoginComponent } from './login/login.component';
    import { PietraGuardGuard } from './pietra-guard.guard';
    
    
    
    const routes: Routes = [
      { path: 'login', component: LoginComponent },
      { path: 'principal', component: PrincipalComponent, canActivate: [PietraGuardGuard] },
      { path: '', redirectTo: '/principal', pathMatch: 'full' },
      { path: '**', component: NaoexisteComponent },
    
    
    
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule {
    
      constructor(r: Router) {
        this.logaRotas("/", r.config);
      }
    
      logaRotas(pai: String, rotas: Routes) {
        for (let i = 0; i < rotas.length; i++) {
    
          //console.log("path:", pai, rotas[i].path, rotas[i].component ? rotas[i].component : "-->" + rotas[i].redirectTo);
          if (rotas[i].children) {
            rotas[i].canActivate = [PietraGuardGuard];
            this.logaRotas(rotas[i].path + "/", rotas[i].children);
          }
        }
    
      }
    
    }  
    `;
    fs.writeFileSync(`${angularPath}/src/app/app-routing.module.ts`, src, `utf8`);
}




function geraapp_component_ts(project, angularPath) {
    let src = `
    import { Component, OnInit } from '@angular/core';
    import { LoginService } from './login/login.service';
    import { Router } from '@angular/router';
    import { BaseEntity } from './vic-components/comum/base-entity';
    
    @Component({
      selector: 'vic-root',
      template: \`
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0" >
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Empleados</a>
            <span *ngIf="loginService.logado" >
                <span class="navbar-brand"> Login:</span>
                <span class="navbar-brand">
                    <span class="form-control ">{{ loginService.token.usuario.login }} </span>
                </span>
                <span class="navbar-brand"> Organização:</span>
                <span class="navbar-brand">
                    <span class="form-control "> {{ loginService.token.usuario.organizacao.nome }}</span>
                </span>
                <span class="navbar-brand"> Grupo Corrente:</span>
                <span class="navbar-brand">
                    <select [compareWith]="byId" [ngModel]="loginService.grupoAtual" (ngModelChange)="onValorChange($event)" class="form-control">
                    <option value> Nenhum </option>
                    <option *ngFor="let opcao of loginService.token.usuario.grupos" [ngValue]="opcao">{{ opcao['codigo'] }}-{{ opcao['nome'] }} </option>
                </select >
            </span >

        <a class="btn btn-danger" style="margin-right : 10px" href="#">
            <i class="fas fa-sign-out-alt" (click)="sair()"></i>Sair</a >
        </span >
    </nav >
        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">

                            <li class="nav-item" *ngFor="let item of menu">
                            <a class="nav-link {{item.active?'active':''}}" [routerLink]="[item.link]" (click)="onMenuClick(item)" *ngIf="item.link">
                                <i class="{{item.iconeTipo}} {{item.icone}}"></i> {{ item.label }}
                            </a>
                        <a class="nav-link {{item.active?'active':''}}" (click)="onMenuPaiClick(item)" *ngIf="!item.link">
                                <i class="{{item.iconeTipo}} {{item.icone}}"></i> {{ item.label }}
                        <i class="fas fa-angle-down " style="float:right;margin-top: 5px;"></i>
                            </a>
                    <ul class="nav flex-column" *ngIf="item.active">
                                <li class="nav-item" *ngFor="let subItem of item.subItens">
                                    <a class="nav-link subItem {{subItem.active?'active':''}}" (click)="onSubMenuClick(item,subItem)" [routerLink]="[subItem.link]">
                                        <i class="{{subItem.iconeTipo}} {{subItem.icone}}"></i> {{ subItem.label }}
                                    </a>
                                </li>
                            </ul>
                        </li >
                    </ul >
                </div >
            </nav >
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <router-outlet></router-outlet>
        </main>
        </div >
    </div >
        \`,
      styles: [\`
            .subItem{
        padding - left: 30px;
        background - color: #ccc;
    }
    \`]
    })
    export class AppComponent implements OnInit {
      title = 'app';
      pesquisa = "";
      rota = "./principal";
    
      constructor(public loginService: LoginService, private router: Router) {
    
      }
    
      sair() {
        this.loginService.logout().then(r => {
          this.router.navigate(['/principal']);
        });
      }
    
      ngOnInit(): void {
    
      }
    
      desativaTodos() {
        this.menu.forEach(i => {
          i.active = false;
        });
      }
    
      onMenuPaiClick(item) {
        let novoEstado = !item.active;
        this.desativaTodos();
        item.active = novoEstado;
      }
    
      onValorChange(obj: BaseEntity) {
        this.loginService.grupoAtual = obj;
      }
    
    
      onMenuClick(e) {
        this.desativaTodos();
        e.active = true;
      }
    
    
      onSubMenuClick(item, subItem) {
        item.subItens.forEach(i => i.active = false);
        subItem.active = true;
      }
    
      byId(o1: BaseEntity, o2: BaseEntity) {
        if (!o1 || !o2) {
          return false;
        }
        return o1.id === o2.id;
      }
    
      menu = [
    
    
    
    
    
    
        //{ link: './movimentofinanceiro', iconeTipo: 'fas', icone: 'fa-home', label: 'MovimentoFinanceiro', active: false },
    
    
    
    
    
        // { link: './pais', iconeTipo: 'fas', icone: 'fa-home', label: 'Pais', active: false },
    
        // { link: './cidade', iconeTipo: 'fas', icone: 'fa-home', label: 'Cidade', active: false },
    
        // { link: './estado', iconeTipo: 'fas', icone: 'fa-home', label: 'Estado', active: false },
    
        // { link: './nacionalidade', iconeTipo: 'fas', icone: 'fa-home', label: 'Nacionalidade', active: false },
    
        // { link: './feriaspagas', iconeTipo: 'fas', icone: 'fa-home', label: 'FeriasPagas', active: false },
    
        // { link: './responsabilidade', iconeTipo: 'fas', icone: 'fa-home', label: 'Responsabilidade', active: false },
    
        // { link: './responsabilidadevaloradicional', iconeTipo: 'fas', icone: 'fa-home', label: 'ResponsabilidadeValorAdicional', active: false },
    
        // { link: './tipomovimentofinanceiro', iconeTipo: 'fas', icone: 'fa-home', label: 'TipoMovimentoFinanceiro', active: false },
    
        // { link: './motivotermino', iconeTipo: 'fas', icone: 'fa-home', label: 'MotivoTermino', active: false },
    
        // { link: './contratotrabalho', iconeTipo: 'fas', icone: 'fa-home', label: 'ContratoTrabalho', active: false },
    
        // { link: './qualificacao', iconeTipo: 'fas', icone: 'fa-home', label: 'Qualificacao', active: false },
    
        // { link: './movimentofinanceiro', iconeTipo: 'fas', icone: 'fa-home', label: 'MovimentoFinanceiro', active: false },
    
        // { link: './cargo', iconeTipo: 'fas', icone: 'fa-home', label: 'Cargo', active: false },
    
        // { link: './gerencia', iconeTipo: 'fas', icone: 'fa-home', label: 'Gerencia', active: false },
    
        // { link: './cargovalorbase', iconeTipo: 'fas', icone: 'fa-home', label: 'CargoValorBase', active: false },
    
        // { link: './qualificacaovaloradicional', iconeTipo: 'fas', icone: 'fa-home', label: 'QualificacaoValorAdicional', active: false },
    
        // { link: './tipoparentesco', iconeTipo: 'fas', icone: 'fa-home', label: 'TipoParentesco', active: false },
    
        // { link: './sexo', iconeTipo: 'fas', icone: 'fa-home', label: 'Sexo', active: false },
    
        // { link: './endereco', iconeTipo: 'fas', icone: 'fa-home', label: 'Endereco', active: false },
    
        // { link: './tipodocumento', iconeTipo: 'fas', icone: 'fa-home', label: 'TipoDocumento', active: false },
    
        // { link: './estadocivil', iconeTipo: 'fas', icone: 'fa-home', label: 'EstadoCivil', active: false },
    
        // { link: './parentesco', iconeTipo: 'fas', icone: 'fa-home', label: 'Parentesco', active: false },
    
        // { link: './documento', iconeTipo: 'fas', icone: 'fa-home', label: 'Documento', active: false },
    
        // { link: './lugar', iconeTipo: 'fas', icone: 'fa-home', label: 'Lugar', active: false },
    
        // { link: './tipocontato', iconeTipo: 'fas', icone: 'fa-home', label: 'TipoContato', active: false },
    
        // { link: './contato', iconeTipo: 'fas', icone: 'fa-home', label: 'Contato', active: false },
    
        // { link: './tipoobservacao', iconeTipo: 'fas', icone: 'fa-home', label: 'TipoObservacao', active: false },
    
        // { link: './observacao', iconeTipo: 'fas', icone: 'fa-home', label: 'Observacao', active: false },
    
        /* MENU  */
        { link: './principal', iconeTipo: 'fas', icone: 'fa-home', label: 'Principal', active: false },
        {
          label: 'Contratos', iconeTipo: 'far', icone: 'fa-file-pdf', active: false,
          subItens: [
            //{ link: './contrato', iconeTipo: 'far', icone: 'fa-file-pdf', label: 'Contrato', active: false },
            { link: './pessoa', iconeTipo: 'fas', icone: 'fa-user-plus', label: ' Pessoa', active: false },
            { link: './cargo', iconeTipo: 'far', icone: 'fa-id-badge', label: 'Cargo', active: false },
            { link: './contratotrabalho', iconeTipo: 'fas', icone: 'fa-home', label: 'ContratoTrabalho', active: false },
            { link: './consultas', iconeTipo: 'fas', icone: 'fa-home', label: 'Consultas', active: false },
            // { link: './cargovalorbase', iconeTipo: 'fas', icone: 'fa-home', label: 'CargoValorBase', active: false },
            // { link: './responsabilidadevaloradicional', iconeTipo: 'fas', icone: 'fa-home', label: 'ResponsabilidadeValorAdicional', active: false },
            //       { link: './qualificacaovaloradicional', iconeTipo: 'fas', icone: 'fa-home', label: 'QualificacaoValorAdicional', active: false },
    
    
    
    
    
          ]
        },
    
        {
          label: 'Localização', iconeTipo: 'fas', icone: 'fa-map-marker-alt', active: false,
          subItens: [
            { link: './cidade', iconeTipo: 'far', icone: 'fa-building', label: ' Cidade', active: false },
            { link: './estado', iconeTipo: 'far', icone: 'fa-star', label: 'Estado', active: false },
            { link: './pais', iconeTipo: 'fas', icone: 'fa-globe', label: 'Países', active: false },
            { link: './nacionalidade', iconeTipo: 'fab', icone: 'fa-font-awesome', label: 'Nacionalidade', active: false }
          ]
        },
        {
          label: 'Tipos', iconeTipo: 'far', icone: 'fa-address-book', active: false,
          subItens: [
            { link: './motivotermino', iconeTipo: 'far', icone: 'fa-times-circle', label: 'Motivo Termino', active: false },
            { link: './tipomovimentofinanceiro', iconeTipo: 'far', icone: 'fa-money-bill-alt', label: 'Tipo Movimento Financeiro', active: false },
            { link: './sexo', iconeTipo: 'fas', icone: 'fa-venus-mars', label: 'Sexo', active: false },
            { link: './estadocivil', iconeTipo: 'fab', icone: 'fa-slideshare', label: 'EstadoCivil', active: false },
            { link: './tipoparentesco', iconeTipo: 'fas', icone: 'fa-child', label: 'TipoParentesco', active: false },
            { link: './tipodocumento', iconeTipo: 'far', icone: 'fa-file-alt', label: 'TipoDocumento', active: false },
            { link: './tipoobservacao', iconeTipo: 'fas', icone: 'fa-binoculars', label: ' TipoObservacao', active: false },
            { link: './tipocontato', iconeTipo: 'far', icone: 'fa-id-card', label: 'TipoContato', active: false },
            { link: './gerencia', iconeTipo: 'fas', icone: 'fa-home', label: 'Gerencias', active: false }
          ]
        },
        {
          label: 'Segurança', iconeTipo: 'fas', icone: 'fa-lock', active: false,
          subItens: [
            { link: './grupo', iconeTipo: 'fas', icone: 'fa-sitemap', label: 'Grupo', active: false },
            { link: './organizacao', iconeTipo: 'fas', icone: 'fa-university', label: 'Organização', active: false },
            { link: './usuario', iconeTipo: 'far', icone: 'fa-user', label: 'Usuário', active: false }
          ]
        }
      ];
    
    
    }
    
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/app.component.ts`, src, `utf8`);
}




function geraapp_module_ts(project, angularPath) {
    let src = `
    import { BrowserModule } from '@angular/platform-browser';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { LOCALE_ID, NgModule } from '@angular/core';
    import { HttpModule, Http } from '@angular/http';
    import { AppRoutingModule } from './app-routing.module';
    import { VicComponentsModule } from './vic-components/vic-components.module';
    import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
    
    import { AlertModule, AccordionModule } from 'ngx-bootstrap';
    import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
    import { AppComponent } from './app.component';
    import { PrincipalComponent } from './vic-components/comum/principal/principal.component';
    import { NaoexisteComponent } from './vic-components/comum/naoexiste/naoexiste.component';
    import { TooltipModule } from 'ng2-tooltip-directive';
    import { CurrencyMaskModule } from "ng2-currency-mask";
    import { LoginComponent } from './login/login.component';

    
    import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";
     
    export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
        align: "left",
        allowNegative: false,
        decimal: ",",
        precision: 2,
        prefix: "R$ ",
        suffix: "",
        thousands: "."
    };
    
    
    
    @NgModule({
      declarations: [
        AppComponent,
        PrincipalComponent,
        NaoexisteComponent,
        LoginComponent
      ],
      imports: [
        BrowserModule, FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        AlertModule.forRoot(),
        AccordionModule.forRoot(),
        TooltipModule,
        CurrencyMaskModule,
        VicComponentsModule,
        AppRoutingModule
      ],
      providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/app.module.ts`, src, `utf8`);
}





function geraalert_message_ts(project, angularPath) {
    let src = `
  
  export class AlertMessage {
  
      private message: string;
      private description: string;
      private type: string;
      private cssClass: string;
      public show: boolean;
  
      constructor() {
          this.show = false;
      }
  
      public createErrorAlert(msg: string, description: string) {
          this.description = description;
          this.message = msg;
          this.cssClass = "alert-danger";
          this.type = "error";
          this.show = true;
          return this;
      }
  
      public createSuccessAlert(msg: string, description: string) {
          this.description = description;
          this.message = msg;
          this.cssClass = "alert-success";
          this.type = "success";
          this.show = true;
          return this;
      }
  
      public createWarningAlert(msg: string, description: string) {
          this.description = description;
          this.message = msg;
          this.cssClass = "alert-warning";
          this.type = "warning";
          this.show = true;
          return this;
      }
  
      public get \$description(): string {
          return this.description;
      }
  
      public get \$message(): string {
          return this.message;
      }
  
      public get \$type(): string {
          return this.type;
      }
  
      public get \$cssClass(): string {
          return this.cssClass;
      }
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components//alert-message.ts`, src, `utf8`);
}




function gerabase_entity_ts(project, angularPath) {
    let src = `
  export class BaseEntity {
      id: string;
      oi: string;
      gi: string;
      ui: string;
      rights: number;
      extra: string;
      cd: string;
      ud: string;
      active: boolean;
      version: number;
      r: String;
  
  
      /* nao funcionou....
          public isOwner(): boolean {
              return this.r.charAt[0] !== '_';
          }
          public commonGroup(): boolean {
              return this.r.charAt[1] !== '_';
          }
          public canRead(): boolean {
              return this.r.charAt[2] !== '_';
          }
          public canUpdate(): boolean {
              return this.r.charAt[3] !== '_';
          }
          public canDelete(): boolean {
              return this.r.charAt[4] !== '_';
          }
        */
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum//base-entity.ts`, src, `utf8`);
}




function geranaoexiste_component_css(project, angularPath) {
    let src = `
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum/naoexiste//naoexiste.component.css`, src, `utf8`);
}




function geranaoexiste_component_html(project, angularPath) {
    let src = `
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    <h1 class="h2">Recurso Inexistente</h1>
  </div>
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum/naoexiste//naoexiste.component.html`, src, `utf8`);
}




function geranaoexiste_component_spec_ts(project, angularPath) {
    let src = `
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { NaoexisteComponent } from './naoexiste.component';
  
  describe('NaoexisteComponent', () => {
    let component: NaoexisteComponent;
    let fixture: ComponentFixture<NaoexisteComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ NaoexisteComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(NaoexisteComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum/naoexiste//naoexiste.component.spec.ts`, src, `utf8`);
}




function geranaoexiste_component_ts(project, angularPath) {
    let src = `
  import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-naoexiste',
    templateUrl: './naoexiste.component.html',
    styleUrls: ['./naoexiste.component.css']
  })
  export class NaoexisteComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum/naoexiste//naoexiste.component.ts`, src, `utf8`);
}




function geraprincipal_component_css(project, angularPath) {
    let src = `
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum/principal//principal.component.css`, src, `utf8`);
}




function geraprincipal_component_html(project, angularPath) {
    let src = `
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    <h1 class="h2">Sistema Empleados</h1>
  </div>
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum/principal//principal.component.html`, src, `utf8`);
}




function geraprincipal_component_spec_ts(project, angularPath) {
    let src = `
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { PrincipalComponent } from './principal.component';
  
  describe('PrincipalComponent', () => {
    let component: PrincipalComponent;
    let fixture: ComponentFixture<PrincipalComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ PrincipalComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(PrincipalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum/principal//principal.component.spec.ts`, src, `utf8`);
}




function geraprincipal_component_ts(project, angularPath) {
    let src = `
  import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
  })
  export class PrincipalComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum/principal//principal.component.ts`, src, `utf8`);
}




function gerasuper_detalhes_ts(project, angularPath) {
    let src = `
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { Location } from '@angular/common';
  import { SuperService } from './super-service';
  import { BaseEntity } from "./base-entity";
  import { VicReturn } from './vic-return';
  import { AlertMessage } from '../alert-message';
  
  
  export class SuperDetalhesComponent implements OnInit {
  
    selecionado: BaseEntity;
    erro = undefined;
    msg: AlertMessage;
    drawsvg: string;
  
    constructor(protected service: SuperService, protected router: Router, protected route: ActivatedRoute) {
      this.msg = new AlertMessage();
    }
  
  
    ngOnInit() {
  
      this.route.params
        .switchMap((params: Params) => this.service.getOne(params['id']))
        .subscribe((objeto) => {
          this.beforeSelect(objeto);
          this.selecionado = objeto;
          this.initForm();
          this.drawsvg = this.service.drawsvglink(objeto);
        });
    }
  
    initForm() { }
  
    beforeSelect(obj: BaseEntity) {
  
    }
  
  
    salvar() {
      this.service.update(this.selecionado)
        .then(salvo => {
          this.selecionado = salvo;
          this.router.navigate(['../..'], { relativeTo: this.route });
        })
        .catch(erro => {
          this.erro = erro;
        });
    }
  
    salvarImediatamente() {
      this.service.update(this.selecionado)
        .then(salvo => {
          this.selecionado = salvo;
        })
        .catch(erro => {
          this.erro = erro;
        });
    }
  
  
    cancelar() {
      this.router.navigate(['../..'], { relativeTo: this.route });
    }
    excluir() {
      this.service.remove(this.selecionado.id)
        .then(obj => {
          this.selecionado = obj;
          this.router.navigate(['../..'], { relativeTo: this.route });
        })
        .catch(erro => {
          //erro = { message: "Impossível Excluir", description: "Este registro está sendo usado" }
          //console.log(erro);
          //this.erro = erro;
          this.msg.createErrorAlert("Impossível Excluir", "Este registro está sendo usado");
        });
    }
  
    public isOwner(obj): boolean {
      return obj && (obj.r.charAt(0) !== '_');
    }
    public commonGroup(obj): boolean {
      return obj && (obj.r.charAt(1) !== '_');
    }
    public canRead(obj): boolean {
      return obj && (obj.r.charAt(2) !== '_');
    }
    public canUpdate(obj): boolean {
      return obj && (obj.r.charAt(3) !== '_');
    }
    public canDelete(obj): boolean {
      return obj && (obj.r.charAt(4) !== '_');
    }
  
    public isNew(obj): boolean {
      return obj && obj.version === null;
    }
  
    public notNew(obj): boolean {
      return obj && obj.version !== null;
    }
  
  
  }
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum//super-detalhes.ts`, src, `utf8`);
}




function gerasuper_lista_ts(project, angularPath) {
    let src = `
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { SuperService } from './super-service';
  import { BaseEntity } from "./base-entity";
  import { VicReturn } from './vic-return';
  import { AlertMessage } from '../alert-message';
  
  
  export class SuperListaComponent implements OnInit {
  
      pesquisa = "";
      //erro = undefined;
      resposta: VicReturn = new VicReturn();
      colunas = [{ active: true, comparisonOperator: "EQUAL", field: "id", label: "ID", pedacos: ["id"] }];
      consulta = { hql: "obj.id > '_pesquisa' ", orderBy: "id" };
      msg: AlertMessage;
  
      constructor(protected service: SuperService, protected router: Router, protected route: ActivatedRoute) {
          this.msg = new AlertMessage();
      }
  
      ngOnInit() {
          this.pesquisar();
      }
  
      selecionouDescelecionouColuna(coluna) {
          this.pesquisar();
      }
  
      verificaEnter(evento) {
          if (evento.keyCode === 13) {
              this.pesquisar();
          }
      }
  
      goDetalhes(id: string) {
          this.router.navigate(['detalhes', id], { relativeTo: this.route });
      }
  
      novo() {
          this.router.navigate(['detalhes', 'new'], { relativeTo: this.route });
      }
  
      criaConsulta() {
          let q = {
              query: {
                  logicalOperator: "OR",
                  subQuerys: [],
                  joins: [],
  
              },
              firstResult: 0,
              quantity: 20,
              orderBy: "id"
          };
          q.orderBy = this.colunas[0].field;
          this.colunas.forEach(coluna => {
              if (coluna.active) {
                  let f = "";
                  let t = coluna.pedacos.length;
                  if (coluna.pedacos.length === 1) {
                      f = "obj." + coluna.pedacos[0];
                  }
                  else {
                      f = coluna.pedacos[t - 2] + '.' + coluna.pedacos[t - 1];
                  }
                  q.query.subQuerys.push({ criteria: { comparisonOperator: coluna.comparisonOperator, field: f, value: this.pesquisa } });
  
                  if (t > 1) {
                      let tt = "obj";
                      for (let i = 0; i < t - 1; i++) {
                          tt += "." + coluna.pedacos[i];
                      }
                      tt += " " + coluna.pedacos[t - 2];
                      let o = { type: 'LEFT', table: tt };
  
                      if (q.query.joins.findIndex(j => j.type === o.type && j.table === o.table) < 0) {
                          q.query.joins.push(o);
                      }
                  }
  
              }
          });
          return q;
      }
  
      pesquisar() {
          let consulta = this.criaConsulta();
          this.service.vquery(consulta)
              .then(r => {
                  this.resposta = r;
              })
              .catch(erro => {
                  //this.erro = erro;
                  this.msg.createErrorAlert("", erro);
              });
      }
  
  
      carregarMais() {
          let consulta = this.criaConsulta();
          consulta.firstResult = this.resposta.firstResult + this.resposta.quantity;
          this.service.vquery(consulta)
              .then(r => {
                  this.resposta.values = this.resposta.values.concat(r.values);
                  this.resposta.firstResult = r.firstResult;
                  this.resposta.quantity = r.quantity;
                  this.resposta.hasMore = r.hasMore;
              })
              .catch(erro => {
                  //this.erro = erro;
                  this.msg.createErrorAlert("", erro);
              });
      }
  
  
  
      public isOwner(obj): boolean {
          return obj && (obj.r.charAt(0) !== '_');
      }
      public commonGroup(obj): boolean {
          return obj && (obj.r.charAt(1) !== '_');
      }
      public canRead(obj): boolean {
          return obj && (obj.r.charAt(2) !== '_');
      }
      public canUpdate(obj): boolean {
          return obj && (obj.r.charAt(3) !== '_');
      }
      public canDelete(obj): boolean {
          return obj && (obj.r.charAt(4) !== '_');
      }
  
      public isNew(obj): boolean {
          return obj.version === null;
      }
  
      public notNew(obj): boolean {
          return obj.version !== null;
      }
  
  
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum//super-lista.ts`, src, `utf8`);
}




function gerasuper_service_ts(project, angularPath) {
    let src = `
  import { Http, Headers, Response } from '@angular/http';
  import { LoginService } from '../../login/login.service';
  import { Injector } from '@angular/core';
  
  export class SuperService {
  
  
    public baseUrl = '';
    protected collection = '';
    protected http: Http;
  
    constructor(colecao: string, http: Http) {
      this.http = http;
      this.collection = colecao;
      this.baseUrl = LoginService.BASE_URL;
    }
  
  
    errorHandler = error => {
      return Promise.reject(error.json());
    }
  
    createAuthorizationHeader(): Headers {
      let headers = new Headers();
      headers.append('authorization', LoginService.ins.token.token);
      headers.append('group', LoginService.ins.grupoAtual.codigo);
      return headers;
  
    }
  
    add(objeto) {
      return this.http.post(\`\${this.baseUrl}/\${this.collection}\`, objeto, { headers: this.createAuthorizationHeader() })
        .toPromise().then(response => response.json())
        .catch(this.errorHandler);
    }
  
    vquery(objeto) {
      return this.http.post(\`\${this.baseUrl}/\${this.collection}/vquery\`, objeto, { headers: this.createAuthorizationHeader() })
        .toPromise().then(response => response.json())
        .catch(this.errorHandler);
    }
  
    singleLikeCriteriaQuery(field, pesquisa) {
      let consulta = this.criaConsulta([{ active: true, comparisonOperator: 'STARTS_WITH', field: field }], pesquisa);
      consulta.maxResults = 10000;
      return this.http.post(\`\${this.baseUrl}/\${this.collection}/vquery\`, consulta
        , { headers: this.createAuthorizationHeader() })
        .toPromise().then(response => response.json())
        .catch(this.errorHandler);
    }
  
  
    getAll(): Promise<any> {
      return this.http.get(\`\${this.baseUrl}/\${this.collection}\`, { headers: this.createAuthorizationHeader() })
        .toPromise().then(response => response.json())
        .catch(this.errorHandler);
    }
  
    getOne(id): Promise<any> {
      return this.http.get(\`\${this.baseUrl}/\${this.collection}/\${id}\`, { headers: this.createAuthorizationHeader() })
        .toPromise().then(response => response.json())
        .catch(this.errorHandler);
    }
  
    newObject(): Promise<any> {
      return this.http.get(\`\${this.baseUrl}/\${this.collection}/new\`, { headers: this.createAuthorizationHeader() })
        .toPromise().then(response => response.json())
        .catch(this.errorHandler);
    }
  
    remove(id) {
      return this.http.delete(\`\${this.baseUrl}/\${this.collection}/\${id}\`, { headers: this.createAuthorizationHeader() })
        .toPromise().then(response => response.json())
        .catch(this.errorHandler);
    }
  
    update(objeto) {
      return this.http.put(\`\${this.baseUrl}/\${this.collection}/\${objeto.id}\`, objeto, { headers: this.createAuthorizationHeader() })
        .toPromise().then(response => response.json())
        .catch(this.errorHandler);
    }
  
    criaConsulta(colunas, pesquisa) {
      let q = {
        query: {
          logicalOperator: "OR",
          subQuerys: [],
          joins: [],
        },
        orderBy: "id",
        maxResults: 20
      };
      q.orderBy = colunas[0].field;
      colunas.forEach(coluna => {
        if (coluna.active) {
          q.query.subQuerys.push({ criteria: { comparisonOperator: coluna.comparisonOperator, field: coluna.field, value: pesquisa } });
        }
      });
      return q;
    }
  
    drawsvglink(objeto) {
      return \`\${this.baseUrl}/\${this.collection}/draw/\${objeto.id}\`;
    }
  
  
  }
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum//super-service.ts`, src, `utf8`);
}




function geravic_return_ts(project, angularPath) {
    let src = `
  import { BaseEntity } from "./base-entity";
  
  
  export class VicReturn {
  
      values: BaseEntity[];
      quantity: number;
      firstResult: number;
      hasMore: boolean;
  
      constructor(b: BaseEntity[] = []) {
          this.values = b;
          this.quantity = b.length;
          this.firstResult = 0;
          this.hasMore = false;
      }
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/comum//vic-return.ts`, src, `utf8`);
}




function geragrupo_ts(project, angularPath) {
    let src = `
  export interface Grupo {
      id: string;
      extra: string;
      version: number;
      nome: string;
      codigo: string;
  }
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/domain//grupo.ts`, src, `utf8`);
}




function geraorganizacao_ts(project, angularPath) {
    let src = `
  
  export interface Organizacao {
      id: string;
      extra: string;
      version: number;
      nome: string;
      codigo: string;
      superior?: Organizacao;
  }
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/domain//organizacao.ts`, src, `utf8`);
}




function geratoken_ts(project, angularPath) {
    let src = `
  import { Usuario } from "./usuario";
  
  export interface Token {
      id: string;
      extra: string;
      version: number;
      token: string;
      usuario: Usuario;
      expiracao: number;
  }
  
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/domain//token.ts`, src, `utf8`);
}




function gerausuario_ts(project, angularPath) {
    let src = `
  import { Grupo } from "./grupo";
  import { Organizacao } from "./organizacao";
  
  export interface Usuario {
      id: string;
      extra: string;
      version: number;
      login: string;
      senha: string;
      grupos: Grupo[];
      organizacao: Organizacao;
  }
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/domain//usuario.ts`, src, `utf8`);
}




function geraexcluir_atributos_sistema_pipe_spec_ts(project, angularPath) {
    let src = `
  import { ExcluirAtributosSistemaPipe } from './excluir-atributos-sistema.pipe';
  
  describe('ExcluirAtributosSistemaPipe', () => {
    it('create an instance', () => {
      const pipe = new ExcluirAtributosSistemaPipe();
      expect(pipe).toBeTruthy();
    });
  });
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components//excluir-atributos-sistema.pipe.spec.ts`, src, `utf8`);
}




function geraexcluir_atributos_sistema_pipe_ts(project, angularPath) {
    let src = `
  import { Pipe, PipeTransform } from '@angular/core';
  import { BaseEntity } from '../vic-components/comum/base-entity';
  
  @Pipe({
    name: 'excluirAtributosSistema'
  })
  export class ExcluirAtributosSistemaPipe implements PipeTransform {
  
    transform(values: any[], arg1: string = 'id'): any {
      if (values) {
        return values.map(obj => obj[arg1]);
      }
    }
  
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components//excluir-atributos-sistema.pipe.ts`, src, `utf8`);
}




function geravic_components_module_ts(project, angularPath) {
    let src = `
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
  import { VicTabelaComponent } from './vic-tabela/vic-tabela.component';
  import { VicSystemFieldsComponent } from './vic-system-fields/vic-system-fields.component';
  import { VicManyToOneComponent } from './vic-many-to-one/vic-many-to-one.component';
  import { VicManyToManyComponent } from './vic-many-to-many/vic-many-to-many.component';
  import { ExcluirAtributosSistemaPipe } from './excluir-atributos-sistema.pipe';
  import { VicOneToManyComponent } from './vic-one-to-many/vic-one-to-many.component';
  import { BrowserModule } from '@angular/platform-browser';
  
  
  @NgModule({
    imports: [
      CommonModule,FormsModule,
      BrowserModule,    
      ReactiveFormsModule 
  
    ],
    declarations: [VicTabelaComponent, VicSystemFieldsComponent, VicManyToOneComponent, VicManyToManyComponent, ExcluirAtributosSistemaPipe, VicOneToManyComponent],
    exports:[VicTabelaComponent,VicSystemFieldsComponent,VicManyToOneComponent, VicManyToManyComponent, ExcluirAtributosSistemaPipe, VicOneToManyComponent]
  
  })
  export class VicComponentsModule { }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components//vic-components.module.ts`, src, `utf8`);
}




function geravic_many_to_many_component_css(project, angularPath) {
    let src = `
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-many-to-many//vic-many-to-many.component.css`, src, `utf8`);
}




function geravic_many_to_many_component_html(project, angularPath) {
    let src = `
  <p>
    vic-many-to-many works!
  </p>
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-many-to-many//vic-many-to-many.component.html`, src, `utf8`);
}




function geravic_many_to_many_component_spec_ts(project, angularPath) {
    let src = `
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { VicManyToManyComponent } from './vic-many-to-many.component';
  
  describe('VicManyToManyComponent', () => {
    let component: VicManyToManyComponent;
    let fixture: ComponentFixture<VicManyToManyComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ VicManyToManyComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(VicManyToManyComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-many-to-many//vic-many-to-many.component.spec.ts`, src, `utf8`);
}




function geravic_many_to_many_component_ts(project, angularPath) {
    let src = `
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { BaseEntity } from '../../vic-components/comum/base-entity';
  import { SuperService } from '../../vic-components/comum/super-service';
  import { FormGroup } from '@angular/forms';
  
  @Component({
    selector: 'vic-many-to-many',
    template: \`
    <div *ngFor="let opcao of opcoes">
      <input type="checkbox"  name="tt" [(ngModel)]="op[opcao.id].status" (change)="mudou()" >{{opcao[atributoLabel]}}
     </div>
    \`,
    styleUrls: ['./vic-many-to-many.component.css']
  })
  export class VicManyToManyComponent implements OnInit {
  
    op = {};
  
    opcoes: BaseEntity[];
  
    @Input() valor: BaseEntity[];
    @Output() valorChange = new EventEmitter<BaseEntity[]>();
  
    @Input() service: SuperService;
    @Input() atributoLabel: string;
    @Input() group : FormGroup;
  
    constructor() { }
  
    ngOnInit() {
      this.service.vquery({ orderBy: this.atributoLabel })
        .then(r => {
          this.opcoes = r.values;
          for (let i = 0; i < this.opcoes.length; i++) {
            this.op[this.opcoes[i].id] = { status: false, obj: this.opcoes[i] };
          }
          if (this.valor) {
            for (let i = 0; i < this.valor.length; i++) {
              this.op[this.valor[i].id].status = true;
            }
          }
        });
    }
  
    mudou() {
      this.valor = [];
      for (let i = 0; i < this.opcoes.length; i++) {
        if (this.op[this.opcoes[i].id].status) {
          this.valor.push(this.op[this.opcoes[i].id].obj);
        }
      }
  
      this.group.markAsDirty();
      this.valorChange.emit(this.valor);
    }
  
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-many-to-many//vic-many-to-many.component.ts`, src, `utf8`);
}




function geravic_many_to_one_component_css(project, angularPath) {
    let src = `
  
  
  .cinza{
      background-color: darkgray;
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-many-to-one//vic-many-to-one.component.css`, src, `utf8`);
}




function geravic_many_to_one_component_html(project, angularPath) {
    let src = `
  
    vic-many-to-one works!
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-many-to-one//vic-many-to-one.component.html`, src, `utf8`);
}




function geravic_many_to_one_component_spec_ts(project, angularPath) {
    let src = `
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { VicManyToOneComponent } from './vic-many-to-one.component';
  
  describe('VicManyToOneComponent', () => {
    let component: VicManyToOneComponent;
    let fixture: ComponentFixture<VicManyToOneComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ VicManyToOneComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(VicManyToOneComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-many-to-one//vic-many-to-one.component.spec.ts`, src, `utf8`);
}




function geravic_many_to_one_component_ts(project, angularPath) {
    let src = `
  
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { BaseEntity } from '../../vic-components/comum/base-entity';
  import { SuperService } from '../../vic-components/comum/super-service';
  import { FormGroup } from '@angular/forms';
  
  @Component({
    selector: 'vic-many-to-one',
    //templateUrl: './vic-many-to-one.component.html',
    template: \`  
    
    <div class="input-group" [formGroup]="group" >
    <select [compareWith]="byId" [ngModel]="valor" (ngModelChange)="onValorChange(\$event)" class="form-control" (keydown)="filtra(\$event)"
      [formControlName]="nomeNoForm" >
      
      <option value> Nenhum </option>
      <option *ngFor="let opcao of opcoes" [ngValue]="opcao">{{resolve(opcao,atributoLabel)}} </option>
  
  
    </select>
    <span class="input-group-addon cinza">{{this.atributoLabel}}:{{filtro}}%</span>
  </div>
    
    \`,
    styleUrls: ['./vic-many-to-one.component.css']
  })
  export class VicManyToOneComponent implements OnInit {
  
    opcoes: BaseEntity[];
    filtro = "";
  
    @Input() valor: BaseEntity;
    @Output() valorChange = new EventEmitter<BaseEntity>();
  
    @Input() service: SuperService;
    @Input() atributoLabel: string;
    @Input() nomeNoForm: string;
    @Input() group: FormGroup;
  
    constructor() { }
  
    ngOnInit() {
      this.atualiza();
    }
  
    atualiza() {
      this.service.singleLikeCriteriaQuery(this.atributoLabel, this.filtro).then(r => this.opcoes = r.values);
    }
  
    onValorChange(obj: BaseEntity) {
  
      if (obj && obj.id) {
        this.valor = obj;
      }
      else {
        this.valor = null;
      }
  
      this.valorChange.emit(this.valor);
    }
  
    byId(o1: BaseEntity, o2: BaseEntity) {
      if (!o1 || !o2) {
        return false;
      }
      return o1.id === o2.id;
    }
  
    filtra(event) {
      if (event.keyCode === 46) {
        this.filtro = "";
      }
      else if (event.keyCode === 8 && this.filtro.length > 0) {
        this.filtro = this.filtro.slice(0, -1);
      }
      else if (event.keyCode >= 48 && event.keyCode <= 90) {
        this.filtro = this.filtro + event.key;
      }
      else {
        //console.log("else ", event.keyCode);
      }
      this.atualiza();
    }
  
    resolve(obj, coluna: string) {
  
      let partes = coluna.split(".");
      let o = obj[partes[0]];
      for (let i = 1; i < partes.length; i++) {
        if (o === null) {
          return null;
        }
        if (o === undefined) {
          return undefined;
        }
        o = o[partes[i]];
      }
      return o;
    }
  
  
  
  }
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-many-to-one//vic-many-to-one.component.ts`, src, `utf8`);
}




function gerasuper_detalhe_om_component_ts(project, angularPath) {
    let src = `
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { SuperService } from '../../vic-components/comum/super-service';
  import { BaseEntity } from '../../vic-components/comum/base-entity';
  import { VicReturn } from '../../vic-components/comum/vic-return';
  
  
  export class SuperDetalhesOmComponent implements OnInit {
  
      protected service: SuperService;
  
      public selecionado: BaseEntity;
  
      public setEditando = function (b: boolean) {
          console.log("original" + b);
      }
  
      erro = undefined;
  
      constructor(service: SuperService) {
          this.service = service;
      }
  
      ngOnInit(): void {
      }
  
  
      salvar() {
          this.service.update(this.selecionado)
              .then(salvo => {
                  this.selecionado = salvo;
                  this.setEditando(false);
              })
              .catch(erro => {
                  this.erro = erro;
              });
      }
  
      cancelar() {
          this.setEditando(false);
  
      }
  
      excluir() {
          this.service.remove(this.selecionado.id)
              .then(obj => {
                  this.selecionado = obj;
                  this.setEditando(false);
              })
              .catch(erro => {
                  erro = { message: "Impossível Excluir", description: "Este registro está sendo usado" }
                  console.log(erro);
                  this.erro = erro;
              });
      }
  
  }
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-one-to-many//super-detalhe-om.component.ts`, src, `utf8`);
}




function geravic_one_to_many_component_css(project, angularPath) {
    let src = `
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-one-to-many//vic-one-to-many.component.css`, src, `utf8`);
}




function geravic_one_to_many_component_html(project, angularPath) {
    let src = `
  <p>
    vic-one-to-many works!
  </p>
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-one-to-many//vic-one-to-many.component.html`, src, `utf8`);
}




function geravic_one_to_many_component_spec_ts(project, angularPath) {
    let src = `
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { VicOneToManyComponent } from './vic-one-to-many.component';
  
  describe('VicOneToManyComponent', () => {
    let component: VicOneToManyComponent;
    let fixture: ComponentFixture<VicOneToManyComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ VicOneToManyComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(VicOneToManyComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-one-to-many//vic-one-to-many.component.spec.ts`, src, `utf8`);
}




function geravic_one_to_many_component_ts(project, angularPath) {
    let src = `
  import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
  import { BaseEntity } from '../../vic-components/comum/base-entity';
  import { SuperService } from '../../vic-components/comum/super-service';
  import { VicReturn } from '../../vic-components/comum/vic-return';
  
  
  
  @Component({
    selector: 'vic-one-to-many',
    template: \`
    <div>{{status|json}}</div>
     <div class="container" >
      <vic-tabela  [dados]="dados" [colunas]="colunas" (acao)="edita(\$event)"></vic-tabela>
     </div>
    \`,
    styleUrls: ['./vic-one-to-many.component.css']
  })
  export class VicOneToManyComponent implements OnInit {
  
  
    status = { editando: false };
  
    @Input() valor: BaseEntity[] = [];
    @Input() service: SuperService;
    @Input() colunas = [{ field: "id", label: "ID" }];
    dados = new VicReturn(this.valor);
  
  
    constructor(private resolver: ComponentFactoryResolver) {
  
    }
  
    ngOnInit() {
  
    }
  
    edita(evento) {
      console.log('VicOneToManyComponent', evento);
    }
  
  
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-one-to-many//vic-one-to-many.component.ts`, src, `utf8`);
}




function geravic_system_fields_component_css(project, angularPath) {
    let src = `
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-system-fields//vic-system-fields.component.css`, src, `utf8`);
}




function geravic_system_fields_component_html(project, angularPath) {
    let src = `
  <div *ngIf="entidade">
    <div *ngIf="!aberto">
      <button type="button" class="btn btn-info" (click)="abrir()">Mostrar Atributos do Sistema</button>
    </div>
    <div *ngIf="aberto">
      <button type="button" class="btn btn-info" (click)="fechar()">Esconder Atributos do Sistema</button>
      <div class="alert alert-info" role="alert">
        <div>
          <span>ID: </span>{{entidade.id}}
        </div>
        <div>
          <span>Organização: </span>{{entidade.oi}}
        </div>
        <div>
          <span>Grupo: </span>{{entidade.gi}}
        </div>
        <div>
          <span>Usuário: </span>{{entidade.ui}}
        </div>
        <div>
          <span>Direitos: </span>{{entidade.stringRights}}
        </div>
        <div>
          <span>Extra: </span>{{entidade.extra}}
        </div>
        <div>
          <span>Data Criação: </span>{{entidade.cd}}
        </div>
        <div>
          <span>Data Atualização: </span>{{entidade.ud}} {{entidade.ud-entidade.cd}}
        </div>
        <div>
          <span>Ativo: </span>{{entidade.active}}
        </div>
        <div>
          <span>Versão: </span>{{entidade.version}}
        </div>
      </div>
    </div>
  
  </div>
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-system-fields//vic-system-fields.component.html`, src, `utf8`);
}




function geravic_system_fields_component_spec_ts(project, angularPath) {
    let src = `
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { VicSystemFieldsComponent } from './vic-system-fields.component';
  
  describe('VicSystemFieldsComponent', () => {
    let component: VicSystemFieldsComponent;
    let fixture: ComponentFixture<VicSystemFieldsComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ VicSystemFieldsComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(VicSystemFieldsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-system-fields//vic-system-fields.component.spec.ts`, src, `utf8`);
}




function geravic_system_fields_component_ts(project, angularPath) {
    let src = `
  import { Component, OnInit, Input } from '@angular/core';
  
  @Component({
    selector: 'vic-system-fields',
    templateUrl: './vic-system-fields.component.html',
    styleUrls: ['./vic-system-fields.component.css']
  })
  export class VicSystemFieldsComponent implements OnInit {
  
    @Input() entidade;
  
    aberto=false;
  
    constructor() { }
  
    ngOnInit() {
    }
  
    abrir(){
      this.aberto=true;
    }
    fechar(){
      this.aberto=false;
    }
  
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-system-fields//vic-system-fields.component.ts`, src, `utf8`);
}




function geravic_tabela_component_css(project, angularPath) {
    let src = `
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-tabela//vic-tabela.component.css`, src, `utf8`);
}




function geravic_tabela_component_html(project, angularPath) {
    let src = `
  <div class="table-responsive">
    <span *ngIf="selecionaColunas">
      <span *ngFor="let coluna of colunas"  style="padding-right: 10px;">
        <input type="checkbox" name="tt" [(ngModel)]="coluna.active" (change)="mudouColuna(coluna)" style="margin-right: 5px">{{coluna.label}}
      </span>
    </span>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th *ngIf="todasApagadas()">
            Selecione uma coluna.
          </th>
          <th *ngFor="let coluna of colunasAtivas()">{{coluna.label}}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let dado of dados.values">
          <td (click)="onClick(dado.id)" *ngFor="let coluna of colunasAtivas()">{{resolve(dado,coluna.field)}}</td>
        </tr>
      </tbody>
    </table>
    <span class="navbar-brand">
      <span class="form-control" *ngIf="dados.hasMore" (click)="carregaMais()"> Carregar mais registros</span>
    </span>
  
  </div>
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-tabela//vic-tabela.component.html`, src, `utf8`);
}




function geravic_tabela_component_spec_ts(project, angularPath) {
    let src = `
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { VicTabelaComponent } from './vic-tabela.component';
  
  describe('VicTabelaComponent', () => {
    let component: VicTabelaComponent;
    let fixture: ComponentFixture<VicTabelaComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ VicTabelaComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(VicTabelaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-tabela//vic-tabela.component.spec.ts`, src, `utf8`);
}




function geravic_tabela_component_ts(project, angularPath) {
    let src = `
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { VicReturn } from '../../vic-components/comum/vic-return';
  import { BaseEntity } from '../../vic-components/comum/base-entity';
  
  @Component({
    selector: 'vic-tabela',
    templateUrl: './vic-tabela.component.html',
    styleUrls: ['./vic-tabela.component.css']
  })
  export class VicTabelaComponent implements OnInit {
  
    @Input() dados: VicReturn = new VicReturn();
    @Input() colunas: any[];
    @Input() selecionaColunas: boolean = true;
    @Output() acao: EventEmitter<any> = new EventEmitter();
    @Output() colunaMudou: EventEmitter<any> = new EventEmitter();
    @Output() carregarMais: EventEmitter<any> = new EventEmitter();
  
    constructor() { }
  
  
    ngOnInit(): void {
  
    }
  
    colunasAtivas() {
      return this.colunas.filter(c => c.active);
    }
  
    onClick(id: string) {
      this.acao.emit(id);
    }
  
    resolve(obj, coluna: string) {
  
      let partes = coluna.split(".");
      let o = obj[partes[0]];
      for (let i = 1; i < partes.length; i++) {
        if (o === null) {
          return null;
        }
        if (o === undefined) {
          return undefined;
        }
        o = o[partes[i]];
      }
      return o;
    }
  
    todasApagadas() {
      return !this.colunas.some(r => r.active);
    }
  
    carregaMais() {
      this.carregarMais.emit();
    }
  
    mudouColuna(coluna) {
      this.colunaMudou.emit(coluna);
    }
    public isOwner(obj): boolean {
      return obj && (obj.r.charAt(0) !== '_');
    }
    public commonGroup(obj): boolean {
      return obj && (obj.r.charAt(1) !== '_');
    }
    public canRead(obj): boolean {
      return obj && (obj.r.charAt(2) !== '_');
    }
    public canUpdate(obj): boolean {
      return obj && (obj.r.charAt(3) !== '_');
    }
    public canDelete(obj): boolean {
      return obj && (obj.r.charAt(4) !== '_');
    }
  
    public isNew(obj): boolean {
      return obj.version === null;
    }
  
    public notNew(obj): boolean {
      return obj.version !== null;
    }
  
  
  
  
  
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/vic-components/vic-tabela//vic-tabela.component.ts`, src, `utf8`);
}




function geralogin_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  .footer{
      float: right !important;
      border: 1px 0px 0px 0px solid black;
      text-align: right;
  }
  
  .margin-bottom{
      margin-bottom: 20px;
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/login//login.component.css`, src, `utf8`);
}




function geralogin_component_html(project, angularPath) {
    let src = `
  <div class="container">
    <form [formGroup]="loginForm">
  
      <div class="alert {{erro.cssClass}}" role="alert" *ngIf="erro.show">
        <strong>{{erro.message}}</strong> {{erro.description}}
        <a (click)="erro.show = false" style="float: right;   margin-right: -10px;  margin-top: -10px;">x</a>
      </div>
  
      <div class="row">
        <div class="col-sm-12 margin-bottom">
          <label>Login:</label>
          <input type="text" id="idnome" name="nome" placeholder="email@organizacao" formControlName="loginInput" class="form-control"
          />
  
          <div class="alert alert-danger" *ngIf="!loginForm.controls['loginInput'].valid && loginForm.controls['loginInput'].touched"
            style="margin-top:10px">
            Email inválido, por favor informe um email válido!
          </div>
  
        </div>
  
        <div class="col-sm-12 margin-bottom">
          <label>Senha:</label>
          <input type="password" id="idsenha" name="senha" placeholder="Senha" formControlName="senhaInput" class="form-control" />
  
          <div class="alert alert-danger" *ngIf="!loginForm.controls['senhaInput'].valid && loginForm.controls['senhaInput'].touched"
            style="margin-top:10px">
            Por favor informe uma senha!
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-sm-6 text-left">
  <!--        <button type="button" class="btn btn-warning" disabled="true">
            <i class="fas fa-key"></i> Recuperar Senha
          </button> -->
        </div>
        <div class="col-sm-6 text-right">
  <!--        <button type="button" class="btn btn-info" [disabled]="!loginForm.valid" (click)="criarUsuario()" >
            <i class="fas fa-user-plus"></i> Criar Usuário
          </button> -->
          <button type="submit" class="btn btn-success" [disabled]="!loginForm.valid" (click)="logar()">
            <i class="fas fa-sign-in-alt"></i> Logar
          </button>
        </div>
      </div>
  
    </form>
  
  </div>
    `;
    fs.writeFileSync(`${angularPath}/src/app/login//login.component.html`, src, `utf8`);
}




function geralogin_component_spec_ts(project, angularPath) {
    let src = `
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { LoginComponent } from './login.component';
  
  describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ LoginComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/login//login.component.spec.ts`, src, `utf8`);
}




function geralogin_component_ts(project, angularPath) {
    let src = `
  import { Component, OnInit } from '@angular/core';
  import { LoginService } from './login.service';
  import { Router } from '@angular/router';
  import { UsuarioService } from '../usuario/usuario.service';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { AlertMessage } from '../vic-components/alert-message';
  
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
  
    erro = new AlertMessage();;
    loginForm: FormGroup;
  
    constructor(public loginService: LoginService, private router: Router, public usuarioService: UsuarioService,
      private fb: FormBuilder) {
      this.loginForm = fb.group({
        'loginInput': ['admin@munif.com.br', Validators.compose([Validators.required, Validators.email])],
        'senhaInput': ['qwe123', Validators.compose([Validators.required])]
      });
  
    }
  
    ngOnInit() {
    }
    //logar(form) {
    logar() {
  
      if (!this.loginForm.valid) {
        this.erro.createErrorAlert("Dados inválidos", "Complete as informações e tente novamente");
        return;
      }
  
      this.loginService.loga(this.loginForm.value.loginInput, this.loginForm.value.senhaInput).then(r => {
        if (r.ok) {
          this.router.navigate([this.loginService.proximaUrl]);
        } else {
          this.erro.createErrorAlert("Login inválido", "Login ou senha incorretos. Tente novamente.");
        }
      });
    }
  
    criarUsuario() {
      if (!this.loginForm.valid) {
        this.erro.createErrorAlert("Dados inválidos", "Complete as informações e tente novamente");
        return;
      }
  
      this.usuarioService.add({ login: this.loginForm.value.loginInput, senha: this.loginForm.value.senhaInput })
        .then(r => {
          this.loginService.loga(this.loginForm.value.loginInput, this.loginForm.value.senhaInput).then(r => {
            if (r.ok) {
              this.router.navigate([this.loginService.proximaUrl]);
            }
          });
        });
    }
  
  
    logout() {
      this.loginService.logout().then(r => r);
      this.router.navigate(['/']);
    }
  
  }
  
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/login//login.component.ts`, src, `utf8`);
}




function geralogin_service_ts(project, angularPath) {
    let src = `
  import { Http, Headers, Response } from '@angular/http';
  import { SuperService } from '../vic-components/comum/super-service';
  import { Injectable } from '@angular/core';
  import { Token } from '../vic-components/domain/token';
  
  
  @Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
      public static ins: LoginService;;
  
      public grupoAtual: any;
  
      public proximaUrl: string;
  
      public logado = false;
  
      public token: Token;
  
      public caminho = 'token';
  
      public static BASE_URL = 'http://127.0.0.1:8080/api';
      //public static BASE_URL = (location.origin + '/api').replace("4200", "8080");
  
  
      protected baseUrl = 'http://127.0.0.1:8080/api';
  
      constructor(protected http: Http) {
          this.baseUrl = LoginService.BASE_URL;
          console.log(this.baseUrl);
          LoginService.ins = this;
      }
  
      errorHandler = error => {
          return Promise.reject(error.json());
      }
  
      createAuthorizationHeader(): Headers {
          let headers = new Headers();
          headers.append('authorization', this.token.token);
          return headers;
      }
  
      loga(login: string, senha: string) {
          return this.http.post(\`\${this.baseUrl}/\${this.caminho}/login/bypassword\`, { login, senha })
              .toPromise().then(response => {
                  let r = response.json();
  
                  if (r.ok) {
                      this.logado = true;
                      this.token = r.token;
                      this.grupoAtual = this.token.usuario.grupos[0];
                  }
                  return r;
              })
              .catch(this.errorHandler);
      }
      logout() {
          this.logado = false;
          this.token = null;
          return this.http.post(\`\${this.baseUrl}/\${this.caminho}/logout\`, { login: null, senha: null })
              .toPromise().then(response => {
                  this.logado = false;
                  this.token = null;
                  return response;
              })
              .catch(this.errorHandler);
      }
  
  }
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/login//login.service.ts`, src, `utf8`);
}



function gera_usuario_crud_crud_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario/crud//crud.component.css`, src, `utf8`);
}




function gera_usuario_crud_crud_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    <h1 class="h2">Usuario</h1>
  </div>
  <router-outlet></router-outlet>
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario/crud//crud.component.html`, src, `utf8`);
}




function gera_usuario_crud_crud_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
   
  @Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
  })
  export class CrudComponent  {
  
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario/crud//crud.component.ts`, src, `utf8`);
}




function gera_usuario_detalhes_detalhes_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  .footer{
      float: right !important;
      border: 1px 0px 0px 0px solid black;
      text-align: right;
  }
  
  .margin-bottom{
      margin-bottom: 20px;
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario/detalhes//detalhes.component.css`, src, `utf8`);
}




function gera_usuario_detalhes_detalhes_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <div class="container">
  
    <div *ngIf="!selecionado">
      Carregando....
    </div>
    <div *ngIf="selecionado">
  
      <div class="alert {{msg.cssClass}}" role="alert" *ngIf="msg.show">
        <strong>{{msg.message}}</strong> {{msg.description}}
        <a (click)="msg.show = false" style="float: right; margin-right: -10px; margin-top: -10px;cursor: pointer;">x</a>
      </div>
      <h2>{{ selecionado.nome| uppercase }}</h2>
      <form [formGroup]="detalhesForm">
  
        <div class="row">
  
          <div class="col-sm-12 margin-bottom">
            <label>LOGIN:</label>
            <input type="text" id="idlogin" name="login" placeholder="LOGIN" [(ngModel)]="selecionado.login" formControlName="login"
              class="form-control"  />
            <div class="alert alert-danger" *ngIf="!detalhesForm.controls['login'].valid && detalhesForm.controls['login'].touched" style="margin-top:10px">
              O campo LOGIN é obrigatório.
            </div>
          </div>
  
          <div class="col-sm-12 margin-bottom">
            <label>SENHA:</label>
            <input type="text" id="idsenha" name="senha" placeholder="SENHA" [(ngModel)]="selecionado.senha" formControlName="senha"
              class="form-control"  />
            <div class="alert alert-danger" *ngIf="!detalhesForm.controls['senha'].valid && detalhesForm.controls['senha'].touched" style="margin-top:10px">
              O campo SENHA é obrigatório.
            </div>
          </div>
  
          <div class="col-sm-12 margin-bottom" *ngIf="(isNew(selecionado)||canUpdate(selecionado)  && mostrar )">
            <label>GRUPOS:</label>
            <vic-many-to-many [(valor)]="selecionado.grupos" [service]="grupoService" atributoLabel="nome" [group]="detalhesForm"></vic-many-to-many>
          </div>
  
          <div class="col-sm-12 margin-bottom">
            <label>ORGANIZACAO:</label>
            <vic-many-to-one [(valor)]="selecionado.organizacao" [service]="organizacaoService" atributoLabel="nome" [group]="detalhesForm"
              nomeNoForm="organizacao"></vic-many-to-one>
            <div class="alert alert-danger" *ngIf="!detalhesForm.controls['organizacao'].valid && detalhesForm.controls['organizacao'].touched"
              style="margin-top:10px">
              O campo ORGANIZACAO é obrigatório.
            </div>
          </div>
          
        </div>
  
        <div class="row">
          <div class="col-sm-6 text-left">
            <button type="button" class="btn btn-danger" (click)="excluir()" [disabled]="isNew(selecionado)||!canDelete(selecionado)">
              <i class="far fa-trash-alt"></i> Excluir
            </button>
          </div>
          <div class="col-sm-6 text-right">
            <button type="button" class="btn btn-info" (click)="voltar()" [disabled]="!detalhesForm.pristine">
              <i class="fas fa-chevron-circle-left"></i> Voltar
            </button>
            <button type="button" class="btn btn-warning" (click)="cancelar()" [disabled]="detalhesForm.pristine">
              <i class="far fa-times-circle"></i> Cancelar
            </button>
  
            <button type="button" class="btn btn-success" (click)="salvar()" [disabled]="(notNew(selecionado)&&!canUpdate(selecionado)) || !detalhesForm.valid || detalhesForm.pristine">
              <i class="far fa-save"></i> Salvar
            </button>
          </div>
        </div>
  
      </form>
    </div>
  </div>
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario/detalhes//detalhes.component.html`, src, `utf8`);
}




function gera_usuario_detalhes_detalhes_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { Location } from '@angular/common';
  import { UsuarioService } from '../usuario.service';
  import { OrganizacaoService } from '../../organizacao/organizacao.service';
  import { GrupoService } from '../../grupo/grupo.service';
  import { VicReturn } from '../../vic-components/comum/vic-return';
  import { SuperDetalhesComponent } from '../../vic-components/comum/super-detalhes';
  import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
  
  
  @Component({
    selector: 'app-detalhes',
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.css']
  })
  export class DetalhesComponent extends SuperDetalhesComponent {
  
    detalhesForm: FormGroup;
    mostrar = true;
  
    constructor(protected service: UsuarioService, protected router: Router, protected route: ActivatedRoute,protected grupoService:GrupoService,protected organizacaoService:OrganizacaoService,protected usuarioService:UsuarioService,
      private fb: FormBuilder, protected location: Location) {
      super(service, router, route);
    }
  
    initForm() {    
      this.detalhesForm = this.fb.group({
        'login': new FormControl({ value: this.selecionado['login'], disabled: this.notNew(this.selecionado) && !this.canUpdate(this.selecionado) }, Validators.compose([Validators.required])),
        'senha': new FormControl({ value: this.selecionado['senha'], disabled: this.notNew(this.selecionado) && !this.canUpdate(this.selecionado) }, Validators.compose([Validators.required])),
        'grupos': new FormControl({ value: this.selecionado['grupos'], disabled: this.notNew(this.selecionado) && !this.canUpdate(this.selecionado) }),
        'organizacao': new FormControl({ value: this.selecionado['organizacao'], disabled: this.notNew(this.selecionado) && !this.canUpdate(this.selecionado) }, Validators.compose([Validators.required])),
      });
    }
  
  
    voltar() {
      this.router.navigate(['../..'], { relativeTo: this.route });
    }
  
    cancelar() {
      this.mostrar = false;
      this.service.getOne(this.selecionado.version == null ? "new" : this.selecionado.id).then(obj => {
        this.selecionado = obj;
        this.initForm();
        this.mostrar = true;
      })
      
    }
  
    salvar() {
      this.service.update(this.selecionado)
        .then(salvo => {
          this.selecionado = salvo;
          this.msg.createSuccessAlert("Objeto salvo", "Operação realizada com sucesso");
  
          this.location.go("nacionalidade/detalhes/" + salvo.id);
  
          this.initForm();
        })
        .catch(erro => {
          this.msg.createErrorAlert("Erro", erro);
        });
    }
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario/detalhes//detalhes.component.ts`, src, `utf8`);
}




function gera_usuario_lista_lista_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  .padding-bottom-20{
      padding-bottom: 20px;
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario/lista//lista.component.css`, src, `utf8`);
}




function gera_usuario_lista_lista_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <h2>Lista {{resposta.quantity}} </h2>
  <div class="row padding-bottom-20">
      <div class="col-sm-6">
          <input type="text" id="inPesquisa" name="pesquisa" placeholder="Pesquisa" class="form-control" [(ngModel)]="pesquisa" (keypress)="verificaEnter(\$event)"/>
      </div>
      <div class="col-sm-3" >
          <button type="button" class="btn btn-info" (click)="pesquisar()">
              <i class="fas fa-search"></i> Pesquisar </button>
      </div>
  
      <div class="col-sm-3 text-right">
          <button type="button" class="btn btn-success" (click)="novo()">
              <i class="far fa-file"></i> Novo</button>
      </div>
  </div>
  <vic-tabela [(dados)]="resposta" [colunas]="colunas" (acao)="goDetalhes(\$event)"></vic-tabela>
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario/lista//lista.component.html`, src, `utf8`);
}




function gera_usuario_lista_lista_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { UsuarioService } from '../usuario.service';
  import { BaseEntity } from "../../vic-components/comum/base-entity";
  import { VicReturn } from '../../vic-components/comum/vic-return';
  import { SuperListaComponent } from '../../vic-components/comum/super-lista';
  
  
  @Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
  })
  export class ListaComponent extends SuperListaComponent {
  
    colunas = [
      { active: true, comparisonOperator: "STARTS_WITH", field: "login", label: "Login",pedacos: ["login"]},
      { active: true, comparisonOperator: "STARTS_WITH", field: "senha", label: "Senha",pedacos: ["senha"]},
      { active: true, comparisonOperator: "STARTS_WITH", field: "organizacao.nome", label: "Organizacao",pedacos: ["organizacao", "nome"]},
      { active: true, comparisonOperator: "STARTS_WITH", field: "organizacao.codigo", label: "Codigo",pedacos: ["organizacao", "codigo"]},
      { active: false, comparisonOperator: "STARTS_WITH", field: "organizacao.superior.nome", label: "Superior",pedacos: ["organizacao", "superior", "nome"]},
      { active: false, comparisonOperator: "STARTS_WITH", field: "organizacao.superior.codigo", label: "Codigo",pedacos: ["organizacao", "superior", "codigo"]},
    ];
  
    constructor(protected service: UsuarioService, protected router: Router, protected route: ActivatedRoute) {
      super(service,router,route);
    }
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario/lista//lista.component.ts`, src, `utf8`);
}




function gera_usuario_usuario_routing_module_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { CrudComponent } from './crud/crud.component';
  import { ListaComponent } from './lista/lista.component';
  import { DetalhesComponent } from './detalhes/detalhes.component';
  
  
  const routes: Routes = [
    {
      path: 'usuario', component: CrudComponent,
      children: [
        { path: '', component: ListaComponent },
        { path: 'detalhes/:id', component: DetalhesComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsuarioRoutingModule { }
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario//usuario-routing.module.ts`, src, `utf8`);
}




function gera_usuario_usuario_module_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { NgModule } from '@angular/core';
  import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
  import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { VicComponentsModule } from '../vic-components/vic-components.module';
  import { UsuarioRoutingModule } from './usuario-routing.module';
  import { CrudComponent } from './crud/crud.component';
  import { ListaComponent } from './lista/lista.component';
  import { DetalhesComponent } from './detalhes/detalhes.component';
  import { BrowserModule } from '@angular/platform-browser';
  
  /*IMPORTS*/
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule,
      UsuarioRoutingModule,
      VicComponentsModule,
      BrowserModule,    
      ReactiveFormsModule 
    ],
    declarations: [
  /*DECLARATIONS*/
        CrudComponent, 
        ListaComponent, 
        DetalhesComponent
  ,]
  })
  export class UsuarioModule { }
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario//usuario.module.ts`, src, `utf8`);
}




function gera_usuario_usuario_service_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Injectable } from '@angular/core';
  import { Http, Headers, Response } from '@angular/http';
  import { SuperService} from '../vic-components/comum/super-service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class UsuarioService extends SuperService{
  
    constructor(http:Http) {
      super('usuario',http);
    }
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/usuario//usuario.service.ts`, src, `utf8`);
}




function gera_grupo_crud_crud_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo/crud//crud.component.css`, src, `utf8`);
}




function gera_grupo_crud_crud_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    <h1 class="h2">Grupo</h1>
  </div>
  <router-outlet></router-outlet>
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo/crud//crud.component.html`, src, `utf8`);
}




function gera_grupo_crud_crud_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
   
  @Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
  })
  export class CrudComponent  {
  
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo/crud//crud.component.ts`, src, `utf8`);
}




function gera_grupo_detalhes_detalhes_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  .footer{
      float: right !important;
      border: 1px 0px 0px 0px solid black;
      text-align: right;
  }
  
  .margin-bottom{
      margin-bottom: 20px;
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo/detalhes//detalhes.component.css`, src, `utf8`);
}




function gera_grupo_detalhes_detalhes_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <div class="container">
  
    <div *ngIf="!selecionado">
      Carregando....
    </div>
    <div *ngIf="selecionado">
  
      <h2>{{ selecionado.nome| uppercase }}</h2>
  
      <div class="row">
  
    <div class="col-sm-12 margin-bottom">
      <label>NOME:</label>
        <input type="text" id="idnome" name="nome" placeholder="NOME" [(ngModel)]="selecionado.nome" class="form-control" />
    </div>
  
    <div class="col-sm-12 margin-bottom">
      <label>CODIGO:</label>
        <input type="text" id="idcodigo" name="codigo" placeholder="CODIGO" [(ngModel)]="selecionado.codigo" class="form-control" />
    </div>
  
      </div>
      <div class="row">
        <div class="col-sm-6 text-left">
          <button type="button" class="btn btn-danger" (click)="excluir()" *ngIf="selecionado.version !== null">
            <i class="far fa-trash-alt"></i> Excluir
          </button>
        </div>
        <div class="col-sm-6 text-right">
          <button type="button" class="btn btn-warning" (click)="cancelar()">
            <i class="far fa-times-circle"></i> Cancelar
          </button>
          <button type="button" class="btn btn-success" (click)="salvar()">
            <i class="far fa-save"></i> Salvar
          </button>
        </div>
      </div>
      <div class="alert alert-danger" role="alert" *ngIf="erro">
        {{erro|json}}
      </div>
    </div>
  
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo/detalhes//detalhes.component.html`, src, `utf8`);
}




function gera_grupo_detalhes_detalhes_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { Location } from '@angular/common';
  import { GrupoService } from '../grupo.service';
  import { VicReturn } from '../../vic-components/comum/vic-return';
  import { SuperDetalhesComponent } from '../../vic-components/comum/super-detalhes';
  
  
  @Component({
    selector: 'app-detalhes',
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.css']
  })
  export class DetalhesComponent extends SuperDetalhesComponent {
  
    constructor(protected service: GrupoService, protected router: Router, protected route: ActivatedRoute,protected grupoService:GrupoService) {
      super(service,router,route);
    }
  
  
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo/detalhes//detalhes.component.ts`, src, `utf8`);
}




function gera_grupo_grupo_routing_module_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { CrudComponent } from './crud/crud.component';
  import { ListaComponent } from './lista/lista.component';
  import { DetalhesComponent } from './detalhes/detalhes.component';
  
  
  const routes: Routes = [
    {
      path: 'grupo', component: CrudComponent,
      children: [
        { path: '', component: ListaComponent },
        { path: 'detalhes/:id', component: DetalhesComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GrupoRoutingModule { }
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo//grupo-routing.module.ts`, src, `utf8`);
}




function gera_grupo_grupo_module_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { NgModule } from '@angular/core';
  import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
  import { FormsModule }   from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { VicComponentsModule } from '../vic-components/vic-components.module';
  import { GrupoRoutingModule } from './grupo-routing.module';
  import { CrudComponent } from './crud/crud.component';
  import { ListaComponent } from './lista/lista.component';
  import { DetalhesComponent } from './detalhes/detalhes.component';
  
  /*IMPORTS*/
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule,
      GrupoRoutingModule,
      VicComponentsModule
    ],
    declarations: [
  /*DECLARATIONS*/
        CrudComponent, 
        ListaComponent, 
        DetalhesComponent
  ,]
  })
  export class GrupoModule { }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo//grupo.module.ts`, src, `utf8`);
}




function gera_grupo_grupo_service_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Injectable } from '@angular/core';
  import { Http, Headers, Response } from '@angular/http';
  import { SuperService} from '../vic-components/comum/super-service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class GrupoService extends SuperService{
  
    constructor(http:Http) {
      super('grupo',http);
    }
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo//grupo.service.ts`, src, `utf8`);
}




function gera_grupo_lista_lista_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  .padding-bottom-20{
      padding-bottom: 20px;
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo/lista//lista.component.css`, src, `utf8`);
}




function gera_grupo_lista_lista_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <h2>Lista {{resposta.quantity}} </h2>
  <div class="row padding-bottom-20">
      <div class="col-sm-6">
          <input type="text" id="inPesquisa" name="pesquisa" placeholder="Pesquisa" class="form-control" [(ngModel)]="pesquisa" (keypress)="verificaEnter(\$event)"/>
      </div>
      <div class="col-sm-3" >
          <button type="button" class="btn btn-info" (click)="pesquisar()">
              <i class="fas fa-search"></i> Pesquisar </button>
      </div>
  
      <div class="col-sm-3 text-right">
          <button type="button" class="btn btn-success" (click)="novo()">
              <i class="far fa-file"></i> Novo</button>
      </div>
  </div>
  <vic-tabela [(dados)]="resposta" [colunas]="colunas" (acao)="goDetalhes(\$event)"></vic-tabela>
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo/lista//lista.component.html`, src, `utf8`);
}




function gera_grupo_lista_lista_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { GrupoService } from '../grupo.service';
  import { BaseEntity } from "../../vic-components/comum/base-entity";
  import { VicReturn } from '../../vic-components/comum/vic-return';
  import { SuperListaComponent } from '../../vic-components/comum/super-lista';
  
  
  @Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
  })
  export class ListaComponent extends SuperListaComponent {
  
    colunas = [
      { active: true, comparisonOperator: "STARTS_WITH", field: "nome", label: "Nome",pedacos: ["nome"]},
      { active: true, comparisonOperator: "STARTS_WITH", field: "codigo", label: "Codigo",pedacos: ["codigo"]},
    ];
  
    constructor(protected service: GrupoService, protected router: Router, protected route: ActivatedRoute) {
      super(service,router,route);
    }
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/grupo/lista//lista.component.ts`, src, `utf8`);
}




function gera_organizacao_crud_crud_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao/crud//crud.component.css`, src, `utf8`);
}




function gera_organizacao_crud_crud_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    <h1 class="h2">Organizacao</h1>
  </div>
  <router-outlet></router-outlet>
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao/crud//crud.component.html`, src, `utf8`);
}




function gera_organizacao_crud_crud_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
   
  @Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
  })
  export class CrudComponent  {
  
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao/crud//crud.component.ts`, src, `utf8`);
}




function gera_organizacao_detalhes_detalhes_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  .footer{
      float: right !important;
      border: 1px 0px 0px 0px solid black;
      text-align: right;
  }
  
  .margin-bottom{
      margin-bottom: 20px;
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao/detalhes//detalhes.component.css`, src, `utf8`);
}




function gera_organizacao_detalhes_detalhes_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <div class="container">
  
    <div *ngIf="!selecionado">
      Carregando....
    </div>
    <div *ngIf="selecionado">
      <div class="alert {{msg.cssClass}}" role="alert" *ngIf="msg.show">
        <strong>{{msg.message}}</strong> {{msg.description}}
        <a (click)="msg.show = false" style="float: right; margin-right: -10px; margin-top: -10px;cursor: pointer;">x</a>
      </div>
      <h2>{{ selecionado.nome| uppercase }}</h2>
      <form [formGroup]="detalhesForm">
        <div class="row">
  
          <div class="col-sm-12 margin-bottom">
            <label>NOME:</label>
            <input type="text" id="idnome" name="nome" placeholder="NOME" formControlName="nome" [(ngModel)]="selecionado.nome" class="form-control"/>
            <div class="alert alert-danger" *ngIf="!detalhesForm.controls['nome'].valid && detalhesForm.controls['nome'].touched" style="margin-top:10px">
              O campo NOME é obrigatório.
            </div>
          </div>
  
          <div class="col-sm-12 margin-bottom">
            <label>CODIGO:</label>
            <input type="text" id="idcodigo" name="codigo" placeholder="CODIGO" formControlName="codigo" [(ngModel)]="selecionado.codigo"
              class="form-control"  />
            <div class="alert alert-danger" *ngIf="!detalhesForm.controls['codigo'].valid && detalhesForm.controls['codigo'].touched"
              style="margin-top:10px">
              O campo CODIGO é obrigatório.
            </div>
          </div>
  
          <div class="col-sm-12 margin-bottom">
            <label>SUPERIOR:</label>
            <vic-many-to-one [(valor)]="selecionado.superior" [service]="organizacaoService" atributoLabel="nome" [group]="detalhesForm"
              nomeNoForm="superior">
            </vic-many-to-one>
            <div class="alert alert-danger" *ngIf="!detalhesForm.controls['superior'].valid && detalhesForm.controls['superior'].touched"
              style="margin-top:10px">
              O campo SUPERIOR é obrigatório.
            </div>
          </div>
  
        </div>
        <div class="row">
          <div class="col-sm-6 text-left">
            <button type="button" class="btn btn-danger" (click)="excluir()" >
              <i class="far fa-trash-alt"></i> Excluir
            </button>
          </div>
          <div class="col-sm-6 text-right">
            <button type="button" class="btn btn-info" (click)="voltar()" [disabled]="!detalhesForm.pristine">
              <i class="fas fa-chevron-circle-left"></i> Voltar
            </button>
            <button type="button" class="btn btn-warning" (click)="cancelar()" [disabled]="detalhesForm.pristine">
              <i class="far fa-times-circle"></i> Cancelar
            </button>
            <button type="button" class="btn btn-success" (click)="salvar()" [disabled]="(notNew(selecionado)&&!canUpdate(selecionado)) || !detalhesForm.valid || detalhesForm.pristine">
              <i class="far fa-save"></i> Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao/detalhes//detalhes.component.html`, src, `utf8`);
}




function gera_organizacao_detalhes_detalhes_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { Location } from '@angular/common';
  import { OrganizacaoService } from '../organizacao.service';
  import { VicReturn } from '../../vic-components/comum/vic-return';
  import { SuperDetalhesComponent } from '../../vic-components/comum/super-detalhes';
  import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
  
  
  @Component({
    selector: 'app-detalhes',
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.css']
  })
  export class DetalhesComponent extends SuperDetalhesComponent {
  
    detalhesForm: FormGroup;
  
    constructor(protected service: OrganizacaoService, protected router: Router, protected route: ActivatedRoute, protected organizacaoService: OrganizacaoService,
      private fb: FormBuilder, protected location: Location) {
      super(service, router, route);
    }
  
    initForm() {
      this.detalhesForm = this.fb.group({
        'nome': new FormControl({ value: this.selecionado['nome'], disabled: this.notNew(this.selecionado) && !this.canUpdate(this.selecionado) }, Validators.compose([Validators.required])),
        'codigo': new FormControl({ value: this.selecionado['codigo'], disabled: this.notNew(this.selecionado) && !this.canUpdate(this.selecionado) }, Validators.compose([Validators.required])),
        'superior': new FormControl({ value: this.selecionado['superior'], disabled: this.notNew(this.selecionado) && !this.canUpdate(this.selecionado) }, Validators.compose([Validators.required])),
      });
    }
  
  
    voltar() {
      this.router.navigate(['../..'], { relativeTo: this.route });
    }
  
    cancelar() {
      this.service.getOne(this.selecionado.version == null ? "new" : this.selecionado.id).then(obj => {
        this.selecionado = obj;
        this.initForm();
      })
    }
  
    salvar() {
      console.log(this.selecionado);
      this.service.update(this.selecionado)
        .then(salvo => {
          this.selecionado = salvo;
          this.msg.createSuccessAlert("Objeto salvo", "Operação realizada com sucesso");
  
          this.location.go("nacionalidade/detalhes/" + salvo.id);
  
          this.initForm();
        })
        .catch(erro => {
          this.msg.createErrorAlert("Erro", erro);
        });
    }
  
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao/detalhes//detalhes.component.ts`, src, `utf8`);
}




function gera_organizacao_lista_lista_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  .padding-bottom-20{
      padding-bottom: 20px;
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao/lista//lista.component.css`, src, `utf8`);
}




function gera_organizacao_lista_lista_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <h2>Lista {{resposta.quantity}} </h2>
  <div class="row padding-bottom-20">
      <div class="col-sm-6">
          <input type="text" id="inPesquisa" name="pesquisa" placeholder="Pesquisa" class="form-control" [(ngModel)]="pesquisa" (keypress)="verificaEnter(\$event)"/>
      </div>
      <div class="col-sm-3" >
          <button type="button" class="btn btn-info" (click)="pesquisar()">
              <i class="fas fa-search"></i> Pesquisar </button>
      </div>
  
      <div class="col-sm-3 text-right">
          <button type="button" class="btn btn-success" (click)="novo()">
              <i class="far fa-file"></i> Novo</button>
      </div>
  </div>
  <vic-tabela [(dados)]="resposta" [colunas]="colunas" (acao)="goDetalhes(\$event)"></vic-tabela>
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao/lista//lista.component.html`, src, `utf8`);
}




function gera_organizacao_lista_lista_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { OrganizacaoService } from '../organizacao.service';
  import { BaseEntity } from "../../vic-components/comum/base-entity";
  import { VicReturn } from '../../vic-components/comum/vic-return';
  import { SuperListaComponent } from '../../vic-components/comum/super-lista';
  
  
  @Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
  })
  export class ListaComponent extends SuperListaComponent {
  
    colunas = [
      { active: true, comparisonOperator: "STARTS_WITH", field: "nome", label: "Nome",pedacos: ["nome"]},
      { active: true, comparisonOperator: "STARTS_WITH", field: "codigo", label: "Codigo",pedacos: ["codigo"]},
      { active: true, comparisonOperator: "STARTS_WITH", field: "superior.nome", label: "Superior",pedacos: ["superior", "nome"]},
      { active: true, comparisonOperator: "STARTS_WITH", field: "superior.codigo", label: "Codigo",pedacos: ["superior", "codigo"]},
    ];
  
    constructor(protected service: OrganizacaoService, protected router: Router, protected route: ActivatedRoute) {
      super(service,router,route);
    }
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao/lista//lista.component.ts`, src, `utf8`);
}




function gera_organizacao_organizacao_routing_module_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { CrudComponent } from './crud/crud.component';
  import { ListaComponent } from './lista/lista.component';
  import { DetalhesComponent } from './detalhes/detalhes.component';
  
  
  const routes: Routes = [
    {
      path: 'organizacao', component: CrudComponent,
      children: [
        { path: '', component: ListaComponent },
        { path: 'detalhes/:id', component: DetalhesComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OrganizacaoRoutingModule { }
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao//organizacao-routing.module.ts`, src, `utf8`);
}




function gera_organizacao_organizacao_module_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { NgModule } from '@angular/core';
  import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
  import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { VicComponentsModule } from '../vic-components/vic-components.module';
  import { OrganizacaoRoutingModule } from './organizacao-routing.module';
  import { CrudComponent } from './crud/crud.component';
  import { ListaComponent } from './lista/lista.component';
  import { DetalhesComponent } from './detalhes/detalhes.component';
  import { BrowserModule } from '@angular/platform-browser';
  
  /*IMPORTS*/
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule,
      OrganizacaoRoutingModule,
      VicComponentsModule,
      BrowserModule,    
      ReactiveFormsModule 
    ],
    declarations: [
  /*DECLARATIONS*/
        CrudComponent, 
        ListaComponent, 
        DetalhesComponent
  ,]
  })
  export class OrganizacaoModule { }
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao//organizacao.module.ts`, src, `utf8`);
}




function gera_organizacao_organizacao_service_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por munif as 28/02/2018 01:55:26 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Injectable } from '@angular/core';
  import { Http, Headers, Response } from '@angular/http';
  import { SuperService} from '../vic-components/comum/super-service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class OrganizacaoService extends SuperService{
  
    constructor(http:Http) {
      super('organizacao',http);
    }
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/organizacao//organizacao.service.ts`, src, `utf8`);
}



function gera_pietra_guard_guard_ts(project, angularPath) {
    let src = `
  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
  import { Observable } from 'rxjs/Observable';
  import { LoginService } from './login/login.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class PietraGuardGuard implements CanActivate {
  
    constructor(public loginService: LoginService, private router: Router) {
  
    }
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.loginService.proximaUrl = state.url;
      if (!this.loginService.logado) {
        this.router.navigate(['/login']);
      }
  
      return this.loginService.logado;
    }
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app//pietra-guard.guard.ts`, src, `utf8`);
}





function gera_pais_crud_crud_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais/crud//crud.component.css`, src, `utf8`);
}




function gera_pais_crud_crud_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    <h1 class="h2">Pais</h1>
  </div>
  <router-outlet></router-outlet>
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais/crud//crud.component.html`, src, `utf8`);
}




function gera_pais_crud_crud_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
   
  @Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
  })
  export class CrudComponent  {
  
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais/crud//crud.component.ts`, src, `utf8`);
}




function gera_pais_detalhes_detalhes_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  .footer{
      float: right !important;
      border: 1px 0px 0px 0px solid black;
      text-align: right;
  }
  
  .margin-bottom{
      margin-bottom: 20px;
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais/detalhes//detalhes.component.css`, src, `utf8`);
}




function gera_pais_detalhes_detalhes_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <div class="container">
  
    <div *ngIf="!selecionado">
      Carregando....
    </div>
    <div *ngIf="selecionado">
        <div class="alert {{msg.cssClass}}" role="alert" *ngIf="msg.show">
          <strong>{{msg.message}}</strong> {{msg.description}}
          <a (click)="msg.show = false" style="float: right; margin-right: -10px; margin-top: -10px;cursor: pointer;">x</a>
        </div>
      <h2>{{ selecionado.nome| uppercase }}</h2>
  
  <form [formGroup]="detalhesForm">
      <div class="row">
  
    <div class="col-sm-12 margin-bottom">
      <label>NOME:</label>
        <input type="text" id="idnome" name="nome" formControlName="nome" placeholder="NOME" [(ngModel)]="selecionado.nome" class="form-control" [disabled]="notNew(selecionado)&&!canUpdate(selecionado)" />
            <div class="alert alert-danger" *ngIf="!detalhesForm.controls['nome'].valid && detalhesForm.controls['nome'].touched" style="margin-top:10px">
              O campo NOME é obrigatório.
            </div>
    </div>
  
      </div>
      <div class="row">
        <div class="col-sm-6 text-left">
          <button type="button" class="btn btn-danger" (click)="excluir()" [disabled]="isNew(selecionado)||!canDelete(selecionado)">
            <i class="far fa-trash-alt"></i> Excluir
          </button>
        </div>
        <div class="col-sm-6 text-right">
            <button type="button" class="btn btn-info" (click)="voltar()" [disabled]="!detalhesForm.pristine">
              <i class="fas fa-chevron-circle-left"></i> Voltar
            </button>        <button type="button" class="btn btn-warning" (click)="cancelar()" [disabled]="detalhesForm.pristine">
            <i class="far fa-times-circle"></i> Cancelar
          </button>
          <button type="button" class="btn btn-success" (click)="salvar()"  [disabled]="(notNew(selecionado)&&!canUpdate(selecionado)) || !detalhesForm.valid || detalhesForm.pristine" >
            <i class="far fa-save"></i> Salvar
          </button>
        </div>
      </div>
      </form>
     </div>
      <div class="row" *ngIf="notNew(selecionado)">
        <img [src]="drawsvg">
      </div> </div>
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais/detalhes//detalhes.component.html`, src, `utf8`);
}




function gera_pais_detalhes_detalhes_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { Location } from '@angular/common';
  import { PaisService } from '../pais.service';
  import { VicReturn } from '../../vic-components/comum/vic-return';
  import { SuperDetalhesComponent } from '../../vic-components/comum/super-detalhes';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  import { BaseEntity } from '../../vic-components/comum/base-entity';
  
  
  @Component({
    selector: 'app-detalhes',
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.css']
  })
  export class DetalhesComponent extends SuperDetalhesComponent {
  
    detalhesForm: FormGroup;
  
    constructor(protected service: PaisService, protected router: Router, protected route: ActivatedRoute,protected paisService:PaisService,
      private fb: FormBuilder, protected location: Location) {
      super(service,router,route);
    }
  
  
  initForm() {
  
        this.detalhesForm = this.fb.group({
          'nome': ['', Validators.compose([Validators.required])],
        });
    }
  
  voltar() {
      this.router.navigate(['../..'], { relativeTo: this.route });
    }
  
  cancelar() {
  
      let id = this.selecionado["version"] == null ? "new" : this.selecionado["id"];
  
      this.service.getOne(id).then(obj => {
        this.selecionado = obj;
        this.detalhesForm = this.fb.group({
            'nome': [this.selecionado['nome'], Validators.compose([Validators.required])],
              })
      })
    }
  
   salvar() {
      this.service.update(this.selecionado)
        .then(salvo => {
          this.selecionado = salvo;
          this.msg.createSuccessAlert("Objeto salvo", "Operação realizada com sucesso");
  
          this.location.go("pais/detalhes/" + salvo.id);
  
          this.initForm();
        })
        .catch(erro => {
          this.msg.createErrorAlert("Erro", erro);
        });
    }
  }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais/detalhes//detalhes.component.ts`, src, `utf8`);
}




function gera_pais_lista_lista_component_css(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  .padding-bottom-20{
      padding-bottom: 20px;
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais/lista//lista.component.css`, src, `utf8`);
}




function gera_pais_lista_lista_component_html(project, angularPath) {
    let src = `
  <!-- Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 -->
  <!-- Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo -->
  <h2>Lista {{resposta.quantity}} </h2>
  <div class="row padding-bottom-20">
      <div class="col-sm-6">
          <input type="text" id="inPesquisa" name="pesquisa" placeholder="Pesquisa" class="form-control" [(ngModel)]="pesquisa" (keypress)="verificaEnter(\$event)"/>
      </div>
      <div class="col-sm-3" >
          <button type="button" class="btn btn-info" (click)="pesquisar()">
              <i class="fas fa-search"></i> Pesquisar </button>
      </div>
  
      <div class="col-sm-3 text-right">
          <button type="button" class="btn btn-success" (click)="novo()">
              <i class="far fa-file"></i> Novo</button>
      </div>
  </div>
  <vic-tabela [(dados)]="resposta" [colunas]="colunas" (acao)="goDetalhes(\$event)" (carregarMais)="carregarMais()"></vic-tabela>
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais/lista//lista.component.html`, src, `utf8`);
}




function gera_pais_lista_lista_component_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Component, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, Params } from '@angular/router';
  import { PaisService } from '../pais.service';
  import { BaseEntity } from "../../vic-components/comum/base-entity";
  import { VicReturn } from '../../vic-components/comum/vic-return';
  import { SuperListaComponent } from '../../vic-components/comum/super-lista';
  
  
  @Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
  })
  export class ListaComponent extends SuperListaComponent {
  
    colunas = [
      { active: true, comparisonOperator: "STARTS_WITH", field: "nome", label: "Nome",pedacos: ["nome"]},
    ];
  
    constructor(protected service: PaisService, protected router: Router, protected route: ActivatedRoute) {
      super(service,router,route);
    }
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais/lista//lista.component.ts`, src, `utf8`);
}




function gera_pais_pais_routing_module_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { CrudComponent } from './crud/crud.component';
  import { ListaComponent } from './lista/lista.component';
  import { DetalhesComponent } from './detalhes/detalhes.component';
  
  
  const routes: Routes = [
    {
      path: 'pais', component: CrudComponent,
      children: [
        { path: '', component: ListaComponent },
        { path: 'detalhes/:id', component: DetalhesComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PaisRoutingModule { }
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais//pais-routing.module.ts`, src, `utf8`);
}




function gera_pais_pais_module_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { NgModule } from '@angular/core';
  import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
  import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { VicComponentsModule } from '../vic-components/vic-components.module';
  import { PaisRoutingModule } from './pais-routing.module';
  import { CrudComponent } from './crud/crud.component';
  import { ListaComponent } from './lista/lista.component';
  import { DetalhesComponent } from './detalhes/detalhes.component';
  import { BrowserModule } from '@angular/platform-browser'
  ;
  /*IMPORTS*/
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule, OwlDateTimeModule, OwlNativeDateTimeModule,
      PaisRoutingModule,
      VicComponentsModule,
      BrowserModule,    
      ReactiveFormsModule 
    ],
    declarations: [
  /*DECLARATIONS*/
        CrudComponent, 
        ListaComponent, 
        DetalhesComponent
  ,]
  })
  export class PaisModule { }
  
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais//pais.module.ts`, src, `utf8`);
}




function gera_pais_pais_service_ts(project, angularPath) {
    let src = `
  /* Arquivo gerado utilizando VICGERADOR por anderson as 21/03/2018 10:45:24 */
  /* Para não gerar o arquivo novamente coloque na primeira linha um comentário com  VICIGNORE , pode ser essa mesmo */
  import { Injectable } from '@angular/core';
  import { Http, Headers, Response } from '@angular/http';
  import { SuperService} from '../vic-components/comum/super-service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class PaisService extends SuperService{
  
    constructor(http:Http) {
      super('pais',http);
    }
  
  }
    `;
    fs.writeFileSync(`${angularPath}/src/app/pais//pais.service.ts`, src, `utf8`);
}





function generateProject(project) {
    console.log(project.description);
    let mainDir = `../${project.description.title.toLowerCase()}2`;

    mkDir(mainDir);
    mkDir(`${mainDir}/front`);
    mkDir(`${mainDir}/front/project`);

    let angular = `${mainDir}/front/project`;
    gera_Doteditorconfig(project, angular);
    geraangularjson(project, angular);
    gerapackagejson(project, angular);
    geratsconfigjson(project, angular);
    geratslintjson(project, angular);

    mkDir(`${mainDir}/front/project/src`);
    gerabrowserslist(project, angular);
    gerakarma_conf_js(project, angular);
    gerastyles_css(project, angular);
    geratsconfig_spec_json(project, angular);
    geramain_ts(project, angular);
    geratest_ts(project, angular);
    geratslint_json(project, angular);
    geraindex_html(project, angular);
    gerapolyfills_ts(project, angular);
    geratsconfig_app_json(project, angular);
    fs.createReadStream('/home/munif/projetos/empleados/front/project/src/favicon.ico').pipe(fs.createWriteStream(angular + '/src/favicon.ico'));

    mkDir(`${mainDir}/front/project/src/environments`);
    geraenvironment_prod_ts(project, angular);
    geraenvironment_ts(project, angular);

    mkDir(`${mainDir}/front/project/src/assets`);

    mkDir(`${mainDir}/front/project/src/app`);

    geraapp_routing_module_ts(project, angular);
    geraapp_component_ts(project, angular);
    geraapp_module_ts(project, angular);

    mkDir(`${mainDir}/front/project/src/app/vic-components`);
    mkDir(`${mainDir}/front/project/src/app/vic-components/comum`);
    mkDir(`${mainDir}/front/project/src/app/vic-components/comum/naoexiste`);
    mkDir(`${mainDir}/front/project/src/app/vic-components/comum/principal`);

    gera_pietra_guard_guard_ts(project, angular);
    geraalert_message_ts(project, angular);
    geraexcluir_atributos_sistema_pipe_spec_ts(project, angular);
    geraexcluir_atributos_sistema_pipe_ts(project, angular);
    geravic_components_module_ts(project, angular);

    geraalert_message_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/vic-components/comum/`);
    gerabase_entity_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/vic-components/comum/naoexiste/`);
    geranaoexiste_component_css(project, angular);
    geranaoexiste_component_html(project, angular);
    geranaoexiste_component_spec_ts(project, angular);
    geranaoexiste_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/vic-components/comum/principal/`);
    geraprincipal_component_css(project, angular);
    geraprincipal_component_html(project, angular);
    geraprincipal_component_spec_ts(project, angular);
    geraprincipal_component_ts(project, angular);
    gerasuper_detalhes_ts(project, angular);
    gerasuper_lista_ts(project, angular);
    gerasuper_service_ts(project, angular);
    geravic_return_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/vic-components/domain/`);
    geragrupo_ts(project, angular);
    geraorganizacao_ts(project, angular);
    geratoken_ts(project, angular);
    gerausuario_ts(project, angular);
    geraexcluir_atributos_sistema_pipe_spec_ts(project, angular);
    geraexcluir_atributos_sistema_pipe_ts(project, angular);
    geravic_components_module_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/vic-components/vic-many-to-many/`);
    geravic_many_to_many_component_css(project, angular);
    geravic_many_to_many_component_html(project, angular);
    geravic_many_to_many_component_spec_ts(project, angular);
    geravic_many_to_many_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/vic-components/vic-many-to-one/`);
    geravic_many_to_one_component_css(project, angular);
    geravic_many_to_one_component_html(project, angular);
    geravic_many_to_one_component_spec_ts(project, angular);
    geravic_many_to_one_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/vic-components/vic-one-to-many/`);
    gerasuper_detalhe_om_component_ts(project, angular);
    geravic_one_to_many_component_css(project, angular);
    geravic_one_to_many_component_html(project, angular);
    geravic_one_to_many_component_spec_ts(project, angular);
    geravic_one_to_many_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/vic-components/vic-system-fields/`);
    geravic_system_fields_component_css(project, angular);
    geravic_system_fields_component_html(project, angular);
    geravic_system_fields_component_spec_ts(project, angular);
    geravic_system_fields_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/vic-components/vic-tabela/`);
    geravic_tabela_component_css(project, angular);
    geravic_tabela_component_html(project, angular);
    geravic_tabela_component_spec_ts(project, angular);
    geravic_tabela_component_ts(project, angular);


    mkDir(`${mainDir}/front/project/src/app/login`);
    geralogin_component_css(project, angular);
    geralogin_component_html(project, angular);
    geralogin_component_spec_ts(project, angular);
    geralogin_component_ts(project, angular);
    geralogin_service_ts(project, angular);


    mkDir(`${mainDir}/front/project/src/app/usuario/`);
    mkDir(`${mainDir}/front/project/src/app/usuario/crud/`);
    gera_usuario_crud_crud_component_css(project, angular);
    gera_usuario_crud_crud_component_html(project, angular);
    gera_usuario_crud_crud_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/usuario/detalhes/`);
    gera_usuario_detalhes_detalhes_component_css(project, angular);
    gera_usuario_detalhes_detalhes_component_html(project, angular);
    gera_usuario_detalhes_detalhes_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/usuario/lista/`);
    gera_usuario_lista_lista_component_css(project, angular);
    gera_usuario_lista_lista_component_html(project, angular);
    gera_usuario_lista_lista_component_ts(project, angular);
    gera_usuario_usuario_routing_module_ts(project, angular);
    gera_usuario_usuario_module_ts(project, angular);
    gera_usuario_usuario_service_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/grupo/`);
    mkDir(`${mainDir}/front/project/src/app/grupo/crud/`);
    gera_grupo_crud_crud_component_css(project, angular);
    gera_grupo_crud_crud_component_html(project, angular);
    gera_grupo_crud_crud_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/grupo/detalhes/`);
    gera_grupo_detalhes_detalhes_component_css(project, angular);
    gera_grupo_detalhes_detalhes_component_html(project, angular);
    gera_grupo_detalhes_detalhes_component_ts(project, angular);
    gera_grupo_grupo_routing_module_ts(project, angular);
    gera_grupo_grupo_module_ts(project, angular);
    gera_grupo_grupo_service_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/grupo/lista/`);
    gera_grupo_lista_lista_component_css(project, angular);
    gera_grupo_lista_lista_component_html(project, angular);
    gera_grupo_lista_lista_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/organizacao/`);
    mkDir(`${mainDir}/front/project/src/app/organizacao/crud/`);
    gera_organizacao_crud_crud_component_css(project, angular);
    gera_organizacao_crud_crud_component_html(project, angular);
    gera_organizacao_crud_crud_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/organizacao/detalhes/`);
    gera_organizacao_detalhes_detalhes_component_css(project, angular);
    gera_organizacao_detalhes_detalhes_component_html(project, angular);
    gera_organizacao_detalhes_detalhes_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/organizacao/lista/`);
    gera_organizacao_lista_lista_component_css(project, angular);
    gera_organizacao_lista_lista_component_html(project, angular);
    gera_organizacao_lista_lista_component_ts(project, angular);
    gera_organizacao_organizacao_routing_module_ts(project, angular);
    gera_organizacao_organizacao_module_ts(project, angular);
    gera_organizacao_organizacao_service_ts(project, angular);

    mkDir(`${mainDir}/front/project/src/app/pais`);
    mkDir(`${mainDir}/front/project/src/app/pais/crud/`);
    gera_pais_crud_crud_component_css(project, angular);
    gera_pais_crud_crud_component_html(project, angular);
    gera_pais_crud_crud_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/pais/detalhes/`);
    gera_pais_detalhes_detalhes_component_css(project, angular);
    gera_pais_detalhes_detalhes_component_html(project, angular);
    gera_pais_detalhes_detalhes_component_ts(project, angular);
    mkDir(`${mainDir}/front/project/src/app/pais/lista/`);
    gera_pais_lista_lista_component_css(project, angular);
    gera_pais_lista_lista_component_html(project, angular);
    gera_pais_lista_lista_component_ts(project, angular);
    gera_pais_pais_routing_module_ts(project, angular);
    gera_pais_pais_module_ts(project, angular);
    gera_pais_pais_service_ts(project, angular);



}











let jsonData = fs.readFileSync("/home/munif/projetos/empleados.project.json", "utf8");
let json = JSON.parse(jsonData);
generateProject(json);
