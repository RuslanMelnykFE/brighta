const dateMillisec = {
  methods: {
    getDateMillisec(val) {
      const { from, to } = this.period;

      return {
        day: Date.parse(`${val}`),
        from: Date.parse(`${from}`),
        to: Date.parse(`${to}`),
      };
    },
  },
};

export default dateMillisec;
