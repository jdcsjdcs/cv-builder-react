const Certificates = ({certForms, handleInputChange}) => {
    return ( 
    <div>
       
        <label htmlFor="title">Title</label>
        <br />
        <input
            type="text"
            name="title"
            value={certForms.title}
            onChange={handleInputChange}
        />
        <br />
        <label htmlFor="institution">Institution</label>
        <br />
        <input
            type="text"
            name="institution"
            value={certForms.institution}
            onChange={handleInputChange}
        />
    </div> );
}
 
export default Certificates;