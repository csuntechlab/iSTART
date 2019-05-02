export const alcohol = {
  data () {
    return {
      slides: {
        slide1: {
          slide_id: 1,
          slide_type: 'cardflip',
          content: {
            card1: {
              show: false,
              img: {
                src: 'images/thumbnail/test.jpg',
                alt: 'california sunshine',
                caption: 'Caption of Image'
              },
              description: 'Don\'t do drugs.'
            },
            card2: {
              show: false,
              img: {
                src: 'images/thumbnail/test.jpg',
                alt: 'california sunshine',
                caption: 'Caption of Image'
              },
              description: 'Drugs are bad.'
            },
            card3: {
              show: false,
              img: {
                src: 'images/thumbnail/alcohol_thumbnail.jpg',
                alt: 'luxury alcohol with glass',
                caption: 'Alcohol with Caption'
              },
              description: 'Testing word wrap when container fills up. Testing word wrap when container fills up. Testing word wrap when container fills up. Testing word wrap when container fills up. Testing word wrap when container fills up.'
            }
          }
        }
      }
    }
  }
}
