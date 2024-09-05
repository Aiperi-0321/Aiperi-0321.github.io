const getUsers = async() => {
    try {
        const {
            data: { result },
         } = await axios("http://randomuser.me/api/?results=5");
         console.log(result);
         renderUsers(result);
    }catch (error) {
        console.log(error);
    }

}