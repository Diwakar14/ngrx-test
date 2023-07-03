import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShowMorePipe } from './pipes/show-more.pipe';
import { SpaceCardComponent } from './components/space-card/space-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FruitCardComponent } from './components/fruit-card/fruit-card.component';
import { ProductComponent } from './components/product/product.component';
import { productReducer } from './state/product.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartComponent } from './route/cart/cart.component';
import { HomeComponent } from './route/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './state/product.effect';
import { cartReducer } from './state/cart.reducer';
import { FloatingCartComponent } from './components/floating-cart/floating-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMorePipe,
    SpaceCardComponent,
    NavbarComponent,
    SearchBoxComponent,
    FruitCardComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    FloatingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer, cart: cartReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    EffectsModule.forRoot(ProductEffect),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
