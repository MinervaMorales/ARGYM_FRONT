export const RegExp =
{
    FILE: /(.+)\/(.+)$/,
    EMAIL: /[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,63}$/,
    PASSWORD: /^[^\s]{6,20}$/,
    NO_LETTERS: /[^0-9]/g,
    FLOAT_NUMBER: /^\d{1,3}(\.\d{1,2})?$/,
    NUMBER: /^[0-9]*$/
}
