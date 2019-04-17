const githubUrl = "https://api.github.com";

const getGitHubRepos = async username => {
  const response = await axios.get(`${githubUrl}/users/${username}/repos`);
  
  return response;
};


//Danny understand these lines of code above like breathing. This code can
// be reused with a differrent API


