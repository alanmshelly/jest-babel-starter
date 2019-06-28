import Hoge from '../src/play'

describe('jest spec', () => {
    it('should pass', () => {
        expect(true).toEqual(true)
    })

    it('should fail', () => {
        expect(true).toEqual(false)
    })

    it('should import', () => {
        expect(new Hoge()).toBeInstanceOf(Hoge)
    })
})