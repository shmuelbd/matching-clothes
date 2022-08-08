

const setSizes = (item: any) => {
    let size = ""
    if (item.type === "shoes") {
        if (item.size < 40)
            return size = "S"
        if (item.size <= 43)
            return size = "M"
        if (item.size > 43)
            return size = "L"
    }
    if (item.type === "shirt") {
        if (item.size === "S")
            return size = "S"
        if (item.size === "M")
            return size = "M"
        if (item.size === "L")
            return size = "M"
        if (item.size === "XL")
            return size = "L"
        if (item.size === "XXL")
            return size = "L"
    }
    if (item.type === "pants") {
        if (item.size < 39)
            return size = "S"
        if (item.size <= 43)
            return size = "M"
        if (item.size > 43)
            return size = "L"
    }
    return size
}

export default setSizes