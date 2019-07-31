export const moduleSelector = {
  data () {
    return {
      size: 50,
      shape: {
        circle: 'circle',
        line: 'line'
      },
      modules: {
        alcohol: {
          name: 'Alcohol',
          image: 'images/thumbnail/alcohol_thumbnail.jpg',
          altText: 'alcohol substance',
          completion: {
            progress: 0,
            completed: false,
            status: this.checkCompletionStatus(0),
            date: '4 days left to complete'
          },
          description: 'Alcohol'
        },
        marijuana: {
          name: 'Marijuana',
          image: 'images/thumbnail/marijuana_thumbnail.jpg',
          altText: 'marijuana substance',
          completion: {
            progress: 50,
            completed: false,
            status: this.checkCompletionStatus(50),
            date: 'Available until: 00/00/00'
          },
          description: 'Marijuana'
        },
        tobacco: {
          name: 'Tobacco',
          image: 'images/thumbnail/nicotine_thumbnail.jpg',
          altText: 'tobacco substance',
          completion: {
            progress: 100,
            completed: true,
            status: this.checkCompletionStatus(100),
            date: 'Completed on: 00/00/00'
          },
          description: 'Tobacco'
        },
        prescriptionDrugs: {
          name: 'Prescription Drugs',
          image: 'images/thumbnail/prescription-drugs_thumbnail.jpg',
          altText: 'prescription drugs',
          completion: {
            progress: 100,
            completed: true,
            status: this.checkCompletionStatus(100),
            date: 'Completed on: 00/00/00'
          },
          description: 'Prescription Drugs'
        },
        illicitDrugs: {
          name: 'Illicit Drugs',
          image: 'images/thumbnail/illicit-drugs_thumbnail.jpg',
          altText: 'illicit drugs',
          completion: {
            progress: 100,
            completed: true,
            status: this.checkCompletionStatus(100),
            date: 'Completed on: 00/00/00'
          },
          description: 'Illicit Drugs'
        }
      }
    }
  }
}

export default moduleSelector
