(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fullpage/angular-fullpage', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.fullpage = global.fullpage || {}, global.fullpage["angular-fullpage"] = {}), global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    // tslint:disable-next-line:max-line-length
    var fullpage = null;
    if (!fullpage && typeof window !== 'undefined') {
        fullpage = require('fullpage.js/dist/fullpage.extensions.min');
    }
    var FullpageDirective = /** @class */ (function () {
        function FullpageDirective(renderer) {
            this.renderer = renderer;
            this.ref = new i0.EventEmitter();
        }
        FullpageDirective.prototype.ngAfterViewInit = function () {
        };
        FullpageDirective.prototype.initFullpage = function () {
            this.fullpage_api = new fullpage('#' + this.id, this.options);
            this.addBuildFunction();
            this.ref.emit(this.fullpage_api);
        };
        FullpageDirective.prototype.addBuildFunction = function () {
            var _this = this;
            this.fullpage_api.build = function () {
                var activeSection = _this.fullpage_api.getActiveSection();
                var activeSlide = _this.fullpage_api.getActiveSlide();
                _this.destroyFullpage();
                if (activeSection) {
                    _this.renderer.addClass(activeSection.item, 'active');
                }
                if (activeSlide) {
                    _this.renderer.addClass(activeSlide.item, 'active');
                }
                _this.initFullpage();
            };
        };
        FullpageDirective.prototype.destroyFullpage = function () {
            if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
                this.fullpage_api.destroy('all');
            }
        };
        FullpageDirective.prototype.ngOnDestroy = function () {
            this.destroyFullpage();
        };
        return FullpageDirective;
    }());
    /** @nocollapse */ FullpageDirective.ɵfac = function FullpageDirective_Factory(t) { return new (t || FullpageDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    /** @nocollapse */ FullpageDirective.ɵdir = i0__namespace.ɵɵdefineDirective({ type: FullpageDirective, selectors: [["", "fullpage", ""]], inputs: { id: "id", options: "options" }, outputs: { ref: "ref" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FullpageDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[fullpage]'
                    }]
            }], function () { return [{ type: i0__namespace.Renderer2 }]; }, { id: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], ref: [{
                    type: i0.Output
                }] });
    })();
    var AnchorLinkDirective = /** @class */ (function () {
        function AnchorLinkDirective() {
            this.href = '';
        }
        AnchorLinkDirective.prototype.onClick = function (event) {
            if (this.href.length > 0 && this.href[0] === '#') {
                event.preventDefault();
                window.location.hash = this.href;
            }
        };
        return AnchorLinkDirective;
    }());
    /** @nocollapse */ AnchorLinkDirective.ɵfac = function AnchorLinkDirective_Factory(t) { return new (t || AnchorLinkDirective)(); };
    /** @nocollapse */ AnchorLinkDirective.ɵdir = i0__namespace.ɵɵdefineDirective({ type: AnchorLinkDirective, selectors: [["", "href", ""]], hostBindings: function AnchorLinkDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("click", function AnchorLinkDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
            }
        }, inputs: { href: "href" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AnchorLinkDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[href]'
                    }]
            }], null, { href: [{
                    type: i0.Input
                }], onClick: [{
                    type: i0.HostListener,
                    args: ['click', ['$event']]
                }] });
    })();

    var AngularFullpageModule = /** @class */ (function () {
        function AngularFullpageModule() {
        }
        return AngularFullpageModule;
    }());
    /** @nocollapse */ AngularFullpageModule.ɵfac = function AngularFullpageModule_Factory(t) { return new (t || AngularFullpageModule)(); };
    /** @nocollapse */ AngularFullpageModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: AngularFullpageModule });
    /** @nocollapse */ AngularFullpageModule.ɵinj = i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(AngularFullpageModule, { declarations: [FullpageDirective, AnchorLinkDirective], exports: [FullpageDirective, AnchorLinkDirective] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AngularFullpageModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [FullpageDirective, AnchorLinkDirective],
                        exports: [FullpageDirective, AnchorLinkDirective]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of angular-fullpage
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AnchorLinkDirective = AnchorLinkDirective;
    exports.AngularFullpageModule = AngularFullpageModule;
    exports.FullpageDirective = FullpageDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=fullpage-angular-fullpage.umd.js.map
