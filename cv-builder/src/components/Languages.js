const Languages = ({ langForms, handleInputChange }) => {
    return (
        <div>
            <label htmlFor="lang">Languages</label>
            <br />
            <input
                type="text"
                name="lang"
                value={langForms.lang}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="level">Level</label>
            <br />
            <input
                type="text"
                name="level"
                value={langForms.level}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Languages;
