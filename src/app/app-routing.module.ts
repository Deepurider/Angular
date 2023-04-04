import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const PageFoundData = {
  pageTitle: 'Not Found',
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/features/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'prime-ng',
    loadChildren: () =>
      import('../app/features/prime-ng/prime-ng.module').then(
        (m) => m.PrimeNgModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'subject',
    loadChildren: () =>
      import('../app/features/subject/subject.module').then(
        (m) => m.SubjectModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'element',
    loadChildren: () =>
      import('../app/features/angular-element/angular-element.module').then(
        (m) => m.AngularElementModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: PageFoundData,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
