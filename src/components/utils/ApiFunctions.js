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

    const response = await api.post("/rooms/add/new_room", formData)
    if (response.status === 201) {
        return true
    } else {
        return false
    }
}

/* getting room types from the database*/
export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room/types")
        return response.data 
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}

/* gets all rooms from the database */
export async function getAllRooms() {
    try {
        const result = await api.get("/rooms/all-rooms")
        return result.data
    } catch (error) {
        throw new Error("Error fetching rooms")
    }
}

/* deletes a room by id */
export async function deleteRoom(roomId) { 
    try {
        const result = await api.delete(`/rooms/delete/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error deleting room ${error.message}`)
    }
}

/* updates a room by id */
export async function updateRoom(roomId, roomData) {
    const formData = new FormData()
    formData.append("roomType", roomData.roomType)
    formData.append("roomPrice", roomData.roomPrice)
    formData.append("photo", roomData.photo)
    const response = await api.put(`/rooms/update/${roomId}`,formData)
    return response
}

/* gets a room by id */
export async function getRoomById(roomId) {
    try {
        const result = await api.get(`/rooms/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error fetching room ${error.message}`)
    }
 }