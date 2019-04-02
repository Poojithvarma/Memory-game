import { NgModule } from '@angular/core';
// Auth service
import { AuthService } from './Auth_1/shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
//import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule1 } from './Auth_1/shared/routing/app-routing.module';
import { CardComponent } from './card/card.component';
import { SortPlayersPipe } from './pipes/sort-players.pipe';
import { PlayerDialogComponent } from './dialogs/player-dialog/player-dialog.component';
import { CountPipe } from './pipes/count.pipe';
import { AngularMaterialModule } from './angular-material.module';
import { importType } from '@angular/compiler/src/output/output_ast';
import { from } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SortPlayersPipe,
    CountPipe,
    PlayerDialogComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    GameComponent,
    BoardComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule1,
    AngularFireModule.initializeApp(environment.firebase ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    GameModule
  ],
  entryComponents: [
    PlayerDialogComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
