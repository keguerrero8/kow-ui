class PharmacistService {

    async getPharmacists (pharmacyId) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacy/pharmacists/${pharmacyId}`).then(r => {
            if (r.ok) {
                return r.json()
            } else {
                return []
            }
        })
        return response
    }

    async createPharmacist (pharmacyId, obj) {
        const createStatus = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...obj, pharmacy: pharmacyId, phone_number: "+1" + obj["phone_number"]})
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

    async updatePharmacist (pharmacistId, obj) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacists/${pharmacistId}`, {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(obj)
        }).then(r => {
            if (r.ok) {
                return r.json()
            } else {
                return {}
            }
        })

        return response
    }

    async deletePharmacist (pharmacistId) {

        const isDeleted = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacists/${pharmacistId}`, { 
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