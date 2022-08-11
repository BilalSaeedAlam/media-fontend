import Api from "../../config/axiosConfig";
import ApiRoutes from "../ApiRoutes";
const addSubscriber = async (payload) => {
  try {
    return await Api.post(`${ApiRoutes.subscriber}`, payload);
  } catch (error) {
    return {
      status: 404,
    };
  }
};

export default addSubscriber;
