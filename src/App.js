import React, {lazy, Suspense, useReducer, useState} from 'react'
const RiverInformation =lazy(()=>import(/* webpackChunkName: "RiverInformation" */ './components/RiverInformation')) 

function App() {
  const [river, setRiver] = useState('nilo')
  const [show, toggle]=useReducer(state=>!state, true)
  return (
    <div className="wrapper">
      <h1>Los Ríos más Grandes del Mundo</h1>
      <div><button onClick={toggle}>Mostrar Detalles</button></div>
      <button onClick={()=>setRiver('nilo')}>Nilo</button>
      <button onClick={()=>setRiver('amazonas')}>Amazonas</button>
      <button onClick={()=>setRiver('yangtze')}>Yangtze</button>
      <button onClick={()=>setRiver('mississippi')}>Mississipi</button>
      <Suspense fallback={<div>Cargando Componente</div>}>
       {show && <RiverInformation name={river}/>}
      </Suspense> 
    </div>
  );
}

export default App;
