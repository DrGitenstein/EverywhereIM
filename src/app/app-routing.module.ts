import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { SettingsComponent } from './settings/settings.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
{path: 'userprofile', component: UserprofileComponent},
{path: 'userlist', component: UserlistComponent},
{path: 'edit', component: EditComponent},
{path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents  = [
  UserprofileComponent,
  UserlistComponent,
  EditComponent,
  SettingsComponent
]
