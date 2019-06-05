
export default {
  // Example Usage
  0: { // Type: Based on the order of the list
    slide_type: 'quiz', // Type: string; Required, always the same
    header: {
      title: null, // Type: string; Optional
      text: null // Type: string; Optional
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s06_01.png', // Type: string; Path to image source
          alt: 'quiz', // Type: string; Required; needed for accessibility
          position: 'top', // Type: string; Optional, top, bottom, null(center)
          width: 'half' // Type string; Optional, half or null
        }
      },
      questions: {
        0: {
          showResponse: false, // Type: boolean; Required, always set to false
          question: 'Taking two shots of tequila is the same as which of the following?', // Type: string; Optional
          options: {
            0: {
              isAnswer: false, // Type: boolean; Required, set to false if not the answer and set to true if it's correct
              show: false, // Type: boolean; Required, always set to false
              text: 'Four cans of beer (12oz each)', // Type: string; Piece of text inside each option
              img: {
                src: null, // Type: string; Path to image source
                alt: null // Type: string; Required, needed for accessibility
              },
              response: {
                text: 'Nice try! But remember, one standard shot (1.5oz) <b>is the same as</b> one can of beer (12oz)', // Type: string; When option is clicked display this text if not empty
                img: {
                  src: 'images/alcoholModule/alcohol_s06_02.jpg', // Type: string; Path to image source
                  alt: 'alcohol comparison' // Type: string; Required, needed for accessibility
                }
              }
            }
          }
        }
      }
    }
  },

  // Blank Template
  1: {
    slide_type: '',
    header: {
      title: null,
      text: null
    },
    content: {
      images: {
        0: {
          src: '',
          alt: '',
          position: '',
          width: ''
        }
      },
      questions: {
        0: {
          showResponse: false,
          question: null,
          options: {
            0: {
              isAnswer: null,
              show: false,
              text: '',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '',
                img: {
                  src: '',
                  alt: ''
                }
              }
            }
          }
        }
      }
    }
  }
}
