import React, { useState } from 'react'
import { HiPlus,HiOutlineTrash } from "react-icons/hi"
import { LuPaperclip } from 'react-icons/lu';


const AddAttachment = ({attachments,setAttachments}) => {
    const [option,setOption] = useState("");

    const handleAdd = () => {
        if(option.trim()) {
            setAttachments([...attachments,option.trim()]);
            setOption("");
        }
    };

    const handleDelete = (index) => {
        const updatedArr = attachments.filter((_, idx) => idx != index);
        setAttachments(updatedArr);
    };
    return (
            <div>
            {attachments.map((item,index) => (
                <div
                    key={item}
                    className='flex justify-between bg-gray-50 border border-gray-100 px-3 py-2 rounded-md mb-3 mt-2'
                >
                    <div className='flex-1 flex items-center gap-3 border border-gray-200'>
                        <LuPaperclip className='text-gray-400' />
                        <p className='text-xs text-black'>{item}</p>
                    </div>
    
                    <button
                        className='cursor-pointer'
                        onClick={() => {
                            handleDelete(index);
                        }}
                    >
                        <HiOutlineTrash className='text-lg text-red-500'/>
                    </button>
                </div>
            ))}
            
            <div className="flex items-center gap-5 mt-4">
                <div className='flex-1 flex items-center gap-3 border border-gray-200 rounded-md px-3'>
                <LuPaperclip className='text-gray-200'/>
                <input
                    type="text"
                    placeholder='Add file link'
                    value={option}
                    onChange={({target}) => setOption(target.value)}
                    className='w-full text-[13px] text-black outline-none bg-white border border-gray-100 px-3 py-3 rounded-md '
                />
                </div>
    
                <button className='card-btn text-nowrap' onClick={handleAdd}>
                    <HiPlus className="text-lg"/> Add
                </button>
            </div>
            </div>
        )
}

export default AddAttachment