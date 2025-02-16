import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Импортируем
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { ProfileService } from './data/services/profile.service';
import { Profile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent{ 
  title = 'lab4';
  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe(val => {
      console.log('📌 Данные из сервиса:', val);
      this.profiles = val;
    });
  }
}
