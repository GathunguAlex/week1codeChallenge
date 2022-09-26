
import React, {useState} from "react";
function AddTransactionForm({onSubmission}) {
  const [formData, setFormData] = useState({date:"", description:"", amount:0, category:""}) //the empty stings are initialize to start which is always zero
  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})// to handle and update keyed in values
    console.log(setFormData);
  }
  function submit(e){
    e.preventDefault(); // prevents the browser from refreshing
    onSubmission(formData);
    // set function which clears data on submission
    setFormData({date:"", description:"", amount:0, category:""});
  }
  return (
    <div className="ui segment">
      <form onChange={handleChange}  onSubmit= {submit} className="ui form">
        <div className="inline fields">
          <input value={formData.date} type="date" name="date"  onChange={handleChange}/>
          <input value={formData.description} type="text" name="description" placeholder="Description" onChange={handleChange} />
          <input value={formData.category} type="text" name="category" placeholder="Category"  onChange={handleChange}/>
          <input value={formData.amount}  type="number" name="amount" placeholder="Amount" step="0.01"  onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
export default AddTransactionForm;







