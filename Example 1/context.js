import { runInNewContext } from 'vm';
const ContextObject = runInNewContext('Object'); // 새로운 컨텍스트에 객체를 생성

console.log(Object === ContextObject); // false. 메인 컨텍스트의 Object와 ContextObject는 다른 컨텍스트에 속함.
console.log(new Object() instanceof ContextObject); // false
console.log(ContextObject.name); // ContextObject의 name 속성을 보면 Object와 같이 똑같음.
console.log(Object.name);
