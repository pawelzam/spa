import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { HeaderComponent } from './header/header.component';
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [			
    AppComponent,
      SectionComponent,
      HeaderComponent,
      BlockComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
