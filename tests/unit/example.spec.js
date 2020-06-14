import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Game from '@/components/Game.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Game, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
