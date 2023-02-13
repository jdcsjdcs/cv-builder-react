const Test2 = ({onChange, value, index}) => {

    // const handleOnChange = (e) => {
    //     onChange(e, index)
    // }
    return ( 
        <div>
            <input onChange={(e) => onChange(e, index) } type="text" value={value.field1} name='field1'/>
            <input onChange={(e) => onChange(e, index) } type="text" value={value.field2} name='field2'/>
        </div>
     );
}
 
export default Test2;