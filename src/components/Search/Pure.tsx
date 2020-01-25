import React, {FC} from 'react';
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';

type SelectValue = Object;
interface ISearchProps{
  dataSource : [];
  onSelect?: ((value: SelectValue, option: Object) => any) | undefined
}

const Search: FC<ISearchProps> = ({dataSource, onSelect})=>{
  return(
    <div className="global-search-wrapper" style={{ width: '100%' }}>
        <AutoComplete
          style={{ width: '100%' }}
          dataSource={dataSource}
          placeholder="Buscar Categoria"
          filterOption={(inputValue, option:any) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          onSelect={onSelect}
        />
    </div>
  )
}

export default Search


