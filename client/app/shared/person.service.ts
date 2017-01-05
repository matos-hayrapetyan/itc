import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from './person.model';

@Injectable()
export class PersonService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private PersonsApiUrl = '/api/persons';

  constructor(private http: Http) { }

  getPersons(): Promise<Person[]> {
    return this.http.get(this.PersonsApiUrl)
      .toPromise()
      .then(response => response.json() as Person[])
  }
}
