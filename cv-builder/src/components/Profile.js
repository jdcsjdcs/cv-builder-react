const Profile = ({ profileForm, handleChange }) => {
    return (
        <div>
           
                <textarea
                    value={profileForm.profile}
                    onChange={handleChange}
                    name="profile"
                />
            
        </div>
    );
};

export default Profile;
