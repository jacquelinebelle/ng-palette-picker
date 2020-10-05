import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from '../models/color';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
import { sampleSize } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  // this json file is in the assets folder, so it gets served as a page of the app
  private colorsUrl = 'assets/colors.json';

  // this httpClient is provided by angular
  constructor(private httpClient: HttpClient) {
  }

  public generate(): Observable<Color[]> {
    // this generate function returns an observable! it's an object that will fetch colors when something subscribes to it
    // httpClient is going to send a request to the colorsUrl (where it will find an array of Color objects)
    // the results get piped through to this sampleSize function that selects a random sample of 5 colors
    return this.httpClient.get<Color[]>(this.colorsUrl).pipe(
        map(colors => sampleSize(colors, 5))
      );
  }
}
