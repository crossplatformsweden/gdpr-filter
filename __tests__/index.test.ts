
import { gdprfilter } from '..'

describe('filter', () => {
    it('should remove properties', () => {
        const obj = {
            a: "1",
            ssn: "2",
            personummer: "3",
            nested: {
                code: "",
                b: ""
            }
        }
        const filtered = gdprfilter(obj)

        expect(filtered).toEqual({
            a: "1",
            nested: {
                b: ""
            }
        })
        expect(filtered).not.toEqual(obj)
        expect(obj.ssn).toEqual("2")
        expect(filtered.ssn).not.toEqual("2")
    });
});