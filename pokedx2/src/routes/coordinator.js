
// esse arquivo estao todas as funcoes que de mudanca de paginas

    export const goToPage = (navigate, pageIndex) => {    
        navigate(pageIndex); 
    }

    export const goToHomePage = (navigate) => {
        navigate('/');
    }

    export const goBack = (navigate) => {
        navigate(-1);
    }

