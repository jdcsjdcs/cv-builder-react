const Test = ({onChange, value}) => {

    const handleOnChange = (e) => {
        onChange(e)
    }
    return ( 
        <div>
            <input onChange={handleOnChange} type="text" value={value} />
        </div>
     );
}
 
export default Test;