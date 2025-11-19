import { defineComponent, h, type PropType, type CSSProperties } from 'vue';

const defaultStyles: Record<string, CSSProperties> = {
  h1: { fontSize: '32px', fontWeight: 'bold', margin: '20px 0', lineHeight: '1.2' },
  h2: { fontSize: '28px', fontWeight: 'bold', margin: '18px 0', lineHeight: '1.3' },
  h3: { fontSize: '24px', fontWeight: 'bold', margin: '16px 0', lineHeight: '1.3' },
  h4: { fontSize: '20px', fontWeight: 'bold', margin: '14px 0', lineHeight: '1.4' },
  h5: { fontSize: '18px', fontWeight: 'bold', margin: '12px 0', lineHeight: '1.4' },
  h6: { fontSize: '16px', fontWeight: 'bold', margin: '10px 0', lineHeight: '1.5' },
};

export const Heading = defineComponent({
  name: 'Heading',
  props: {
    as: {
      type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
      default: 'h2'
    },
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    return () => h(props.as, {
      style: {
        ...defaultStyles[props.as],
        ...props.style
      }
    }, slots.default?.());
  }
});
