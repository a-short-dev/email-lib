import { defineComponent, h } from 'vue';

export const Html = defineComponent({
  name: 'Html',
  props: {
    lang: {
      type: String,
      default: 'en'
    },
    dir: {
      type: String,
      default: 'ltr'
    }
  },
  setup(props, { slots }) {
    return () => h('html', { lang: props.lang, dir: props.dir }, slots.default?.());
  }
});
