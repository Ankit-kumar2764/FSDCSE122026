import react, { useEffect, useState } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);
    const [pointer, setPointer] = useState(1000);
    useEffect(() => {
        console.log('useEffect called');
    }, []); 

    return (
        <>
       <div>UseEffect</div>
       <div style={{ color: 'blue' }}>Count: {count}</div>
       <div style={{ color: 'red' }}>Pointer: {pointer}</div>
       <button onClick={() => setCount(count + 10)}>Click Me</button>
     </> 
    )
}

   export default UseEffect 