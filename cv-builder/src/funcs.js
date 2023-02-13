const handleInputChange = (forms, setForms, index, e) => {
    const newForms = [...forms];
    newForms[index][e.target.name] = e.target.value;
    setForms(newForms);
};

const handleRemoveForm = (forms, setForms, index) => {
    setForms(forms.filter((form, i) => i !== index));
};

const handleAddForm = (data, forms, setForms) => {
    setForms([...forms, { ...data }]);
};

const handleChange = (e, form, setForm) => {
    const newForm = { ...form };

    newForm[e.target.name] = e.target.value;
    setForm(newForm);
};

export { handleInputChange, handleRemoveForm, handleAddForm, handleChange };
