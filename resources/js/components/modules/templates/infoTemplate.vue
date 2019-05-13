<template>
  <div class="module-info">
    <div class="row">
      <div class="col-12">
        <h1 class="module-info__header">Tips for drinking responsibly</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="module-info__body">
          <info-content v-for="(element, index) in content"
            :key="index"
            :paragraph="element.paragraph"
            :icon="element.icon">
          </info-content>
          <!-- <p class="module-info__sentence" v-for="(sentence, key) in content" :key="key"><i :class="sentence.icon.c"></i> {{ sentence.paragraph }}</p> -->
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
          paragraph: 'Dont Drink',
          icon: {
            'c': 'fab fa-accessible-icon', 'l': 'accessible-icon'
          }
        },
        1: {
          paragraph: 'Stop drinking',
          icon: {
            'c': 'fas fa-glass-martini', 'l': 'glass-martini'
          }
        },
        2: {
          paragraph: 'Drinking is bad',
          icon: {
            'c': 'fas fa-glass-whiskey', 'l': 'glass-whiskey'
          }
        },
        3: {
          paragraph: 'Drinking and driving is bad',
          icon: {
            'c': 'fas fa-beer', 'l': 'beer'
          }
        },
        4: {
          paragraph: 'Dawg why you drinking',
          icon: {
            'c': 'fas fa-dizzy', 'l': 'dizzy'
          }
        },
        5: {
          paragraph: 'Getting your BAC levels above 0.8 can get you a ticket',
          icon: {
            'c': 'fas fa-dizzy', 'l': 'dizzy'
          }
        },
        6: {
          paragraph: 'Ya mama gon be mad',
          icon: {
            'c': 'fas fa-dizzy', 'l': 'dizzy'
          }
        },
        7: {
          paragraph: '1 beer is equivalent to a shot of tequila',
          icon: {
            'c': 'fas fa-dizzy', 'l': 'dizzy'
          }
        },
        8: {
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
