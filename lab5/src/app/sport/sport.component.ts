import { Component, OnInit, inject } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.interface';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from '../common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent, RouterModule],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.scss'
})
export class SportComponent implements OnInit {

  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  ngOnInit(): void {
    this.profileService.getTestAccounts2().subscribe(val => {
      this.profiles = val;
    }); 
  }
  removeProfile(profileId: number) {
    this.profiles = this.profiles.filter(profile => profile.id !== profileId);
    localStorage.setItem('removedProfiles', JSON.stringify(this.profiles)); // Сохраняем
  }
}
