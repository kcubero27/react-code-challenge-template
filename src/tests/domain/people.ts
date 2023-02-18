import { faker } from "@faker-js/faker";
import { type Person } from "@domain/person";

export class PersonObjectMother implements Person {
  birth_year: string = faker.date.past().toISOString().substr(0, 10);
  eye_color: string = faker.internet.color();
  films: string[] = [faker.internet.url()];
  gender: string = faker.name.gender();
  hair_color: string = faker.internet.color();
  height: string = faker.datatype.number({ min: 50, max: 300 }).toString();
  homeworld: string = faker.internet.url();
  mass: string = faker.datatype.number({ min: 1, max: 1000 }).toString();
  name: string = faker.name.findName();
  skin_color: string = faker.internet.color();
  created: string = faker.date.past().toISOString();
  edited: string = faker.date.recent().toISOString();
  species: string[] = [faker.internet.url()];
  starships: string[] = [faker.internet.url()];
  url: string = faker.internet.url();
  vehicles: string[] = [faker.internet.url()];

  constructor(props?: Partial<Person>) {
    Object.assign(this, props);
  }
}
