interface PharmacistData {
    name: string
    phone_number: string
    isEnrolled: boolean
}

//same response for GET and POST
interface GetPharmacistResponseSuccess {
    id: number
    pharmacy: number
    name: string
    phone_number: string
    email: string | null
    isEnrolled: boolean
}

interface PostPharmacistResponseFail {
    errors: string[] 
}

interface UpdatePharmacistData {
    isEnrolled: boolean
}

type GetPharmacistResponse = GetPharmacistResponseSuccess[] | []

type PostPharmacistResponse = GetPharmacistResponseSuccess | PostPharmacistResponseFail

type PutPharmacistResponse = GetPharmacistResponseSuccess | Record<string, never>