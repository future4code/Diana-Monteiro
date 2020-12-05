export const goToLogin = (history) => {
    history.push('/login')
}
  
export const goToSignUp = (history) => {
    history.push('/signup')
}
  
export const goToFeed = (history) => {
    history.push("/feed")
}
  
export const goToPost = (history, id) => {
    history.push(`/feed/${id}`)
}

export const logout = (history) => {
    window.localStorage.clear();
    history.push("/login");
  };

export const goBack = (history) => {
    history.goBack()
};