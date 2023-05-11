# React-tutorial

#### 1. 프로젝트 생성
```bash
# 프로젝트 생성 (npm)
npm init react-app 'Project-Name'
# 프로젝트 생성 (npx)
npx create-react-app 'Project-Name'

# 프로젝트 실행
npm start
```

#### 2. JSX(JavaScript XML)
```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

#### 3. 컴포넌트 만들기
- 상단에 `import React from "react"` 추가
- 하단에 `export default [component-name]` 추가
- 컴포넌트 종류는 함수형 컴포넌트와 클래스형 컴포넌트가 있음

- 함수형 컴포넌트
  ```jsx
  import React from "react";

  function Home() {
      return <h1>This is Home page!</h1>;
  }

  export default Home;
  ```

- 클래스형 컴포넌트
  ```jsx
  import React, {Component} from "react";

  class Home extends Component {
      render() {
          return <h1>This is Home page!</h1>;
      }
  }

  export default Home;
  ```

- 컴포넌트 적용
  ```jsx
  import Home from "./page/home";

  function App() {
    return (
      // react에서는 class가 아니라 className으로 사용함
      <div className="App">
        <Home />
      </div>
    );
  }

  export default App;
  ```

#### 4. React-Router
```bash
# 설치
npm install react-router-dom
```

- router 설정 (index.js)
```jsx
import {BrowserRouter} from 'react-router-dom';

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- router 설정 (App.js)
```jsx
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
				// Link 태그는 랜더링 시 a 태그로 변경됨
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
```

#### 5. useState
```jsx
import React, {useState} from "react";

const Counter = () => {
		// num은 state 변수, setNumber는 num의 setter 함수, 0은 num의 초기값
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
}
```

<br>
참고 : 개발자의 품격 - 한시간 만에 끝내는 React.js 입문 (https://youtu.be/6GECT2Jrr_g)
