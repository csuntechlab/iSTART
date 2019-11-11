export const nicotineModuleSlides = {
  // slide 1 and 2 (combined to fit the design)
  0: {
    slide_type: 'intro',
    content: {
      title: 'Nicotine',
      background_image: 'images/thumbnail/nicotine_thumbnail.jpg',
      goal: 'In this module, we will discuss nicotine and tobacco use among college students, how nicotine can affect your health and wellness, and how you can make healthier choices regarding nicotine.',
      definition: 'Tobacco is a plant grown for its leaves, which are processed into tobacco products. People can smoke, chew, or sniff tobacco. Many tobacco products contain nicotine, which is an addictive chemical.',
      estimated_completion: '15 minutes'
    }
  },
  // slide 3
  1: {
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
  // slide 4
  2: {
    slide_type: 'info',
    header: {
      header: 'Cigarettes',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'When you smoke cigarettes, you inhale more than just the tobacco. Everything is burned—the tobacco filter, the paper–even the chemicals!'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s04_01.jpg',
          alt: 'cigarette smoke'
        }
      }
    }
  },
  // slide 5
  3: {
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
  // slide 6
  4: {
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
          1: 'Below are some of the things you could be ingesting. <b>Swipe to see!</b>'
        }
      },
      1: {
        carousel: {
          0: {
            src: 'images/nicotineModule/nic_s06_01.png',
            alt: 'acetone',
            y_position: null
          },
          1: {
            src: 'images/nicotineModule/nic_s06_02.png',
            alt: 'acetic acid',
            y_position: null
          },
          2: {
            src: 'images/nicotineModule/nic_s06_03.png',
            alt: 'ammonia',
            y_position: null
          },
          3: {
            src: 'images/nicotineModule/nic_s06_04.png',
            alt: 'arsenic',
            y_position: null
          },
          4: {
            src: 'images/nicotineModule/nic_s06_05.png',
            alt: 'butane',
            y_position: null
          },
          5: {
            src: 'images/nicotineModule/nic_s06_06.png',
            alt: 'cadmium',
            y_position: null
          },
          6: {
            src: 'images/nicotineModule/nic_s06_07.png',
            alt: 'tar',
            y_position: null
          },
          7: {
            src: 'images/nicotineModule/nic_s06_08.png',
            alt: 'toluene',
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
  // slide 8
  6: {
    slide_type: 'quiz',
    header: {
      header: 'Hookah: Fact or Myth?',
      sub_header: null,
      tooltip: 'Select an answer to proceed to the next slide'
    },
    content: {
      questions: {
        0: {
          showResponse: false,
          question: 'Hookah is less harmful than cigarettes.',
          options: {
            0: {
              isAnswer: false,
              show: false,
              text: 'Fact',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Nope!</b> Hookah contains 36x more tar, and 15x more carbon monoxide than cigarettes. Ouch!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: true,
              show: false,
              text: 'Myth',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Correct,</b> Hookah contains 36x more tar, and 15x more carbon monoxide than cigarettes. Ouch!',
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
  // slide 9
  7: {
    slide_type: 'quiz',
    header: {
      header: 'Hookah: Fact or Myth?',
      sub_header: null,
      tooltip: 'Select an answer to proceed to the next slide'
    },
    content: {
      questions: {
        0: {
          showResponse: false,
          question: 'It\'s okay if I just go to a tobacco bar and do not smoke hookah.',
          options: {
            0: {
              isAnswer: false,
              show: false,
              text: 'Fact',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Nope!</b> Just being at a tobacco bar exposes you to second hand smoke. Next time opt for a non-smoking bar!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: true,
              show: false,
              text: 'Myth',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Correct,</b> Just being at a tobacco bar exposes you to second hand smoke. Next time opt for a non-smoking bar!',
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
    slide_type: 'quiz',
    header: {
      header: 'Hookah: Fact or Myth?',
      sub_header: null,
      tooltip: 'Select an answer to proceed to the next slide'
    },
    content: {
      questions: {
        0: {
          showResponse: false,
          question: 'There are risks from sharing hookah in a group setting.',
          options: {
            0: {
              isAnswer: true,
              show: false,
              text: 'Fact',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Correct!</b> If you are sharing the same mouthpiece, you may be at risk for tuberculosis, Hep-C, and oral herpes.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: false,
              show: false,
              text: 'Myth',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Nope!</b> If you are sharing the same mouthpiece, you may be at risk for tuberculosis, Hep-C, and oral herpes.',
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
  // slide 11
  9: {
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
  // slide 12
  10: {
    slide_type: 'info',
    header: {
      header: 'Smokeless Tobacco',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Smokeless tobacco is tobacco that is either chewed or snuffed (inhaled) up the nose.'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s12_01.png',
          alt: 'smokeless tobacco',
          size: 'informational'
        }
      },
      2: {
        paragraph: {
          0: '<b>Don’t be fooled!</b> Even though there\'s no actual smoke, smokeless tobacco can cause just as many problems as other kinds including mouth, tongue, cheek, and gum cancer.'
        }
      }
    }
  },
  // slide 13
  11: {
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
  // slide 14
  12: {
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
  // slide 15
  13: {
    slide_type: 'info',
    header: {
      header: 'What\'s in your urine?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'New research from UC San Francisco studied the urine of nearly 100 teens in the Bay Area. They found that e-cigarette users had significant levels of hazardous chemicals in their urine, similar to those found in Styrofoam or acids - yuck!'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s15_01.jpg',
          alt: 'urine'
        }
      },
      2: {
        paragraph: {
          0: 'What\'s even crazier is that they found these chemicals in the pee of those who vaped <b>without</b> nicotine. This could mean that the vaping and heating process is what\'s causing the danger!'
        }
      }
    }
  },
  // slide 16
  14: {
    slide_type: 'quiz',
    header: {
      header: 'Kevin\'s Story',
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
          question: 'Many of Kevin\'s friends on campus are vaping. Kevin didn\'t think it could be that bad if his friends were using it all the time, so he decided to buy a vape pen.<br> <b>What substances might Kevin be exposed to while using e-cigarettes?</b>',
          options: {
            0: {
              isAnswer: false,
              show: false,
              text: 'Nicotine',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Nice try!</b> All of these toxic things are likely inhaled when vaping.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: false,
              show: false,
              text: 'Lead',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Nice try!</b> All of these toxic things are likely inhaled when vaping.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            2: {
              isAnswer: false,
              show: false,
              text: 'Volatile organic compounds',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Nice try!</b> All of these toxic things are likely inhaled when vaping.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            3: {
              isAnswer: false,
              show: false,
              text: 'Ultrafine particles',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>Nice try!</b> All of these toxic things are likely inhaled when vaping.',
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
                text: '<b>Correct,</b> All of these toxic things are likely inhaled when vaping!',
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
  // slide 17
  15: {
    slide_type: 'pieChartInput',
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
  // slide 18
  16: {
    slide_type: 'pieChartResults',
    header: {
      header: 'Your Guess vs. Actual Percentage',
      sub_header: 'Let’s see how your answers compare to the actual percentages from the CSUN National College Health Assessment survey.',
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    }
  },
  // slide 19
  17: {
    slide_type: 'info',
    header: {
      header: 'Don\'t be misled!',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'College students often assume that the majority of their peers smoke or vape; but only 7% of students reported vaping in the last month.',
          1: 'Don\'t be misled—these types of assumptions often lead students to smoke or vape in an attempt to fit in with their peers.'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s19_01.jpg',
          alt: 'sitting in the park'
        }
      }
    }
  },
  // slide 20
  18: {
    slide_type: 'info',
    header: {
      header: 'Be Aware!',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Companies target young adults and teens with cool advertising to make vaping look appealing. Don\'t be tricked into vaping just to create an image!'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s20_01.jpg',
          alt: 'no nicotine infographic'
        }
      },
      2: {
        paragraph: {
          0: 'While vape pens might look cool, they mask how much nicotine we consume. Some can actually deliver nicotine faster than regular cigarettes. This means that we may be ingesting more nicotine and chemicals while vaping!',
          1: 'As more research on the effects of vaping becomes available, stay in the know and consult official sources.'
        }
      }
    }
  },
  // slide 21
  19: {
    slide_type: 'selfAssessment',
    header: {
      header: 'Self-Assessment',
      sub_header: null,
      tooltip: 'Answer the questions to continue to the next slide.'
    },
    content: {
      0: {
        paragraph: {
          0: 'The best judge of whether you are challenged by tobacco/nicotine use is you.',
          1: 'Your answers to the following questions will provide you with the best path for you.'
        }
      },
      1: {
        quiz: {
          questions: {
            0: {
              show: true,
              question: 'I think I smoke/vape/chew too much.',
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
              question: 'I\'ve tried to stop smoking but haven\'t been able to stop.',
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
              question: 'I smoke/vape/chew to handle my stress and axiety and/or control my weight.',
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
  // slide 22
  20: {
    slide_type: 'selfAssessmentResults',
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
            orResponse: 'You might consider making a change to address your concerns. Continuing your current pattern could potentially lead to some harmful health outcomes. You already know that your tobacco/nicotine use is unhealthy so perhaps you are ready to consider some healthy alternatives.<br> In the next slides, you\'ll get tips about how you can replace this habit with wellness activities that can make you feel healthy and satisfied. At the end, you are invited to set a health and wellness goal for yourself, so keep that in mind as you go through the rest of the module.',
            isOrMet: false
          },
          no: {
            andAll: true,
            andResponse: 'It\'s good to know you\'re not struggling with these issues. To stay on a healthy path, you\'ll learn more about nicotinue use in the following slides.',
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
  // slide 23
  21: {
    slide_type: 'info',
    header: {
      header: 'Don\'t get stuck in the cycle',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Another reason to refrain from smoking/vaping is that it\'s so hard to stop! Nicotine dependence results in strong cravings and many unpleasant withdrawal symptoms. Most smokers have to try several times to quit.'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s23_01.png',
          alt: 'nicotine cycle',
          size: 'informational'
        }
      }
    }
  },
  // slide 24
  22: {
    slide_type: 'info',
    header: {
      header: 'The truth hurts!',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'For years we\'ve heard the truth about the dangers of smoking cigarettes and second hand smoke: lung cancer, heart disease, stroke, to name a few.',
          1: 'Now there\'s new research showing the harmful effects of e-cigarettes and vaping on brain development, the body, and so much more! Know the facts to make healthy choices and help those you love.'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s24_01.jpg',
          alt: 'truth scrabble'
        }
      }
    }
  },
  // slide 25
  23: {
    slide_type: 'info',
    header: {
      header: 'Did you know?',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Nicotine can have serious effects on brain development up until age 25.',
          1: '<b>Listen to this audio clip.</b>',
          2: '<audio class="w-100" controls><source src="https://e-cigarettes.surgeongeneral.gov/media/osh-surgeon-generals-e-cigarette-radio-psa.mp3" type="audio/mp3">You\'re browser does not support an audio player.</audio>'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s25_01.png',
          alt: 'cigarette head and suit',
          mobile_size: '1/2',
          tablet_size: '1/2',
          desktop_size: '1/3'
        }
      }
    }
  },
  // slide 26
  24: {
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
  // slide 27
  25: {
    slide_type: 'info',
    header: {
      header: 'Sleep for Success',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'It\'s hard enough to catch some zzz\'s while in college; keep your head clear so you can sleep for success! Nicotine is a stimulant that can cause insomnia and withdrawal symptoms similar to caffeine.'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s27_01.png',
          alt: 'sleep'
        }
      },
      2: {
        paragraph: {
          0: 'Nicotine use may also create other sleep interruptions. Research has shown that nicotine-users spend more time sleeping lightly and less time in deep sleep than non-users.'
        }
      }
    }
  },
  // slide 28
  26: {
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
          question: 'Smoking/vaping can cause which of the following?',
          options: {
            0: {
              isAnswer: false,
              show: false,
              text: 'Weak muscles and bones',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>You\'re close!</b> Remember that smoking/vaping can affect all parts of the body and mind.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: false,
              show: false,
              text: 'Acne',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>You\'re close!</b> Remember that smoking/vaping can affect all parts of the body and mind.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            2: {
              isAnswer: false,
              show: false,
              text: 'Insomnia',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>You\'re close!</b> Remember that smoking/vaping can affect all parts of the body and mind.',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            3: {
              isAnswer: false,
              show: false,
              text: 'Reduced brain development',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: '<b>You\'re close!</b> Remember that smoking/vaping can affect all parts of the body and mind.',
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
                text: '<b>Yes!</b> Smoking/Vaping can affect all parts of the body and mind.',
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
  // slide 29
  27: {
    slide_type: 'cardFlip',
    header: {
      header: 'How does your body heal?',
      sub_header: null,
      tooltip: 'Flip all the cards to proceed to the next slide'
    },
    content: {
      card_break: true,
      cards_flipped: false,
      paragraph: {
        0: '<b>Flip the timecards below to learn about the body\'s healing journey after quitting smoking.</b>',
        1: '<i>(Note: Timeline is not drawn to scale)</i>'
      },
      cards: {
        0: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s29_01.png',
              alt: '20 minutes to 48 hours after',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul><li>Heart rate & blood pressure drop</li><li>Carbon <u>monoxide</u> levels return to normal</li></ul>'
          }
        },
        1: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s29_02.png',
              alt: '2 weeks to 9 months after',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul><li>Risk of heart attack decreases</li><li>Coughing, shortness of breath, and risks of infection reduce</li></ul>'
          }
        },
        2: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s29_03.png',
              alt: '1 year to 5 years after',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul><li>Risk of heart disease is half that of a current smoker</li><li>Risk of mouth, throat, esophagus, and bladder cancer cut in half</li></ul>'
          }
        },
        3: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s29_04.png',
              alt: '10 years after',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul><li>The risk of dying from lung cancer is half that of a current smoker</li><li>The risk of cancer decreases</li></ul>'
          }
        }
      }
    }
  },
  // slide 30
  28: {
    slide_type: 'info',
    header: {
      header: 'How to say "No"',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Saying "no" to tobacco may be tough, but it\'s important for your health and the health of those around you!',
          1: 'Remember that you don\'t need to vape/smoke to be cool or fit in, real friends like you for who you are. Stand tall, hold your head high and speak with confidence!'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s30_01.jpg',
          alt: 'offered cigarrette'
        }
      },
      2: {
        list_element: [
          '"No thanks, I don\'t like the taste"',
          '"I\'ll pass. I\'ve had friends/family suffer from smoking-related diseases"',
          '"I know people who have had a really hard time quitting"',
          '"No thanks - I don\'t know what\'s in it"',
          '"I don\'t want to be exposed to the toxins"',
          '"I suffer from asthma"'
        ]
      }
    }
  },
  // slide 31
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
  // slide 32
  30: {
    slide_type: 'info',
    header: {
      header: 'Healthy Alternatives',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Sometimes we use tobacco/nicotine socially to help us cope with stress and anxiety. However, smoking/vaping isn\'t the only way to relieve stress or help us tackle life\'s challenges!',
          1: 'There are many ways to boost health and wellness. Research shows physical, mental, and social activities can improve overall wellness (check out the iSTART website for resources!).'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s32_01.jpg',
          alt: 'cliffside'
        }
      }
    }
  },
  // slide 33
  31: {
    slide_type: 'info',
    header: {
      header: 'Shake it off!',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Even short periods of physical activity, especially aerobic exercise, reduce the urge to smoke or vape. Shaking it through running, dancing, cycling, or boxing can help.'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s33_01.png',
          alt: 'dancing'
        }
      },
      2: {
        paragraph: {
          0: 'Exercise decreases appetite and helps limit the weight gain some people have when they quit smoking. Exercise also helps to cope with stress, creates more energy, and can improve mood!'
        }
      },
      3: {
        image: {
          src: 'images/nicotineModule/nic_s33_02.jpg',
          alt: 'boxing'
        }
      },
      4: {
        paragraph: {
          0: 'Did you know the Student Recreation Center offers a Boxing Training Program to students for FREE?'
        }
      }
    }
  },
  // slide 34
  32: {
    slide_type: 'info',
    header: {
      header: 'Let off some steam – by talking!',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'Do you have someone you trust that you can talk to? In order to live a healthy life, we all need connections with people we trust and feel safe around.',
          1: 'Especially during stressful times, talking with someone and hearing supportive words can be just what we need. It can help us calm down and see things in a different light.',
          2: '…and if you\'re craving a cigarette, invite your friend for a cup of tea instead!'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s34_01.png',
          alt: 'lunch table'
        }
      },
      2: {
        paragraph: {
          0: 'If you feel like talking to a professional, you can contact University Counseling Services to request an appointment. See more resources in the App menu.'
        }
      }
    }
  },
  // slide 35
  33: {
    slide_type: 'cardFlip',
    header: {
      header: 'Healthy Inhale!',
      sub_header: null,
      tooltip: 'Flip all cards to proceed to the next slide'
    },
    content: {
      card_break: false,
      cards_flipped: false,
      paragraph: {
        0: 'Deep breathing, or belly breathing, can reduce stress and anger, improve relaxation and help in overcoming fears.',
        1: 'It can help you reach a state of deep rest. Air comes in through your nose and fully fills your lungs, and the lower belly rises. This type of breathing can slow the heartbeat and help stabilize blood pressure.',
        2: '<b>Flip the card to learn how to belly breathe.</b>'
      },
      cards: {
        0: {
          was_flipped: false,
          show: false,
          front: {
            img: {
              src: 'images/nicotineModule/nic_s35_01.png',
              alt: 'belly breathing',
              caption: null
            },
            question: null
          },
          back: {
            description: '<ul style="text-align:left;"><li> Sit or lie down in a quiet place.​</li><li>First, take a normal breath. Then, a deep breath.</li><li>Slowly inhale through your nose, filling your belly with air before filling the lungs.</li><li>Hold for a few seconds, then exhale all air through the mouth; slowly, as if you are blowing bubbles.</li><li>Repeat a few times, focusing your mind on your breathing.</li></ul>'
          }
        }
      }
    }
  },
  // slide 36
  34: {
    slide_type: 'wellnessGoal',
    header: {
      header: 'Set a Wellness Goal',
      sub_header: 'Now is a great time to set a wellness goal for reducing stress or anxiety! Or if you use tobacco products (cigarettes, vape pens, etc.), what next steps can you take to reduce your nicotine use?',
      tooltip: null
    },
    content: {
      textAreaPlaceHolder: 'i.e. "The next time I feel stressed, I will talk with a trusted friend who can help me share my thoughts" Or, "Next week I will look at the resources for help on how to reduce vaping"'
    }
  },
  // slide 37
  35: {
    slide_type: 'info',
    header: {
      header: 'Resources',
      sub_header: null,
      tooltip: 'Wait 5 seconds to proceed to the next slide'
    },
    content: {
      0: {
        paragraph: {
          0: 'If you are concerned about your own, or someone else\'s tobacco or nicotine use, you can find many resources for quitting in the App menu!'
        }
      },
      1: {
        image: {
          src: 'images/nicotineModule/nic_s37_01.png',
          alt: 'hands connecting',
          size: 'clipart'
        }
      }
    }
  },
  // slide 38
  36: {
    slide_type: 'finalSlide',
    header: {
      header: null
    },
    content: {
      0: {
        paragraph: {
          0: 'Thanks for completing this module.',
          1: 'You will receive an email notification from iSTART when the next module becomes available in 5 days.',
          2: 'After you complete the next module, you will receive a $15 Amazon.com gift card via email.'
        }
      }
    }
  }
}
export default nicotineModuleSlides
