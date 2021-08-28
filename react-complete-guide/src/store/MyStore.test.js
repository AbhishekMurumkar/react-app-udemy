const rewire = require("rewire")
const MyStore = rewire("./MyStore")
const logger = MyStore.__get__("logger")
// @ponicode
describe("logger", () => {
    test("0", () => {
        let callFunction = () => {
            logger("Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            logger("Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            logger("Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            logger("Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            logger(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
