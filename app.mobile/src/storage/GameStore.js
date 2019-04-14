import { observable } from 'mobx';

const gameStore = observable({
  id: 1,
  name: 'Najlepsza pod słońcem',
  active: true,
  startTime: new Date(),
  players: 30,
})

export default gameStore;
