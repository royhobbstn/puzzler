class MetroSystem {
  constructor() {
    this.inProgress = {};
    this.finished = {};
  }

  checkIn(id, stationName, t) {
    this.inProgress[id] = { stationName, t };
  }

  checkOut(id, stationName, t) {
    const checkInRecord = this.inProgress[id];
    delete this.inProgress[id];
    if (!this.finished[checkInRecord.stationName]) {
      this.finished[checkInRecord.stationName] = {};
    }
    if (!this.finished[checkInRecord.stationName][stationName]) {
      this.finished[checkInRecord.stationName][stationName] = { sum: 0, trips: 0 };
    }
    const route = this.finished[checkInRecord.stationName][stationName];
    route.sum += t - checkInRecord.t;
    route.trips++;
  }

  getAverageTime(startStation, endStation) {
    const route = this.finished[startStation][endStation];
    return route.sum / route.trips;
  }
}

let metroSystem = new MetroSystem();
metroSystem.checkIn(45, 'Leyton', 3);
metroSystem.checkIn(32, 'Paradise', 8);
metroSystem.checkIn(27, 'Leyton', 10);
metroSystem.checkOut(45, 'Waterloo', 15);
metroSystem.checkOut(27, 'Waterloo', 20);
metroSystem.checkOut(32, 'Cambridge', 22);
console.log(metroSystem.getAverageTime('Paradise', 'Cambridge')); // 14
console.log(metroSystem.getAverageTime('Leyton', 'Waterloo')); // 11
metroSystem.checkIn(10, 'Leyton', 24);
console.log(metroSystem.getAverageTime('Leyton', 'Waterloo')); // 11
metroSystem.checkOut(10, 'Waterloo', 38);
console.log(metroSystem.getAverageTime('Leyton', 'Waterloo')); // 12

console.log('----');

metroSystem = new MetroSystem();
metroSystem.checkIn(10, 'Leyton', 3);
metroSystem.checkOut(10, 'Paradise', 8);
console.log(metroSystem.getAverageTime('Leyton', 'Paradise')); // 5
metroSystem.checkIn(5, 'Leyton', 10);
metroSystem.checkOut(5, 'Paradise', 16);
console.log(metroSystem.getAverageTime('Leyton', 'Paradise')); // 5.5
metroSystem.checkIn(2, 'Leyton', 21);
metroSystem.checkOut(2, 'Paradise', 30);
console.log(metroSystem.getAverageTime('Leyton', 'Paradise')); // 6.66667
