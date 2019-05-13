<template>
  <div class="module-info">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="module-info__header">Tips for drinking responsibly</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="module-info__body">
            <info-content v-for="(element, index) in content"
              :image="element.image"
              :key="index"
              :paragraph="element.paragraph"
              :icon="element.icon">
            </info-content>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import infoContent from './infoContent'
export default {
  components: {
    infoContent
  },
  data () {
    return {
      content: {
        0: {
          image: 'images/thumbnail/alcohol_thumbnail.jpg',
          paragraph: 'Dont Drink',
          icon: {
            'c': 'fab fa-accessible-icon', 'l': 'accessible-icon'
          }
        },
        1: {
          image: null,
          paragraph: 'Stop drinking',
          icon: {
            'c': 'fas fa-glass-martini', 'l': 'glass-martini'
          }
        },
        2: {
          image: null,
          paragraph: 'Drinking is bad',
          icon: {
            'c': 'fas fa-glass-whiskey', 'l': 'glass-whiskey'
          }
        },
        3: {
          image: null,
          paragraph: 'Drinking and driving is bad',
          icon: {
            'c': 'fas fa-beer', 'l': 'beer'
          }
        },
        4: {
          image: null,
          paragraph: 'Dawg why you drinking',
          icon: {
            'c': 'fas fa-dizzy', 'l': 'dizzy'
          }
        },
        5: {
          image: null,
          paragraph: 'Getting your BAC levels above 0.8 can get you a ticket',
          icon: {
            'c': 'fas fa-dizzy', 'l': 'dizzy'
          }
        },
        6: {
          image: null,
          paragraph: 'Ya mama gon be mad',
          icon: {
            'c': 'fas fa-dizzy', 'l': 'dizzy'
          }
        },
        7: {
          image: null,
          paragraph: '1 beer is equivalent to a shot of tequila',
          icon: {
            'c': 'fas fa-dizzy', 'l': 'dizzy'
          }
        },
        8: {
          image: null,
          paragraph: 'Always have a DD if you drinking',
          icon: {
            'c': 'fas fa-dizzy', 'l': 'dizzy'
          }
        }
      }
    }
  }
}
</script>
