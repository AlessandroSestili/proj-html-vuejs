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
      //Booleano che attiva/disattiva searchBar
      searchBarActive: false,

      // Array con tutte le informazioni e immagini riguardanti le notizie 
      recentNews: [
        //CAFFE
        {
          lilImg: "images/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (1).jpg",

          medImg: "images/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o.jpg",

          bigImg: "images/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (2).jpg",

          date: "06 Jan 2016",
          title: "COFFEE FOREVER",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et eum, sint nemo accusamus distinctio officia laborum ratione, rerum magnam sed nihil sapiente nam nesciunt suscipit eius optio, quae alias."
        }, 

        // UOMO CHE SI RILASSA
        {
          lilImg: "images/photodune-6745579-modern-creative-man-relaxing-on-workspace-.jpg",

          medImg: "",

          bigImg: "images/photodune-6745579-modern-creative-man-relaxing-on-workspace- (1).jpg",

          date: "03 Feb 2016",
          title: "RELAXING IS EVERYTHING",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et eum, sint nemo accusamus distinctio officia laborum ratione, rerum magnam sed nihil sapiente nam nesciunt suscipit eius optio, quae alias."
        },

        // WORKSPACE
        {
          lilImg: "images/photodune-6745585-modern-creative-workspace-m-150x150.jpg",

          medImg: "",

          bigImg: "images/photodune-6745585-modern-creative-workspace-m.jpg",

          date: "20 Mar 2015",
          title: "DEFINE YOUR WORKSPACE",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et eum, sint nemo accusamus distinctio officia laborum ratione, rerum magnam sed nihil sapiente nam nesciunt suscipit eius optio, quae alias."
        },

        //OROLOGIO E PORTAFOGLI
        {
          lilImg: "images/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg",

          medImg: "",

          bigImg: "images/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on (1).jpg",

          date: "17 Jun 2010",
          title: "THINK ACCESSORIED!",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et eum, sint nemo accusamus distinctio officia laborum ratione, rerum magnam sed nihil sapiente nam nesciunt suscipit eius optio, quae alias."
        },

        //DISCORSO BUSINESS
        {
          lilImg: "images/photodune-8522811-speaker-at-business-conference-and-present (1).jpg",

          medImg: "images/photodune-8522811-speaker-at-business-conference-and-present.jpg",

          bigImg: "images/photodune-8522811-speaker-at-business-conference-and-present (2).jpg",

          date: "10 Jun 2010",
          title: "TED TALK",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et eum, sint nemo accusamus distinctio officia laborum ratione, rerum magnam sed nihil sapiente nam nesciunt suscipit eius optio, quae alias."
        },

        //CONVEGNO PERSONE FOLLA
        {
          lilImg: "images/photodune-8523683-speaker-at-business-convention-and-present.jpg",

          medImg: "",

          bigImg: "images/photodune-8523683-speaker-at-business-convention-and-present (1).jpg",

          date: "13 Dec 2014",
          title: "A LOT OF PEOPLE",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et eum, sint nemo accusamus distinctio officia laborum ratione, rerum magnam sed nihil sapiente nam nesciunt suscipit eius optio, quae alias."
        },

        //OUTFIT
        {
          lilImg: "images/photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg",

          medImg: "",

          bigImg: "images/photodune-8795110-overhead-of-essentials-denim-clothes-m.jpg",

          date: "21 Apr 2019",
          title: "CHOOSE YOUR DAILY OUTFIT",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et eum, sint nemo accusamus distinctio officia laborum ratione, rerum magnam sed nihil sapiente nam nesciunt suscipit eius optio, quae alias."
        },

        //STUDIO
        {
          lilImg: "images/photodune-8797753-multiethnic-people-with-startup-business-t (1).jpg",

          medImg: "images/photodune-8797753-multiethnic-people-with-startup-business-t.jpg",

          bigImg: "images/photodune-8797753-multiethnic-people-with-startup-business-t (2).jpg",

          date: "27 May 2003",
          title: "LEARN HOW TO LEARN",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et eum, sint nemo accusamus distinctio officia laborum ratione, rerum magnam sed nihil sapiente nam nesciunt suscipit eius optio, quae alias."
        },

        //STUDIO
        {
          lilImg: "images/photodune-8797753-multiethnic-people-with-startup-business-t (1).jpg",

          medImg: "images/photodune-8797753-multiethnic-people-with-startup-business-t.jpg",

          bigImg: "images/photodune-8797753-multiethnic-people-with-startup-business-t (2).jpg",

          date: "27 May 2003",
          title: "LEARN HOW TO LEARN",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et eum, sint nemo accusamus distinctio officia laborum ratione, rerum magnam sed nihil sapiente nam nesciunt suscipit eius optio, quae alias."
        },
      ],

      //Array con Speakers e date
      speakersAndDates: [
        {
          day: "1",
          date: "23 May 2016",
          time: "09:00 - 10:30",

          title: "WELCOMING AND INTRODUCTION",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam porro explicabo, autem nam non vitae eum ad suscipit quidem molestias.",
          speaker: "/Users/alessandrosestili/Desktop/Boolean/Progetti Boolean/proj-html-vuejs/images/speaker-1-150x150.jpg"
        },

        {
          day: "2",
          date: "24 May 2016",
          time: "09:00 - 10:30",

          title: "FIRST STEP",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam porro explicabo, autem nam non vitae eum ad suscipit quidem molestias.",
          speaker: "/Users/alessandrosestili/Desktop/Boolean/Progetti Boolean/proj-html-vuejs/images/speaker-2-150x150.jpg"
        },

        {
          day: "3",
          date: "25 May 2016",
          time: "09:00 - 10:30",

          title: "OUR TRIP",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam porro explicabo, autem nam non vitae eum ad suscipit quidem molestias.",
          speaker: "/Users/alessandrosestili/Desktop/Boolean/Progetti Boolean/proj-html-vuejs/images/speaker-3-150x150.jpg"
        },

        {
          day: "4",
          date: "26 May 2016",
          time: "09:00 - 10:30",

          title: "BEST PRACTICE",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam porro explicabo, autem nam non vitae eum ad suscipit quidem molestias.",
          speaker: "/Users/alessandrosestili/Desktop/Boolean/Progetti Boolean/proj-html-vuejs/images/speaker-1-150x150.jpg"
        },

        {
          day: "5",
          date: "27 May 2016",
          time: "09:00 - 10:30",

          title: "CONCLUSION",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam porro explicabo, autem nam non vitae eum ad suscipit quidem molestias.",
          speaker: "/Users/alessandrosestili/Desktop/Boolean/Progetti Boolean/proj-html-vuejs/images/speaker-1-150x150.jpg"
        }
      ]
    },

    methods: {

      // Apre o Chiude la barra di ricerca
      openCloseSearchBar() {
        this.searchBarActive = !this.searchBarActive
      },

      // Chiude la barra di ricerca
      closeSearchBar() {
        if(this.searchBarActive == true) {
          this.searchBarActive = false
        }
      },
    }
  })