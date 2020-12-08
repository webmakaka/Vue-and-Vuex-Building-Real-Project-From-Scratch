<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: 'McvError',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Something went wrong!',
    },
  },
};
</script>
