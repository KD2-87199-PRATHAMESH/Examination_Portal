import axios from "axios";
import { createUrl } from "../utils";


export async function getFaculties() {
    try {
        const url = createUrl('admin/faculty')
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}

export async function deleteByFacultyId(reqBody) {
    try {
        const url = createUrl('admin/faculty/' + reqBody)
        const response = await axios.delete(url, reqBody, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}
// admin.js (in services directory)

export async function loginAdmin(reqBody) {
    try{
        const url = createUrl('admin/signin')
        const response = await axios.post(url, reqBody, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}
