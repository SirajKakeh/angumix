import { platformBrowser }    from '@angular/platform-browser';
import {AppModuleNgFactory} from "../aot/public/app/app.module.ngfactory";

import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

import './app/rxjsOperations';

import { AppModule } from './app/app.module';
import { NameParser } from "./app/admin/nameParser.service";
import { UnreviewedTalkComponent } from "./app/home/unreviewedTalk.component";
import { ProfileComponent } from "./app/profile/profile.component";
import { Sessions } from "./app/sessions/sessions.service";
import { DetailPanelComponent } from "./app/common/detailPanel.component";

declare var angular: angular.IAngularStatic;


import { enableProdMode } from '@angular/core';

declare var process;
if (process.env.ENV === 'production') {
    console.log("PROD MODE");
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then(platformRef => {
  // downgrades
  angular.module('app')
    .factory('nameParser', downgradeInjectable(NameParser))
    .factory('sessions', downgradeInjectable(Sessions))
    .directive('unreviewedTalk', downgradeComponent({
      component: UnreviewedTalkComponent
    }))
    .directive('profile', downgradeComponent({
      component: ProfileComponent
    }))
    .directive('detailPanel', downgradeComponent({
      component: DetailPanelComponent,
    }))
    
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
})
