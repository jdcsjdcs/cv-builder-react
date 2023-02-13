const Education = ({ eduForms, handleInputChange }) => {
    return (
        <div>
            <label htmlFor="startMonths">Start date</label>
            <br />
            <input
                type="date"
                name="startDate"
                value={eduForms.startDate}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="endMonths">End date</label>
            <br />
            <input
                type="date"
                name="endDate"
                value={eduForms.endDate}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="institution">Institution</label>
            <br />
            <input
                type="text"
                name="institution"
                value={eduForms.institution}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="qualification">Qualification</label>
            <br />
            <input
                type="text"
                name="qualification"
                value={eduForms.qualification}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Education;
