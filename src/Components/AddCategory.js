import React,{useState} from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories})=>{
    const [inputValue, setinputValue] = useState('Introduce un valor')
    const handleOnChange = (e) => {
        const val = e.target.value;
        setinputValue(val);
        
    }
    const handleSubmit =(e)  =>{
        // setCategories([...categories,inputValue]);
        if(inputValue.trim().length > 0){
            setCategories((categories) => [inputValue.trim(),...categories]);
            setinputValue('');
        }
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Add category</h2>
            <input 
                type="text" 
                value={inputValue}
                onChange={handleOnChange}
            />
        </form>
    );

}
AddCategory.propTypes={
    setCategories : PropTypes.func.isRequired,
    // categories : PropTypes.array.isRequired
}
