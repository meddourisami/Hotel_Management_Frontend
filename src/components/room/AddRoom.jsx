import React, { useState } from "react"
import { addRoom } from "../utils/ApiFunctions"
import RoomTypeSelector from "../common/RoomTypeSelector"

const AddRoom = () => {
    const [newRoom, setNewRoom] = useState({
        photo: null,
        roomType: "",
        roomPrice: ""
    })

    const [imagePreview, setImagePreview] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleRoomInputChange = (e) => {
        const name = e.target.name
        let value = e.target.value
        if (name === "roomPrice") {
            if (!isNaN(value)){
                value = parseInt(value)
            } else {
                value = ""
            }
        }
        setNewRoom({...newRoom, [name]: value})
    }

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0]
        setNewRoom({ ...newRoom, photo: selectedImage })
        setImagePreview(URL.createObjectURL(selectedImage))

    } 

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice) 
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
        setTimeout(() => {
            setSuccessMessage("")
            setErrorMessage("")
        }, 4000)

    }

    return (
        <>
            <section className= "container, mt-5 mb-5 align-items-center">
                <div className="row d-flex justfy-content-between mb-3 mt-5">
                    <div className= "col-md-8 col-lg-6">
                        <h2 className="mb-3 mt-5">Add a New Room</h2>
                        {successMessage && (
                            <div className="alert alert-success fade show">{successMessage}</div>
                        )}
                        {errorMessage && (
                            <div className="alert alert-danger fade show">{errorMessage}</div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 ">
                                <label htmlFor="roomType" className="form-label text-left">
                                    Room Type
                                </label>
                                <div>
                                    <RoomTypeSelector
                                        handleRoomInputChange={handleRoomInputChange}
                                        newRoom={newRoom} />
                                </div>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="roomPrice" className="form-label text-left">
                                    Room Price
                                </label>
                                <input className="form-control"
                                    required
                                    id="roomPrice"
                                    type="number"
                                    name="roomPrice"
                                    value={newRoom.roomPrice}
                                    onChange={handleRoomInputChange}
                                />     
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="photo" className="form-label text-left">
                                    Room Photo
                                </label>
                                <input
                                    id="photo"
                                    name="photo"
                                    type="file"
                                    className="form-control"
                                    onChange={handleImageChange}
                                />
                                {imagePreview && (
                                    <img src={imagePreview}
                                        alt="Preview room photo"
                                        style={{ maxWidth: "400px", maxHeight: "400px" }}
                                        className="mb-3"
                                    />
                                )}
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-start mt-2">
                                <button className="btn btn-outline-primary ml-5">
                                    Save Room
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AddRoom