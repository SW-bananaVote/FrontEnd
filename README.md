# Versions
node.js: 20.17.0 <br>
npm: 10.8.2 <br>
vscode: 1.95.0 <br>


# Git Convention

feat : 새로운 기능 추가 <br>
fix : 버그 수정 <br>
docs : 문서 수정 <br>
style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 <br>
refactor : 코드 리펙토링 <br>
test : 테스트 코드, 리펙토링 테스트 코드 추가 <br>
chore : 빌드 업무 수정, 패키지 매니저 수정 <br>
<br>
# React Convention

## 목차

  1. [기본규칙](#기본규칙)
  1. [Class vs `React.createClass` vs stateless](#class-vs-reactcreateclass-vs-stateless)
  1. [믹스인](#믹스인)
  1. [명명규칙](#명명규칙)
  1. [선언](#선언)
  1. [정렬](#정렬)
  1. [따옴표](#따옴표)
  1. [띄어쓰기](#띄어쓰기)
  1. [속성](#속성)
  1. [참조](#참조)
  1. [괄호](#괄호)
  1. [태그](#태그)
  1. [메소드](#메소드)
  1. [순서](#순서)
  1. [`isMounted`](#ismounted)

## 기본규칙

  - 파일당 하나의 컴포넌트 파일만 포함한다.
    - 하지만, 다수의 [Stateless, or Pure, Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) 들은 파일에 존재해도 된다. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
  - 항상 JSX 구문을 사용한다.
  - 만약 JSX를 이용해 앱을 개발 중이라면 `React.createElement` 구문을 사용하지 않는다.

## Class vs `React.createClass` vs stateless

  - 만약 소스 안에 state나 refs가 있으면, `React.createClass` 보다는 `class extends React.Component` 를 선호하라. eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

    ```jsx
    // bad
    const Listing = React.createClass({
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    });

    // good
    class Listing extends React.Component {
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    }
    ```

    그리고 만약 소스 안에 state나 refs가 없다면, 일반 클래스 방식보다 일반 함수(화살표 함수 아님) 방식을 선호하라.:

    ```jsx
    // bad
    class Listing extends React.Component {
      render() {
        return <div>{this.props.hello}</div>;
      }
    }

    // bad (익명함수의 형태이므로 함수의 이름을 추론해야하기 때문에 비추천)
    const Listing = ({ hello }) => (
      <div>{hello}</div>
    );

    // good
    function Listing({ hello }) {
      return <div>{hello}</div>;
    }
    ```

## 믹스인

  - [믹스인을 사용하면 안 된다.](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)
  > 이유: 믹스인은 묵시적인 의존성을 야기하고, 이름 충돌을 야기하며 코드가 더 복잡해질 수 있다. 믹스인을 사용하는 대부분의 경우는 컴포넌트를 더 나은 방법으로 리팩토링하거나 고차 컴포넌트로로 바꾸거나 혹은 유틸리티 모듈로 해결할 수 있다.

## 명명규칙

  - **확장자**: 리엑트 컴포넌트 파일에는 `.jsx` 확장자를 사용한다.
  - **파일 이름**: 파스칼 형식의  이름을 사용한다. E.g., `ReservationCard.jsx`.
  - **참조 값 이름**: 인스턴스는 카멜 형식으로, 리엑트 컴포넌트는 파스칼 형식의 이름을 사용한다. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

    ```jsx
    // bad
    import reservationCard from './ReservationCard';

    // good
    import ReservationCard from './ReservationCard';

    // bad
    const ReservationItem = <ReservationCard />;

    // good
    const reservationItem = <ReservationCard />;
    ```

  - **컴포넌트 이름**: 파일 이름과 동일하게 사용한다. 예를들어, `ReservationCard.jsx` 라는 파일 안에는 `ReservationCard` 라는 이름의 컴포넌트가 있어야 한다. 하지만, 폴더 내 루트 컴포넌트의 경우에는, 파일 이름을 `index.jsx` 로 작성하고, 폴더의 이름을 컴포넌트의 이름으로 작성한다.:

    ``` jsx
    // bad
    import Footer from './Footer/Footer';

    // bad
    import Footer from './Footer/index';

    // good
    import Footer from './Footer';
    ```

  - **상위 컴포넌트 이름**: 상위 컴포넌트의 displayName 속성 값과 하위 컴포넌트의 displayName 속성 값에 활용하여 새롬게 만들어진 컴포넌트의 이름을 만든다. 예를들어, 상위 컴포넌트 withFoo()에서, Bar 라는 하위 컴포넌트가 인자로 넘어왔을 때, 생성되는 컴포넌트의 displayName 속성 값은 withFoo(Bar)이 된다.

  > 이유? 컴포넌트의 displayName 속성은 개발자 도구나 에러 메세지를 확인하기 위해 사용된다. 이 값을 확실하게 넣어줘야 사람들이 이러한 문제를 겪거나 컴포넌트 간의 관계 파악을 할 때 도움이 된다.
  
  ``` jsx
  // bad
  export default function withFoo(WrappedComponent) {
    return function WithFoo(props) {
      return <WrappedComponent {...props} foo />;
    }
  }

  // good
  export default function withFoo(WrappedComponent) {
    function WithFoo(props) {
      return <WrappedComponent {...props} foo />;
    }
    const wrappedComponentName = WrappedComponent.displayName
      || WrappedComponent.name
      || 'Component';
    
    WithFoo.displayName = `withFoo(${wrappedComponentName})`;
    return WithFoo;
  }
  ```

## 선언

  - 컴포넌트의 이름을 지을 때 `displayName` 속성을 사용하지 않는다. 대신에 참조 값으로 컴포넌트의 이름을 짓는다.

    ```jsx
    // bad
    export default React.createClass({
      displayName: 'ReservationCard',
      // stuff goes here
    });

    // good
    export default class ReservationCard extends React.Component {
    }
    ```

## 정렬

  - JSX 구문을 위해서는 아래의 정렬 방식을 따른다. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // bad
    <Foo superLongParam="bar"
         anotherSuperLongParam="baz" />

    // good
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />

    // 만약 props가 하나면 같은 줄에 둔다.
    <Foo bar="bar" />

    // 자식 컴포넌트는 보통 들여쓴다.
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    >
      <Quux />
    </Foo>
    ```

## 따옴표

  - JSX 속성값에는 항상 쌍따옴표 (`"`) 를 사용한다. 하지만 다른 자바스크립트에서는 홑따옴표를 사용한다. eslint: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes)

  > 왜? JSX 속성은 [escaped quotes를 가질수 없다.](http://eslint.org/docs/rules/jsx-quotes), 그래서 쌍따옴표는 해당 타입에 쉽게 `"멈춤 or 그만"` 이라는 의미를 심어준다.
  > HTML 속성들도 보통 홑따옴표 대신 쌍따옴표를 사용한다. 그래서 JSX 속성은 이러한 컨벤션을 따라간다.

  ```jsx
  // bad
  <Foo bar='bar' />

  // good
  <Foo bar="bar" />

  // bad
  <Foo style={{ left: "20px" }} />

  // good
  <Foo style={{ left: '20px' }} />
  ```

## 띄어쓰기

  - 닫힘 태그에는 항상 한 칸짜리 빈 공간을 가진다.

    ```jsx
    // bad
    <Foo/>

    // very bad
    <Foo                 />

    // bad
    <Foo
     />

    // good
    <Foo />
    ```

  - JSX 중괄호에 빈 공간을 덧대지 않는다. eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

    ```jsx
    // bad
    <Foo bar={ baz } />

    // good
    <Foo bar={baz} />
    ```

## 속성

  - 속성의 이름은 항상 카멜케이스를 사용한다.

    ```jsx
    // bad
    <Foo
      UserName="hello"
      phone_number={12345678}
    />

    // good
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />
    ```

  - 만약 속성 값이 명확한 `true` 값이라면 생략한다. eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

    ```jsx
    // bad
    <Foo
      hidden={true}
    />

    // good
    <Foo
      hidden
    />
    ```

  - `<img>` 태그에는 항상 `alt` 속성을 작성한다. 만약 이미지가 표현 가능하다면, `alt` 값은 빈 문자열이 될 수 있거나 `<img>`는 반드시 `role="presentation"` 속성을 가지고 있어야 한다. eslint: [`jsx-a11y/img-has-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-has-alt.md)

    ```jsx
    // bad
    <img src="hello.jpg" />

    // good
    <img src="hello.jpg" alt="Me waving hello" />

    // good
    <img src="hello.jpg" alt="" />

    // good
    <img src="hello.jpg" role="presentation" />
    ```

  - `<img>` 태그의 `alt` 속성 값으로 "image", "photo", "picture" 와 같은 단어를 사용하면 안 된다. eslint: [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

  > 왜? 스크린리더는 이미 `img` 태그를 이미지로 인지하고 있기 때문에, alt 속성 값에 반복으로 해당 정보를 포함할 필요가 없다.
  ```jsx
  // bad
  <img src="hello.jpg" alt="Picture of me waving hello" />
    
  // good
  <img src="hello.jpg" alt="Me waving hello" />
  ```

  - role 속성 값으로는 검증이 가능하고, 추상적이지 않은 값을 사용하라. [ARIA roles](https://www.w3.org/TR/wai-aria/roles#role_definitions). eslint: [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

    ```jsx
    // bad - not an ARIA role
    <div role="datepicker" />

    // bad - abstract ARIA role
    <div role="range" />

    // good
    <div role="button" />
    ```

  - 엘리먼트에 `accessKey` 속성을 사용하면 안 된다. eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

  > 왜? 키보드 단축값을 사용하는 스크린 리더 유저와 일반 키보드 유저간의 일관성이 없어져서 접근성을 복잡하게 만들기 때문이다.

  ```jsx
  // bad
  <div accessKey="h" />

  // good
  <div />
  ```

  - 배열의 인덱스를 `key` 속성 값으로 사용하는 것을 피하고, 유니크한 ID 값을 사용하라. ([why?](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318))

  ```jsx
  // bad
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // good
  {todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```
  
## 참조

  - 항상 참조 콜백 함수를 사용하라. eslint: react/no-string-refs

  ``` jsx
  // bad
  <Foo
    ref="myRef"
  />
  
  // good
  <Foo
    ref={(ref) => this.myRef = ref}
  />
  ```

## 괄호

  - 만약 JSX 태그가 두 줄 이상으로 늘어난다면 괄호로 감싸야 한다. eslint: [`react/wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

    ```jsx
    // bad
    render() {
      return <MyComponent className="long body" foo="bar">
               <MyChild />
             </MyComponent>;
    }

    // good
    render() {
      return (
        <MyComponent className="long body" foo="bar">
          <MyChild />
        </MyComponent>
      );
    }

    // good, 한 줄이라면 괜찮다.
    render() {
      const body = <div>hello</div>;
      return <MyComponent>{body}</MyComponent>;
    }
    ```

## 태그

  - 자식 컴포넌트가 없으면 항상 닫힘 태그를 사용한다. eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

    ```jsx
    // bad
    <Foo className="stuff"></Foo>

    // good
    <Foo className="stuff" />
    ```

  - 만약 컴포넌트가 다수의 속성을 가졌다면, 닫힘 태그는 새로운 줄에 작성한다. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // bad
    <Foo
      bar="bar"
      baz="baz" />

    // good
    <Foo
      bar="bar"
      baz="baz"
    />
    ```

## 메소드

  - 지역 변수를 둘러싸기 위해서는 화살표 함수를 사용해라.

    ```jsx
    function ItemList(props) {
      return (
        <ul>
          {props.items.map((item, index) => (
            <Item
              key={item.key}
              onClick={() => doSomethingWith(item.name, index)}
            />
          ))}
        </ul>
      );
    }
    ```

  - render 메소드에 사용되는 이벤트 핸들러는 생성자에 바인드 해라. eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

  > 왜? render 메소드 내에서 bind를 사용하게게 될 경우에는 새로운 렌더링마다 새로운 함수가 생성되기 때문이다.
  ```jsx
  // bad
  class extends React.Component {
    onClickDiv() {
      // do stuff
    }

    render() {
      return <div onClick={this.onClickDiv.bind(this)} />
    }
  }

  // good
  class extends React.Component {
    constructor(props) {
      super(props);
      
      this.onClickDiv = this.onClickDiv.bind(this);
    }

    onClickDiv() {
      // do stuff
    }

    render() {
      return <div onClick={this.onClickDiv} />
    }
  }
  ```

  - 리엑트 컴포넌트의 내부 메소드를 위해 언더바 문자를 사용하면 안 된다.

    ```jsx
    // bad
    React.createClass({
      _onClickSubmit() {
        // do stuff
      },

      // other stuff
    });

    // good
    class extends React.Component {
      onClickSubmit() {
        // do stuff
      }

      // other stuff
    }
    ```

  - `render` 메소드에서는 값을 리턴해야 한다. eslint: [`require-render-return`](https://github.com/yannickcr/eslint-plugin-react/pull/502)

    ```jsx
    // bad
    render() {
      (<div />);
    }

    // good
    render() {
      return (<div />);
    }
    ```

## 순서

  - `class extends React.Component` 를 위한 순서:

  1. 선택적인 `static` 메소드
  1. `constructor`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *클릭 핸들러나 이벤트 핸들러* like `onClickSubmit()` or `onChangeDescription()`
  1. *`render`를 위한 게터 메소드* like `getSelectReason()` or `getFooterContent()`
  1. *선택적인 렌더 메소드* like `renderNavigation()` or `renderProfilePicture()`
  1. `render`

  - `propTypes`, `defaultProps`, `contextTypes`, etc... 를 정의하는 방법

    ```jsx
    import React, { PropTypes } from 'react';

    const propTypes = {
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string,
    };

    const defaultProps = {
      text: 'Hello World',
    };

    class Link extends React.Component {
      static methodsAreOk() {
        return true;
      }

      render() {
        return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
      }
    }

    Link.propTypes = propTypes;
    Link.defaultProps = defaultProps;

    export default Link;
    ```

  - `React.createClass` 를 위한 순서: eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

  1. `displayName`
  1. `propTypes`
  1. `contextTypes`
  1. `childContextTypes`
  1. `mixins`
  1. `statics`
  1. `defaultProps`
  1. `getDefaultProps`
  1. `getInitialState`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *클릭 핸들러나 이벤트 핸들러* 예시. `onClickSubmit()` 혹은 `onChangeDescription()`
  1. *`render`를 위한 게터 메소드* 예시. `getSelectReason()` 혹은 `getFooterContent()`
  1. *선택적인 렌더 메소드* 예시. `renderNavigation()` 혹은 `renderProfilePicture()`
  1. `render`

## `isMounted`

  - `isMounted` 를 사용하면 안 된다. eslint: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

  > 왜? `isMounted` 은 [안티 패턴이고,][anti-pattern] ES6 클래스 문법에 적용할 수 없을 뿐더러, 공식적으로 사라지게 될 예정이다.

  [anti-pattern]: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html

## 번역

  JSX/React 스타일 가이드는 다른 언어로도 볼 수 있다.:

  - ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/China.png) **Chinese (Simplified)**: [JasonBoy/javascript](https://github.com/JasonBoy/javascript/tree/master/react)
  - ![pl](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Poland.png) **Polish**: [pietraszekl/javascript](https://github.com/pietraszekl/javascript/tree/master/react)
  - ![kr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/South-Korea.png) **Korean**: [apple77y/javascript](https://github.com/apple77y/javascript/tree/master/react)

**[⬆ back to top](#table-of-contents)**
