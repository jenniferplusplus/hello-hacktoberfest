class RandArray {
  constructor(list = [], randomize = false) {
    this.list = list;
    this.randomize = randomize;
    this.idx = 0;
    this.length = this.list.length;
  }

  next() {
    let nextIdx;
    if(this.randomize){
      nextIdx = getRandomInt(0, this.length);
      this.idx = nextIdx;
    }
    else {
      nextIdx = this.idx++;

      this.idx = this.idx >= this.length ? 0 : this.idx;
    }

    return this.list[nextIdx];
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export default RandArray;
