
export const getInitials = (name) => {
    if(name){
    return name.match(/\b\w/g) || []
    }
    else { return null}
}
