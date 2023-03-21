<template>
  <button type="button" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
    onlyText: {
      type: Boolean,
      default: false,
    },
    disableShadow: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    startIcon: {
      type: String,
      default: null,
    },
    endIcon: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: "md",
    },
    color: {
      type: String,
      default: "default",
    },
  },
  computed: {
    buttonClass() {
      return [
        "p-button",
        {
          "p-default":
            ~this.outline && ~this.onlyText && this.color == "default",
          "p-button-sm": this.size === "sm",
          "p-button-outlined": this.outline,
          "p-shadow": this.disableShadow,
          "p-border": this.onlyText,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.p-button {
  margin: 0;
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  justify-content: center;
  vertical-align: bottom;
  text-align: center;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
}

.p-shadow {
  box-shadow: none;
}

.p-default {
  background: #e0e0e0;
}

.p-border {
  background: var(--light);
  box-shadow: none;
}

.p-default:hover {
  background-color: #aeaeae;
}

.p-border:hover {
  background-color: #aeaeae;
  box-shadow: none;
}

.p-button-outlined {
  border: 1px solid #3d5afe;
  color: #3d5afe;
  background-color: white;
}

.p-button-outlined:hover {
  background-color: rgba(41, 98, 255, 0.1);
}

.p- .p-button:disabled {
  cursor: default;
}

.p-button-icon-right {
  order: 1;
}
</style>
