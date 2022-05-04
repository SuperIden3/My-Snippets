// 1.0.1
const isArray = function(variable) {
    if(!!variable && typeof variable == "object" && (!!variable[0] || !!variable[1] || !!variable[2]) {
        return true;
    } else {
        return false;
    }
}
