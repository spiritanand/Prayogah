import axios from "axios";

export const exerciseOptions = {
  method : 'GET',
  headers: {
	'X-RapidAPI-Key' : import.meta.env.VITE_RAPID_API_KEY,
	'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const ytVideoDbOptions = {
  method : 'GET',
  url    : 'https://youtube-search-and-download.p.rapidapi.com/search',
  params : {
	query: '',
	hl   : 'en',
	type : 'v',
	sort : 'v'
  },
  headers: {
	'X-RapidAPI-Key' : import.meta.env.VITE_RAPID_API_KEY,
	'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  try {
	const res = await fetch(url, options);
	const data = await res.json();
	
	return data;
  } catch (err) {
	throw err;
  }
}

export const fetchYtVideos = async (options) => {
  try {
  const response = await axios.request(options);
  const data = await response.data;
  
  return data;
  }catch (error) {
	console.log(error);
  }
	 
}
