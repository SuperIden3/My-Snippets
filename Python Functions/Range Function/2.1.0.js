const range = (start, end, increment_or_decrement_value = 1) => {
    if(start !== end && typeof (start && end) === "number") {
        let array = []
        if(start < end) {
            for (let i = start; i <= end; i += increment_or_decrement_value) {
                array.push(i)
            }
        } else {
            for (let j = start; j >= end; j -= increment_or_decrement_value) {
                array.push(j)
            }
        }
        return array
    } else {
        throw new Error("Arguments are not type of number or they are the same.")
        return undefined
    }
}
