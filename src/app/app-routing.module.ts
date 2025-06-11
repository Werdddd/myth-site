import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MythsComponent } from './pages/myths/myths.component';
import { LessonPlansComponent } from './pages/lesson-plans/lesson-plans.component';
import { VideosComponent } from './pages/videos/videos.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { ActivitiesComponent } from './pages/activities/activities.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'myths', component: MythsComponent },
  { path: 'lessons', component: LessonPlansComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: '**', redirectTo: '' } // Redirect any unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
