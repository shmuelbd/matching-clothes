const concatSavesItems = (items: any) => {
    let allsavesitems: any = []
    const arr = items.map((item: any, index: number) => {
        let arr = allsavesitems.concat(item.items)
        allsavesitems = arr
    })
    return allsavesitems
}

export default concatSavesItems