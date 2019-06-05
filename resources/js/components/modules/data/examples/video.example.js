export default {
  // Example Usage
  0: {
    slide_type: 'video', // Type: string; Required, always the same
    header: {
      title: 'What type of drinker is Sarah?', // Type: string; Optional, text which appears before the text
      text: 'Watch this video to hear a story about Sarah’s week. Pay attention, because you will be quizzed about her drinking after.' // Type: string; Optional, text which appears before the video
    },
    content: {
      video_id: 'JfsqxIEQk6U', // Type: string; Required, uses youtube video id
      caption: null // Type: string; Optional, text after video
    }
  },

  // Blank Template
  1: {
    slide_type: '',
    header: {
      title: '',
      text: ''
    },
    content: {
      video_id: '',
      caption: null
    }
  }
}
