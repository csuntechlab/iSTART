export default {
  // Example Usage
  0: {
    slide_type: 'inputComparison', // Required
    header: {
      title: 'What’s your guess?',
      text: null
    },
    content: {
      questions: {
        0: {
          question: 'What percent of CSUN students do you think used alcohol in the last 30 days?',
          response: null, // Required; always the same
          input: null, // Required; always the same
          answer: 49 // Required; percent as number; survey results
        }
      }
    }
  },

  // Blank Template
  1: {
    slide_type: 'inputComparison',
    header: {
      title: null,
      text: null
    },
    content: {
      questions: {
        0: {
          question: '',
          response: null,
          input: null,
          answer: 0
        }
      }
    }
  }
}
