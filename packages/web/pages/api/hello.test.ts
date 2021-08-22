import * as hello from "./hello"
// @ponicode
describe("hello.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            hello.default(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
