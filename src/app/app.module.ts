import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { WinComponent } from './win/win.component';
import { CoinPrizeComponent } from './coin-prize/coin-prize.component';
import { TestComponent } from './test/test.component';
import { IndexComponent } from './index/index.component';
import { LuckyComponent } from './lucky/lucky.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    WinComponent,
    CoinPrizeComponent,
    TestComponent,
    LuckyComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
