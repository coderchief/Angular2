System.register(['angular2/platform/browser', './lesson07.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, lesson07_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (lesson07_component_1_1) {
                lesson07_component_1 = lesson07_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(lesson07_component_1.Lesson07);
        }
    }
});
//# sourceMappingURL=main.js.map