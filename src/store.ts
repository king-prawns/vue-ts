import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getStoreBuilder } from 'vuex-typex';
import enthusiasm from './lib/enthusiasm/index';

export interface RootState
{
  enthusiasm: EnthusiasmState;
}

Vue.use(Vuex);

const store: Store<RootState> = getStoreBuilder<RootState>().vuexStore();

export default store; // <-- "store" to provide to root Vue
