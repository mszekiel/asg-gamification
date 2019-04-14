import { observable } from 'mobx';

const mainStore = observable({
  isAppReady: false,
})

export default mainStore;
