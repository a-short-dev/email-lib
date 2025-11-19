import { defineComponent, h, type PropType, type CSSProperties } from 'vue';

export const Image = defineComponent({
  name: 'Image',
  props: {
    src: {
      type: String as PropType<string>,
      required: true
    },
    alt: {
      type: String as PropType<string>,
      required: true
    },
    width: {
      type: [Number, String] as PropType<number | string>,
      default: undefined
    },
    height: {
      type: [Number, String] as PropType<number | string>,
      default: undefined
    },
    style: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    }
  },
  setup(props) {
    return () => h('img', {
      src: props.src,
      alt: props.alt,
      width: props.width,
      height: props.height,
      style: {
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        border: 'none',
        ...props.style
      }
    });
  }
});
