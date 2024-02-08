import Numbers from "./numbers.value-object";

describe("Search usecase unit test", () => {   
    it("should throw error when nums is an empty array", async () => {
        const nums: number[] = [];
        const target = 5;

        expect(() => {
            new Numbers({
                nums,
                target,
            });
        }).toThrow("There must be at least one element in the array");         
    });    
    
});