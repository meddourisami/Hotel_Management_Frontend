import React, { useState , useEffect } from 'react'
import { getRoomTypes } from '../utils/ApiFunctions'

const RoomTypeSelector = ({handleRoomInputChange, newRoom}) => {
    const [roomTypes, setRoomTypes] = useState([""])
    const [showNewRoomTypeInput, setShowNewRoomTypesInput] = useState(false)
    const [newRoomType, setNewRoomType] = useState("")

    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomTypes(data)
        })
    },)
    
    const handleNewRoomTypeInputChange = (e) => {
        setNewRoomType(e.target.value);
    }

    const handleAddNewRoomType = () => {
        if (newRoomType !== "") {
            setRoomTypes([...roomTypes, newRoomType])
            setNewRoomType("")
            setShowNewRoomTypesInput(false)
        } else {
            console.error("Failed to add a new room type")
        }
    }
    
    return (
        <>
            {roomTypes.length > 0 && (
                <div>
                    <select
                        className='form-select'
                        name='roomType'
                        onChange={(e) => {
                            if (e.target.value === "Add New") {
                                setShowNewRoomTypesInput(true)
                            } else {
                                handleRoomInputChange(e)
                            }
                        }}
                        value={newRoom.roomType}>
                        <option value=""> Select a room type</option>
                        <option value={"Add New"}>Add New</option>
                        {roomTypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    {showNewRoomTypeInput && (
                        <div className='mt-2 d-flex align-items-center'>
                            <input 
                                className='form-control mr-2'
                                type='text'
                                placeholder='Enter a new room type'
                                onChange={handleNewRoomTypeInputChange}
                            />
                            <button className='btn btn-hotel' type='button' onClick={handleAddNewRoomType}>
                                Add
                            </button>
                        </div>
                    )}
                </div>
          )}
        </>
    )
}

export default RoomTypeSelector