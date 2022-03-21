import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { RemovespacesPipe } from './pipes/Converter.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListService } from './product-list-service';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductMockDetailsComponent } from './product-mock-details/product-mock-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    RemovespacesPipe,
    ProductDetailsComponent,
    HomeComponent,
    WelcomeComponent,
    NavigationComponent,
    SettingsComponent,
    ProductMockDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'Home',component:HomeComponent},
      {path:'Welcome',component:WelcomeComponent},
      {path:'Products',component:ProductListComponent},
        {path:'Products/Add',component:ProductAddComponent},
        {path:'Products/:Id',component:ProductMockDetailsComponent},
      {path:'Settings',component:SettingsComponent}
    ])
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
