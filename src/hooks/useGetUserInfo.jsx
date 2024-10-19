const useGetUserInfo = () => {
    const authInfo = JSON.parse(localStorage.getItem("auth")) || {};

    const { userId, userName, profilePhoto, isAuth } = authInfo;

    return { userId, userName, profilePhoto, isAuth };
}

export default useGetUserInfo;
