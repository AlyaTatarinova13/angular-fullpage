// tslint:disable-next-line:max-line-length
import { Directive, Input, AfterViewInit, OnDestroy, Output, EventEmitter, Renderer2, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

declare var require;
let fullpage = null;
if (!fullpage && typeof window !== 'undefined') {
  fullpage = require('fullpage.js/dist/fullpage.extensions.min');
}

@Directive({
  selector: '[fullpage]'
})
export class FullpageDirective implements AfterViewInit, OnDestroy {
  @Input() id: any;
  @Input() options: any;
  @Output() ref = new EventEmitter();
  fullpage_api: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initFullpage();
    }
    if (isPlatformServer(this.platformId)) {
      // server side code
    }
  }

  initFullpage(): void {
    this.fullpage_api = new fullpage('#' + this.id, this.options);
    this.addBuildFunction();
    this.ref.emit(this.fullpage_api);
  }

  addBuildFunction(): void {
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

  destroyFullpage(): void {
    if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
      this.fullpage_api.destroy('all');
    }
  }

  ngOnDestroy(): void {
    this.destroyFullpage();
  }
}

@Directive({
  selector: '[href]'
})
export class AnchorLinkDirective {
  @Input() href: string = '';

  @HostListener('click', ['$event']) onClick(event) {
    if (this.href.length > 0 && this.href[0] === '#') {
      event.preventDefault();
      window.location.hash = this.href;
    }
  }
}
