import { defineComponent, h, type PropType, type CSSProperties } from 'vue';

export const Container = defineComponent({
  name: 'Container',
  props: {
    maxWidth: {
      type: Number as PropType<number>,
      default: 600
    },
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    return () => h('div', {
      style: {
        maxWidth: `${props.maxWidth}px`,
        margin: '0 auto',
        width: '100%',
        ...props.style
      }
    }, slots.default?.());
  }
});
