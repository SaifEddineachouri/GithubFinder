class Github {
    constructor(){
        this.client_id = '8c4954768cc103d0ee18',
        this.client_secret = '99e5c9a9922fe3d8be9a0345fcbdd32387836ff8';
        this.repos_count = 4 ;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        
        const reposData = await repoResponse.json();

        return {
            profileData,
            reposData
        }
    }
}