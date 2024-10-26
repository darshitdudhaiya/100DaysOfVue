export const myMixin = {
    data() {
      return {
        mixinData: 'This is data from mixin!'
      }
    },
    methods: {
      mixinMethod() {
        console.log('This method is from the mixin!');
      }
    }
  };