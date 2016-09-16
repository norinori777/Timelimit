const dateZellFill = (number) => {
    return ( "0" + number ).substr( -2 )
}

const getDate = () => {
    let date = new Date()
    let year = date.getFullYear()
    let month = dateZellFill(date.getMonth() + 1)
    let day = dateZellFill(date.getDate())
    return year + "-" + month + "-" + day
}

export default getDate