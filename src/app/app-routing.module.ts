import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'home', component: MainComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'skills', component: SkillsComponent },
	{ path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
