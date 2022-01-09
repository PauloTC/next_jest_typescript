import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Product from './Product'

test('renders content', () => {
  const product = {
      title: 'this is a test',
      price: 2
  }

  const component = render(<Product item={product} />)

  component.getByText('this is a test')
  // console.log(component)
})

// test('clicking the buton class event handler once')