import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
