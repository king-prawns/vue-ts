import './style.scss';
import Vue  from 'vue';
import view from './template.html';
import FooComp from '../foo/index';

export default Vue.component('my-app', {
  template: `${view}`,
  data() {
    return {
      name: 'Foo',
    };
  },
  components: {
    FooComp,
  },
});
