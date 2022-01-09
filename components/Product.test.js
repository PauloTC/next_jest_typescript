import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Product from './Product'


describe('<Product />', () => {
  let component

  const product = {
    title: 'this is a test',
    price: 2
  }

  const mockHandler = jest.fn()

  beforeEach(() => {
    component =  render(
      <Product item={product} handleUpdateAmount={mockHandler} />
    )
  })

  test('renders component', () => {
    component.getByText('this is a test')
  })
  
  test('clicking the buton event handler once', () => {
    const button = component.getByText('Add to Cart')
    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
    
    component.getByText('Remove to Cart')
  })

})
