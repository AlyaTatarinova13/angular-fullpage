// tslint:disable-next-line:max-line-length
import { Directive, Input, Output, EventEmitter, Renderer2, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import * as i0 from "@angular/core";
let fullpage = null;
if (!fullpage && typeof window !== 'undefined') {
    fullpage = require('fullpage.js/dist/fullpage.extensions.min');
}
export class FullpageDirective {
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
/** @nocollapse */ FullpageDirective.ɵfac = function FullpageDirective_Factory(t) { return new (t || FullpageDirective)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ FullpageDirective.ɵdir = i0.ɵɵdefineDirective({ type: FullpageDirective, selectors: [["", "fullpage", ""]], inputs: { id: "id", options: "options" }, outputs: { ref: "ref" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FullpageDirective, [{
        type: Directive,
        args: [{
                selector: '[fullpage]'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.Renderer2 }]; }, { id: [{
            type: Input
        }], options: [{
            type: Input
        }], ref: [{
            type: Output
        }] }); })();
export class AnchorLinkDirective {
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
/** @nocollapse */ AnchorLinkDirective.ɵdir = i0.ɵɵdefineDirective({ type: AnchorLinkDirective, selectors: [["", "href", ""]], hostBindings: function AnchorLinkDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function AnchorLinkDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { href: "href" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnchorLinkDirective, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IkQ6L2FwcHMvYW5ndWxhci1mdWxscGFnZS9zcmMvYW5ndWxhci1mdWxscGFnZS8iLCJzb3VyY2VzIjpbImxpYi9mdWxscGFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHdEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0lBQzlDLFFBQVEsR0FBRyxPQUFPLENBQUMsMENBQTBDLENBQUMsQ0FBQztDQUNoRTtBQUtELE1BQU0sT0FBTyxpQkFBaUI7SUFNNUIsWUFDK0IsVUFBa0IsRUFDdkMsUUFBbUI7UUFERSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFMbkIsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNL0IsQ0FBQztJQUVMLGVBQWU7UUFDYixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyQyxtQkFBbUI7U0FDcEI7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQzdCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMzRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXZELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUV2QixJQUFJLGFBQWEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN0RDtZQUVELElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDcEQ7WUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDaEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOztxR0FyRFUsaUJBQWlCLHVCQU9sQixXQUFXO3lFQVBWLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBSDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2QjtzQ0FRNEMsTUFBTTtzQkFBOUMsTUFBTTt1QkFBQyxXQUFXO2dEQU5aLEVBQUU7a0JBQVYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNJLEdBQUc7a0JBQVosTUFBTTs7QUF3RFQsTUFBTSxPQUFPLG1CQUFtQjtJQUhoQztRQUlXLFNBQUksR0FBVyxFQUFFLENBQUM7S0FRNUI7SUFOb0MsT0FBTyxDQUFDLEtBQUs7UUFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDaEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEM7SUFDSCxDQUFDOzt5R0FSVSxtQkFBbUI7MkVBQW5CLG1CQUFtQjtzR0FBbkIsbUJBQWU7O2tEQUFmLG1CQUFtQjtjQUgvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7YUFDbkI7Z0JBRVUsSUFBSTtrQkFBWixLQUFLO1lBRTZCLE9BQU87a0JBQXpDLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5kZWNsYXJlIHZhciByZXF1aXJlO1xyXG5sZXQgZnVsbHBhZ2UgPSBudWxsO1xyXG5pZiAoIWZ1bGxwYWdlICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgZnVsbHBhZ2UgPSByZXF1aXJlKCdmdWxscGFnZS5qcy9kaXN0L2Z1bGxwYWdlLmV4dGVuc2lvbnMubWluJyk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Z1bGxwYWdlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZ1bGxwYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBpZDogYW55O1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcclxuICBAT3V0cHV0KCkgcmVmID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGZ1bGxwYWdlX2FwaTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgdGhpcy5pbml0RnVsbHBhZ2UoKTtcclxuICAgIH1cclxuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgLy8gc2VydmVyIHNpZGUgY29kZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdEZ1bGxwYWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mdWxscGFnZV9hcGkgPSBuZXcgZnVsbHBhZ2UoJyMnICsgdGhpcy5pZCwgdGhpcy5vcHRpb25zKTtcclxuICAgIHRoaXMuYWRkQnVpbGRGdW5jdGlvbigpO1xyXG4gICAgdGhpcy5yZWYuZW1pdCh0aGlzLmZ1bGxwYWdlX2FwaSk7XHJcbiAgfVxyXG5cclxuICBhZGRCdWlsZEZ1bmN0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mdWxscGFnZV9hcGkuYnVpbGQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSB0aGlzLmZ1bGxwYWdlX2FwaS5nZXRBY3RpdmVTZWN0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gdGhpcy5mdWxscGFnZV9hcGkuZ2V0QWN0aXZlU2xpZGUoKTtcclxuXHJcbiAgICAgIHRoaXMuZGVzdHJveUZ1bGxwYWdlKCk7XHJcblxyXG4gICAgICBpZiAoYWN0aXZlU2VjdGlvbikge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYWN0aXZlU2VjdGlvbi5pdGVtLCAnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhY3RpdmVTbGlkZSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYWN0aXZlU2xpZGUuaXRlbSwgJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmluaXRGdWxscGFnZSgpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3lGdWxscGFnZSgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5mdWxscGFnZV9hcGkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmZ1bGxwYWdlX2FwaS5kZXN0cm95KCdhbGwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95RnVsbHBhZ2UoKTtcclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2hyZWZdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5jaG9yTGlua0RpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudCkge1xyXG4gICAgaWYgKHRoaXMuaHJlZi5sZW5ndGggPiAwICYmIHRoaXMuaHJlZlswXSA9PT0gJyMnKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGhpcy5ocmVmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=