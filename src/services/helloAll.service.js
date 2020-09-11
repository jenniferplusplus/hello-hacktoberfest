import {interval} from "rxjs";
import {map} from "rxjs/operators";
import RandArray from "@/lib/rand-array";
import {default as names} from "@/data/names.json";

class HelloAllService{
  names$;
  _names = new RandArray(names);

  constructor(delay) {
    this.names$ = interval(delay).pipe(map(() => this._names.next()));
  }
}

const Singleton = new HelloAllService(500);

export {
  HelloAllService as default,
  Singleton
};
