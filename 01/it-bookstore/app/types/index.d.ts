declare module '*.jpg'
declare module '*.ppg'

declare type RootState = ReturnType<typeof import('./store').store.getState>
declare type AppDispatch = typeof import('./store').store.dispatch