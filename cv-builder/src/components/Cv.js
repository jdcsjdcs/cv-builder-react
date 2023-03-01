import { forwardRef } from "react";

const Cv = forwardRef(
    (
        {
            persForm,
            expForms,
            eduForms,
            certForms,
            skillForms,
            langForms,
            profileForm,
        },
        ref
    ) => {
        return (
            <div className="print" ref={ref}>
                <div className="header">
                    <div className="name-prof">
                        <h2>{persForm.name}</h2>
                        <h5>{persForm.prof}</h5>
                    </div>
                    <div className="info">
                        {persForm.address && <p>🖈 {persForm.address}</p>}
                        {persForm.email && <p>&#9993; {persForm.email}</p>}
                        {persForm.phone && <p>&#9743; {persForm.phone}</p>}
                        {persForm.web && <p>&#x1F30E; {persForm.web}</p>}
                    </div>
                </div>

                <div className="main">
                    <div className="left">
                        <div>
                            {profileForm.profile && <h3>Profile</h3>}

                            <p className="profile">{profileForm.profile}</p>
                        </div>

                        <div>
                            {expForms.map((form, index) => (
                                <div key={index}>
                                    {index === 0 && <h3>Experiences</h3>}
                                    <div className="experiences">
                                        <div className="exp-dates">
                                            <div>{form.startDate}</div>
                                            <div>{form.endDate}</div>
                                        </div>
                                        <div className="exp-title-emp">
                                            <p className="job-title">
                                                {form.jobTitle}
                                            </p>

                                            <p>{form.employer}</p>
                                        </div>
                                        <div className="exp-city">
                                            <p>{form.city}</p>
                                        </div>
                                    </div>
                                    {form.jobDescription && (
                                        <p className="job-description">
                                            &#9679; {form.jobDescription}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            {eduForms.map((form, index) => (
                                <div key={index}>
                                    {index === 0 && <h3>Education</h3>}
                                    <div className="education">
                                        <div className="edu-date">
                                            <p>{form.startDate}</p>
                                            <p>{form.endDate}</p>
                                        </div>
                                        <div className="edu-inst-qual">
                                            <p className="qualification">
                                                {form.qualification}
                                            </p>
                                            <p>{form.institution}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            {certForms.map((form, index) => (
                                <div key={index}>
                                    {index === 0 && <h3>Certification</h3>}
                                    <div className="certification">
                                        <p className="title">{form.title}</p>
                                        <p>{form.institution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            {skillForms.map((form, index) => (
                                <div key={index}>
                                    {index === 0 && <h3>Skills</h3>}
                                    <div className="skills">
                                        {form.skill && (
                                            <p>&#9679; {form.skill}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            {langForms.map((form, index) => (
                                <div key={index}>
                                    {index === 0 && <h3>Language</h3>}
                                    <div className="languages">
                                        <p>{form.lang}</p>
                                        <p>{form.level}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

export default Cv;
