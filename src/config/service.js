export const __MOCK__ = true; // 是否全局开启mock

export const COMMON_API_PREFIX = '/api'; // 对应webpack-dev-server中的proxy配置

export const MOCK_API_PREFIX = '/mockApi'; // 对应webpack-dev-server中的proxy配置

/* ============== 按照接口分类定义下列接口 ============== */

export const user = {
    getUserList: '/user/list'
};

export const order = {
    getOrderInfo: '/order/:id'
};
