import { Component } from '@angular/core';
import {Person} from "./shared/person.model";
import {PersonService} from "./shared/person.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ PersonService ]
})
export class AppComponent  {
  persons: Person[];
  constructor(private personService: PersonService) { }
  getPersons(): void {
    this.personService.getPersons().then(persons => this.persons = persons);
  }
  ngOnInit(): void {
    this.getPersons();
  }
}
