const Languages = ({ langForms, handleInputChange }) => {
    return (
        <div className="lang-f">
            <div>
                <label htmlFor="lang">Languages</label>
                <br />
                <input
                    type="text"
                    name="lang"
                    value={langForms.lang}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="level">Level</label>
                <br />
                <input
                    type="text"
                    name="level"
                    value={langForms.level}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default Languages;
