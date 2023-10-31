import { EventEmitter, ɵɵdirectiveInject, PLATFORM_ID, Renderer2, ɵɵdefineDirective, ɵsetClassMetadata, Directive, Inject, Input, Output, ɵɵlistener, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

// tslint:disable-next-line:max-line-length
let fullpage = null;
if (!fullpage && typeof window !== 'undefined') {
    fullpage = require('fullpage.js/dist/fullpage.extensions.min');
}
class FullpageDirective {
    constructor(platformId, renderer) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.ref = new EventEmitter();
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.initFullpage();
        }
        if (isPlatformServer(this.platformId)) {
            // server side code
        }
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
/** @nocollapse */ FullpageDirective.ɵfac = function FullpageDirective_Factory(t) { return new (t || FullpageDirective)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ FullpageDirective.ɵdir = ɵɵdefineDirective({ type: FullpageDirective, selectors: [["", "fullpage", ""]], inputs: { id: "id", options: "options" }, outputs: { ref: "ref" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FullpageDirective, [{
        type: Directive,
        args: [{
                selector: '[fullpage]'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: Renderer2 }]; }, { id: [{
            type: Input
        }], options: [{
            type: Input
        }], ref: [{
            type: Output
        }] }); })();
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
/** @nocollapse */ AnchorLinkDirective.ɵdir = ɵɵdefineDirective({ type: AnchorLinkDirective, selectors: [["", "href", ""]], hostBindings: function AnchorLinkDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function AnchorLinkDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { href: "href" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AnchorLinkDirective, [{
        type: Directive,
        args: [{
                selector: '[href]'
            }]
    }], null, { href: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

class AngularFullpageModule {
}
/** @nocollapse */ AngularFullpageModule.ɵmod = ɵɵdefineNgModule({ type: AngularFullpageModule });
/** @nocollapse */ AngularFullpageModule.ɵinj = ɵɵdefineInjector({ factory: function AngularFullpageModule_Factory(t) { return new (t || AngularFullpageModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AngularFullpageModule, { declarations: [FullpageDirective, AnchorLinkDirective], exports: [FullpageDirective, AnchorLinkDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AngularFullpageModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [FullpageDirective, AnchorLinkDirective],
                exports: [FullpageDirective, AnchorLinkDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-fullpage
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AnchorLinkDirective, AngularFullpageModule, FullpageDirective };
//# sourceMappingURL=fullpage-angular-fullpage.js.map
