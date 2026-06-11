export default defineAppConfig({
  ui: {
    colors: {
      primary: "primary",
    },
    badge: {
      compoundVariants: [
        {
          color: "neutral",
          variant: "outline",
          class:
            "rounded-[10px] px-3 py-1 text-xs font-normal text-neutral-600 bg-white ring-neutral-300",
        },
      ],
    },
  },
});
