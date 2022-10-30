export const scrollToById = (id) => {
  const scrollToDiv = document.getElementById(id).offsetTop;
  window.scrollTo({
	top     : scrollToDiv,
	behavior: 'smooth'
  })
};