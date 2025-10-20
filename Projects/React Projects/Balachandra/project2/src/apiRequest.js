const apiRequest = async (User_API='') => {
    try{
        const response = await fetch(User_API);
        if(!response.ok) throw Error("There is a error in Fetching the Data");
        const listContent = await response.json();
        return listContent;
      }catch(err){
        console.log(err.Message);
  }

}

export default apiRequest