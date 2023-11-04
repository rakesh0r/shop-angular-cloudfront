import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {
    localStorage.setItem('authorization_token', 'cmFrZXNoMHI6VEVTVF9QQVNTV09SRA==');
  }
}
