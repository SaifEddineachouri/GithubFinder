// Instaciate Github Class
const GithubHttp =  new Github();

// Instantiate UI Class
const  ui =  new UI();

// Search input 
const  searchUser =  document.getElementById('searchUser');

// Search input Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get input value

    const userText = e.target.value;

    if(userText !== ""){
        GithubHttp.getUser(userText)
        .then(data => {
            if(data.profileData.message === 'Not Found'){
                // Show Alert
                ui.showAlert('User Not Found ','alert alert-danger');
            }else{
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }          
        })
    }else{

        ui.clearProfile();
        // Clear Profile
    }
});