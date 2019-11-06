import { CommitOptions, Store, ActionContext } from "vuex";

/** Object class style */
export type DefineTypes<Methods> = {
  [Key in keyof Methods]: Methods[Key] extends undefined
    ? HandlerWithoutPayload<Methods>
    : HandlerWithPayload<Methods, Methods[Key]>;
};

export interface HelperTypes<Mutations, Actions> {
  mutations?: DefineTypes<Mutations>;
  actions?: DefineTypes<Actions>;
}

/** Payload types */
type HandlerWithPayload<Key, TypeKey> = (
  payload: TypeKey,
  root?: boolean,
) => { type: keyof Key; payload: TypeKey; options?: CommitOptions };

type HandlerWithoutPayload<Key> = (
  root?: boolean,
) => { type: keyof Key; options?: CommitOptions };

type StateLocalByDefault<S, R> = R extends undefined ? any : R;

/** Mutations helpers */
export type DefineMutations<Mutation, State, RootState = undefined> = {
  [K in keyof Mutation]: (
    this: Store<StateLocalByDefault<State, RootState>>,
    state: State,
    handler: { payload: Mutation[K] },
  ) => void;
};

/** Actions helpers */
export type DefineActions<Actions, State, RootState = undefined> = {
  [Prop in keyof Actions]: Actions[Prop] extends undefined
    ? ActionWithoutPayload<State, RootState>
    : ActionWithPayload<State, Actions[Prop], RootState>;
};

type ActionWithPayload<State, TypeOfKey, RootState = undefined> = (
  this: Store<StateLocalByDefault<State, RootState>>,
  ctx: ActionContext<State, StateLocalByDefault<State, RootState>>,
  handler: { payload: TypeOfKey },
) => void | Promise<any>;

type ActionWithoutPayload<State, RootState = undefined> = (
  this: Store<StateLocalByDefault<State, RootState>>,
  ctx: ActionContext<State, StateLocalByDefault<State, RootState>>,
) => void | Promise<any>;

/** Getters helpers */
export type DefineGetters<Getters, State, RootState = {}, RootGetters = {}> = {
  [K in keyof Getters]: (
    state: State,
    getters: Getters,
    rootState: RootState,
    rootGetters: RootGetters,
  ) => Getters[K];
};

export type GettersHelper<Getter> = { [K in keyof Getter]: Getter[K] };

/** Store TS */
export type StoreTS<State, Getters> = Omit<Store<State>, "getters"> & {
  readonly getters: GettersHelper<Getters>;
};
