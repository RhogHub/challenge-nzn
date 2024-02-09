import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import { SearchAscendingOrderNumsUseCaseInputDto, SearchAscendingOrderNumsUseCaseOutputDto } from "./search-ascending-order-nums.dto";

export default class SearchAscendingOrderNumsUsecase implements UseCaseInterface {
   
    async execute(input: SearchAscendingOrderNumsUseCaseInputDto): Promise<SearchAscendingOrderNumsUseCaseOutputDto> {
        let left = 0;
        let right = input.nums.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (input.nums[mid] === input.target) {
                return {
                    index: mid,
                };              
            } else if (input.nums[mid] < input.target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return {
            index: -1,
        };
    }
}