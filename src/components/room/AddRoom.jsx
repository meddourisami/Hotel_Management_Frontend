import React, { useState } from "react"
import { addRoom } from "../utils/ApiFunctions"

const AddRoom = () => {
    const [newRoom, setNewRoom] = useState({
        photo: null,
        roomType: "",
        roomPrice: ""
    })

    const [imagePreview, setImagePreview] = useState("")
    const [SuccessMessage, setSuccessMessage] = useState("")
    const [ErrorMessage, setErrorMessage] = useState("")

    const handleRoomInputChange = (e) => {
        const name = e.target.name
        let value = e.target.value
        if (name === "roomPrice") {
            if (!isNaN(value)){
                value.parseInt(value)
            } else {
                value = ""
            }
        }
        setNewRoom({...newRoom, [name]: value})
    }

    const handleImageChange = () => {
        const selectedImage = e.target.files[0]
        setNewRoom({ ...newRoom, photo: selectedImage })
        setImagePreview(URL.createObjectURL(selectedImage))

    } 

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const succes = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice) 
            if (success !== undefined) {
                setSuccessMessage("A new room was added to the database")
                setNewRoom({ photo: null, roomtype: "", roomPrice: "" })
                setImagePreview("")
                setErrorMessage("")

            } else {
                setErrorMessage("Error adding room")
            }
        }catch(error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <>
            <section className= "container, mt-5 mb-5">
                <div className="room justfy-content-center">
                    <div className= "col-md-8 col-lg-6">
                        <h2 className= "mt-5 mb-2">Add a New Room</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 ">
                                <label htmlFor="roomType" className="form-label">
                                    Room Type
                                </label>
                                <div></div>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="roomPrice" className="form-label">
                                    Room Price 1:56
                                </label>
                            <div></div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AddRoom