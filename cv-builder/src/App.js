import Education from "./components/Education";
import Experiences from "./components/Experiences";
import PersInfo from "./components/PersInfo";
import { useState, useEffect } from "react";
// import Test2 from "./components/Test2";
import AddButton from "./components/buttons/AddButton";
import {
    handleInputChange,
    handleRemoveForm,
    handleAddForm,
    handleChange,
} from "./funcs";
import RemoveButton from "./components/buttons/RemoveButton";
import { edu, exp, pers } from "./components/data";
import SaveButton from "./components/buttons/SaveButton";

function App() {
    // Personal Data

    const [persForm, setPersForm] = useState({ ...pers });

    const handleSavePersForm = (e) => {
        e.preventDefault();
        localStorage.setItem("persFormData", JSON.stringify(persForm));
    };

    useEffect(() => {
        const storedData = localStorage.getItem("persFormData");

        storedData && setPersForm(JSON.parse(storedData));
    }, []);

    // Experiences
    const [expForms, setExpForms] = useState([{ ...exp }]);

    const handleSaveExpForm = (e) => {
        e.preventDefault();
        localStorage.setItem("expFormData", JSON.stringify(expForms));
    };

    useEffect(() => {
        const storedData = localStorage.getItem("expFormData");

        storedData && setExpForms(JSON.parse(storedData));
    }, []);

    // Education
    const [eduForms, setEduForms] = useState([{ ...edu }]);

    const handleSaveEduForm = (e) => {
        e.preventDefault();
        localStorage.setItem("eduFormData", JSON.stringify(eduForms));
    };

    useEffect(() => {
        const storedData = localStorage.getItem("eduFormData");
        storedData && setEduForms(JSON.parse(storedData));
    }, []);

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
                <h2>Personal information</h2>
                <PersInfo
                    persForm={persForm}
                    handleChange={(e) => handleChange(e, persForm, setPersForm)}
                />
                <SaveButton saveForm={handleSavePersForm} />

                <h2>Experiences</h2>

                {expForms.map((form, index) => (
                    <div key={index}>
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
                <AddButton
                    addForm={() => handleAddForm(exp, expForms, setExpForms)}
                />
                <button onClick={handleSaveExpForm}>Save</button>

                <h2>Education</h2>

                {eduForms.map((form, index) => (
                    <div key={index}>
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
                <SaveButton saveForm={handleSaveEduForm} />
            </div>

            <div>
                <p>{persForm.name}</p>
                <p>{persForm.email}</p>
                <p>{persForm.phone}</p>
            </div>

            <div className="cv-view">
                {expForms.map((form, index) => (
                    <div key={index}>
                        {form.jobTitle && <p>Job title:{form.jobTitle}</p>}
                        {form.jobDescription && (
                            <p>Job description:{form.jobDescription}</p>
                        )}
                    </div>
                ))}
            </div>

            <div>
                {eduForms.map((form, index) => (
                    <div className="cv" key={index}>
                        <p>{form.startDate}</p>
                        <p>{form.endDate}</p>
                        <p>{form.institution}</p>
                        <p>{form.qualification}</p>
                    </div>
                ))}
            </div>

           
           
        </div>
    );
}
// localStorage.clear()
console.log(localStorage);
export default App;
