
import { RootState } from '../../store';
import { ActionContext } from 'vuex';
import { getStoreBuilder } from 'vuex-typex';
import { sum, sub } from '../../lib/maths';

const initialEnthusiasmState: EnthusiasmState = { items: [], count: 3 };
const b = getStoreBuilder<RootState>().module('enthusiasm', initialEnthusiasmState);

// getters
const numberOfItemsGetter = b.read(state => state.items.length, 'numberOfItems');
const itemsGetter = b.read((state) => {
  const displayItems: DisplayItem[] = state.items.map((item) => {
    return {
      product: `-- ${item.productId} --`,
      quantity: item.quantity,
    };
  });
  return displayItems;
},                         'getItems');

// mutations
function appendItem(state: EnthusiasmState, payload: { productId: string, quantity: number }) {
  state.items.push({
    productId: payload.productId,
    quantity: payload.quantity,
  });
}

// mutations
function increment(state: EnthusiasmState) {
  state.count = sum(state.count, 1);
}

// mutations
function decrement(state: EnthusiasmState) {
  state.count = sub(state.count, 1);
}

// action
async function fetchItems(context: ActionContext<EnthusiasmState, RootState>) {
  const { data: fetchedItems } = await fetch('myItemsUrl').then(r => r.json());
  const items: Item[] = fetchedItems.items;
  items.forEach(item => enthusiasm.commitAppendItem(item));
}

// state
const stateGetter = b.state();

// exported "enthusiasm" module interface
const enthusiasm = {
  // state
  get state() { return stateGetter(); },

  // getters (wrapped as real getters)
  get items() { return itemsGetter(); },
  get numberOfItems() { return numberOfItemsGetter(); },

  // mutations
  commitAppendItem: b.commit(appendItem),
  commitIncrement: b.commit(increment),
  commitDecrement: b.commit(decrement),

  // actions
  // dispatchFetchItems: b.dispatch(fetchItems), ??
};

export default enthusiasm;
