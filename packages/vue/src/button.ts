import { defineComponent, h } from 'vue';

export const Button = defineComponent({
  name: 'Button',
  props: {
    href: {
      type: String,
      required: true
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const buttonStyle = {
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '12px 24px',
      borderRadius: '4px',
      textDecoration: 'none',
      display: 'inline-block',
      fontWeight: 'bold',
      ...props.style
    };

    return () => h('a', { href: props.href, style: buttonStyle, target: '_blank' }, slots.default?.());
  }
});
