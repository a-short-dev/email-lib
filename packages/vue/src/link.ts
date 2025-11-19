import { defineComponent, h, type PropType, type CSSProperties } from 'vue';

export const Link = defineComponent({
  name: 'Link',
  props: {
    href: {
      type: String as PropType<string>,
      required: true
    },
    target: {
      type: String as PropType<string>,
      default: '_blank'
    },
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    return () => h('a', {
      href: props.href,
      target: props.target,
      rel: props.target === '_blank' ? 'noopener noreferrer' : undefined,
      style: {
        color: '#0066cc',
        textDecoration: 'underline',
        ...props.style
      }
    }, slots.default?.());
  }
});
