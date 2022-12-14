export class User {

  constructor(json: JSON) {
    console.log(json)
    for (let prop in json) {
      this[prop] = json[prop];
    }
  }
    id_user: number;
    picture_url: string;
    username: string;
    role: string;
    email: string;
    biography: string;
    status: string;
}
