export type Point = {
    x: number,
    y?:number
}

export type ReadonlyPoint = {
    +readonly [Key in keyof Point]-?: Point[Key]
}