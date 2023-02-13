const PersInfo = ({ persForm, handleChange }) => {
    return (
        <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
                placeholder="Full name"
                type="text"
                name="name"
                value={persForm.name}
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
        </div>
    );
};

export default PersInfo;
