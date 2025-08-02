import React, { useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { PRIORITY_DATA } from '../../utils/data'
import axiosInstance from '../../utils/axiosinstance'
import { API_PATHS } from '../../utils/apiPaths'
import toast from 'react-hot-toast'
import {useNavigate, useLocation} from 'react-router-dom'
import moment from 'moment'
import { LuTrash } from 'react-icons/lu'


const CreateTask = () => {

  const location = useLocation();
  const  {taskId}  = location.state || {};
  const navigate = useNavigate();

  const [taskData,setTaskData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: null,
    assignedTo: [],
    todoChecklist: [],
    attachments : []
  });

  const [currentTask,setCurrentTask] = useState(null);

  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);

  const[openDeleteAlert,setOpenDeleteAlert] = useState(false);

  const handleValueChange = (key,value) => {
    setTaskData((prevData) => ({...prevData, [key]: value}));
  }

  const clearData = () => {
    setTaskData({
      title: "",
      description: "",
      priority: "Low",
      dueDate: null,
      assignedTo: [],
      todoChecklist: [],
      attachments : []
    })
  }

  const createTask = async () => {};

  const updateTask = async () => {};
  const handleSubmit = async () => {};


  const getTaskbyID = async () => {};
  const deleteTask = async () => {};


  return (
    <DashboardLayout activeMenu="Create Task">
      <div className='mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 mt-4'>
          <div className='form-card col-span-3'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl md:text-xl font-medium'>
                {taskId ? "Update task" : "Create Task"}
              </h2>

              {taskId && (
                <button 
                  className='flex items-center gap-1.5 text-[13px] font-medium text-rose-500 bg-rose-50 rounded px-2 py-1 border border-rose-100 hover:border-rose-300 cursor-pointer'
                  onClick={() => setOpenDeleteAlert(true)}
                >
                  <LuTrash className='text-base' /> Delete
                </button>
              )}
            </div>
            <div className='mt-4'>
              <label className='text-xs font-medium text-slate-600'>
                Task Title
              </label>

              <input
                placeholder='Add task title'
                className='form-input'
                value={taskData.title}
                onChange={({target}) => 
                handleValueChange("title",target.value)}
              />
            </div>

            <div className='mt-3'>
              <label className='text-xs font-medium text-slate-600'>
                Description
              </label>

              <textarea
                placeholder='Describe the task'
                className='form-input'
                rows={4}
                value={taskData.description}
                onChange={({target}) => 
                handleValueChange("description",target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CreateTask