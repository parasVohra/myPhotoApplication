import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { PhotoDeatilsComponent } from './photo-deatils/photo-deatils.component';
import { RecentAlbumComponent } from './recent-album/recent-album.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    MyAlbumsComponent,
    CreateAlbumComponent,
    AlbumDetailsComponent,
    UploadPictureComponent,
    PhotoDeatilsComponent,
    RecentAlbumComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
