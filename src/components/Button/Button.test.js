import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Button from '../Button';

describe('Button implementation', () => {
  test('Button is enabled when not loading', () => {
    const {getByRole} = render(<Button isLoading={false}/>)
    expect(getByRole('button')).not.toBeDisabled()
  })

  test('Button is disabled when loading', () => {
    const {getByRole} = render(<Button isLoading={true}/>)
    expect(getByRole('button')).toBeDisabled()
  })

  test('Button displays spinner when loading', () => {
    const {getByTestId} = render(<Button isLoading={true}/>)
    expect(getByTestId('spinner')).toBeInTheDocument();
  })

  test('Button displays content', () => {
    const {getByText} = render(<Button content={'Test Content'}/>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  test('Button handles click', () => {
    const handleClick = jest.fn()
    const {getByRole} = render(<Button onClick={handleClick}/>)
    userEvent.click(getByRole('button'))
    expect(handleClick.mock.calls.length).toEqual(1);
  })
})

