import { RouterModule, Routes } from '@angular/router';

// Import canActivate guard services
import { AuthGuard } from "../../shared/guard/auth.guard";
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";
// Required components for which route services to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
// import { AppComponent } from 'src/app/app.component';
import { GameComponent } from 'src/app/game/game.component';
import { BoardComponent } from 'src/app/board/board.component';
import { PlayerDialogComponent } from 'src/app/dialogs/player-dialog/player-dialog.component';


// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'game', component: GameComponent, canActivate: [AuthGuard] },
  { path: 'board', component: BoardComponent, canActivate: [AuthGuard] },
  { path: 'dialogs/player-dialog', component: PlayerDialogComponent , canActivate: [AuthGuard] },
  
  
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})

export class AppRoutingModule1 { }
