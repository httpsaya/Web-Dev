import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';


@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
  @Output() removeProfile = new EventEmitter<number>(); // Добавляем Output

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
