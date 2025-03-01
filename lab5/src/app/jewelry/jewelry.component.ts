import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from '../common-ui/profile-card/profile-card.component';
import { inject } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.interface';

@Component({
  selector: 'app-jewelry',
  imports: [RouterOutlet, ProfileCardComponent, RouterModule],
  templateUrl: './jewelry.component.html',
  styleUrl: './jewelry.component.scss'
})
export class JewelryComponent implements OnInit{
  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  ngOnInit(): void {
    this.profileService.getTestAccounts3().subscribe(val => {
      this.profiles = val;
    }); 
  }
  removeProfile(profileId: number) {
    this.profiles = this.profiles.filter(profile => profile.id !== profileId);
    localStorage.setItem('removedProfiles', JSON.stringify(this.profiles)); // Сохраняем
  }
}
