import Numbers from "../../domain/value-object/numbers.value-object";

describe("Search usecase unit test", () => {
    it("should return the index of target when it's present in array", async() => {
        const nums = [-1, 0, 3, 5, 9, 12];
        const target = 5;

        const input = new Numbers({
            target,
            nums
        });
        //const usecase = new SearchAscendingOrderNumsUsecase();
        //const result = await usecase.execute(input);
        
        //expect(result.index).toBe(3);
    });

    it("should return -1 when the target isen't present in array", async () => {
        const nums = [-1, 0, 3, 5, 9, 12];
        const target = 2;
        const input = new Numbers({
            nums,
            target,
        })
        //const usecase = new SearchAscendingOrderNumsUsecase();
        //const result = await usecase.execute(input);
        
        //expect(result.index).toBe(-1);
    });

    it("should return the index of target when array has only one element that is the target", async () => {
        const nums = [7];
        const target = 7;

        const input = new Numbers({
            nums,
            target,
        });
        //const usecase = new SearchAscendingOrderNumsUsecase();
        //const result = await usecase.execute(input);
        
        //expect(result.index).toBe(0);
    });

});