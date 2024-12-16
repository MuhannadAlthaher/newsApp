import axios from "axios";
import { useEffect, useState } from "react";


const instant=axios.create({
    baseURL:'https://newsapi.org/v2/'
});

const fetchNewsCuntry = async () => {
    try {
      const response = await instant.get(
        "top-headlines?sources=techcrunch&apiKey=231cd4064bfa475496f764f8bfa68d9b"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching news:", error);
      return error;
    }
  };
const fetchNewsTech = async()=>{
  try{
    const response = await instant.get('top-headlines?country=us&category=business&apiKey=231cd4064bfa475496f764f8bfa68d9b')
    return response.data
  }catch(e){
    console.log(e)
  }
}
export { fetchNewsTech, fetchNewsCuntry };
