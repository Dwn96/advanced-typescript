type Person = {
    id:number,
    business: {
        id:number,
        name:string,
        location: {
            placeId:string,
            name:string
            latx:number,
            laty:number
        }
    },
    nextofKin: {
        name:string,
        phoneNumber:string,
        age:number
    }[]
}

function getLocation():Person['business']['location'] {
    return {
        placeId: '12222223',
        name: 'west v',
        latx: 12,
        laty: 23
    }
}

function getNextOfKin():Person['nextofKin'][number] {
    return {
        name: 'Dan',
        phoneNumber: '123456545',
        age: 43
    }
}

