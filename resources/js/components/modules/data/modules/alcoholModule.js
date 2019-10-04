export const alcoholModuleSlides = {
  // slide 1 and 2 (combined to fit the design)
  0: {
    slide_type: 'intro',
    content: {
      title: 'Alcohol',
      background_image: 'images/thumbnail/alcohol_thumbnail.jpg',
      goal: 'In this module, we will discuss what alcohol use among college students looks like, what alcohol dependency is, how it can affect your health and wellness, and how you can choose to drink responsibly and make healthier choices.',
      definition: 'Alcohol is a liquid that is produced by the natural brew of sugars and is the main intoxicant in beer, wine, hard liquor, and other drinks.',
      estimated_completion: '15 minutes'
    }
  },
  // slide 3
  1: {
    slide_type: 'info',
    header: {
      header: 'What\'s in a drink?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Do you know how much alcohol is in your drink?',
          1: 'Many college students  are surprised  to learn what counts as a drink.',
          2: 'Different types of beer, wine, and liquor can have differing alcohol percentages.'
        }
      },
      1: {
        image: {
          src: 'images/alcoholModule/alcohol_s03_01.png',
          alt: 'alcohol comparison',
          mobile_size: '1/2',
          tablet_size: '1/2',
          desktop_size: '1/3'
        }
      }
    }
  },
  // slide 4
  2: {
    slide_type: 'info',
    header: {
      header: 'Standard Drink Sizes',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/alcoholModule/alcohol_s04_01.png',
          alt: 'drink sizes comparison',
          y_position: null
        }
      },
      1: {
        paragraph: {
          0: 'As shown in the graphic above, drinking one 12oz beer is equal to taking a 1.5oz shot of tequila. This is because hard liquor has a greater percent of alcohol (about 40%) than beer (about 5%).',
          1: 'That\'s a HUGE difference!'
        }
      }
    }
  },
  // slide 5
  3: {
    slide_type: 'info',
    header: {
      header: 'Fun Fact!',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/alcoholModule/alcohol_s05_01.png',
          alt: 'drink sizes comparison',
          caption: 'The lines on a solo cup can tell you how much of each type of drink to pour.',
          mobile_size: '1/2',
          tablet_size: '1/2',
          desktop_size: '1/3'
        }
      },
      1: {
        paragraph: {
          0: 'How much do you pour in your drink? The next time you\'re at a party, remember to use the lines on the cup!'
        }
      }
    }
  },
  // slide 6
  4: {
    slide_type: 'quiz',
    header: {
      header: null,
      sub_header: null,
      tooltip: 'Select an answer to proceed to the next slide'
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s06_01.png',
          alt: 'alcohol comparison',
          mobile_size: '2/3',
          tablet_size: '1/2',
          desktop_size: '1/3'
        }
      },
      questions: {
        0: {
          showResponse: false,
          question: 'Taking two shots of tequila is the same as which of the following?',
          options: {
            0: {
              isAnswer: false,
              show: false,
              text: 'Four cans of beer (12oz each)',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: 'Nice try! But remember, one standard shot (1.5oz) <b>is the same as</b> one can of beer (12oz)',
                img: {
                  src: 'images/alcoholModule/alcohol_s06_02.png',
                  alt: 'alcohol comparison'
                }
              }
            },
            1: {
              isAnswer: false,
              show: false,
              text: 'Three cans of beer (12oz each)',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: 'Nice try! But remember, one standard shot (1.5oz) <b>is the same as</b> one can of beer (12oz)',
                img: {
                  src: 'images/alcoholModule/alcohol_s06_02.png',
                  alt: 'alcohol comparison'
                }
              }
            },
            2: {
              isAnswer: true,
              show: false,
              text: 'Two cans of beer (12oz each)',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>You are correct!!!</b> One standard shot (1.5oz) is the same as one can of beer (12oz)',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            3: {
              isAnswer: false,
              show: false,
              text: 'One can of beer (12oz each)',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: 'Nice try! But remember, one standard shot (1.5oz) <b>is the same as</b> one can of beer (12oz)',
                img: {
                  src: 'images/alcoholModule/alcohol_s06_02.png',
                  alt: 'alcohol comparison'
                }
              }
            }
          }
        }
      }
    }
  },
  // slide 7
  5: {
    slide_type: 'quiz',
    header: {
      header: null,
      sub_header: null,
      tooltip: 'Select an answer to proceed to the next slide'
    },
    content: {
      images: null,
      questions: {
        0: {
          showResponse: false,
          question: 'Let’s see what you think - which of these pours of Whiskey in a 7oz glass is a standard drink size?',
          options: {
            0: {
              isAnswer: true,
              show: false,
              text: null,
              img: {
                src: 'images/alcoholModule/alcohol_s07_01.png',
                alt: 'glass filled with alcohol one fith\'s of container'
              },
              response: {
                text: '1.5oz<br><b>Great job!</b> This is one standard drink – 1.5 oz of 40% liquor!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: false,
              show: false,
              text: null,
              img: {
                src: 'images/alcoholModule/alcohol_s07_02.png',
                alt: 'glass filled with alcohol two fith\'s of container'
              },
              response: {
                text: '2oz<br>Good try, but this is more than one standard drink!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            2: {
              isAnswer: false,
              show: false,
              text: null,
              img: {
                src: 'images/alcoholModule/alcohol_s07_03.png',
                alt: 'glass filled with alcohol two fourth\'s of container'
              },
              response: {
                text: '3oz<br>Nice guess, but actually, this is the same as <u>two</u> standard drinks!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            3: {
              isAnswer: false,
              show: false,
              text: null,
              img: {
                src: 'images/alcoholModule/alcohol_s07_04.png',
                alt: 'glass filled with alcohol three fourth\'s of container'
              },
              response: {
                text: '4.5oz<br>Whoa, hold your horses there!<br>This is actually 4.5 oz – and that equals <u>three</u> standard drinks!!',
                img: {
                  src: null,
                  alt: null
                }
              }
            }
          }
        }
      }
    }
  },
  // slide 8
  6: {
    slide_type: 'inputComparison',
    header: {
      header: 'What\'s your guess?',
      sub_header: 'Let’s see how you answered compared to the actual percent from the CSUN National College Health Assessment survey.',
      tooltip: 'Fill in the form requirements to proceed to the next slide'
    },
    content: {
      questions: {
        0: {
          question: 'What percent of CSUN students do you think used alcohol in the last 30 days?',
          response: null,
          input: null,
          answer: 49
        },
        1: {
          question: 'What percent of CSUN students do you think had more than 5 drinks in one sitting in the last 30 days?',
          response: null,
          input: null,
          answer: 18
        },
        2: {
          question: 'What percent of CSUN students do you think drove after drinking any alcohol in the last 30 days?',
          response: null,
          input: null,
          answer: 11
        }
      }
    }
  },
  // slide 9
  7: {
    slide_type: 'inputPieChart',
    header: {
      header: 'Here are the answers',
      sub_header: 'Let’s see how your answers compared to the actual percentages from the CSUN National College Health Assessment survey.',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    }
  },
  // slide 10
  8: {
    slide_type: 'info',
    header: {
      header: 'Drinking isn\'t as common as you think.',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'College students often assume that the majority of students drink alcohol.',
          1: 'However, <b>nearly half of students</b> reported having never used alcohol or not used alcohol at all in the last month.',
          2: 'Don’t be misled! These types of assumptions often lead other college students to use alcohol more heavily.'
        }
      },
      1: {
        image: {
          src: 'images/alcoholModule/alcohol_s10_01.jpg',
          alt: 'friends on beach cooking marshmallows',
          y_position: 'bottom'
        }
      }
    }
  },
  // slide 11
  9: {
    slide_type: 'multiQuizQuestion',
    header: {
      header: 'Self-Assessment',
      sub_header: null,
      tooltip: 'Answer the questions to continue to the next slide.'
    },
    content: {
      0: {
        paragraph: {
          0: 'The best judge of whether you are challenged by drinking is you.',
          1: 'Please answer the following questions to figure out the best path for you.'
        }
      },
      1: {
        quiz: {
          questions: {
            0: {
              show: true,
              question: 'I drink to feel connected with friends, numb emotions/thoughts and to deal with stress. After drinking and partying I regret it.',
              response: null,
              input: {
                0: {
                  selected: false,
                  label: 'Yes',
                  result: 'Response yes, q1'
                },
                1: {
                  selected: false,
                  redirect: false,
                  label: 'No',
                  result: 'Response no, q1'
                }
              }
            },
            1: {
              show: false,
              question: 'My drinking is fun but I know it affects my school performance.',
              response: null,
              input: {
                0: {
                  selected: false,
                  label: 'Yes',
                  result: 'Response yes, q2'
                },
                1: {
                  selected: false,
                  label: 'No',
                  result: 'Response no, q2'
                }
              }
            },
            2: {
              show: false,
              question: 'I think I am a heavy drinker.',
              response: null,
              input: {
                0: {
                  selected: false,
                  label: 'Yes',
                  result: 'Response yes, q3'
                },
                1: {
                  selected: false,
                  label: 'No',
                  result: 'Response no, q3'
                }
              }
            }
          }
        }
      }
    }
  },
  // slide 12
  10: {
    slide_type: 'multiQuizQuestionResults',
    header: {
      header: 'Self-Assessment',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide',
      results: {
        case: {
          yes: {
            andAll: false,
            andResponse: '',
            isAndMet: false,
            orAll: true,
            orResponse: 'You might consider making a change to address your concerns. Continuing your current pattern could potentially lead to harmful outcomes.<br> To make a change, having a clear next step in mind can be useful.<br><br> For example:<br> Cut back on how often or how much I drink; never drink and drive; or get help from a counselor at CSUN (<i>see resources</i>).<br> In the next slides, you\'ll learn how you can drink responsibly, or try wellness activities that make you feel great without drinking!',
            isOrMet: false
          },
          no: {
            andAll: true,
            andResponse: 'It\'s good to know you\'re not struggling with these issues. To stay on a healthy path, you\'ll learn more about how you can drink responsibly, and try wellness activities that make you feel great without drinking!',
            isAndMet: false,
            orAll: false,
            orResponse: '',
            isOrMet: false
          }
        },
        responses: null
      }
    },
    content: {
      0: {
        paragraph: {
          0: 'Here are the results based off your responses.'
        }
      }
    }
  },
  // slide 13
  11: {
    slide_type: 'cardFlip',
    header: {
      header: 'Drinking categories',
      sub_header: null,
      tooltip: 'Flip all cards to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      card_flip_count: 0,
      paragraph: {
        0: 'Have you ever seen someone drink more than what they can handle? Have you seen this individual do that more than once?',
        1: 'It might be important to be aware of what the different categories of drinking are.',
        2: '<b>Flip the cards below to learn  of each.</b>'
      },
      cards: {
        0: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s13_01.png',
              alt: 'beer and red wine',
              caption: 'Moderate Drinking'
            },
            question: null
          },
          back: {
            description: 'For gals: 1 < drinks per day.<br> For guys: 2 < drinks per day.'
          }
        },
        1: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s13_02.png',
              alt: 'glass with lime',
              caption: 'Binge Drinking'
            },
            question: null
          },
          back: {
            description: 'For gals: 4+ drinks in 2hrs.<br> For guys: 5+ drinks in 2hrs.'
          }
        },
        2: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s13_03.png',
              alt: 'many different types of alcohol',
              caption: 'Heavy Drinking'
            },
            question: null
          },
          back: {
            description: 'For gals 4+ drinks in 1 night, or 8+ drinks over 1 week.<br> For guys: 5+ drinks in 1 night or 15+ drinks over 1 week.'
          }
        }
      }
    }
  },
  // slide 14
  12: {
    slide_type: 'video',
    header: {
      header: 'What type of drinker is Sarah?',
      sub_header: 'Watch this video to hear a story about Sarah’s week. Pay attention, because you will be quizzed about her drinking after.',
      tooltip: 'Finish the video or await the allotted time to proceed to the next slide'
    },
    content: {
      video_id: 'JfsqxIEQk6U',
      video_length: (30000 / 2) + 5000,
      caption: null
    }
  },
  // slide 15
  13: {
    slide_type: 'quiz',
    header: {
      header: null,
      sub_header: null,
      tooltip: 'Select an answer to proceed to the next slide'
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s06_01.png',
          alt: 'quiz',
          position: 'top',
          width: '1/2'
        }
      },
      questions: {
        0: {
          showResponse: false,
          question: 'After hearing about Sarah’s week, identify which kind of drinker Sarah is.',
          options: {
            0: {
              isAnswer: false,
              show: false,
              text: 'Moderate drinker',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: 'Nice try, but Sarah is considered a heavy drinker, since she had 4 or more drinks in one night, or 8 or more drinks over the course of the week.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: false,
              show: false,
              text: 'Alcoholic',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: 'Nice try, but Sarah is considered a heavy drinker, since she had 4 or more drinks in one night, or 8 or more drinks over the course of the week.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            2: {
              isAnswer: false,
              show: false,
              text: 'Binge drinker',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: 'Nice try, but Sarah is considered a heavy drinker, since she had 4 or more drinks in one night, or 8 or more drinks over the course of the week.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            3: {
              isAnswer: true,
              show: false,
              text: 'Heavy drinker',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>You are correct!</b> Sarah is considered a heavy drinker, since she had 4 or more drinks in one night, or 8 or more drinks over the course of the week.',
                img: {
                  src: null,
                  alt: null
                }
              }
            }
          }
        }
      }
    }
  },
  // slide 16
  14: {
    slide_type: 'video',
    header: {
      header: 'Binge Drinking',
      sub_header: 'Watch the video below to learn about binge drinking.',
      tooltip: 'Watch the video or await the allotted time to proceed to the next slide'
    },
    content: {
      video_id: '5jNEVGj6gS0',
      video_length: (122400 / 2) + 5000,
      caption: 'Drinking with friends at parties can be loads of fun – but if you\'re feeling like you\'re on the slippery binge road (5+ drinks in 2 hours for guys or 4+ drinks in 2 hours for gals), then it\'s time to take a break from the booze!'
    }
  },
  // slide 17
  15: {
    slide_type: 'info',
    header: {
      header: 'Dependency',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'For some students, alcohol use is part of the typical college experience, and many students practice healthy drinking habits by being in control.',
          1: 'However, not everyone who enjoys drinking alcohol stops at just one. Drinking too much alcohol can lead to addiction, alcohol cravings, and in some cases alcohol tolerance and withdrawal.'
        }
      },
      1: {
        image: {
          src: 'images/alcoholModule/alcohol_s17_01.png',
          alt: 'muppets wasted on couch',
          y_position: 'bottom'
        }
      }
    }
  },
  // slide 18
  16: {
    slide_type: 'cardFlip',
    header: {
      header: 'Don\'t become a statistic!',
      sub_header: 'Flip the cards below to find out some statistics about alcohol use on college campuses.',
      tooltip: 'Flip all to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      card_flip_count: 0,
      paragraph: {
        0: 'Drinking irresponsibly can negatively affect your health, your relationships, your academic performance, and your future.'
      },
      cards: {
        0: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s18_01.png',
              alt: 'person drinking beer',
              caption: null
            },
            question: null
          },
          back: {
            description: '50% will binge drink multiple times before they graduate.'
          }
        },
        1: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s18_02.png',
              alt: 'tipsy caution sign',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Drunken students are responsible for 97,000 sexual assaults every year.'
          }
        },
        2: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s18_03.png',
              alt: '2 shadows of people',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Universities report 690,000 alcohol related student assaults annually.'
          }
        },
        3: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s18_04.png',
              alt: 'frustrated person staring at his laptop',
              caption: null
            },
            question: null
          },
          back: {
            description: '25% of students report serious academic consequences of alcohol abuse, including poor grades, suspension, and expulsion.'
          }
        }
      }
    }
  },
  // slide 19
  17: {
    slide_type: 'info',
    header: {
      header: 'Benefits of drinking responsibly',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Drinking in moderation is important for a healthy mind and body. Cutting back how much or how often we drink can make a big difference!',
          1: 'If you drink several days a week, know that alcohol-free days can be beneficial!'
        }
      },
      1: {
        image_grid: {
          0: {
            src: 'images/alcoholModule/alcohol_s19_01.jpg',
            alt: 'One dollar bills',
            caption: 'Save Money',
            mobile_size: '2/3',
            tablet_size: '1/2',
            desktop_size: '1/3'
          },
          1: {
            src: 'images/alcoholModule/alcohol_s19_02.jpg',
            alt: 'person body turned and tilted head staring',
            caption: 'Clearer Skin',
            mobile_size: '2/3',
            tablet_size: '1/2',
            desktop_size: '1/3'
          },
          2: {
            src: 'images/alcoholModule/alcohol_s19_03.jpg',
            alt: 'person with shades smiling at camera',
            caption: 'Better Mood',
            mobile_size: '2/3',
            tablet_size: '1/2',
            desktop_size: '1/3'
          },
          3: {
            src: 'images/alcoholModule/alcohol_s19_04.jpg',
            alt: 'person covering eyes with strawberries smiling',
            caption: 'Reduce Risk of Disease',
            mobile_size: '2/3',
            tablet_size: '1/2',
            desktop_size: '1/3'
          }
        }
      }
    }
  },
  // slide 20
  18: {
    slide_type: 'info',
    header: {
      header: 'Reduced Calorie Intake',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'A cold beer or fruity cocktail might be tasty when out with friends, but those liquid calories add up. Just one 12-ounce beer has about 150 calories, and fruity cocktails are loaded with sugar (some as much as 490!).',
          1: 'Alcohol also slows down our ability to digest food, which can actually contribute to over-eating and weight gain.',
          2: 'Scroll through the carousel below to see the calorie count for different drinks.'
        }
      },
      1: {
        carousel: {
          0: {
            src: 'images/alcoholModule/alcohol_s20_02.png',
            alt: 'beer',
            y_position: null
          },
          1: {
            src: 'images/alcoholModule/alcohol_s20_03.png',
            alt: 'red wine',
            y_position: null
          },
          2: {
            src: 'images/alcoholModule/alcohol_s20_09.png',
            alt: 'white wine',
            y_position: null
          },
          3: {
            src: 'images/alcoholModule/alcohol_s20_07.png',
            alt: 'mojito',
            y_position: null
          },
          4: {
            src: 'images/alcoholModule/alcohol_s20_05.png',
            alt: 'margarita',
            y_position: null
          },
          5: {
            src: 'images/alcoholModule/alcohol_s20_01.png',
            alt: 'gin and tonic',
            y_position: null
          },
          6: {
            src: 'images/alcoholModule/alcohol_s20_06.png',
            alt: 'piña colada',
            y_position: null
          },
          7: {
            src: 'images/alcoholModule/alcohol_s20_04.png',
            alt: 'cosmo',
            y_position: null
          },
          8: {
            src: 'images/alcoholModule/alcohol_s20_08.png',
            alt: '80 proof spirits',
            y_position: null
          }
        }
      }
    }
  },
  // slide 21
  19: {
    slide_type: 'info',
    header: {
      header: 'Better Sleep',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/alcoholModule/alcohol_s21_01.jpg',
          alt: 'person sleeping on couch with comfy blanket',
          y_position: 'bottom'
        }
      },
      1: {
        paragraph: {
          0: 'While drinking may help us fall asleep, it actually leads to a lowered quality of sleep throughout the night.',
          1: 'Drinking can block restorative sleep (known as REM sleep), cause increased bathroom trips during the night, and ultimately lead to restless sleep.'
        }
      }
    }
  },
  // slide 22
  20: {
    slide_type: 'info',
    header: {
      header: 'Better Academic Performance',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/alcoholModule/alcohol_s22_01.PNG',
          alt: 'alcohol infographic on being a factor for academic problems',
          mobile_size: '5/6',
          tablet_size: '1/2',
          desktop_size: '1/3'
        }
      }
    }
  },
  // slide 23
  21: {
    slide_type: 'info',
    header: {
      header: 'Responsible Drinking Checklist',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        photo_list: [
          {
            src: 'images/alcoholModule/alcohol_s23_01.jpg',
            text: 'Eat before you drink.'
          },
          {
            src: 'images/alcoholModule/alcohol_s23_02.jpg',
            text: 'Snack while you drink.'
          },
          {
            src: 'images/alcoholModule/alcohol_s23_03.jpg',
            text: 'For every alcoholic drink that you consume, have a glass of water in between.'
          },
          {
            src: 'images/alcoholModule/alcohol_s23_04.jpg',
            text: 'Know how much you’re drinking!'
          },
          {
            src: 'images/alcoholModule/alcohol_s23_05.jpg',
            text: 'Review what a standard drink is.'
          },
          {
            src: 'images/alcoholModule/alcohol_s23_06.jpg',
            text: 'Make a plan! Before drinking, decide how much you plan to drink and commit.'
          },
          {
            src: 'images/alcoholModule/alcohol_s23_07.jpg',
            text: 'Share your plan with those you plan on going out with…'
          },
          {
            src: 'images/alcoholModule/alcohol_s23_08.jpg',
            text: '…and always look out for each other.'
          },
          {
            src: 'images/alcoholModule/alcohol_s23_10.png',
            text: 'And remember DON\'T DRINK AND DRIVE!',
            warning: true
          }
        ]
      }
    }
  },
  // slide 24
  22: {
    slide_type: 'info',
    header: {
      header: 'Rethink Your Drink!',
      sub_header: 'Have you ever been offered a drink that you didn\'t want, but were afraid to refuse?',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/alcoholModule/alcohol_s24_02.jpg',
          alt: 'No Sign'
        }
      },
      1: {
        paragraph: {
          0: 'If you find yourself in this situation, here are some ways to say no:'
        }
      },
      2: {
        list_element: [
          '"Thanks, but I’ve got a ton of work to do later."',
          '"No thanks, I’m taking medication that I cannot drink with."',
          '"I’m driving tonight." (<i>You can also offer to be the designated driver!</i>)',
          '"I’d rather get a soda, thanks."',
          '"I have a game/practice tomorrow."',
          '"I’m OK for now!" (<i>You can BYOC (bring your own cup) and keep it filled with something other than alcohol!</i>)'
        ]
      },
      3: {
        paragraph: {
          0: '<b>Remember...YOU are in control!</b>',
          1: 'For more help and information regarding this topic, please see the resource in the App menu.'
        }
      }
    }
  },
  // slide 25
  23: {
    slide_type: 'cardFlip',
    header: {
      header: 'Should I take an Uber?',
      sub_header: null,
      tooltip: 'Flip all the cards to proceed to the next slide'
    },
    content: {
      card_break: true,
      cards_flipped: false,
      card_flip_count: 0,
      paragraph: {
        0: 'It\'s time to sober up and look at the facts. Drinking and driving is no joke. The #1 cause of death among college students is car accidents.',
        1: 'It\'s okay to drink, just don\'t get behind the wheel or allow others to drive if they\'ve been drinking. Consider how long it would take to sober up after drinking, or better yet – take an Uber!',
        2: 'Flip the card below to read about drunk driving in California.'
      },
      cards: {
        0: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s25_01.png',
              alt: 'don\'t drink and drive sign',
              caption: null
            },
            question: null
          },
          back: {
            description: 'If your Blood Alcohol Concentration (BAC) is above .08%, it is illegal for you to drive. Even if your BAC is below this percentage, you can still risk a DUI.<br> If you are under 21, there is a ZERO TOLERANCE policy - <i>any amount of alcohol in your system will get you a DUI.</i>'
          }
        }
      }
    }
  },
  // slide 26
  24: {
    slide_type: 'info',
    header: {
      header: 'Sobering Up Takes Time!',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Many factors affect how your body absorbs alcohol into the blood - such as how much and how fast you drink, your weight, gender, and if you had food in your stomach.',
          1: 'There is no way to speed up the rate your body metabolizes/gets rid of alcohol after drinking (nope, not that cup of coffee either!).',
          2: 'A general rule is that it will burn off <b><u>about</u> 1 standard drink per 1 to 1 ½ hours.</b>'
        }
      },
      1: {
        image: {
          src: 'images/alcoholModule/alcohol_s26_01.png',
          alt: 'wine infographic cartoon',
          y_position: 'bottom',
          mobile_size: '1/2',
          tablet_size: '1/3',
          desktop_size: '1/4'
        }
      }
    }
  },
  // slide 27
  25: {
    slide_type: 'quiz',
    header: {
      header: "Melita's night out",
      sub_header: null,
      tooltip: 'Select an answer to proceed to the next slide'
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s06_01.png',
          alt: 'quiz',
          position: 'top',
          width: '1/2'
        }
      },
      questions: {
        0: {
          showResponse: false,
          question: 'Melita goes out with her friends to celebrate finishing finals. Between 6pm and 10pm she has already had two beers at her friend\'s house, and another three mojitos at the club. How long will it take Melita to sober up before driving home?',
          options: {
            0: {
              isAnswer: false,
              show: false,
              text: '1 hours',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>It is uncertain, she should not get behind the wheel tonight!</b> Blood Alcohol Concentration (BAC) can depend on weight, gender and amount of food eaten.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: false,
              show: false,
              text: '2 hours',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>It is uncertain, she should not get behind the wheel tonight!</b> Blood Alcohol Concentration (BAC) can depend on weight, gender and amount of food eaten.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            2: {
              isAnswer: false,
              show: false,
              text: '3 hours',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>It is uncertain, she should not get behind the wheel tonight!</b> Blood Alcohol Concentration (BAC) can depend on weight, gender and amount of food eaten.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            3: {
              isAnswer: true,
              show: false,
              text: 'Uncertain, Melita should take an Uber or get a ride with a designated driver!',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Correct!</b> Blood Alcohol Concentration (BAC) can depend on weight, gender and amount of food eaten.',
                img: {
                  src: null,
                  alt: null
                }
              }
            }
          }
        }
      }
    }
  },
  // slide 28
  26: {
    slide_type: 'info',
    header: {
      header: 'Healthy Alternatives',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Sometimes we drink to feel connected with friends, to numb emotions and thoughts, or deal with stress.',
          1: 'But drinking isn\'t the only way to make us feel good or help us tackle life\'s challenges! ',
          2: 'There are many healthy alternatives to boost health and wellness. Research shows physical, mental and social activities can improve our overall wellness.'
        }
      },
      1: {
        image: {
          src: 'images/alcoholModule/alcohol_s28_01.jpg',
          alt: 'People jumping on the beach.'
        }
      }
    }
  },
  // slide 29
  27: {
    slide_type: 'info',
    header: {
      header: 'Physical Activities',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Our bodies produce the same hormone (<i>known as dopamine</i>) during exercise as we do while drinking. This means that we can get an awesome high from a trip to the gym or a soccer match!',
          1: 'Working out is also a great stress reliever. Try going for a run to relieve stress instead of reaching for a glass. Your mind and body will thank you later on!'
        }
      },
      1: {
        image: {
          src: 'images/alcoholModule/alcohol_s29_01.jpg',
          alt: 'two people running next to a lake'
        }
      }
    }
  },
  // slide 30
  28: {
    slide_type: 'info',
    header: {
      header: 'Social Activities',
      sub_header: 'Hanging out with friends can be super fun, even without alcohol. Going out to the movies, meeting up for an amazing sunset hike; or checking out the latest art show can be equally memorable!',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/alcoholModule/alcohol_s30_01.jpg',
          alt: 'friends holding each other on top of a hill',
          caption: 'Did you know, the Student Recreation Center has an <b>Outdoor Adventures program</b>?'
        }
      },
      1: {
        image: {
          src: 'images/alcoholModule/alcohol_s30_02.jpg',
          alt: 'people putting hands in the middle for teamwork',
          caption: 'Links to social activities are in the resources tab.'
        }
      },
      2: {
        paragraph: {
          0: 'Joining a team or an organization can lead to meaningful connections and friendships! The Matador Involvement Center has many options.'
        }
      }
    }
  },
  // slide 31
  29: {
    slide_type: 'cardFlip',
    header: {
      header: 'Mind-Body Activities',
      sub_header: null,
      tooltip: 'Flip all the cards to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      card_flip_count: 0,
      paragraph: {
        0: 'By practicing mindfulness and yoga, you can improve mood, reduce stress, and enhance focus and attention.',
        1: 'Rather than using substances, you can cope with difficult emotions by connecting with your mind and body.',
        2: '<b>Flip the cards below.</b>'
      },
      cards: {
        0: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s31_01.jpg',
              alt: 'person staring at the sky',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Through mindfulness you pay attention to the present moment and sensations you might usually ignore.'
          }
        },
        1: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s31_02.jpg',
              alt: 'person doing yoga on building',
              caption: null
            },
            question: null
          },
          back: {
            description: 'According to the Mayo Clinic, yoga can help you relax and manage stress and anxiety.'
          }
        }
      }
    }
  },
  // slide  32
  30: {
    slide_type: 'emailForm',
    header: {
      header: 'Set a wellness goal!',
      sub_header: 'Now is a great time to set a wellness goal to practice responsible drinking; or if you don\'t drink, then to improve your overall health!',
      tooltip: null
    },
    content: {
      textAreaPlaceHolder: 'For example, "Next week I will plan to drink one fewer drink than normal when I go out with friends." Or, \n "I\'ll work out at least once next week for 30 minutes!"'
    }
  },
  // slide 33
  31: {
    slide_type: 'finalSlide',
    header: {
      header: null
    },
    content: {
      0: {
        paragraph: {
          0: 'Thank you for completing this module!',
          1: 'You will receive an email notification from iSTART when the next module becomes available in 5 days. You will receive another gift card after you complete the next module!'
        }
      }
    }
  }
}
export default alcoholModuleSlides
