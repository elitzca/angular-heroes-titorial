import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes"            // 4.2  import the mock HEROES

@Component({                                       // The CLI generated three metadata properties:
  selector: 'app-heroes',                          // selector— the component's CSS element selector
  templateUrl: './heroes.component.html',          // templateUrl— the location of the component's template file.
  styleUrls: ['./heroes.component.css']            // styleUrls— the location of the component's private CSS styles.
})

export class HeroesComponent implements OnInit {    // Always export the component class so you can import it elsewhere ... like in the AppModule.

  // hero = 'Windstorm';             // Add a hero property
                                    // then go to heroes.component.html and bind the new hero proprety like <p>{{hero}}</p>

//   hero: Hero = {                    // 2.1 Refactor the component's hero property to be of type Hero
//     id: 1,                         //      Initialize it with an id of 1 and the name Windstorm.
//     name: 'Windstorm'
// };

  heroes = HEROES;                // 4.3  define a component property called heroes to expose HEROES array for binding.
                                  //      go to 'heroes.component.html' to create(heroes template)

  selectedHero = Hero;            // 5.2 Rename the component's hero property to selectedHero but don't assign it.
                                  //     There is no selected hero when the application starts.

  constructor() {
  }

  ngOnInit() {         // 'ngOnInit' is a lifecycle hook.
                      // Angular calls ngOnInit shortly after creating a component.
                      // It's a good place to put initialization logic, fetch initial data
                      // only called once (1)
  }

  onSelect(hero: Hero): void {    // 5.3 Add the following onSelect() method, which assigns the clicked hero from the template to the component's selectedHero.
    this.selectedHero = hero;
  }


}
