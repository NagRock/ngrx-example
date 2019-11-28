import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {EntityService} from './entity.service';
import {appReducers} from './store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {AddWithDelayEffects} from "./effects";

@NgModule({
    imports: [BrowserModule, FormsModule,
        StoreModule.forRoot(appReducers),
        StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot([AddWithDelayEffects]),
    ],
    declarations: [AppComponent, HelloComponent],
    bootstrap: [AppComponent],
    providers: [EntityService]
})
export class AppModule {
}
