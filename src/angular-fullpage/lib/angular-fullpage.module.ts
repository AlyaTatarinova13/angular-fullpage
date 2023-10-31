import { NgModule } from '@angular/core';
import { AnchorLinkDirective, FullpageDirective } from "./fullpage.directive";


@NgModule({
  imports: [],
  declarations: [FullpageDirective, AnchorLinkDirective],
  exports: [FullpageDirective, AnchorLinkDirective]
})
export class AngularFullpageModule { }
