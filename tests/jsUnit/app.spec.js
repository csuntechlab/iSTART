import 'jest-extended'

describe('setup test', () => {
  it('should add to 2', () => {
    expect(1 + 1).toBe(2)
  })

  it('should be even', () => {
    expect(1 + 2).toBeOdd()
  })
})
