/**
 * https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 * We use mapped types to base a type off another types 
 *  
 * */ 

export type Point = {
    x: number,
    y: number
 }

 export type ReadonlyPoint = {
    readonly [Key in keyof Point] : string
 }

 const pointR: ReadonlyPoint = {
    x: '12',
    y: '123'
 }