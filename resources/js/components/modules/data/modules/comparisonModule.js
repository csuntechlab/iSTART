export const comparisonModuleSlides = {
  // slide 1 and 2 (combined to fit the design)
  0: {
    slide_type: 'intro',
    content: {
      title: 'Substance Use Prevention',
      background_image: 'images/thumbnail/comparison-module_thumbnail.jpg',
      goal: null,
      definition: null,
      estimated_completion: '30 minutes'
    }
  },
  1: {
    slide_type: 'info',
    header: {
      header: 'Substance 1: Alcohol',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/thumbnail/alcohol_thumbnail.jpg',
          alt: 'alcohol',
          size: 'informational'
        }
      },
      1: {
        paragraph: {
          0: '<b>Definition</b>',
          1: 'Alcohol is a liquid that is produced by the natural brew of sugars and is the main intoxicant in beer, wine, hard liquor, and other drinks.'
        }
      }
    }
  },
  2: {
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
          size: 'informational'
        }
      }
    }
  },
  3: {
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
          size: 'informational'
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
  4: {
    slide_type: 'info',
    header: {
      header: 'Side Effects of Alcohol',
      sub_header: 'Have you ever been offered a drink that you didn\'t want, but were afraid to refuse?',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        list_element: [
          'Risk of developing addiction or dependency.',
          'Disturbed sleeping patterns.',
          'Slowed ability to digest food, which can actually contribute to over-eating and weight gain.',
          'Poor academic performance with prolonged use.'
        ]
      },
      1: {
        image: {
          src: 'images/alcoholModule/alcohol_s21_01.jpg',
          alt: 'person sleeping on couch with comfy blanket'
        }
      }
    }
  },
  5: {
    slide_type: 'cardFlip',
    header: {
      header: 'Don\'t become a statistic!',
      sub_header: null,
      tooltip: 'Flip all to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      paragraph: {
        0: 'Flip the cards below to find out some statistics about alcohol use on college campuses.',
        1: 'Drinking irresponsibly can negatively affect your health, your relationships, your academic performance, and your future.'
      },
      cards: {
        0: {
          was_flipped: false,
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
          was_flipped: false,
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
          was_flipped: false,
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
          was_flipped: false,
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
  6: {
    slide_type: 'inputComparison',
    header: {
      header: 'What\'s your guess?',
      sub_header: null,
      tooltip: 'Fill in the form requirements to proceed to the next slide'
    },
    content: {
      questions: {
        0: {
          hasResponded: false,
          isValidated: false,
          question: 'What percent of CSUN students do you think used alcohol in the last 30 days?',
          userResponse: null,
          answer: 49
        },
        1: {
          hasResponded: false,
          isValidated: false,
          question: 'What percent of CSUN students do you think had more than 5 drinks in one sitting in the last 30 days?',
          userResponse: null,
          answer: 18
        },
        2: {
          hasResponded: false,
          isValidated: false,
          question: 'What percent of CSUN students do you think drove after drinking any alcohol in the last 30 days?',
          userResponse: null,
          answer: 11
        }
      }
    }
  },
  7: {
    slide_type: 'inputPieChart',
    header: {
      header: 'Your Guess vs. Actual Percentage',
      sub_header: 'Let’s see how your answers compared to the actual percentages from the CSUN National College Health Assessment survey.',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    }
  },
  8: {
    slide_type: 'info',
    header: {
      header: 'Responsible Drinking Checklist for Alcohol',
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
  9: {
    slide_type: 'info',
    header: {
      header: 'Substance 2: Marijuana',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/thumbnail/marijuana_thumbnail.jpg',
          alt: 'alcohol',
          size: 'informational'
        }
      },
      1: {
        paragraph: {
          0: '<b>Definition</b>',
          1: 'Cannabis, or marijuana, is a psychoactive drug derived from the Cannabis plant. It contains a mind-altering chemical called THC, responsible for the intoxicating effects (the high) that people seek for recreational purposes.'
        }
      }
    }
  },
  10: {
    slide_type: 'cardFlip',
    header: {
      header: 'Recreational vs. Medicinal Use',
      sub_header: null,
      tooltip: 'Flip all the cards to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      paragraph: {
        0: 'Let\'s first discuss the two main chemicals that make up the different cannabis strains: THC and CBD.',
        1: '<b>Flip the cards below to learn more.</b>'
      },
      cards: {
        0: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/marijuanaModule/mar_s03_01.png',
              alt: 'thc',
              caption: null
            },
            question: null
          },
          back: {
            description: 'For recreational use: THC is the main psychoactive component that creates the \'high\'.'
          }
        },
        1: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/marijuanaModule/mar_s03_02.png',
              alt: 'cbd',
              caption: null
            },
            question: null
          },
          back: {
            description: 'For medicinal use: CBD is a chemical that may relieve pain with little to no brain impairment.'
          }
        }
      }
    }
  },
  11: {
    slide_type: 'cardFlip',
    header: {
      header: 'How does marijuana affect the brain?',
      sub_header: null,
      tooltip: 'Flip all the cards to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      paragraph: {
        0: 'What\'s really going on inside your brain every time you use marijuana?',
        1: '<b>Flip the cards to learn how marijuana affects the brain.</b>'
      },
      cards: {
        0: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/marijuanaModule/mar_s17_01.jpg',
              alt: 'puzzle brain',
              caption: null
            },
            question: null
          },
          back: {
            description: '<b>Memory Impairment</b><br> THC alters how info is processed in the hippocampus, a part of the brain responsible for memory formation.'
          }
        },
        1: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/marijuanaModule/mar_s17_02.jpg',
              alt: 'distorted analog clock',
              caption: null
            },
            question: null
          },
          back: {
            description: '<b>Distortion of Time</b><br> Increased marijuana use can alter blood flow to the cerebellum, which plays a role in our sense of time.'
          }
        },
        2: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/marijuanaModule/mar_s17_03.png',
              alt: 'shadow of person fading away',
              caption: null
            },
            question: null
          },
          back: {
            description: '<b>Increased Risk of Depression</b><br> Research shows smoking weed may raise the risk of depression for young people who have a special serotonin gene.'
          }
        }
      }
    }
  },
  12: {
    slide_type: 'info',
    header: {
      header: 'What are the long-term effects of marijuana use?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Even small amounts every day can be unsafe! Daily use may greatly harm one\'s health, causing:'
        }
      },
      1: {
        list_element: [
          'Feelings of anxiety and paranoia',
          'Temporary psychosis',
          'Long-lasting mental disorders like schizophrenia'
        ]
      },
      2: {
        image: {
          src: 'images/marijuanaModule/mar_s18_01.png',
          alt: 'marijuana brain',
          size: 'symbol'
        }
      }
    }
  },
  13: {
    slide_type: 'info',
    header: {
      header: 'Academic Performance',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'It\'s important to keep those grades up! Don\'t let weed drag you down.',
          1: 'Research shows that students who smoke weed have worse grades than their nonsmoking peers.'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s19_01.jpg',
          alt: 'student racking brain'
        }
      },
      2: {
        paragraph: {
          0: 'Additionally, those who smoke marijuana daily may be studying at a reduced intellectual level most (or all) of the time.',
          1: 'Heavy users of marijuana can also have short-term problems with attention, memory, and learning.'
        }
      }
    }
  },
  14: {
    slide_type: 'info',
    header: {
      header: 'What\'s legal in California?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Recently, California became one of the first states to legalize recreational cannabis use (in 2018). But what does that actually mean?'
        }
      },
      1: {
        carousel: {
          0: {
            src: 'images/marijuanaModule/mar_s21_04.png',
            alt: 'cannot drive under the influence',
            y_position: null
          },
          1: {
            src: 'images/marijuanaModule/mar_s21_02.png',
            alt: 'illegal in restricted places',
            y_position: null
          },
          2: {
            src: 'images/marijuanaModule/mar_s21_03.png',
            alt: 'cannot possess more than an ounce',
            y_position: null
          },
          3: {
            src: 'images/marijuanaModule/mar_s21_05.png',
            alt: 'cannot cross state lines',
            y_position: null
          }
        }
      }
    }
  },
  15: {
    slide_type: 'inputComparison',
    header: {
      header: 'What\'s your guess?',
      sub_header: null,
      tooltip: 'Fill in the form requirements to proceed to the next slide'
    },
    content: {
      questions: {
        0: {
          hasResponded: false,
          isValidated: false,
          question: 'What percent of CSUN students do you think used marijuana in the past 30 days?',
          userResponse: null,
          answer: 23
        }
      }
    }
  },
  16: {
    slide_type: 'inputPieChart',
    header: {
      header: 'Your Guess vs. Actual Percentage',
      sub_header: 'Let’s see how your answers compare to the actual percentages from the CSUN National College Health Assessment survey.',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    }
  },
  17: {
    slide_type: 'info',
    header: {
      header: 'Responsible Marijuana Use Checklist',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'For those who choose to use recreational cannabis, here are a few tips to help keep you safe.'
        }
      },
      1: {
        photo_list: [
          {
            src: 'images/marijuanaModule/mar_s24_01.png',
            text: 'Be wary of high-potency THC and excessive use'
          },
          {
            src: 'images/marijuanaModule/mar_s24_02.png',
            text: 'Stay away from synthetic cannabis products (they’re dangerous and illegal!)'
          },
          {
            src: 'images/marijuanaModule/mar_s24_03.png',
            text: 'Don\'t mix marijuana with alcohol!'
          },
          {
            src: 'images/marijuanaModule/mar_s24_04.png',
            text: 'Don\'t drive while high (it\'s a DUI!)'
          },
          {
            src: 'images/marijuanaModule/mar_s24_05.png',
            text: 'Lock up & keep away from those under 21 and also from your pets.'
          },
          {
            src: 'images/marijuanaModule/mar_s24_06.png',
            text: 'Don\'t use if pregnant or have a personal or family history of psychosis.'
          }
        ]
      },
      2: {
        paragraph: {
          0: 'As more research becomes available, stay in the know and consult official sources.'
        }
      }
    }
  },
  18: {
    slide_type: 'info',
    header: {
      header: 'Substance 3: Nicotine',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/thumbnail/nicotine_thumbnail.jpg',
          alt: 'nicotine',
          size: 'informational'
        }
      },
      1: {
        paragraph: {
          0: '<b>Definition</b>',
          1: 'Tobacco is a plant grown for its leaves, which are processed into tobacco products. People can smoke, chew, or sniff tobacco. Many tobacco products contain nicotine, which is an addictive chemical.'
        }
      }
    }
  },
  19: {
    slide_type: 'info',
    header: {
      header: 'Nicotine',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'It\'s easy to get hooked. Whether smoked or vaped, nicotine is a powerfully addictive substance. As addictive as cocaine, and even more so than alcohol!',
          1: 'It\'s no surprise that nicotine can harm our bodies. The toxic vape smoke we inhale can damage our lungs and heart.'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s03_01.png',
          alt: 'no vaping',
          size: 'symbol'
        }
      }
    }
  },
  20: {
    slide_type: 'cardFlip',
    header: {
      header: 'What\'s in a cigarette?',
      sub_header: null,
      tooltip: 'Flip all the cards to proceed to the next slide'
    },
    content: {
      card_break: true,
      cards_flipped: false,
      paragraph: {
        0: '<b>Flip the cards to see what\'s inside!</b>'
      },
      cards: {
        0: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s05_01.png',
              alt: 'cigarette filter',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Filters are intended to reduce smoke inhaled, but are not that effective!'
          }
        },
        1: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s05_02.png',
              alt: 'cigarrette',
              caption: null
            },
            question: null
          },
          back: {
            description: 'This paper has small holes to dilute the toxic chemicals inhaled; but the holes get blocked by your fingers or lips so they don\'t help!'
          }
        },
        2: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s05_03.png',
              alt: 'cigarrette',
              caption: null
            },
            question: null
          },
          back: {
            description: 'The filter is made of chopped tobacco leaves, stems and scraps. When burned, you breathe in its hazardous chemicals.'
          }
        }
      }
    }
  },
  21: {
    slide_type: 'info',
    header: {
      header: 'What other ingredients are in cigarettes?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Unlike the food we eat, cigarettes don\'t label ingredients. Manufacturers may add hundreds of ingredients to a cigarette. These make a cigarette more addictive, and are often toxic!',
          1: 'Below are some of the things you could be ingesting.'
        }
      },
      1: {
        image: {
          src: 'images/comparisonModule/comp_01.png',
          alt: 'acetone, acetic acid, ammonia, arsenic, butane, cadmium, tar, toluene',
          mobile_size: '1/2',
          tablet_size: '2/3',
          desktop_size: '2/3'
        }
      }
    }
  },
  22: {
    slide_type: 'info',
    header: {
      header: 'Is hookah considered smoking?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Hookah tobacco exposes people to the addictive chemical nicotine and contains many of the same toxic chemicals that are in cigarettes.'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s07_01.png',
          alt: 'hookah',
          size: 'clipart'
        }
      }
    }
  },
  23: {
    slide_type: 'info',
    header: {
      header: 'Did you know?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/nicotineModule/nic_s11_01.png',
          alt: 'hookah comparison to cigarettes',
          size: 'informational'
        }
      },
      1: {
        paragraph: {
          0: 'While hanging out and smoking hookah can be fun, think twice about how much smoke you inhale; and how much secondhand smoke you\'re exposed to!'
        }
      }
    }
  },
  24: {
    slide_type: 'info',
    header: {
      header: 'Vaping',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Vapes, vaporizers, vape pens, hookah pens, e-cigs, and e-pipes can all have nicotine, just like cigarettes.',
          1: 'These products use an “e-liquid” that contains nicotine and flavorings. When heated, chemicals are inhaled, making vaping possibly as harmful as smoking, if not more!'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s13_01.jpg',
          alt: 'vape'
        }
      }
    }
  },
  25: {
    slide_type: 'info',
    header: {
      header: 'What\'s in vape smoke?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Vape smoke is NOT harmless “water vapor”. While vaping, users breathe and exhale potentially harmful substances: '
        }
      },
      1: {
        list_element: [
          'Nicotine',
          'Ultrafine particles',
          'Cancer causing chemicals'
        ]
      },
      2: {
        image: {
          src: 'images/nicotineModule/nic_s14_01.png',
          alt: 'smoke',
          size: 'informational'
        }
      }
    }
  },
  26: {
    slide_type: 'inputComparison',
    header: {
      header: 'What\'s your guess?',
      sub_header: null,
      tooltip: 'Fill in the form requirements to proceed to the next slide'
    },
    content: {
      questions: {
        0: {
          hasResponded: false,
          isValidated: false,
          question: 'What percent of CSUN students do you think used cigarettes in the last 30 days?',
          userResponse: null,
          answer: 7
        },
        1: {
          hasResponded: false,
          isValidated: false,
          question: 'What percent of CSUN students do you think used e-cigs/vaped in the last 30 days?',
          userResponse: null,
          answer: 7
        },
        2: {
          hasResponded: false,
          isValidated: false,
          question: 'What percent of CSUN students do you think used tobacco from a water pipe (Hookah) in the last 30 days?',
          userResponse: null,
          answer: 7
        }
      }
    }
  },
  27: {
    slide_type: 'inputPieChart',
    header: {
      header: 'Your Guess vs. Actual Percentage',
      sub_header: 'Let’s see how your answers compare to the actual percentages from the CSUN National College Health Assessment survey.',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    }
  },
  28: {
    slide_type: 'cardFlip',
    header: {
      header: 'Smoke-free Benefits',
      sub_header: null,
      tooltip: 'Flip all cards to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      paragraph: {
        0: 'Being smoke or vape free means the body and mind can function at its best.',
        1: '<b>Flip the cards to learn the many benefits to being smoke/vape free.</b>'
      },
      cards: {
        0: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s26_01.png',
              alt: 'head/face',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul><li>Better hearing & vision</li><li>Cleaner mouth</li><li>Clearer skin</li></ul>'
          }
        },
        1: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s26_02.png',
              alt: 'heart',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul><li>Reduced chance of a blood clot</li><li>Lower cholesterol & blood pressure</li><li>Lowered risk of a heart attack</li></ul>'
          }
        },
        2: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s26_03.png',
              alt: 'Lungs',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul><li>Stops lung damage</li><li>Prevents emphysema</li></ul>'
          }
        },
        3: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s26_04.png',
              alt: 'muscles/bones',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul><li>Stronger, healthier muscles</li><li>Stronger bones and lowered risk of fractures</li></ul>'
          }
        },
        4: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s26_05.png',
              alt: 'blood/immune system',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul><li>Normal white blood cell count</li><li>Proper healing</li><li>Stronger immune system</li></ul>'
          }
        },
        5: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s26_06.png',
              alt: 'dna',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul><li>Lowered risk of cancer</li></ul>'
          }
        }
      }
    }
  },
  29: {
    slide_type: 'info',
    header: {
      header: 'CSUN Clear the Air!',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Those who smoke also put others at risk by exposing them to secondhand smoke! The only way to fully protect everyone is to eliminate smoking in all places.'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s31_01.png',
          alt: 'csun clean air',
          size: '1'
        }
      },
      2: {
        paragraph: {
          0: 'Smoke and tobacco products (e-cigarettes and vape pens!) are not allowed anywhere on CSUN\'s campus; not even in the parking lots or near your favorite picnic table.',
          1: 'CA law also prohibits smoking inside any public building and within 20 feet of any building, anywhere in CA!'
        }
      }
    }
  },
  30: {
    slide_type: 'info',
    header: {
      header: 'Substance 4: Prescription Drugs',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/thumbnail/prescription-drugs_thumbnail.jpg',
          alt: 'prescription',
          size: 'informational'
        }
      },
      1: {
        paragraph: {
          0: '<b>Definition</b>',
          1: 'A prescription drug (also known as Rx or prescription medication) is a pharmaceutical drug that requires a medical prescription to be legally dispensed.'
        }
      }
    }
  },
  31: {
    slide_type: 'info',
    header: {
      header: 'What\'s the concern?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Many students may not realize that they, or someone they know, are misusing or abusing prescription (Rx) medications.',
          1: 'When used the right way and under a doctor’s supervision, Rx drugs can be a safe and effective treatment. However, when used the wrong way, and without a prescription, Rx drugs can be dangerous.'
        }
      },
      1: {
        image: {
          src: 'images/prescriptionDrugsModule/RxDrugs_s03_01.png',
          alt: 'hand with medicaiton'
        }
      }
    }
  },
  32: {
    slide_type: 'cardFlip',
    header: {
      header: 'Drug Use, Misuse and Abuse',
      sub_header: null,
      tooltip: 'Flip all the cards to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      paragraph: {
        0: '<b>Flip the cards</b> below to learn more.'
      },
      cards: {
        0: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/prescriptionDrugsModule/RxDrugs_s04_01.png',
              alt: 'Use'
            },
            question: null
          },
          back: {
            description: 'Taking a Rx drug exactly as it was prescribed by your healthcare professional.'
          }
        },
        1: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/prescriptionDrugsModule/RxDrugs_s04_02.png',
              alt: 'Misuse',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Taking your own Rx meds differently (higher dose) than prescribed, or taking a friend’s pills not prescribed to you.'
          }
        },
        2: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/prescriptionDrugsModule/RxDrugs_s04_03.png',
              alt: 'Abuse',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Intentionally using a prescription drug to experiment with, feel good, or get “high”.'
          }
        }
      }
    }
  },
  33: {
    slide_type: 'info',
    header: {
      header: 'Commonly Abused Rx Drugs',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Stimulants'
        }
      },
      1: {
        list_element: [
          'Ritalin, Adderal, & Dexedrine',
          'College students misuse Rx stimulants to "get in the zone" or pull all night study sessions - a habit that is most likely to begin in college'
        ]
      },
      2: {
        paragraph: {
          0: 'Anti-anxiety/Sedatives'
        }
      },
      3: {
        list_element: [
          'Xanax, Valium, & Ambien',
          'College can be stressful and some students might misuse these drugs to reduce stress, to be able to sleep, or be more relaxed at social scenes/parties'
        ]
      },
      4: {
        paragraph: {
          0: 'Opioids/Pain Killers'
        }
      },
      5: {
        list_element: [
          'Oxycontin, Percocet, & Norco',
          'College students may take Rx opioids to get high or drown out life\'s problems. But these painkillers are highly addictive, and can lead to dangerous habits.'
        ]
      }
    }
  },
  34: {
    slide_type: 'inputComparison',
    header: {
      header: 'What\'s your guess?',
      sub_header: 'What percent of CSUN students do you think took prescription drugs without a prescription/or in a way not prescribed to them in the past year?',
      tooltip: 'Fill in the form requirements to proceed to the next slide'
    },
    content: {
      questions: {
        0: {
          hasResponded: false,
          isValidated: false,
          question: 'Stimulants?',
          userResponse: null,
          answer: 9
        },
        1: {
          hasResponded: false,
          isValidated: false,
          question: 'Pain Relievers/Opioids?',
          userResponse: null,
          answer: 9
        },
        2: {
          hasResponded: false,
          isValidated: false,
          question: 'Sedatives/anti-anxiety?',
          userResponse: null,
          answer: 12
        },
        3: {
          hasResponded: false,
          isValidated: false,
          question: 'Anti-depression?',
          userResponse: null,
          answer: 3
        }
      }
    }
  },
  35: {
    slide_type: 'inputPieChart',
    header: {
      header: 'Here are the results',
      sub_header: 'Let’s see how your answers compare to the actual percentages from the CSUN National College Health Assessment survey.',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    }
  },
  36: {
    slide_type: 'info',
    header: {
      header: 'Painkiller Alternatives',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Most people struggling with opioid addiction got their first opioid Rx to treat a short-term injury or after surgery.',
          1: 'To manage pain, opt out of opioids! Some of the options listed below may work better and have fewer risks and side effects.',
          2: 'Talk with your healthcare professional about alternatives to opioids:'
        }
      },
      1: {
        list_element: [
          'A combination of Tylenol and Ibuprofen',
          'Naproxen (Aleve)',
          'Physical Therapy',
          'Exercise',
          'Cognitive behavioral therapy',
          'Mindfulness-based stress reduction (MBSR)'
        ]
      },
      2: {
        image: {
          src: 'images/prescriptionDrugsModule/RxDrugs_s27_01.png',
          alt: 'person deciding on which path to take',
          size: 'symbol'
        }
      }
    }
  },
  37: {
    slide_type: 'info',
    header: {
      header: 'Substance 5: Illicit Drugs',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/thumbnail/illicit-drugs_thumbnail.jpg',
          alt: 'illicit drugs',
          size: 'informational'
        }
      },
      1: {
        paragraph: {
          0: '<b>Definition</b>',
          1: 'Illicit drugs are illegal substances that can stimulate (such as cocaine) or inhibit (such as heroine) the central nervous system, or can cause hallucinations such as PCP (angel dust). Many illicit drugs are highly addictive.'
        }
      }
    }
  },
  38: {
    slide_type: 'info',
    header: {
      header: 'Illicit Drug Use in College',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'College is often the first time young people live away from home and start making health decisions on their own.',
          1: 'This might also be a time when many college students are introduced to illicit drugs, which can greatly impact health and academics.',
          2: 'The good news is that the majority of students DON\'T use illicit drugs in college! However, it\'s still important to know about common illicit drugs and their multiple side effects.',
          3: 'Some of the most common illicit drugs are: ecstasy/MDMA, cocaine, heroine, fentanyl, and synthetic marijuana. Continue on to learn more about the side effects of each.'
        }
      }
    }
  },
  39: {
    slide_type: 'info',
    header: {
      header: 'Side Effects of MDMA/Ecstasy',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        image: {
          src: 'images/comparisonModule/comp_02.jpg',
          alt: 'memory impairment, attention impairment, anxiety, aggression, irritability, depression, sleep disturbances',
          mobile_size: '2/3',
          tablet_size: '5/6',
          desktop_size: '2/3'
        }
      }
    }
  },
  40: {
    slide_type: 'info',
    header: {
      header: 'Side Effects of Synthetic Marijuana',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Some people who use Spice/K2 have been taken to emergency rooms with serious side effects including:'
        }
      },
      1: {
        list_element: [
          'severe bleeding',
          'rapid heart rate',
          'vomiting',
          'violent behavior',
          'suicidal thoughts'
        ]
      },
      2: {
        paragraph: {
          0: 'Synthetic cannabinoids can also raise blood pressure, cause reduced blood supply to the heart, and lead to seizures and kidney damage.',
          1: 'Use of these drugs is linked to a rising number of deaths - call 911 if you or anyone you know becomes sick after using Spice/K2!'
        }
      },
      3: {
        image: {
          src: 'images/illicitDrugsModule/ill_s09_01.png',
          alt: 'paramedic infographic',
          size: 'clipart'
        }
      }
    }
  },
  41: {
    slide_type: 'cardFlip',
    header: {
      header: 'Cocaine Use and Side Effects',
      sub_header: null,
      tooltip: 'Flip all the cards to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      paragraph: {
        0: 'Remember, regardless of how you use it, it\'s still cocaine! And if used with other drugs, like opioids or alcohol, the consequences can be very serious and even life-threatening.',
        1: '<b>Flip the cards below</b> to learn the side effects from different uses of cocaine.'
      },
      cards: {
        0: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/illicitDrugsModule/ill_s13_01.png',
              alt: 'smoking',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Smoking: Cough, asthma, and higher risk for infections like pneumonia.'
          }
        },
        1: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/illicitDrugsModule/ill_s13_04.png',
              alt: 'snorting',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Snorting: loss of smell, nosebleeds, frequent runny nose, and problems swallowing.'
          }
        },
        2: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/illicitDrugsModule/ill_s13_02.png',
              alt: 'consuming',
              caption: null
            },
            question: null
          },
          back: {
            description: 'By mouth: severe bowel decay from reduced blood flow.'
          }
        },
        3: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/illicitDrugsModule/ill_s13_03.png',
              alt: 'injecting',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Needle injection: higher risk for HIV, Hep-C, and other blood diseases, & scarring or collapsed veins.'
          }
        }
      }
    }
  },
  42: {
    slide_type: 'info',
    header: {
      header: 'What other ingredients are in cigarettes?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Unlike the food we eat, cigarettes don\'t label ingredients. Manufacturers may add hundreds of ingredients to a cigarette. These make a cigarette more addictive, and are often toxic!',
          1: 'Below are some of the things you could be ingesting.'
        }
      },
      1: {
        image: {
          src: 'images/comparisonModule/comp_03.png',
          alt: 'insomnia, liver disease, nausea & vomiting, mental disorder, kidney disease, severe itching, constipation, going on the nod',
          mobile_size: '1/2',
          tablet_size: '2/3',
          desktop_size: '2/3'
        }
      }
    }
  },
  43: {
    slide_type: 'inputComparison',
    header: {
      header: 'What\'s your guess?',
      sub_header: 'During the last 30 days, how many CSUN students do you think used each of the following illicit drugs?',
      tooltip: 'Fill in the form requirements to proceed to the next slide'
    },
    content: {
      questions: {
        0: {
          hasResponded: false,
          isValidated: false,
          question: 'MDMA/Ecstasy',
          userResponse: null,
          answer: 1
        },
        1: {
          hasResponded: false,
          isValidated: false,
          question: 'Cocaine',
          userResponse: null,
          answer: 1
        },
        2: {
          hasResponded: false,
          isValidated: false,
          question: 'Opiates',
          userResponse: null,
          answer: 1
        }
      }
    }
  },
  44: {
    slide_type: 'inputPieChart',
    header: {
      header: 'Your Guess vs. Actual Percentage',
      sub_header: 'Let’s see how your answers compared to the actual percentages from the CSUN National College Health Assessment survey.',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    }
  },
  45: {
    slide_type: 'info',
    header: {
      header: 'Saying "No"',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Have you ever found yourself in a situation where someone has offered you a substance you didn\'t want to use, and you didn\'t know how to refuse them? If so, below are some ways to say "no":'
        }
      },
      1: {
        list_element: [
          '"Thanks, but I\'ve got a ton of work to do later."',
          '"No thanks, I\'m taking medication that I cannot drink/smoke/cobine other drugs with."',
          '"I\'m drinking tonight. (You can also offer to be the designated driver!)"',
          '"I have a game/practice tomorrow."',
          '"I\'m OK for now!" (For alcohol: you can BYOC (bring your own cup) and keep it filled with something other than alcohol!)',
          '"No thanks, I\'ve tried it and I didn\'t like it."',
          '"or simply...No thanks, I\'m, not into drugs."'
        ]
      },
      2: {
        image: {
          src: 'images/comparisonModule/comp_04.jpg',
          alt: 'no',
          mobile_size: '1/3',
          tablet_size: '1/4',
          desktop_size: '1/4'
        }
      },
      3: {
        paragraph: {
          0: 'Remember...YOU are in control.',
          1: 'For more help and information regarding this topic, please see the resources in the App menu.'
        }
      }
    }
  },
  46: {
    slide_type: 'info',
    header: {
      header: 'Healthy Alternatives',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Sometimes we drink, smoke, or do drugs to feel connected with friends, to numb emotions and thoughts, or to deal with stress.',
          1: 'However, using drugs is not the only way to make us feel good or help us tackle life\'s challenges!',
          2: 'There are many healthy alternatives to boost health and wellness. Research shows physical, mental and social activities an improve our overall wellness.'
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
  47: {
    slide_type: 'info',
    header: {
      header: 'Physical Activities',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Our bodies produce the same hormone (<i>known as dopamine</i>) during exercise as we do while drinking or doing certain drugs. This means that we can get an awesome high from a trip to the gym or a soccer match!',
          1: 'Working out is also a great stress reliever. Try going for a run to relieve stress instead of utilizing substances. Your mind and body will thank you later on!'
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
  48: {
    slide_type: 'info',
    header: {
      header: 'Social Activities',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Hanging out with friends can be super fun, even without substances. Going out to the movies, meeting up for an amazing sunset hike; or checking out the latest art show can be equally memorable!'
        }
      },
      1: {
        image: {
          src: 'images/alcoholModule/alcohol_s30_01.jpg',
          alt: 'friends holding each other on top of a hill',
          caption: 'Did you know, the Student Recreation Center has an <b>Outdoor Adventures program</b>?'
        }
      },
      2: {
        image: {
          src: 'images/alcoholModule/alcohol_s30_02.jpg',
          alt: 'people putting hands in the middle for teamwork',
          caption: 'Links to social activities are in the resources App menu.'
        }
      },
      3: {
        paragraph: {
          0: 'Joining a team or an organization can lead to meaningful connections and friendships! The Matador Involvement Center has many options.'
        }
      }
    }
  },
  49: {
    slide_type: 'cardFlip',
    header: {
      header: 'Mind-Body Activities',
      sub_header: null,
      tooltip: 'Flip all the cards to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      paragraph: {
        0: 'By practicing mindfulness and yoga, you can improve mood, reduce stress, and enhance focus and attention.',
        1: 'Rather than using substances, you can cope with difficult emotions by connecting with your mind and body.',
        2: ' Curious about how to get started? Find FREE Mind-Body resource on campus in the App menu',
        3: '<b>Flip the cards below.</b>'
      },
      cards: {
        0: {
          was_flipped: false,
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
          was_flipped: false,
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
  50: {
    slide_type: 'info',
    header: {
      header: 'Go beyond yourself!',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'If you\'re in relationships with friends who promote unhealthy behaviors, reach out to others who are supportive and encourage a healthy lifestyle.',
          1: 'Or, if you\'re caught up in the stress of your own life, broaden your perspective by volunteering! It helps to do something meaningful for others.',
          2: '<b>Unified We Serve</b>, is a volunteer program at CSUN that serves the CSUN and surrounding community.',
          3: 'Curious? Find the link in the resources in the App menu.'
        }
      },
      1: {
        image: {
          src: 'images/prescriptionDrugsModule/RxDrugs_s29_01.jpg',
          alt: 'two volunteers taking a selfie'
        }
      }
    }
  },
  51: {
    slide_type: 'info',
    header: {
      header: 'Be Well!',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Now that you\'ve learned a little bit more about different substances... now is the time to start creating healthier habits, thinking about the future, and getting resources that can help you get there!',
          2: 'In the App menu, and on our iSTART website, check out the resources CSUN and the community offer so you can lead a responsible and healthy lifestyle.'
        }
      },
      1: {
        image: {
          src: 'images/illicitDrugsModule/ill_s25_01.jpg',
          alt: 'woman carrying a heart balloon'
        }
      }
    }
  },
  52: {
    slide_type: 'finalSlide',
    header: {
      header: null
    },
    content: {
      0: {
        paragraph: {
          0: 'Thanks for completing this module.',
          2: 'You will receive an email from iSTART within the next couple of days with $15 Amazon.com gift card.'
        }
      }
    }
  }
}
export default comparisonModuleSlides
