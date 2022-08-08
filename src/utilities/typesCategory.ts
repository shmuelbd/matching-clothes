
const types = (category: string) => {
    let types = ["shoes", "shirt", "pants"]

    if (category === "shirt")
        types = ["shirt", "shoes", "pants"]

    if (category === "pants")
        types = ["pants", "shirt", "shoes"]
    return types
}

export default types