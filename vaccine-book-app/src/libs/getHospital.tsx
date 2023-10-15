export default async function getHospital(id: string) {
    const response = await fetch(`http://localhost:65535/api/v1/hospitals/${id}`)
    if (!response.ok) {
        throw new Error("Failed to fetch Hospitals")
    }
    return await response.json()
}