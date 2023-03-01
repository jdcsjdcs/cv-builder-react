const Certificates = ({ certForms, handleInputChange }) => {
    return (
        <div className="cert-f">
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input
                    type="text"
                    name="title"
                    value={certForms.title}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="institution">Institution</label>
                <br />
                <input
                    type="text"
                    name="institution"
                    value={certForms.institution}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default Certificates;
