import Education from "./components/Education";
import Experiences from "./components/Experiences";
import PersInfo from "./components/PersInfo";
import { useState, useEffect, useRef } from "react";
// import Test2 from "./components/Test2";
import AddButton from "./components/buttons/AddButton";
import {
    handleInputChange,
    handleRemoveForm,
    handleAddForm,
    handleChange,
} from "./components/funcs";
import RemoveButton from "./components/buttons/RemoveButton";
import { edu, exp, pers, cert, skill, lang, profile} from "./components/data";
import SaveButton from "./components/buttons/SaveButton";
import Cv from "./components/Cv";
import ReactToPrint from "react-to-print";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Profile from "./components/Profile";


function App() {
    const componentRef = useRef();

    // Personal Data
    const [persForm, setPersForm] = useState({ ...pers });

    useEffect(() => {
        const storedData = localStorage.getItem("persFormData");

        storedData && setPersForm(JSON.parse(storedData));
    }, []);

    // Profile
    const [profileForm, setProfileForm] = useState({ ...profile });

    useEffect(() => {
        const storedData = localStorage.getItem("profileFormData");

        storedData && setProfileForm(JSON.parse(storedData));
    }, []);

    // Experiences
    const [expForms, setExpForms] = useState([{ ...exp }]);

    useEffect(() => {
        const storedData = localStorage.getItem("expFormData");

        storedData && setExpForms(JSON.parse(storedData));
    }, []);

    // Education
    const [eduForms, setEduForms] = useState([{ ...edu }]);

    useEffect(() => {
        const storedData = localStorage.getItem("eduFormData");
        storedData && setEduForms(JSON.parse(storedData));
    }, []);

    // Certificates
    const [certForms, setCertForms] = useState([{ ...cert }]);

    useEffect(() => {
        const storedData = localStorage.getItem("certFormData");

        storedData && setCertForms(JSON.parse(storedData));
    }, []);

    // Skills
    const [skillForms, setSkillForms] = useState([{ ...skill }]);

    useEffect(() => {
        const storedData = localStorage.getItem("skillFormData");

        storedData && setSkillForms(JSON.parse(storedData));
    }, []);

    // Languages
    const [langForms, setLangForms] = useState([{ ...lang }]);

    useEffect(() => {
        const storedData = localStorage.getItem("langFormData");

        storedData && setLangForms(JSON.parse(storedData));
    }, []);


    const handleSaveForm = (e) => {
        e.preventDefault();
        localStorage.setItem("persFormData", JSON.stringify(persForm));
        localStorage.setItem("expFormData", JSON.stringify(expForms));
        localStorage.setItem("eduFormData", JSON.stringify(eduForms));
        localStorage.setItem("certFormData", JSON.stringify(certForms));
        localStorage.setItem("skillFormData", JSON.stringify(skillForms));
        localStorage.setItem("langFormData", JSON.stringify(langForms));
        localStorage.setItem("profileFormData", JSON.stringify(profileForm));
    };

    // const[test2Value, setTest2Value] = useState([{field1:'', field2:''}])
    // const handleTest2OnChange = (e, id) => {
    //   let newTest2Value = [...test2Value]
    //   newTest2Value[id][e.target.name] = e.target.value
    //   setTest2Value(newTest2Value)
    //   console.log(newTest2Value)

    // }
    // const addTest = () => {
    //   setTest2Value([...test2Value, {field1:'', field2:''}])
    // }

    return (
        <div className="App">
            {/*        
          <div>
            {test2Value.map((item, id) => (<Test2 key={`test2${id}`} onChange={handleTest2OnChange} value={test2Value[id]} index={id}/>))}
            <div>
              <button onClick={addTest}>Add</button>
            </div>
          </div> */}

            <div className="form">
                <h4>Personal information</h4>
                <div className="pers">
                    <PersInfo
                        persForm={persForm}
                        handleChange={(e) =>
                            handleChange(e, persForm, setPersForm)
                        }
                    />
                </div>
                <h4>Profile</h4>
                <div className="profi">
                    <Profile
                        profileForm={profileForm}
                        handleChange={(e) =>
                            handleChange(e, profileForm, setProfileForm)
                        }
                    />
                </div>

                <h4>Experiences</h4>

                {expForms.map((form, index) => (
                    <div className="exp" key={index}>
                        <Experiences
                            expForms={expForms[index]}
                            handleInputChange={(e) =>
                                handleInputChange(
                                    expForms,
                                    setExpForms,
                                    index,
                                    e
                                )
                            }
                        />

                        <RemoveButton
                            removeForm={() =>
                                handleRemoveForm(expForms, setExpForms, index)
                            }
                        />
                    </div>
                ))}
                <div className="add-btn">
                    <AddButton
                        addForm={() =>
                            handleAddForm(exp, expForms, setExpForms)
                        }
                    />
                </div>

                <h4>Education</h4>

                {eduForms.map((form, index) => (
                    <div className="edu" key={index}>
                        <Education
                            eduForms={eduForms[index]}
                            handleInputChange={(e) =>
                                handleInputChange(
                                    eduForms,
                                    setEduForms,
                                    index,
                                    e
                                )
                            }
                        />

                        <RemoveButton
                            removeForm={() =>
                                handleRemoveForm(eduForms, setEduForms, index)
                            }
                        />
                    </div>
                ))}

                <AddButton
                    addForm={() => handleAddForm(edu, eduForms, setEduForms)}
                />

                <h4>Certificates</h4>

                {certForms.map((form, index) => (
                    <div className="cert" key={index}>
                        <Certificates
                            certForms={certForms[index]}
                            handleInputChange={(e) =>
                                handleInputChange(
                                    certForms,
                                    setCertForms,
                                    index,
                                    e
                                )
                            }
                        />

                        <RemoveButton
                            removeForm={() =>
                                handleRemoveForm(certForms, setCertForms, index)
                            }
                        />
                    </div>
                ))}
               
                    <AddButton
                        addForm={() =>
                            handleAddForm(cert, certForms, setCertForms)
                        }
                    />
              

            <h4>Skills</h4>

                {skillForms.map((form, index) => (
                    <div className="skill" key={index}>
                        <Skills
                            skillForms={skillForms[index]}
                            handleInputChange={(e) =>
                                handleInputChange(
                                    skillForms,
                                    setSkillForms,
                                    index,
                                    e
                                )
                            }
                        />

                        <RemoveButton
                            removeForm={() =>
                                handleRemoveForm(skillForms, setSkillForms, index)
                            }
                        />
                    </div>
                ))}
              
                    <AddButton
                        addForm={() =>
                            handleAddForm(skill, skillForms, setSkillForms)
                        }
                    />
               

                <h4>Languages</h4>

                {langForms.map((form, index) => (
                    <div className="lang" key={index}>
                        <Languages
                            langForms={langForms[index]}
                            handleInputChange={(e) =>
                                handleInputChange(
                                    langForms,
                                    setLangForms,
                                    index,
                                    e
                                )
                            }
                        />

                        <RemoveButton
                            removeForm={() =>
                                handleRemoveForm(langForms, setLangForms, index)
                            }
                        />
                    </div>
                ))}

                <AddButton
                    addForm={() => handleAddForm(lang, langForms, setLangForms)}
                />
            </div>
            

            <div>
                <div className="cv">
                    <Cv
                        persForm={persForm}
                        expForms={expForms}
                        eduForms={eduForms}
                        certForms={certForms}
                        skillForms={skillForms}
                        langForms={langForms}
                        profileForm={profileForm}

                    />
                </div>
                <div className="save-btn">
                    <SaveButton saveForm={handleSaveForm} />

                    <ReactToPrint
                        trigger={() => <button>Print</button>}
                        content={() => componentRef.current}
                    />
                </div>
            </div>

            <div className="hide">
                <Cv
                    persForm={persForm}
                    expForms={expForms}
                    eduForms={eduForms}
                    certForms={certForms}
                    skillForms={skillForms}
                    langForms={langForms}
                    profileForm={profileForm}
                    ref={componentRef}
                />
            </div>
        </div>
    );
}
// localStorage.clear()
console.log(localStorage);
export default App;
