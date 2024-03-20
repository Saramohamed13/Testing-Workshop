const lab1 = require("../../lab/lab1")


describe("capitalizeTextFirstChar function : ", () => {
 
    it("It should capitalize each first character of each word in a string", function () {
        let actualValue = lab1.capitalizeTextFirstChar("Sara mOhmeeed abd");
        let expectedValue = "Sara MOhmeeed Abd";
        expect(actualValue).toBe(expectedValue);
    })
    it("It should return a string type", function () {
        let actualValue = lab1.capitalizeTextFirstChar("Saraaa");
        let expectedType = jasmine.any(String);
        expect(actualValue).toEqual(expectedType);
    })

  
    
    it("It should throw an error when passing number input", function () {
        let fun = () => lab1.capitalizeTextFirstChar(50);
        expect(fun).toThrow();
    })
});

describe("createArray function : ", () => {
   
    it("It should return an Array type", function () {
        let actualValue = lab1.createArray(7);
        let expectedType = jasmine.any(Array);
        expect(actualValue).toEqual(expectedType);
    })
    it("It should return an Array of size 3 where 3 is a number input and it should NOT include number 3", function () {
        let actualValue = lab1.createArray(3);
        let expectedValue = [0, 1, 2]
        expect(actualValue).toEqual(expectedValue);
        expect(actualValue).not.toContain(3);
    })
   
    it("It should return an Array of size 2 where 2 is a number input and it should include number 1", function () {
        let actualValue = lab1.createArray(2);
        let expectedValue = 2;
        expect(actualValue).toHaveSize(expectedValue);
        expect(actualValue).toContain(1);
    })

 
  
});


describe("random function : ", () => {
  
    it("It should return a Number data type", function () {
        let actualValue = lab1.random(1, 7);
        let expectedType = jasmine.any(Number);
        expect(actualValue).toEqual(expectedType);
    })


  
    it("It should return a number within 5 to 7 ", function () {
        let actualValue = lab1.random(5, 7);
        expect(actualValue >= 5 && actualValue <= 7).toBeTrue();
    })

  
    it("It should return NaN", function () {
        let actualValue = lab1.random(3);
        expect(actualValue).toBeNaN();
    })
});

