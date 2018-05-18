import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { downgradeInjectable, downgradeComponent, UpgradeModule} from '@angular/upgrade/static';

import { AppModule } from './Angular/app.module';
import { AboutComponent } from './Angular/about/about.component';
import { NgHeader } from './Angular/header/header.component';
import { Home } from './Angular/home/home.component';
import { setUpLocationSync } from "@angular/router/upgrade";

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
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
  setUpLocationSync(upgrade);
  console.log('hybrid app bootstrapped');
})
