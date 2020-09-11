import { interval } from "rxjs";
import { map, startWith } from "rxjs/operators";
import RandArray from "@/lib/rand-array";
import { default as names } from "@/data/names.json";

class HelloAllService {
  names$;
  _names;

  constructor(delay) {
    this._names = new RandArray(names);
    this.names$ = interval(delay).pipe(
      map(() => this._names.next()),
      startWith('World')
    );
  }
}

const Singleton = new HelloAllService(750);

export {
  HelloAllService as default,
  Singleton
};
