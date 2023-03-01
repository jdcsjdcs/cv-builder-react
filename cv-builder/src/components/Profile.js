const Profile = ({ profileForm, handleChange }) => {
    return (
       
           
                <textarea
                    value={profileForm.profile}
                    onChange={handleChange}
                    name="profile"
                />
            
        
    );
};

export default Profile;
