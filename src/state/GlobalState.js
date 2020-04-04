
import { createGlobalState } from 'react-hooks-global-state';
 
const initialState = { count: 0 };
const { useGlobalState } = createGlobalState(initialState);

const  useGlobalCounter=()=> {
    // 接受初始化的值生成state
    const [count, changeCount] = useGlobalState('count');
    // 声明减少的方法
    const decrease = () => {
      changeCount(count - 1);
    }
    // 声明增加的方法
    const increase = () => {
      changeCount(count + 1);
    }
    // 声明重置计数器方法
    const resetCounter = () => {
      changeCount(0);
    }
    // 将count数字与方法返回回去
    return [count, { decrease, increase, resetCounter }]
}
  


const functions={
    useGlobalState,useGlobalCounter

}
export default functions

