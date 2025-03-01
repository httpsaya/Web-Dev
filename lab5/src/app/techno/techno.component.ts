import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.interface';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from '../common-ui/profile-card/profile-card.component';
import { inject } from '@angular/core';


@Component({
  selector: 'app-techno',
  imports: [RouterOutlet, ProfileCardComponent, RouterModule],
  templateUrl: './techno.component.html',
  styleUrl: './techno.component.scss'
})
export class TechnoComponent implements OnInit{
  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
  }
  ngOnInit(): void {
    this.profileService.getTestAccounts1().subscribe(val => {
      this.profiles = val;
    });  
  }
  removeProfile(profileId: number) {
    this.profiles = this.profiles.filter(profile => profile.id !== profileId);
    localStorage.setItem('removedProfiles', JSON.stringify(this.profiles)); // Сохраняем
  }
}
