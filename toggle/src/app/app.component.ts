import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toggle';
  visible: boolean = false;
  show: boolean = false;
  shows: boolean = false;

  onclick(content: string = 'text') {
    switch (content) {
      case 'text':
        this.visible = true;
        this.show = false;
        this.shows = false;
        break;
      case 'image':
        this.visible = false;
        this.show = true;
        this.shows = false;
        break;
      case 'video':
        this.visible = false;
        this.show = false;
        this.shows = true;
        break;
    }
  }

  /*

  //readmore var, if true than read more string will print
  ReadMore: boolean = true;

  /* SeeImage: boolean = true;
  SeeVideo: boolean = true;*/
  /*
  visible: boolean = false;
  /* show: boolean = false;*/
  /*
  //onclick toggling
  onclick() {
    this.ReadMore = !this.ReadMore; //not equal to condition
    /* this.SeeImage = !this.SeeImage;
    this.visible = !this.visible;
    this.show = !this.show;
  }*/
}
