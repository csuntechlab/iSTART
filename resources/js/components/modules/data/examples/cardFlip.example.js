export default {
  // Example Usage
  0: {
    slide_type: 'cardFlip',
    header: {
      title: 'Drinking categories', // Type: string; Required, always the same
      text: null // Type: string; Optional, piece of text after title
    },
    content: {
      cards_flipped: false, // Type: number; required
      card_flip_count: 0, // Type: number; Required
      paragraph: {
        0: 'Have you ever seen anyone drink more than what they can handle? Have you seen this individual do that more than once?' // Type: string; Optional
      },
      cards: {
        0: {
          show: false, // Type: boolean; Required, always the same
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s13_01.png', // Type: string; Path to image
              alt: 'beer and red wine', // Type: string; Required, for accessibility
              caption: 'Moderate Drinking' // Type: string; Optional, piece of text which appears under the image
            },
            question: null // Type: string; Optional, Piece of text before card flip
          },
          back: {
            description: 'Having one or fewer drinks per day for women, and two or fewer drinks per day for men. Typically, moderate drinkers don’t drink to get drunk.' // Type: string; Piece of text after card flip
          }
        }
      }
    }
  },

  // Blank Template
  1: {
    slide_type: 'cardFlip',
    header: {
      title: '',
      text: null
    },
    content: {
      cards_flipped: false,
      card_flip_count: 0,
      paragraph: {
        0: ''
      },
      cards: {
        0: {
          show: false,
          front: {
            img: {
              src: '',
              alt: '',
              caption: null
            },
            question: null
          },
          back: {
            description: ''
          }
        }
      }
    }
  }
}
