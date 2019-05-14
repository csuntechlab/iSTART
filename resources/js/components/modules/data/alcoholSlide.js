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
              1: {
                show: false,
                img: {
                  src: 'images/thumbnail/test.jpg',
                  alt: 'city with palmtrees',
                  caption: 'California Sunshine'
                },
                question: null,
                description: 'Don\'t do drugs.'
              },
              2: {
                show: false,
                img: {
                  src: null,
                  alt: null,
                  caption: null
                },
                question: 'Why you shouldn\'t do drugs?',
                description: 'Drugs are bad.'
              },
              3: {
                show: false,
                img: {
                  src: 'images/thumbnail/alcohol_thumbnail.jpg',
                  alt: 'luxury alcohol with glass',
                  caption: 'Alcohol with shots of whiskey'
                },
                question: null,
                description: 'Testing word wrap when container fills up. Testing word wrap when container fills up. Testing word wrap when container fills up. Testing word wrap when container fills up.'
              }
            }
          }
        }
      }
    }
  }
}
