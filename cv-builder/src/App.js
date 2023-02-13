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
import Cv from "./components/Cv";

function App() {
    // Personal Data

    const [persForm, setPersForm] = useState({ ...pers });



    useEffect(() => {
        const storedData = localStorage.getItem("persFormData");

        storedData && setPersForm(JSON.parse(storedData));
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

    const handleSaveForm = (e) => {
        e.preventDefault();
        localStorage.setItem("persFormData", JSON.stringify(persForm))
        localStorage.setItem("expFormData", JSON.stringify(expForms))
        localStorage.setItem("eduFormData", JSON.stringify(eduForms))
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
                <h2>Personal information</h2>
                <PersInfo
                    persForm={persForm}
                    handleChange={(e) => handleChange(e, persForm, setPersForm)}
                />
             

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
             
            </div>

            <div className="cv">
                <div>
                <Cv persForm={persForm} expForms={expForms} eduForms={eduForms} />
                </div>
                <div className="save-btn">
                <SaveButton saveForm={handleSaveForm} />
                </div>
            </div>
           
            
            
          
        </div>
    );
}
// localStorage.clear()
console.log(localStorage);
export default App;
