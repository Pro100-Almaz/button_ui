<template>
  <button type="button" :class="buttonClass">
    <slot>
      <span v-if="startIcon" :class="iconStyleClass" class="material-icons">{{
        icon
      }}</span>
      <span>{{ label }}</span>
      <span v-if="endIcon" :class="iconStyleClass" class="material-icons">{{
        icon
      }}</span>
    </slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: null,
    },
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
    icon: {
      type: String,
      default: "home",
    },
    startIcon: {
      type: Boolean,
      default: false,
    },
    endIcon: {
      type: Boolean,
      default: false,
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
            !this.outline &&
            !this.onlyText &&
            this.color == "default" &&
            !this.disabled,
          "p-button-sm": this.size === "sm",
          "p-button-outlined": this.outline,
          "p-shadow": !this.disableShadow,
          "p-border": this.onlyText,
          "p-disable": this.disabled,
          "p-default:before": this.startIcon,
          "p-size-sm": this.size == "sm",
          "p-size-lg": this.size == "lg",
          "p-color-primary": this.color == "primary",
          "p-color-secondary": this.color == "secondary",
          "p-color-danger": this.color == "danger",
        },
      ];
    },
    iconStyleClass() {
      return [
        "p-button-icon",
        { "p-button-start": this.startIcon, "p-button-end": this.endIcon },
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
}

.p-shadow {
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
}

.p-default {
  background: #e0e0e0;
}

.p-border {
  background: var(--light);
  box-shadow: none;
}

.p-disable {
  background-color: #aeaeae;
  color: #666666;
  cursor: default;
  box-shadow: none;
}

.p-button-icon {
  margin: 0 4px;
}

.p-default:hover {
  background-color: #aeaeae;
}

.p-border:hover {
  background-color: #aeaeae;
  box-shadow: none;
}

.p-disable:hover {
  background-color: #aeaeae;
  box-shadow: none;
}

.p-button-outlined {
  border: 1px solid #3d5afe;
  color: #3d5afe;
  background-color: white;
}

.p-size-sm {
  padding: 0.375rem 0.75rem;
}

.p-size-lg {
  padding: 0.6875rem 1.375rem;
}

.p-color-primary {
  color: white;
  background-color: var(--button-primary);
}

.p-color-primary:hover {
  background-color: var(--button-primary-2);
}

.p-color-secondary {
  color: white;
  background-color: var(--button-secondary);
}

.p-color-secondary:hover {
  background-color: var(--button-secondary-2);
}

.p-color-danger {
  color: white;
  background-color: var(--button-danger);
}

.p-color-danger2 {
  background-color: var(--button-danger-2);
}

.p-button-outlined:hover {
  background-color: rgba(41, 98, 255, 0.1);
}

.p-button-icon-right {
  order: 1;
}
</style>
