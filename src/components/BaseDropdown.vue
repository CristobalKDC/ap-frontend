<template>
  <component
    :is="tag"
    :class="[{ show: isOpen }, `drop${direction}`]"
    @click="toggleDropDown"
    v-click-outside="closeDropDown"
  >
    
  </component>
</template>
<script>
export default {
  name: 'base-dropdown',
  props: {
    tag: {
      type: String,
      default: 'div',
      description: 'Dropdown html tag (e.g div, ul etc)'
    },
    titleTag: {
      type: String,
      default: 'button',
      description: 'Dropdown title (toggle) html tag'
    },
    title: {
      type: String,
      description: 'Dropdown title'
    },
    direction: {
      type: String,
      default: 'down', // up | down
      description: 'Dropdown menu direction (up|down)'
    },
    icon: {
      type: String,
      description: 'Dropdown icon'
    },
    titleClasses: {
      type: [String, Object, Array],
      description: 'Title css classes'
    },
    menuClasses: {
      type: [String, Object],
      description: 'Menu css classes'
    },
    menuOnRight: {
      type: Boolean,
      description: 'Whether menu should appear on the right'
    },
    hasToggle: {
      type: Boolean,
      description: 'Whether dropdown has arrow icon shown',
      default: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
      this.$emit('change', this.isOpen);
    },
    closeDropDown() {
      this.isOpen = false;
      this.$emit('change', false);
    }
  }
};
</script>
<style lang="scss" scoped>
.dropdown {
  cursor: pointer;
  user-select: none;
}
</style>
