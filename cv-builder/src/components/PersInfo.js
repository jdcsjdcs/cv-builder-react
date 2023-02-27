const PersInfo = ({ persForm, handleChange }) => {
    return (
        <div >
            <label htmlFor="name">Name</label>
            <br />
            <input
                type="text"
                name="name"
                value={persForm.name}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="prof">Professional title</label>
            <br />
            <input
                type="text"
                name="prof"
                value={persForm.prof}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="prof">Address</label>
            <br />
            <input
                type="text"
                name="address"
                value={persForm.address}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
                type="email"
                name="email"
                value={persForm.email}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Phone</label>
            <br />
            <input
                type="phone"
                name="phone"
                value={persForm.phone}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="web">Web</label>
            <br />
            <input
                type="text"
                name="web"
                value={persForm.web}
                onChange={handleChange}
            />
        </div>
    );
};

export default PersInfo;
