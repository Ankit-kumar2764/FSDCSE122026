import react, { useEffect, useState } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);
    const [pointer, setPointer] = useState(1000);
    const [product,setProduct]=useState([]);
    useEffect(() => {
        //
        async function fetchData() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []); 

    return (
        <>
       <div>UseEffect</div>
       <h2 style={{ color: 'blue' }}>Count: {count}</h2>
       <h2 style={{ color: 'red' }}>Pointer: {pointer}</h2>
       <div>
        {JSON.stringify(product)}
       </div>
       <button onClick={() => setCount(count + 10)}>Click Me</button>
     </> 
    )
}

   export default UseEffect 