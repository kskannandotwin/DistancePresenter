import { Component } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DistancePresenter';

  // property to store response data
  locations: any = [];

  // constructor to inject location service
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    // get location response from API
    this.locationService.getLocation().subscribe((response) => {
      // assign response into 'locations' property
      this.locations = response;
      console.log(this.locations);
    },
      (error) => {
        // show error details in browser console
        console.log(error);
      });
  }
}
