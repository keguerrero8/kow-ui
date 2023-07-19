import Cookies from "js-cookie"

class PharmacyService {

    async getPharmacies () {
        const response = await fetch("http://127.0.0.1:8000/api/pharmacies", { credentials: 'include' }).then(r => r.json())
        return response
    }

    async getPharmacy (id) {
        const response = await fetch(`http://127.0.0.1:8000/api/pharmacies/${id}`, { credentials: 'include' }).then(r => r.json())
        return response
    }

    async updateEnrolledPharmacy (id, obj) {
        let error = false
        const response = await fetch(`http://127.0.0.1:8000/api/pharmacies/${id}`, {
            credentials: "include",
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken") 
            },
            body: JSON.stringify(obj)
        }).then(r => {
            if (r.ok) {
                return r.json()
            } else {
                error = true
                return r.json()
            }
        })
        return error? {errors: response} : response
    }

}

export default new PharmacyService()