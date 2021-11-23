export const isFieldEmpty = (text: any) => {
    return text === undefined || text === null || text === "";
};

export const isValidEmail = (email: string) => {
    // const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
};

export const isValidWebsite = (website: string) => {
    const reg = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    return reg.test(website);
}

export const isPhoneNumber = (phone: string) => {
    const reg = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    return reg.test(phone);
}


export const isPAN = (pan: string) => {
    const reg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z])$/;
    return reg.test(pan);
}

export const isPassword = (password: string) => {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return reg.test(password);
}
