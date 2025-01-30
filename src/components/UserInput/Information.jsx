import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

function Information({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    yearGoal: '',
    firstQuarterGoal: '',
    MonthOneGoal: '',
    MonthTwoGoal: '',
    MonthThreeGoal: '',
    secondQuarterGoal: '',
    MonthFourGoal: '',
    MonthFiveGoal: '',
    MonthSixGoal: '',
    thirdQuarterGoal: '',
    MonthSevenGoal: '',
    MonthEightGoal: '',
    MonthNineGoal: '',
    fourthQuarterGoal: '',
    MonthTenGoal: '',
    MonthElevenGoal: '',
    MonthTwelveGoal: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [editableFields, setEditableFields] = useState(
    Object.keys(formData).reduce((acc, key) => {
      acc[key] = false; 
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsSubmitted(true); 
    setEditableFields(Object.keys(formData).reduce((acc, key) => {
      acc[key] = false; 
      return acc;
    }, {}));
  };

  const handleEditClick = (field) => {
    setEditableFields((prev) => ({
      ...prev,
      [field]: true, 
    }));
  };

  const handleClearClick = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: '',
    }));
    setEditableFields((prev) => ({
      ...prev,
      [field]: false, 
    }));
  };

  const formatLabel = (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, '$1 $2') 
      .toLowerCase()                      
      .replace(/\b\w/g, (char) => char.toUpperCase()); 
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 text-center font-black">Shape Your Vision</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <div className="mb-4" key={field}>
            <label htmlFor={field} className="block text-gray-700 font-bold">
              {formatLabel(field)}
            </label>
            <div className="flex items-center">
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                readOnly={isSubmitted && !editableFields[field]} 
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              {isSubmitted && !editableFields[field] && (  
                <div className="flex ml-2">
                  <FaPen
                    onClick={() => handleEditClick(field)} 
                    className="cursor-pointer text-blue-500 mr-2"
                  />
                  <FaTrash
                    onClick={() => handleClearClick(field)} 
                    className="cursor-pointer text-red-500"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Information;
