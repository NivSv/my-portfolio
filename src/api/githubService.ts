import axios from 'axios'

const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/NivSv/my-portfolio',
})

interface IRepoData {
    stargazers_count: number
    forks_count: number
}

const getRepoData = async () => {
    const response = await githubApi.get<IRepoData>('')
    return response
}

export const githubService = {
    getRepoData,
}
