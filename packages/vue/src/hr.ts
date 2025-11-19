import { defineComponent, h, type PropType, type CSSProperties } from 'vue';

export const Hr = defineComponent({
  name: 'Hr',
  props: {
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    }
  },
  setup(props) {
    return () => h('hr', {
      style: {
        border: 'none',
        borderTop: '1px solid #e5e7eb',
        margin: '20px 0',
        ...props.style
      }
    });
  }
});
