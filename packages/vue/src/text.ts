import { defineComponent, h } from 'vue';

export const Text = defineComponent({
  name: 'Text',
  props: {
    style: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const textStyle = {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#333333',
      margin: '16px 0',
      ...props.style
    };

    return () => h('p', { style: textStyle }, slots.default?.());
  }
});
