const Experiences = ({ expForms, handleInputChange }) => {
    return (
        <div >
            
                <label htmlFor="startMonths">Start date</label>
                <br />
                <input
                    type="month"
                    name="startDate"
                    value={expForms.startDate}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="endMonths">End date</label>
                <br />
                <input
                    type="month"
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
                <label htmlFor="city">City</label>
                <br />
                <input
                    type="text"
                    name="city"
                    value={expForms.city}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="employer">Employer</label>
                <br />
                <input
                    type="text"
                    name="employer"
                    value={expForms.employer}
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
    );
};

export default Experiences;
