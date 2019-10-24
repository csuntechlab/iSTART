export const marijuanaModuleSlides = {
  // slide 1 & 2
  0: {
    slide_type: 'intro',
    content: {
      title: 'Marijuana',
      background_image: 'images/thumbnail/marijuana_thumbnail.jpg',
      goal: 'In this module, we will discuss what marijuana is, explore common ways that marijuana is used, discuss the long-term and short-term effects of marijuana use, and how you can make healthier choices.',
      definition: 'Cannabis, or marijuana, is a psychoactive drug derived from the Cannabis plant. It contains a mind-altering chemical called THC, responsible for the intoxicating effects (the high) that people seek for recreational purposes.',
      estimated_completion: '15 minutes'
    }
  },
  // slide 3
  1: {
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
  // slide 4
  2: {
    slide_type: 'info',
    header: {
      header: 'THC Content Throughout the Years',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'The level of THC in marijuana is not always the same. It can vary depending on the plant strain, growth, processing, and storage.',
          1: 'The amount of THC in marijuana has increased over the years. This means that people using marijuana are smoking or ingesting higher THC levels than expected, which can possibly lead to a more dangerous reaction.'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s04_01.png',
          alt: 'marijuana bar-graph of rising THC content',
          size: 'informational'
        }
      }
    }
  },
  // slide 5
  3: {
    slide_type: 'info',
    header: {
      header: 'Cannabis Tolerance',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Frequent cannabis use can lead to tolerance. This means your body builds a resistance to THC, and you need more marijuana to reach the same high.',
          1: '<b>Be wary!</b> Marijuana affects everyone differently, especially if one person has higher tolerance than another person.',
          2: '<b>Watch your budget!</b> An increased tolerance also means you’ll have to spend more money to get the same high.'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s05_01.png',
          alt: 'hands holding money bag',
          size: 'clipart'
        }
      }
    }
  },
  // slide 6
  4: {
    slide_type: 'info',
    header: {
      header: 'Marijuana Use: Smoking',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Marijuana is most commonly smoked using pipes, bongs, and paper-wrapped joints. Since pot smokers tend to inhale more deeply and hold their breath longer, they also inhale more tar per breath: <b>4 times</b> the amount compared to cigarette smoke!',
          1: 'Cannabis can also be host to tons of hidden ingredients.',
          2: '<b>Swipe the cards below to see a few.</b>'
        }
      },
      1: {
        carousel: {
          0: {
            src: 'images/marijuanaModule/mar_s06_01.png',
            alt: 'toluene - paint thinner solvent',
            y_position: null
          },
          1: {
            src: 'images/marijuanaModule/mar_s06_02.png',
            alt: 'carbon monoxide',
            y_position: null
          },
          2: {
            src: 'images/marijuanaModule/mar_s06_03.png',
            alt: 'benzene',
            y_position: null
          },
          3: {
            src: 'images/marijuanaModule/mar_s06_04.png',
            alt: 'phenol - plastics',
            y_position: null
          },
          4: {
            src: 'images/marijuanaModule/mar_s06_05.png',
            alt: 'pathogens - hepatitis, tb, herpes, etc.',
            y_position: null
          },
          5: {
            src: 'images/marijuanaModule/mar_s06_06.png',
            alt: 'carcinogens',
            y_position: null
          },
          6: {
            src: 'images/marijuanaModule/mar_s06_07.png',
            alt: 'noxious tars',
            y_position: null
          },
          7: {
            src: 'images/marijuanaModule/mar_s06_08.png',
            alt: 'lead',
            y_position: null
          },
          8: {
            src: 'images/marijuanaModule/mar_s06_09.png',
            alt: 'hairspray - to falsely increase weight',
            y_position: null
          }
        }
      }
    }
  },
  // slide 7
  5: {
    slide_type: 'info',
    header: {
      header: 'Marijuana Use: Edibles',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Unlike smoking, edibles can take up to 2 hours or longer to feel a high. Be careful! We may eat more edibles to get high faster, which can lead to dangerous results.',
          1: 'Eating (or drinking) marijuana can mask how much THC we ingest. Different products contain different amounts, making it hard to predict how our body will respond.',
          2: 'Make sure all edibles are properly labeled with the dosage, since many homemade products could have 5+ times more THC than the standard dose!'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s07_01.png',
          alt: 'line graph of effects smoked and eaten over hours',
          size: 'informational'
        }
      }
    }
  },
  // slide 8
  6: {
    slide_type: 'info',
    header: {
      header: 'Be cautious with edibles.',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Snacking on cannabis gummies might be tasty, but be careful! Overconsumption of edibles can lead to a marijuana-induced psychosis.',
          1: 'If you suspect someone is entering psychosis, call 911. Be careful if the person is acting erratic, and try to stay with them, and if possible, comfort them.'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s08_01.png',
          alt: 'mind infographic',
          size: 'symbol'
        }
      }
    }
  },
  // slide 9
  7: {
    slide_type: 'quiz',
    header: {
      header: 'Samuel\'s Story',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      images: {
        0: {
          src: 'images/marijuanaModule/mar_s09_01.jpg',
          alt: 'edible brownies',
          size: '7/12',
          tablet_size: '1/2'
        }
      },
      questions: {
        0: {
          showResponse: false,
          question: 'Over the weekend, Sam goes to a party to hang out with some friends. He has a couple beers and then is offered a homemade brownie that is infused with marijuana. Which of the following should Sam consider?',
          options: {
            0: {
              isAnswer: false,
              show: false,
              text: 'He\'s already had 2 beers, so mixing beer and edibles can cause more harmful effects.',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>True,</b> however Sam should take ALL of the statements into consideration!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: false,
              show: false,
              text: 'He doesn\'t know how much THC is in the homemade edibles, and could be ingesting higher amounts causing harmful effects.',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>True,</b> however Sam should take ALL of the statements into consideration!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            2: {
              isAnswer: false,
              show: false,
              text: 'If he eats the brownie, it could take up to two hours to feel the effects, causing him to drive home high.',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>True,</b> however Sam should take ALL of the statements into consideration!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            3: {
              isAnswer: false,
              show: false,
              text: 'He\'s never had edibles before, and doesn\'t know how his body will respond.',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>True,</b> however Sam should take ALL of the statements into consideration!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            4: {
              isAnswer: true,
              show: false,
              text: 'All of the above',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>You\'re right!</b> Sam should consider all of these statements in this situation!',
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
  // slide 10
  8: {
    slide_type: 'info',
    header: {
      header: 'Marijuana Use: Vaping',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Johns Hopkins University reports that vaping versus smoking marijuana delivers a more powerful punch.',
          1: 'Vaping is like taking big swigs of liquor compared to small sips of beer. Those who vape often don\'t realize how much marijuana they\'re inhaling.',
          2: 'In other words, vaping may lead to overuse of marijuana, and possibly serious side effects.'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s10_01.png',
          alt: 'marijuana vape'
        }
      }
    }
  },
  // slide 11
  9: {
    slide_type: 'inputComparison',
    header: {
      header: 'What\'s your guess?',
      sub_header: null,
      tooltip: 'Fill in the form requirements to proceed to the next slide'
    },
    content: {
      questions: {
        0: {
          question: 'What percent of CSUN students do you think used marijuana in the past 30 days?',
          response: null,
          input: null,
          answer: 23
        }
      }
    }
  },
  // slide 12
  10: {
    slide_type: 'inputPieChart',
    header: {
      header: 'Your Guess vs. Actual Percentage',
      sub_header: 'Let’s see how your answers compare to the actual percentages from the CSUN National College Health Assessment survey.',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    }
  },
  // slide 13
  11: {
    slide_type: 'info',
    header: {
      header: 'Daily Use',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Although only 23% of college students report using marijuana in the past month, students who report using it DAILY has gone up!'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s13_01.png',
          alt: 'daily marijuana consumption over time',
          size: 'informational'
        }
      }
    }
  },
  // slide 14
  12: {
    slide_type: 'multiQuizQuestion',
    header: {
      header: 'Self-Assessment',
      sub_header: null,
      tooltip: 'Answer the questions to continue to the next slide.'
    },
    content: {
      0: {
        paragraph: {
          0: 'Many people seek out professional assessments to tell them if they have a problem with marijuana drug use and need assistance with it. However, the best judge of whether you are challenged by your marijuana use is <em>YOU</em>.',
          1: 'Your answers to the following questions will provide you with the best path for you.'
        }
      },
      1: {
        quiz: {
          questions: {
            0: {
              show: true,
              question: 'Lately, my use of marijuana is worrying me.',
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
              question: 'I started using Marijuana for fun but now it\'s hard to stop.',
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
              question: 'My studies have begun to suffer from my marijuana use.',
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
  // slide 15
  13: {
    slide_type: 'multiQuizQuestionResults',
    header: {
      header: 'Self-Assessment',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide',
      results: {
        case: {
          yes: {
            andAll: true,
            andResponse: 'You are acknowledging to yourself that a healthy change action plan can prevent long-term challenges and problems from continuing your current pattern of marijuana use.<br> As you continue this module you will find alternatives to marijuana use, goals for an action plan and other resources available on campus to assist you on your path towards a healthier lifestyle.',
            isAndMet: false,
            orAll: true,
            orResponse: 'Your instincts are likely suggesting that you would benefit from making a change in your use of marijuana.<br> As you continue this module you will find alternatives to marijuana use, goals for an action plan, and other resources available on campus to assist you on your path towards health.',
            isOrMet: false
          },
          no: {
            andAll: true,
            andResponse: 'It\'s good to know you\'re not struggling with these issues. To stay on a healthy path, you\'ll learn more about marijuana use in the following slides.',
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
  // slide 16
  14: {
    slide_type: 'video',
    header: {
      header: 'Risks of Marijuana Use',
      sub_header: 'Watch this video to learn about the risks of Marijuana use.',
      tooltip: 'Finish the video or await the allotted time to proceed to the next slide'
    },
    content: {
      video_id: 'fMsypYm9Kho',
      video_length: (30000 / 2) + 5000,
      caption: null
    }
  },
  // slide 17
  15: {
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
  // slide 18
  16: {
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
  // slide 19
  17: {
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
  // slide 20
  18: {
    slide_type: 'info',
    header: {
      header: 'Is marijuana addictive?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'For some students, smoking marijuana socially is part of the typical college experience.',
          1: 'However, not everyone uses marijuana in moderation. Some users become dependent, and experience withdrawal symptoms, such as irritability, sleep problems, decreased appetite, and cravings.',
          2: 'Addiction happens when the person can\'t stop using marijuana, even though it interferes with his/her daily life.',
          3: '<b>Swipe to learn about symptoms of addiction.</b>'
        }
      },
      1: {
        carousel: {
          0: {
            src: 'images/marijuanaModule/mar_s20_01.png',
            alt: 'depression',
            y_position: null
          },
          1: {
            src: 'images/marijuanaModule/mar_s20_02.png',
            alt: 'flu-like symptoms',
            y_position: null
          },
          2: {
            src: 'images/marijuanaModule/mar_s20_03.png',
            alt: 'anxiety',
            y_position: null
          },
          3: {
            src: 'images/marijuanaModule/mar_s20_04.png',
            alt: 'irritability',
            y_position: null
          },
          4: {
            src: 'images/marijuanaModule/mar_s20_05.png',
            alt: 'insomnia',
            y_position: null
          },
          5: {
            src: 'images/marijuanaModule/mar_s20_06.png',
            alt: 'weight changes',
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
      header: 'What\'s legal in California?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Recently, California became one of the first states to legalize recreational cannabis use (in 2018). But what does that actually mean?',
          1: 'Let\'s see what CA law says. Then, we\'ll quiz your knowledge!',
          2: '<b>Swipe the cards below.</b>'
        }
      },
      1: {
        carousel: {
          0: {
            src: 'images/marijuanaModule/mar_s21_01.png',
            alt: 'age restriction',
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
            src: 'images/marijuanaModule/mar_s21_04.png',
            alt: 'cannot drive under the influence',
            y_position: null
          },
          4: {
            src: 'images/marijuanaModule/mar_s21_05.png',
            alt: 'cannot cross state lines',
            y_position: null
          },
          5: {
            src: 'images/marijuanaModule/mar_s21_06.png',
            alt: 'only legal dispensaries can sell',
            y_position: null
          }
        }
      }
    }
  },
  // slide 22 Question 1
  20: {
    slide_type: 'quiz',
    header: {
      header: null,
      sub_header: null,
      tooltip: 'Select an answer to proceed to the next slide'
    },
    content: {
      images: {
        0: {
          src: 'images/global/quiz_graphic.png',
          alt: 'quiz',
          size: '7/12',
          tablet_size: '1/2'
        }
      },
      questions: {
        0: {
          showResponse: false,
          question: 'You\'re hanging out at Venice beach with your friends, and your 24-year old buddy pulls out his marijuana vape pen and starts using it. <b>Is that legal?</b></i>',
          options: {
            0: {
              isAnswer: false,
              show: false,
              text: 'Yes',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Nope!</b> Using marijuana in a public place is against the law in CA!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: true,
              show: false,
              text: 'No',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Correct,</b> it\'s illegal! Your friend is in a public place. He cannot use it there, per CA law.',
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
  // slide 22 Question 2
  21: {
    slide_type: 'quiz',
    header: {
      header: null,
      sub_header: null,
      tooltip: 'Select an answer to proceed to the next slide'
    },
    content: {
      images: {
        0: {
          src: 'images/global/quiz_graphic.png',
          alt: 'quiz',
          size: '7/12',
          tablet_size: '1/2'
        }
      },
      questions: {
        0: {
          showResponse: false,
          question: 'Your friend just turned 21 and went on a weekend trip to Las Vegas to celebrate. She first stopped by a state-licensed dispensary in Los Angeles to purchase recreational pot legally, then she brought it with her to Las Vegas. <i><b>Was that legal?</b></i>',
          options: {
            0: {
              isAnswer: false,
              show: false,
              text: 'Yes',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Nope!</b> Transporting recreational cannabis of any kind over state lines is against the law!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: true,
              show: false,
              text: 'No',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Correct,</b> it\'s illegal! Your friend cannot transport marijuana for recreational use across state borders.',
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
  // slide 23
  22: {
    slide_type: 'info',
    header: {
      header: 'Should I take an Uber?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Check out the facts below before you decide to use cannabis and drive!'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s23_01.png',
          alt: 'drivers under the influence',
          size: 'informational'
        }
      },
      2: {
        paragraph: {
          0: 'Research shows mixing marijuana and alcohol makes it even more dangerous to drive than after drinking alcohol alone.'
        }
      }
    }
  },
  // slide 24
  23: {
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
  // slide 25
  24: {
    slide_type: 'info',
    header: {
      header: 'How can I say NO?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Although saying “no” can sometimes be awkward, here are some ideas:'
        }
      },
      1: {
        list_element: [
          'No thanks, I’m driving.',
          'No thanks, I’ve tried it and I didn’t like it.',
          'No thanks, I’ve quit smoking.',
          'Thanks anyway, but I want to keep a clear head.',
          'No thanks, I’m not into drugs.'
        ]
      },
      2: {
        image: {
          src: 'images/marijuanaModule/mar_s25_01.png',
          alt: 'no marijuana',
          size: 'symbol'
        }
      },
      3: {
        paragraph: {
          0: 'For more information about refusal skills, please see the resources in the web app menu.'
        }
      }
    }
  },
  // slide 26
  25: {
    slide_type: 'info',
    header: {
      header: 'Did you know?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Dopamine is known as the “feel-good” hormone. The brain releases it when you use drugs like cannabis.'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s26_01.jpg',
          alt: 'euphoric emoji'
        }
      },
      2: {
        paragraph: {
          0: 'Watch out! Long-term marijuana use can actually cause lower dopamine levels in your body over time, which can also cause negative emotions.'
        }
      }
    }
  },
  // slide 27
  26: {
    slide_type: 'cardFlip',
    header: {
      header: 'How can we naturally increase dopamine levels?',
      sub_header: null,
      tooltip: 'Flip all the cards to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      paragraph: {
        0: '<b>Flip the cards below to learn more easy ways to increase dopamine and feelings of happiness.</b>'
      },
      cards: {
        0: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/marijuanaModule/mar_s27_01.jpg',
              alt: 'parfait',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Eat a diet rich in protein and probiotics (yogurt!) and reduce saturated fat.'
          }
        },
        1: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/marijuanaModule/mar_s27_02.jpeg',
              alt: 'sleep',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Get a good night\'s sleep of at least 8 hours! Sleep is a key ingredient for a healthy life!'
          }
        },
        2: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/marijuanaModule/mar_s27_03.jpg',
              alt: 'exercise',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Exercise regularly with a friend to help reach your goals together!'
          }
        }
      }
    }
  },
  // slide 28
  27: {
    slide_type: 'info',
    header: {
      header: 'Get enough sunlight',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'You\'re in SoCal! Treat yourself to a bit of sun exposure every day to boost your mood! Take a study break with your friend on the lawn, or go for a quick walk in the Orange Grove.',
          1: 'And when the weekend comes, try to make time to enjoy the beautiful beaches with some friends. Go surfing, running, or just...RELAX! You deserve it! Don\'t forget sunscreen!'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s28_01.png',
          alt: 'handstand on the beach'
        }
      }
    }
  },
  // slide 29
  28: {
    slide_type: 'info',
    header: {
      header: 'Mind-Body Wellness',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: '<b>Listen to music</b>: Science proves that instrumental music increases dopamine in our bodies. So pump up the jam!'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s29_01.jpeg',
          alt: 'person enjoying music'
        }
      },
      2: {
        paragraph: {
          0: '<b>Meditate</b>: have you tried loving-kindness (Metta) meditation? It increases feelings of compassion and activates dopamine. Get your Metta on!',
          1: 'Check it out in the resources page.'
        }
      },
      3: {
        image: {
          src: 'images/marijuanaModule/mar_s29_02.jpeg',
          alt: 'meditating',
          y_position: 'bottom'
        }
      }
    }
  },
  // slide 30
  29: {
    slide_type: 'emailForm',
    header: {
      header: 'Set a wellness goal!',
      sub_header: 'Now is a great time to set a wellness goal to naturally increase your dopamine!​&nbsp;Or, If you use marijuana, what are some steps that you can take to reduce use, or use more responsibly?',
      tooltip: null
    },
    content: {
      textAreaPlaceHolder: 'i.e. "Next week I will listen to classical music for 10 minutes a day to increase my dopamine levels." Or, "Next week I will politely decline using marijuana if a friend asks by saying \'No thanks, I\'m driving\'."'
    }
  },
  // slide 31
  30: {
    slide_type: 'info',
    header: {
      header: 'Resources',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'If you are worried about your own marijuana use, or someone else\'s, you can find different resources and contact info in the app menu!'
        }
      },
      1: {
        image: {
          src: 'images/marijuanaModule/mar_s31_01.jpg',
          alt: 'teamwork mountain climbing'
        }
      }
    }
  },
  // slide 32
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
export default marijuanaModuleSlides
