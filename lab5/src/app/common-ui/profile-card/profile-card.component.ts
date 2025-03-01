import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from '../../profile.interface';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent implements OnInit{
  @Input() profile!: Profile;
  @Output() removeProfile = new EventEmitter<number>(); // Сообщаем ID профиля при удалении


  isLiked: boolean = false;

  ngOnInit() {
    this.loadLikeStatus();
  }
  deleteProfile() {
    this.removeProfile.emit(this.profile.id); // Передаём ID вверх
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.saveLikeStatus();
  }

  private loadLikeStatus() {
    const likes = JSON.parse(localStorage.getItem('likes') || '{}');
    this.isLiked = !!likes[this.profile.id];
  }

  private saveLikeStatus() {
    const likes = JSON.parse(localStorage.getItem('likes') || '{}');
    if (this.isLiked) {
      likes[this.profile.id] = true;
    } else {
      delete likes[this.profile.id];
    }
    localStorage.setItem('likes', JSON.stringify(likes));
  }

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
