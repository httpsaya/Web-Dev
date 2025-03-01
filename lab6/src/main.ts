import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; // ✅ Добавляем маршрутизацию
import { routes } from './app/app.routes'; // ✅ Убедись, что пути импортированы
import { provideHttpClient } from '@angular/common/http'; // ✅ HttpClient тоже нужен

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // ✅ Добавляем маршруты
    provideHttpClient() // ✅ Добавляем HttpClient
  ]
}).catch(err => console.error(err));
