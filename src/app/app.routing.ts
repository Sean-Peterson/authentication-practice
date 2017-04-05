
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewDreamComponent } from './new-dream/new-dream.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { EmailComponent } from './email/email.component';
import { AuthGuard } from './auth.service';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'new-dream',
    component: NewDreamComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-email',
    component: EmailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
