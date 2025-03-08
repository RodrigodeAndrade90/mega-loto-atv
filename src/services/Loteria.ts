import { LotteryResult } from "../types/results";
import api from "./api";

class Loteria {
    async get(): Promise<LotteryResult> {
        const {data} = await api.get("/");
        return data;
    }
}

const loteria = new Loteria();
export default loteria;
