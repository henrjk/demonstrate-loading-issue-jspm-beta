SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  globalEvaluationScope: false,
  transpiler: "plugin-babel",

  map: {
    "angular": "github:angular/bower-angular@1.4.8",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.2"
  },

  packages: {
    "angular_jspm17beta_issue": {
      "format": "esm"
    }
  }
});