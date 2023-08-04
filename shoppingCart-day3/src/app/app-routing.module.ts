import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';
import { SepetComponent } from './sepet/sepet.component';

const routes: Routes = [
  { path: 'ana-sayfa', component: AnaSayfaComponent },
  { path: 'sepet', component: SepetComponent },
  { path: '**', redirectTo: 'ana-sayfa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
