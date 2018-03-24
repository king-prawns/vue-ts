import Vue  from 'vue';
import view from './template.html';
import style from './style.scss';
import { sum, sub } from '../../lib/maths';

export default Vue.extend({
  name: 'foo-comp',
  template: `${view}`,
  style: `${style}`,
  props: ['name', 'initialEnthusiasm'],
  data() {
    return {
      enthusiasm: this.initialEnthusiasm,
    };
  },
  methods: {
    increment() { this.enthusiasm = sum(this.enthusiasm, 1); },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm = sub(this.enthusiasm, 1);
      }
    },
  },
  computed: {
    exclamationMarks(): string {
      return Array(sum(this.enthusiasm, 1)).join('?');
    },
  },
});
