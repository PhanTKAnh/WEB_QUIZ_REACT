import { get } from "../untils/request";

export const getListQuestion = async (id) => {
    const result = await get(`question?topicsId=${id}`);
   return result;
}