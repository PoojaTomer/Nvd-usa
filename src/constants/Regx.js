const REGX = {
    FULLNAME: /^[a-zA-Z ]{3,50}$/,
    MOBILE_NUMBER: /^(\+\d{1,3}[- ]?)?\d{10}$/,
    FIRST_NAME: /^[a-zA-Z]*$/,
    LAST_NAME: /^[a-zA-Z ]*$/,
    DOB: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,///^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
    EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    OTP: /^[0-9]{6,6}$/,
    PINCODE: /^[0-9]{6,6}$/,
    PAN_NUMBER: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    ADDRESS: /^\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.$/,
    STATE: /^[a-zA-Z ]{3,50}$/,
    CITY: /^[a-zA-Z ]{3,50}$/,
    AMOUNT: /^[0-9]*$/,
    NUMBER: /^[0-9]*$/,
}

export default REGX;