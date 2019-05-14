export const alcoholSlide = {
  data () {
    return {
      slides: {
        slide1: {
          slide_id: 1,
          slide_type: 'cardflip',
          content: {
            header: 'What you shouldn\'t take drugs',
            description: 'Flip over all cards to continue.',
            cards: {
              card1: {
                show: false,
                front: {
                  img: {
                    src: 'images/thumbnail/test.jpg',
                    alt: 'city with palmtrees',
                    caption: 'California Sunshine'
                  },
                  question: null
                },
                back: {
                  description: 'Don\'t do drugs.'
                }
              },
              card2: {
                show: false,
                front: {
                  img: {
                    src: null,
                    alt: null,
                    caption: null
                  },
                  question: 'Why you shouldn\'t do drugs?'
                },
                back: {
                  description: 'Drugs are bad.'
                }
              },
              card3: {
                show: false,
                front: {
                  img: {
                    src: 'images/thumbnail/alcohol_thumbnail.jpg',
                    alt: 'luxury alcohol with glass',
                    caption: 'Alcohol with shots of whiskey'
                  },
                  question: null
                },
                back: {
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac pretium tortor, vitae aliquam urna. Vivamus commodo suscipit risus, sed sagittis tellus. Nam at tortor cursus, semper risus ac, lacinia odio. Morbi vitae mollis diam.'
                }
              }
            }
          }
        }
      }
    }
  }
}
