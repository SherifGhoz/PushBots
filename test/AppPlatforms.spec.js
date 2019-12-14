import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import AppPlatforms from '@/components/AppPlatforms.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

const factory = (propsData) =>
  mount(AppPlatforms, {
    propsData,
    localVue
  })

describe('AppPlatforms', () => {
  it('renders', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders all platforms', () => {
    const wrapper = factory({
      platforms: {
        ios: true,
        android: true,
        chrome: true,
        firefox: true,
        opera: true,
        safari: true
      }
    })
    expect(wrapper.findAll('.v-icon').length).toBe(6)
  })

  it('renders three platforms', () => {
    const wrapper = factory({
      platforms: {
        firefox: true,
        opera: true,
        safari: true
      }
    })
    expect(wrapper.findAll('.v-icon').length).toBe(3)
  })
  it('renders 0 platforms', () => {
    const wrapper = factory()
    expect(wrapper.findAll('.v-icon').length).toBe(0)
  })
})
