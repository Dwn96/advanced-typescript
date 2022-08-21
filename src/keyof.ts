type User = {
    name: string,
    age: number,
    location: string
}

function logAccess<T>(object:T, key:keyof T) {
    return object[key]
}

const prop = logAccess({
    name: 'alt',
    location: 'Kenya',
    alternateLang: 'en'
}, 'alternateLang')