import axios from "axios";

export const apiProjetos = async () => {
    const url = 'https://api-portfolioprojetos.herokuapp.com/projetos';
    
    try {
      const response =  await axios.get(url);
      return response.data;
    } catch (error) {
        console.error("erro request", error);
    }

} 