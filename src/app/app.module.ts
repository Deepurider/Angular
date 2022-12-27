import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentProjectionComponent } from './features/component-projection/component-projection.component';
import { Route, Router } from '@angular/router';
import { MatMaterialModule } from './shared/module/mat-material.module';


@NgModule({
  declarations: [
    AppComponent,
    ComponentProjectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// // for custom login for routes
// export function initializeAppCustomLogin(router: Router, http: HttpClient): () => Promise<void> {
//   return () => new Promise((resolve) => {
//     console.log('*************** Loading Dynamic Routes ***************');
//     http.get('../assets/data/menu.json').subscribe((res: any) => {
//       const routes: Route[] = [];
//       res.forEach((element: any) => {
//         routes.push({ path: element.url.toString(), component: ComponentProjectionComponent });
//       });
//       router.resetConfig(routes);
//       setTimeout(() => {
//         console.log("********* All Routes Iniliaztion completed *********");
//         resolve();
//       }, 3000);
//     });
//   });
// }
