import ListSkeletons from './components/ListSkeletons';
import ListTracks from './components/ListTracks';
import ListUndefined from './components/ListUndefined';

export default {
  components: {
    ListSkeletons,
    ListTracks,
    ListUndefined,
  },
  data: function () {
    return {
      tabs: {
        current: 'Themes',
        options: [
          { name: 'Themes', qty: 42 },
          { name: 'Genres', qty: 28 },
          { name: 'Moods', qty: 30 }
        ]
      },
      items: {
        current: 'Action',
        options: [
          { name: 'Action', qty: 280 },
          { name: 'Adventure', qty: 280 },
          { name: 'Battle', qty: 85 },
          { name: 'Business', qty: 128 },
          { name: 'Cartoons', qty: 35 },
          { name: 'City', qty: 356 },
          { name: 'Comedy', qty: 43 },
          { name: 'Commercial', qty: 301 },
          { name: 'Corporate', qty: 191 },
          { name: 'Documentary', qty: 616 },
          { name: 'Drama', qty: 411 },
          { name: 'Fashion', qty: 203 },
          { name: 'Film', qty: 929 },
          { name: 'Food', qty: 152 },
          { name: 'Games', qty: 471 },
          { name: 'Holiday', qty: 111 },
          { name: 'Horror', qty: 60 },
          { name: 'Imovie', qty: 125 },
          { name: 'Industrial', qty: 41 },
          { name: 'Interview', qty: 239 },
          { name: 'Intro', qty: 121 },
          { name: 'Kids', qty: 24 },
          { name: 'Lifestyle', qty: 327 },
          { name: 'Meditation', qty: 77 },
          { name: 'Nature', qty: 236 },
          { name: 'News', qty: 26 },
          { name: 'Nightlife', qty: 199 },
          { name: 'Podcast', qty: 109 },
          { name: 'Presentation', qty: 108 },
          { name: 'Restaurant', qty: 149 },
          { name: 'RPG', qty: 89 },
          { name: 'Sci-Fi', qty: 356 },
          { name: 'Science', qty: 339 },
          { name: 'Slideshow', qty: 151 },
          { name: 'Slow Motion', qty: 119 },
          { name: 'Sport', qty: 165 },
          { name: 'Startup', qty: 135 },
          { name: 'Streaming', qty: 45 },
          { name: 'Technology', qty: 222 },
          { name: 'Trailer', qty: 271 },
          { name: 'Travel', qty: 442 },
          { name: 'TV Music', qty: 396 },
          { name: 'Vlog', qty: 374 },
          { name: 'Website', qty: 50 }
        ]
      },
      tracks: [
        {
          play: false,
          name: 'Inside',
          author: 'Denis Stelmach',
          img: '/img/cover-1.png',
          time: '4:14',
        },
        {
          play: false,
          name: 'Bad king of mongrel',
          author: 'Junkyard Storytellaz',
          img: '/img/cover-2.png',
          time: '4:14',
        },
        {
          play: false,
          name: 'Inside',
          author: 'Denis Stelmach',
          img: '/img/cover-1.png',
          time: '4:14',
        },
        {
          play: false,
          name: 'Bad king of mongrel',
          author: 'Junkyard Storytellaz',
          img: '/img/cover-2.png',
          time: '4:14',
        },
        {
          play: false,
          name: 'Inside',
          author: 'Denis Stelmach',
          time: '4:14',
        },
        {
          play: false,
          name: 'Bad king of mongrel',
          author: 'Junkyard Storytellaz',
          img: '/img/cover-2.png',
          time: '4:14',
        },
        {
          play: false,
          name: 'Inside',
          author: 'Denis Stelmach',
          img: '/img/cover-1.png',
          time: '4:14',
        },
        {
          play: false,
          name: 'Bad king of mongrel',
          author: 'Junkyard Storytellaz',
          img: '/img/cover-2.png',
          time: '4:14',
        },
        {
          play: false,
          name: 'Inside',
          author: 'Denis Stelmach',
          img: '/img/cover-1.png',
          time: '4:14',
        },
        {
          play: false,
          name: 'Bad king of mongrel',
          author: 'Junkyard Storytellaz',
          img: '/img/cover-2.png',
          time: '4:14',
        },
        {
          play: false,
          name: 'Inside',
          author: 'Denis Stelmach',
          time: '4:14',
        },
        {
          play: false,
          name: 'Bad king of mongrel',
          author: 'Junkyard Storytellaz',
          img: '/img/cover-2.png',
          time: '4:14',
        },
      ],
      tracksReady: false,
      search: '',
      searchResults: false,
      category: this.$route.params.category
    }
  },
  mounted: function () {
    this.searchResults = !!this.$route.params.search;
    this.handlerLoadTracks();
  },
  methods: {
    handlerLoadTracks () {
      let self = this;
      setTimeout(function () {
        self.tracksReady = true;
      },5000);
    },
    handlerSearch (event) {
      if (this.$route.name !== 'search' ) {
        this.$router.push({
          name: 'search',
          params: {
            search: event.target.value
          }
        });
      } else {
        window.scrollTo(0,0);
        event.target.blur();
        this.search = '';
        this.searchResults = !!event.target.value;
        this.tracksReady = false;
        this.handlerLoadTracks();
      }
    },
    handlerCategory (event) {
      if (this.$route.name !== 'category' ) {
        this.$router.push({
          name: 'category',
          params: {
            category: event.target.innerText
          }
        });
      } else {
        window.scrollTo(0,0);
        this.category = event.target.innerText;
        this.searchResults = false;
        this.tracksReady = false;
        this.handlerLoadTracks();
      }
    }
  },
}