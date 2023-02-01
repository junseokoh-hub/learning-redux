# Learning Redux (React-Redux & Redux-Toolkit)

```
// 리액트 리덕스 및 리덕스 툴킷 설치

npm i @reduxjs/toolkit react-redux
```

```
// 리덕스 툴킷 기본 세팅
// index.js

import { Provider } from "react-redux";
import store from "./store/index";

...
<Provider store={store}>
  <App />
</Provider>



// store/index.js

import { configureStore } from "@reduxjs/toolkit"

const store = configureStore();

export default store;
```

[Learning Redux in React](https://www.udemy.com/course/react-redux/)
