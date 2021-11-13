export type AddressType = {
    city: string
    house:12
}

export type UserType = {
    name: string
    hair: number
    address: AddressType
}
export type LaptopType = {
    title:string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type BooksType = Array<string>

export type UserWithBooksType = UserWithLaptopType & {
 books: BooksType
}
export const upgradeUserToMackBook = (user: UserWithLaptopType, laptop:string) => {
    return {...user, laptop: {...user.laptop, title:laptop} }
}

export const addUserBooks = (user: UserWithBooksType, books:BooksType) => {
    return {...user, books: [...user.books, ...books] }
}