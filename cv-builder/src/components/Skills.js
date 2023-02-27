const Skills = ({skillForms, handleInputChange}) => {
    return (
        <div>
       
        <label htmlFor="skill">Skills</label>
        <br />
        <input
            type="text"
            name="skill"
            value={skillForms.skill}
            onChange={handleInputChange}
        />
        <br />
        
        </div>
    );
}
 
export default Skills;