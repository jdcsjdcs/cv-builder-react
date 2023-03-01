const Education = ({ eduForms, handleInputChange }) => {
    return (
        <div className="edu-f">
            <div>
                <label htmlFor="startMonths">Start date</label>
                <br />
                <input
                    placeholder="dfgsdgsd"
                    type="month"
                    name="startDate"
                    value={eduForms.startDate}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="endMonths">End date</label>
                <br />
                <input
                    type="month"
                    name="endDate"
                    value={eduForms.endDate}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="institution">Institution</label>
                <br />
                <input
                    type="text"
                    name="institution"
                    value={eduForms.institution}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="qualification">Qualification</label>
                <br />
                <input
                    type="text"
                    name="qualification"
                    value={eduForms.qualification}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default Education;
