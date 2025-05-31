import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

describe('Todo component', () => {
  it('renders todo text and status', () => {
    const todo = { text: 'Write tests', done: false }
    const noop = () => {}

    render(<Todo todo={todo} deleteTodo={noop} completeTodo={noop} />)

    expect(screen.getByText('Write tests')).toBeDefined()
    expect(screen.getByText('This todo is not done')).toBeDefined()
    expect(screen.getByText('Set as done')).toBeDefined()
  })
})
