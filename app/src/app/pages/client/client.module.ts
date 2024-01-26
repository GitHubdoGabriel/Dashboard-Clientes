import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { ClientDetailsComponent } from './client-details/client-details.component';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  imports:[CommonModule],
  declarations: [ClientComponent, ClientDetailsComponent],
  providers: [ClientService]
})
export class ClientModule {}
