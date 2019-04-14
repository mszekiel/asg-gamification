import { observable } from 'mobx';

const userStore = observable({
  isLogged: false,
  team: {
    id: 1,
    name: 'Twoj stary',
    points: 0,
    buddies: 16,
  },
})

export default userStore;
