import { app } from '../express';
import request from "supertest";

describe("E2E test for search", () => {     
    it("should find a target in the nums array ", async () => {
        const response = await request(app)
            .post("/search")
            .send({   
                nums: [0,100,200,300,500,800],
                target: 500       
            });         
        
        expect(response.status).toBe(200);       
        expect(response.body.index).toEqual(4);            
    });         

});
