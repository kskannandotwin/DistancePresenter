import { Component } from '@angular/core';
import { faLocationDot, faArrowRightLong, faCarSide } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DistancePresenter';
  faLocationDot = faLocationDot;
  faArrowRightLong = faArrowRightLong;
  faCarSide = faCarSide;
}
