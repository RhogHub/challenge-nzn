import express, { Request, Response } from "express";
import SearchAscendingOrderNumsUsecase from "../../../modules/search-nums/usecase/search-ascending-order-nums/search-ascending-order-nums.usecase";
import { SearchAscendingOrderNumsUseCaseInputDto } from "../../../modules/search-nums/usecase/search-ascending-order-nums/search-ascending-order-nums.dto";

export const searchRoute = express.Router();

searchRoute.post('/', async (req: Request, res: Response) => {
    const usecase = new SearchAscendingOrderNumsUsecase();
    
    try {
        const input: SearchAscendingOrderNumsUseCaseInputDto = {
            nums: req.body.nums,
            target: req.body.target,
        };

        const output = await usecase.execute(input);
        res.status(200).send(output);
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
});