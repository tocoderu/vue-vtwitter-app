const app = {
  data() {
    return {
      title: "VTwitter",
      item: "",
      items: [
        {
          id: 1,
          body: "hello vue 3",
          avatar: `https://avatars.dicebear.com/api/male/1.svg`,
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          id: 2,
          body: "hello world",
          avatar: `https://avatars.dicebear.com/api/male/2.svg`,
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.items.push({
        id: Math.round(Math.random() * 30),
        avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
        body: this.item,
        date: new Date(Date.now()).toLocaleString(),
      });

      // reset
      this.item = "";
    },
  },
};

Vue.createApp(app).mount("#app");
