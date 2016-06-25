
const ControlData = (method, 
							url,
							async, 
							data, 
							callback) => {
	let request = new XMLHttpRequest()
	request.open(method, url, async)
	request.onreadystatechange = () => {
		if(request.readyState === 4 
			&& request.status === 200 
			&& callback ){
			callback(request)
		}
	}
	request.setRequestHeader("Content-type", "application/json")
	request.send(JSON.stringify(data))
};

export default ControlData