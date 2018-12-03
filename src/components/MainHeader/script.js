export default {
  data: function () {
    return {
      show: false,
    }
  },
  created: function () {
    window.addEventListener('resize', this.handlerResize);
  },
  destroyed: function () {
    window.removeEventListener('resize', this.handlerResize);
  },
  methods: {
    handlerResize () {
      let screen = window.innerWidth < 768;
      if (this.show && !screen) {
        this.handleHide();
      }
    },
    handlerToggler () {
      if (!this.show) {
        this.handleShow();
      }
      else {
        this.handleHide();
      }
    },
    handleShow () {
      this.show = true;
      document.body.style.overflow = 'hidden';
    },
    handleHide () {
      this.show = false;
      document.body.style.overflow = '';
    }
  }
}