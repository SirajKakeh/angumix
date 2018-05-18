import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

// import './app/rxjsOperations';

import { AppModule } from './Angular/app.module';
import { AboutComponent } from './Angular/about/about.component';
import { NgHeader } from './Angular/header/header.component';

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
  

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['parentModule']);
  console.log('hybrid app bootstrapped');
})
