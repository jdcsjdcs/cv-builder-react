const Cv = ({ persForm, expForms, eduForms }) => {
    return (
        <div>
            <div>
                <p>{persForm.name}</p>
                <p>{persForm.email}</p>
                <p>{persForm.phone}</p>
            </div>

            <div>
                {expForms.map((form, index) => (
                    <div key={index}>
                        {form.jobTitle && <p>Job title:{form.jobTitle}</p>}
                        {form.jobDescription && (
                            <p>Job description:{form.jobDescription}</p>
                        )}
                    </div>
                ))}
            </div>

            <div>
                {eduForms.map((form, index) => (
                    <div key={index}>
                        <p>{form.startDate}</p>
                        <p>{form.endDate}</p>
                        <p>{form.institution}</p>
                        <p>{form.qualification}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cv;
