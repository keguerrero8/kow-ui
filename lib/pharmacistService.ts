type GetPharmacistResponse = GetPharmacistResponseSuccess[] | []

type PostPharmacistResponse = GetPharmacistResponseSuccess | PostPharmacistResponseFail

type PutPharmacistResponse = GetPharmacistResponseSuccess | Record<string, never>

class PharmacistService {

    async getPharmacists (pharmacyId: number): Promise<GetPharmacistResponse> {
        const response: GetPharmacistResponse = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacy/pharmacists/${pharmacyId}`).then(r => {
            if (r.ok) {
                return r.json()
            } else {
                return []
            }
        })
        return response
    }

    async createPharmacist (pharmacyId: number, pharmacistData: PharmacistData): Promise<PostPharmacistResponse> {
        const createStatus: PostPharmacistResponse = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...pharmacistData, pharmacy: pharmacyId, phone_number: "+1" + pharmacistData["phone_number"]})
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

    async updatePharmacist (pharmacistId: number, pharmacistUpdateData: UpdatePharmacistData): Promise<PutPharmacistResponse> {
        const response: PutPharmacistResponse = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacists/${pharmacistId}`, {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(pharmacistUpdateData)
        }).then(r => {
            if (r.ok) {
                return r.json()
            } else {
                return {}
            }
        })

        return response
    }

    async deletePharmacist (pharmacistId: number): Promise<boolean> {

        const isDeleted: boolean = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/pharmacists/${pharmacistId}`, { 
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