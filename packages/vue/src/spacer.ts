import { defineComponent, h, type PropType, type CSSProperties } from 'vue';

export const Spacer = defineComponent({
  name: 'Spacer',
  props: {
    height: {
      type: Number as PropType<number>,
      default: 20
    },
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    }
  },
  setup(props) {
    return () => h('div', {
      style: {
        height: `${props.height}px`,
        lineHeight: `${props.height}px`,
        fontSize: '1px',
        ...props.style
      }
    }, '\u00A0');
  }
});
