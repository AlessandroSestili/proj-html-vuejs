var app = new Vue({
    el: '#app',

    data: {

      //Links nella Navbar
      navbarLinks: [
        {
          text: "HOME",
          link: "#",
        },

        {
          text: "PAGES",
          link: "#",
        },

        {
          text: "PROGRAM",
          link: "#",
        },

        {
          text: "HOME",
          link: "#",
        },

        {
          text: "TICKETS",
          link: "#",
        },

        {
          text: "SPEAKERS",
          link: "#",
        },

        {
          text: "BLOG",
          link: "#",
        },

        {
          text: "SHORTCODES",
          link: "#",
        },

        {
          // Barra di ricerca 
          text: "",
          link: "",
        },
        
      ],

      searchBarActive: false,
    },

    methods: {
      // Apre o Chiude la barra di ricerca
      openCloseSearchBar() {
        this.searchBarActive = !this.searchBarActive

        setTimeout(() => {
          if(this.searchBarActive == true) {
            this.searchBarActive = false
          }
        }, 4000);
      }
    }
  })