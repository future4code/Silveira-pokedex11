    export const goToPage = (navigate, pageIndex) => {    
        navigate(pageIndex); 
    }
    export const goToHomePage = (navigate) => {
        navigate('/');
    }
    export const goBack = (navigate) => {
        navigate(-1);
    }
    export const goToDetails = (navigate, name) => {
        navigate.push(`/details/${name}`)
    }
