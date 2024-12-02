import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ClassificationComponent } from './classification/classification.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ConectionComponent } from './conection/conection.component';
import { InscrieComponent } from './inscrie/inscrie.component';
import { DetailComponent } from './detail/detail.component';
import { VidioComponent } from './vidio/vidio.component';

export const routes: Routes = [
  { path: 'acc', component: AcceuilComponent },
  { path: 'Classification', component: ClassificationComponent },
  { path: 'ajouter', component: AjouterComponent },
  { path: 'connecter', component: ConectionComponent },
  { path: 'inscrire', component: InscrieComponent },
  { path: 'detail/:index', component: DetailComponent },
  { path: '', component: VidioComponent },
];
