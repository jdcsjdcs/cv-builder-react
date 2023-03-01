const Skills = ({ skillForms, handleInputChange }) => {
    return (
        <div className="skill-f">
            <div>
                <label htmlFor="skill">Skills</label>
                <br />
                <input
                    type="text"
                    name="skill"
                    value={skillForms.skill}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default Skills;
