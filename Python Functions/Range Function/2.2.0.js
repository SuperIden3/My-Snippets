const range = (start,end,increment_or_decrement_value = 1) => {
    if(start !== end && typeof start === "number" && typeof end === "number" && (increment_or_decrement_value !== Infinity && start !== Infinity && end !== Infinity)) {
        let array = []
        if(start < end) {
            for(let i = start; i <= end; i += increment_or_decrement_value) {
                array.push(i)
            }
        } else {
            for(let j = start; j >= end; j -= increment_or_decrement_value) {
                array.push(j)
            }
        }
        return array
    } else {
        throw new RangeError("Arguments are the same, are infinity, or not type of number.")
        return undefined
    }
}
console.log(range(1,10,Infinity))
