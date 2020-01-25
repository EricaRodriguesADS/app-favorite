import React, {useState, useEffect} from 'react'
import Search from './Pure'

const ControlledSearch = ()=> {
  const [dataSource, setDataSource] = useState()

  const onSelect = (value: any) => {
    console.log('onSelect', value);
  }
  
  useEffect(()=>{
    setDataSource(['Computadores', 'Imóveis', 'Doces']);
  },[])
  return(<Search dataSource={dataSource}  onSelect={onSelect}/>);
}

export default ControlledSearch;