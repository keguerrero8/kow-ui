class PharmacistService {

    async getPharmacists (pharmacy_id) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacy//pharmacists/${pharmacy_id}`).then(r => r.json())
        return response
    }

    async createPharmacist (pharmacy_id, obj) {
        const createStatus = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...obj, pharmacy: pharmacy_id, phone_number: "+1" + obj["phone_number"]})
          })
          .then(r => {
            if (r.ok) {
                return r.json()
            } else {
                return {errors: ["There seemed to be an issue creating a pharmacist"]}
            }
          })
        return createStatus
    }

    async updatePharmacist (pharmacist_id, obj) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/pharmacists/${pharmacist_id}`, {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(obj)
        }).then(r => r.json())

        return response
    }

    async deletePharmacist (pharmacist_id) {

        const isDeleted = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/pharmacists/${pharmacist_id}`, { 
            method: "DELETE",
        })
        .then(r => {
            if (r.ok) return true
            else return false
        })

        return isDeleted
    }

}

export default new PharmacistService()