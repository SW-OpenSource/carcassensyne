import 'jest-styled-components'
import React from 'react'
import { mount } from 'enzyme'
import { LabelAndText } from '../index'
import { renderWithTheme } from 'utils/tests'

describe('LabelAndText', () => {
  test('Should render a Text element', () => {
    const component = renderWithTheme(
      <LabelAndText
        label="Hello World!"
        text={
          <span role="img" aria-label="Hello World!">
            🙌
          </span>
        }
      />,
    ).toJSON()
    expect(component).toMatchSnapshot()
  })

  test('Should render correct label', () => {
    const EXPECTED_RESULT = 'Hello World!'
    const component = mount(
      <LabelAndText
        label="Hello World!"
        text={
          <span role="img" aria-label="Hello World!">
            🙌
          </span>
        }
      />,
    )
    expect(component.props().label).toStrictEqual(EXPECTED_RESULT)
  })

  test('Should render correct text', () => {
    const EXPECTED_RESULT = (
      <span role="img" aria-label="Hello World!">
        🤘🏻
      </span>
    )
    const component = mount(
      <LabelAndText
        label="Hello World!"
        text={
          <span role="img" aria-label="Hello World!">
            🤘🏻
          </span>
        }
      />,
    )
    expect(component.props().text).toStrictEqual(EXPECTED_RESULT)
  })
})
