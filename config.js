System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "js": {
      "defaultExtenstion": "ts"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.0",
    "angular-animate": "github:angular/bower-angular-animate@1.5.0",
    "angular-resource": "github:angular/bower-angular-resource@1.5.0",
    "angular-route": "github:angular/bower-angular-route@1.5.0",
    "jquery": "npm:jquery@2.2.1",
    "text": "github:systemjs/plugin-text@0.0.7",
    "typescript": "npm:typescript@1.8.7",
    "github:angular/bower-angular-animate@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-resource@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-route@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    }
  }
});
