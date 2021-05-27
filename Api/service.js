export async function getHome () {

    const url = "/api/home"

    connect = async () => {
        
        try {
            let response = await fetch(url + "/" +this.state.name)
            if (response.status !== 200) {
                throw new Error('Something went wrong on api server!');
            }
            let responseText = await response.text()
            this.setState({
                result: responseText
            })
        } catch (error) {
            Alert.alert("Cannot connect to server. Please check your network connection")
            console.log(error)
        }
    }
}