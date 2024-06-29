//Fuctions interacting with the backend
import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:9192"
})
/* adds new room to databse from the front end*/ 
export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData()
    formData.append('photo', photo)
    formData.append('roomType', roomType)
    formData.append('roomPrice', roomPrice)

    const response = await api.post("/room/add/new_room", formData)
    if (response.status === 201) {
        return true
    } else {
        return false
    }
}

/* getting room types from the database*/
export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room-types")
        return response.data 
    } catch (error) {
        throw new Error("Error fetching room types")
    }
} 