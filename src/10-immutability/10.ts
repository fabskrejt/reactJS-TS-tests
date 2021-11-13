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

export type UserWithCompanyType = UserWithBooksType & {
    companies: Array<{id:number, title: string}>
}

export const upgradeUserToMackBook = (user: UserWithLaptopType, laptop:string) => {
    return {...user, laptop: {...user.laptop, title:laptop} }
}

export const addUserBooks = (user: UserWithBooksType, books:BooksType) => {
    return {...user, books: [...user.books, ...books] }
}

export const UpdateUserBooks = (user: UserWithBooksType, userBook:string, newUserBook:string ) => {
    return {...user, books: user.books.map( b => b === userBook ? newUserBook: b) }
}

export const removeUserBook = (user: UserWithBooksType, book:string ) => {
    return {...user, books: user.books.filter( b => b !== book ) }
}

export const addCompany = (user: UserWithCompanyType, companyTitle:string ) => {
    return {...user, companies: [...user.companies, {id: user.companies.length+1, title: companyTitle} ]}
}

export const changeCompanyTitle = (user: UserWithCompanyType,id:number, companyTitle:string ) => {
    return {...user, companies: user.companies.map( c => c.id === id ? {...c, title: companyTitle}: c)}
}
