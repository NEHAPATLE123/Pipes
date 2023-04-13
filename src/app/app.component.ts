import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aut maaque harum repudiandae culpa laboriosam neque nulla at, dignissimos ex!`

  title1 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aut maaqueLorem lorem  ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aut maaque harum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aut maaque harum repudiandae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aut maaque harum repudiandae culpa laboriosam neque nulla at, dignissimos ex!culpa laboriosam neque nulla at, dignissimos ex!repudiandae culpa laboriosam neque nulla at, dignissimos ex!`

  d: Date = new Date(2022,1)

  course = {
    courseName: "Mean Stack",
    noOfaStd: 123456,
    rating: 3.5,
    releaseDate: new Date(2022, 2, 26),
    price: 199.99
}

}
