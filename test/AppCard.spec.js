import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import filters from '@/plugins/filters'
import AppCard from '@/components/AppCard.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(filters)

describe('AppCard', () => {
  const app = {
    id: '91cb57e5-61ba-4f5e-b67f-1f4bbf04268f',
    title: 'Wandering funny development',
    icon: 'https://picsum.photos/50/50',
    totalUsers: '33,383'
  }

  const factory = () =>
    shallowMount(AppCard, {
      propsData: { app },
      localVue
    })

  it('renders', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders title', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(app.title)
  })

  it('renders total users', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain(app.totalUsers)
  })

  it('renders icon', () => {
    const wrapper = factory()
    const image = wrapper.find('img')
    expect(image.attributes('src')).toStartWith(app.icon) // because added suffix
  })
})
