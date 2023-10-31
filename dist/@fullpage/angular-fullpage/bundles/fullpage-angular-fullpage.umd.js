(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fullpage/angular-fullpage', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fullpage = global.fullpage || {}, global.fullpage['angular-fullpage'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    // tslint:disable-next-line:max-line-length
    var fullpage = null;
    if (!fullpage && typeof window !== 'undefined') {
        fullpage = require('fullpage.js/dist/fullpage.extensions.min');
    }
    var FullpageDirective = /** @class */ (function () {
        function FullpageDirective(platformId, renderer) {
            this.platformId = platformId;
            this.renderer = renderer;
            this.ref = new i0.EventEmitter();
        }
        FullpageDirective.prototype.ngAfterViewInit = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                this.initFullpage();
            }
            if (common.isPlatformServer(this.platformId)) {
                // server side code
            }
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
    /** @nocollapse */ FullpageDirective.ɵfac = function FullpageDirective_Factory(t) { return new (t || FullpageDirective)(i0.ɵɵdirectiveInject(i0.PLATFORM_ID), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ FullpageDirective.ɵdir = i0.ɵɵdefineDirective({ type: FullpageDirective, selectors: [["", "fullpage", ""]], inputs: { id: "id", options: "options" }, outputs: { ref: "ref" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FullpageDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[fullpage]'
                    }]
            }], function () {
            return [{ type: Object, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }, { type: i0.Renderer2 }];
        }, { id: [{
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
    /** @nocollapse */ AnchorLinkDirective.ɵdir = i0.ɵɵdefineDirective({ type: AnchorLinkDirective, selectors: [["", "href", ""]], hostBindings: function AnchorLinkDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function AnchorLinkDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
            }
        }, inputs: { href: "href" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AnchorLinkDirective, [{
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
    /** @nocollapse */ AngularFullpageModule.ɵmod = i0.ɵɵdefineNgModule({ type: AngularFullpageModule });
    /** @nocollapse */ AngularFullpageModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AngularFullpageModule_Factory(t) { return new (t || AngularFullpageModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularFullpageModule, { declarations: [FullpageDirective, AnchorLinkDirective], exports: [FullpageDirective, AnchorLinkDirective] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AngularFullpageModule, [{
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

})));
//# sourceMappingURL=fullpage-angular-fullpage.umd.js.map
