
import { filter } from '..'

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
        const filtered = filter(obj)

        expect(filtered).toEqual({
            a: "1",
            nested: {
                b: ""
            }
        })

    });
});