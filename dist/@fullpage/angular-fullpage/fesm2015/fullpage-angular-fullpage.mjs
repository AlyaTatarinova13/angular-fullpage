import * as i0 from '@angular/core';
import { EventEmitter, Directive, Input, Output, HostListener, NgModule } from '@angular/core';

// tslint:disable-next-line:max-line-length
let fullpage = null;
if (!fullpage && typeof window !== 'undefined') {
    fullpage = require('fullpage.js/dist/fullpage.extensions.min');
}
class FullpageDirective {
    constructor(renderer) {
        this.renderer = renderer;
        this.ref = new EventEmitter();
    }
    ngAfterViewInit() {
    }
    initFullpage() {
        this.fullpage_api = new fullpage('#' + this.id, this.options);
        this.addBuildFunction();
        this.ref.emit(this.fullpage_api);
    }
    addBuildFunction() {
        this.fullpage_api.build = () => {
            const activeSection = this.fullpage_api.getActiveSection();
            const activeSlide = this.fullpage_api.getActiveSlide();
            this.destroyFullpage();
            if (activeSection) {
                this.renderer.addClass(activeSection.item, 'active');
            }
            if (activeSlide) {
                this.renderer.addClass(activeSlide.item, 'active');
            }
            this.initFullpage();
        };
    }
    destroyFullpage() {
        if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
            this.fullpage_api.destroy('all');
        }
    }
    ngOnDestroy() {
        this.destroyFullpage();
    }
}
/** @nocollapse */ FullpageDirective.ɵfac = function FullpageDirective_Factory(t) { return new (t || FullpageDirective)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ FullpageDirective.ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: FullpageDirective, selectors: [["", "fullpage", ""]], inputs: { id: "id", options: "options" }, outputs: { ref: "ref" } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullpageDirective, [{
            type: Directive,
            args: [{
                    selector: '[fullpage]'
                }]
        }], function () { return [{ type: i0.Renderer2 }]; }, { id: [{
                type: Input
            }], options: [{
                type: Input
            }], ref: [{
                type: Output
            }] });
})();
class AnchorLinkDirective {
    constructor() {
        this.href = '';
    }
    onClick(event) {
        if (this.href.length > 0 && this.href[0] === '#') {
            event.preventDefault();
            window.location.hash = this.href;
        }
    }
}
/** @nocollapse */ AnchorLinkDirective.ɵfac = function AnchorLinkDirective_Factory(t) { return new (t || AnchorLinkDirective)(); };
/** @nocollapse */ AnchorLinkDirective.ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: AnchorLinkDirective, selectors: [["", "href", ""]], hostBindings: function AnchorLinkDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵlistener("click", function AnchorLinkDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        }
    }, inputs: { href: "href" } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnchorLinkDirective, [{
            type: Directive,
            args: [{
                    selector: '[href]'
                }]
        }], null, { href: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] });
})();

class AngularFullpageModule {
}
/** @nocollapse */ AngularFullpageModule.ɵfac = function AngularFullpageModule_Factory(t) { return new (t || AngularFullpageModule)(); };
/** @nocollapse */ AngularFullpageModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: AngularFullpageModule });
/** @nocollapse */ AngularFullpageModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({});
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularFullpageModule, [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [FullpageDirective, AnchorLinkDirective],
                    exports: [FullpageDirective, AnchorLinkDirective]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularFullpageModule, { declarations: [FullpageDirective, AnchorLinkDirective], exports: [FullpageDirective, AnchorLinkDirective] }); })();

/*
 * Public API Surface of angular-fullpage
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AnchorLinkDirective, AngularFullpageModule, FullpageDirective };
//# sourceMappingURL=fullpage-angular-fullpage.mjs.map
