import { NgModule, forwardRef, OpaqueToken }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import { RouterModule, UrlHandlingStrategy } from "@angular/router";

import { AppComponent } from "./app.component";
import { AboutComponent } from './about/about.component';
import { NgHeader } from './header/header.component';

export function getLocation(i: any){ return i.get('$location') }
export function getCurrentIdentity(i: any){ return i.get('currentIdentity') }
export function getAuth(i: any){ return i.get('auth') }

// class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
//   shouldProcessUrl(url) { console.log('match', url.toString().startsWith("/admin/results"), url.toString()); return url.toString().startsWith("/admin/results"); }
//   extract(url) { return url; }
//   merge(url, whole) { return url; }
// }

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    RouterModule.forRoot([
    //   { path: 'admin/results', component: ResultsComponent, 
    //     resolve: { sessions: AllSessionsResolver},
    //     canActivate: [AdminGuard] },
    // ], {useHash: true})
    ])
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    NgHeader
  ],
  providers: [
    { provide: '$location',
      useFactory: getLocation,
      deps: ['$injector'] },
    { provide: 'currentIdentity',
      useFactory: getCurrentIdentity,
      deps: ['$injector'] },
    { provide: 'auth',
      useFactory: getAuth,
      deps: ['$injector'] },
    // { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
    { provide: '$scope', useExisting: '$rootScope' },
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    AppComponent,
    AboutComponent,
    NgHeader
  ]
})
export class AppModule { }
