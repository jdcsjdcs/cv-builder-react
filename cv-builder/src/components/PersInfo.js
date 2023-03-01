const PersInfo = ({ persForm, handleChange }) => {
    return (
        <div className="pers-f">
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input
                    type="text"
                    name="name"
                    value={persForm.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="prof">Professional title</label>
                <br />
                <input
                    type="text"
                    name="prof"
                    value={persForm.prof}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="prof">Address</label>
                <br />
                <input
                    type="text"
                    name="address"
                    value={persForm.address}
                    onChange={handleChange}
                />
            </div>

            <div>
                {" "}
                <label htmlFor="email">Email</label>
                <br />
                <input
                    type="email"
                    name="email"
                    value={persForm.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="email">Phone</label>
                <br />
                <input
                    type="phone"
                    name="phone"
                    value={persForm.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                {" "}
                <label htmlFor="web">Web</label>
                <br />
                <input
                    type="text"
                    name="web"
                    value={persForm.web}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default PersInfo;
