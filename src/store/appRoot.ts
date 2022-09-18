export type AppRoot = {
  token: string | null;
  name: string;
};

const state: AppRoot = {
  token: null,
  name: "pat chen",
};

const mutations = {
  UPDATE_NAME(state: AppRoot, value: string) {
    state.name = value;
  },
};

const actions = {
  // 在这个模块中， dispatch 和 commit 也被局部化了
  // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
  // 所有属性
  async login(context: any) {
    const { state } = context;
    state.token = "1234567899";
    state.name = "laogong5i0";
  },
  async logout(context: any) {
    const { state } = context;
    state.name = null;
    state.token = null;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
