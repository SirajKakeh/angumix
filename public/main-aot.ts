import { platformBrowser } from "@angular/platform-browser";
import { enableProdMode } from '@angular/core';
import { setUpLocationSync } from "@angular/router/upgrade";
import { downgradeInjectable, downgradeComponent, UpgradeModule } from '@angular/upgrade/static';
//@ts-ignore
import { AppModuleNgFactory } from "../aot/public/Angular/app.module.ngfactory";

import { AppModule } from './Angular/app.module';
import { AboutComponent } from './Angular/about/about.component';
import { NgHeader } from './Angular/header/header.component';
import { Home } from './Angular/home/home.component';

declare var angular: angular.IAngularStatic;

declare var process;
if (process.env.ENV === 'production') {
  console.log("PROD MODE");
  enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then(platformRef => {
  // downgrades
  angular.module('parentModule')
    .directive('about', downgradeComponent({
      component: AboutComponent
    }))
    .directive('ngHeader', downgradeComponent({
      component: NgHeader
    }))
    .directive('home', downgradeComponent({
      component: Home
    }))

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['parentModule']);
  console.log('hybrid app bootstrapped');
})
