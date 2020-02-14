import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  // coge el html y el css y se lo pasa al selector (etiqueta html)--> el selector se muestra en el index.html
})
export class AppComponent {
  title = 'myapp';
}
