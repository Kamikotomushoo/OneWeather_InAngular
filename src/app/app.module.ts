import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputFormComponent } from './components/main.page/input-form/input-form.component';
import { MainResponseComponent } from './components/main.page/main-response/main-response.component';
import { WeatherApiService } from './services/weather-api.service';
import { WelcomePageComponent } from './components/welcome.page/welcome-page/welcome-page.component';
import { MainPageComponent } from './components/main.page/main-page.component';
import { NotFoundComponent } from './components/not-found.page/not-found/not-found.component';
import { LoginUpComponent } from './components/login-in.page/login-up/login-up.component';


const appRoutes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'loginin', component: LoginUpComponent},
  {path: 'oneweather', component: MainPageComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputFormComponent,
    MainResponseComponent,
    WelcomePageComponent,
    MainPageComponent,
    NotFoundComponent,
    LoginUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
