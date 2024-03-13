import { Routes } from '@angular/router';
import { MatttestComponentComponent } from './shared/components/matttest-component/matttest-component.component';

export const routes: Routes = [
  {
    path: 'first',
    component: MatttestComponentComponent,
    data: { name: 'Matt' },
  },
];
