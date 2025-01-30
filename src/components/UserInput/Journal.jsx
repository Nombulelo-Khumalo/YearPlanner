import React, { useState } from 'react';
import { FaPlus, FaTrash, FaFolderOpen, FaEdit, FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

const Journal = () => {
  const [pages, setPages] = useState([]); 
  const [currentPage, setCurrentPage] = useState({ title: '', content: '', date: '' }); 
  const [showSavedNotes, setShowSavedNotes] = useState(false); 
  const [isEditMode, setIsEditMode] = useState(false); 
  const [isReadOnlyMode, setIsReadOnlyMode] = useState(false); 
  const [expandedPages, setExpandedPages] = useState({}); 

  const toggleExpand = (index) => {
    setExpandedPages((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  
  const handleChange = (e) => {
    setCurrentPage({ ...currentPage, [e.target.name]: e.target.value });
  };

  
  const handleSave = () => {
    const date = new Date().toLocaleString(); 
    const newPage = { ...currentPage, date }; 

    if (isEditMode) {
     
      const updatedPages = pages.map((page) =>
        page.title === currentPage.title ? { ...currentPage, date } : page
      );
      setPages(updatedPages);
    } else {
      
      setPages([...pages, newPage]);
    }
    setIsEditMode(false); 
    setIsReadOnlyMode(false); 
    setCurrentPage({ title: '', content: '', date: '' }); 
  };

  
  const addNewPage = () => {
    
    setCurrentPage({ title: '', content: '', date: '' }); 
    setIsEditMode(false); 
    setIsReadOnlyMode(false); 
    setShowSavedNotes(false); 
  };

  
  const deletePage = () => {
    const newPages = pages.filter((page) => page !== currentPage);
    setPages(newPages);
    setCurrentPage({ title: '', content: '', date: '' }); 
  };

  
  const selectPageForEdit = (page) => {
    setCurrentPage(page);
    setIsEditMode(true); 
    setIsReadOnlyMode(false); 
    setShowSavedNotes(false); 
  };

  
  const toggleSavedNotesView = () => {
    setShowSavedNotes(!showSavedNotes);
  };

  
  return (
   
    <div className="min-h-screen bg-cover bg-center bg-[#475569]">
      
      <div className="flex justify-between items-center mb-auto">
        <h1 className="text-3xl font-bold mx-auto text-[#0f172a] mb-3 mt-2">My Journal</h1>
        <div className="flex space-x-4">
          <button onClick={toggleSavedNotesView} className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
            <FaFolderOpen />
          </button>
          <button onClick={addNewPage} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            <FaPlus />
          </button>
          <button onClick={deletePage} className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
            <FaTrash />
          </button>
        </div>
      </div>

      
      {!showSavedNotes ? (
        <div className="bg-white p-6 rounded-xl shadow-lg border-3 border-[#1e2939] h-[85vh] flex flex-col overflow-auto w-[80%] mx-auto">
          <input
            type="text"
            name="title"
            value={currentPage.title}
            onChange={handleChange}
            placeholder="Enter Title"
            disabled={isReadOnlyMode}
            className="w-full p-2 border-b-2 border-gray-300 mb-2 focus:outline-none focus:border-[#0f172a]"
          />
          <textarea
            name="content"
            value={currentPage.content}
            onChange={handleChange}
            placeholder="Write your thoughts..."
            rows="10"
            disabled={isReadOnlyMode} 
            className="w-full p-4 border-b-2 border-gray-300 focus:outline-none focus:border-[#0f172a]"
          />

         
          {!isReadOnlyMode && (
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleSave}
                className="bg-[#475569] text-white p-2 rounded-lg border-2 border-[#1e2939] shadow-lg hover:bg-[#1e2939] focus:outline-none"
              >
                Save
              </button>
              <span className="text-sm text-gray-500">{currentPage.date}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg border-2 border-[#1e2939] max-h-[70vh] overflow-y-scroll w-[80%] mx-auto">
         
          <h2 className="text-xl font-semibold mb-4 text-[#1e2939]">Saved Notes</h2>


          <div className="space-y-4">
            {pages.map((page, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-start relative">
                
                <div className="flex justify-between items-center">

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-[#1e2939]">{page.title}</h3>
                  <p className="text-sm text-gray-600 text-[#475569]">{page.date}</p>

                  <p className="text-base mt-2">
                    {expandedPages[index] ? page.content : `${page.content.substring(0, 100)}...`}
                  </p>
                </div>


                <div className="absolute top-3  right-3 ml-auto flex space-x-4 justify-end "> 
                  
                  <button
                    onClick={() => selectPageForEdit(page)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => setPages(pages.filter((savedPage) => savedPage !== page))}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>

                  <button
                    onClick={() => toggleExpand(index)} 
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {expandedPages[index] ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>               
              </div>               
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Journal;

