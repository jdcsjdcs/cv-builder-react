const Experiences = ({ expForms, handleInputChange }) => {
    return (
        <div>
            <div>
                <label htmlFor="startMonths">Start date</label>
                <br />
                <input
                    type="date"
                    name="startDate"
                    value={expForms.startDate}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="endMonths">End date</label>
                <br />
                <input
                    type="date"
                    name="endDate"
                    value={expForms.endDate}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="jobTitle">Job title</label>
                <br />
                <input
                    type="text"
                    name="jobTitle"
                    value={expForms.jobTitle}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="jobDescription">Job description</label>
                <br />
                <input
                    type="text"
                    name="jobDescription"
                    value={expForms.jobDescription}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default Experiences;
