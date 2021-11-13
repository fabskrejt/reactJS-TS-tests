import {
    addCompany,
    addUserBooks, changeCompanyTitle,
    removeUserBook,
    UpdateUserBooks,
    upgradeUserToMackBook,
    UserWithBooksType, UserWithCompanyType,
    UserWithLaptopType
} from "./10";


test('upgrade laptop to Macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Some name',
        hair: 1,
        address: {
            city: 'Kukueva',
            house: 12,
        },
        laptop: {
            title: 'no name laptop'
        }
    }

    const userWithMac1 = upgradeUserToMackBook(user, 'MacBook')
    const userWithMac2 = upgradeUserToMackBook(user, 'no name laptop')
    const userWithMac3 = {...user}

    expect(userWithMac1.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('no name laptop')
    expect(userWithMac1.laptop.title).not.toBe(user.laptop.title)
    expect(userWithMac2).not.toBe(user)
    expect(user).not.toBe(userWithMac3)
    expect(user.laptop).toBe(userWithMac3.laptop)
})

test('add new books to user', () => {
    let user: UserWithBooksType = {
        name: 'Some name',
        hair: 1,
        address: {
            city: 'Kukueva',
            house: 12,
        },
        laptop: {
            title: 'no name laptop'
        },
        books: ['YDNJS', 'CSS', 'TS'],
    }

    const UserWithNewBook1 = addUserBooks(user, ['rest', 'TS'])
    expect(UserWithNewBook1.books[3]).toBe('rest')
    expect(UserWithNewBook1.books).not.toBe(user.books)
})

test('update list of books to user', () => {
    let user: UserWithBooksType = {
        name: 'Some name',
        hair: 1,
        address: {
            city: 'Kukueva',
            house: 12,
        },
        laptop: {
            title: 'no name laptop'
        },
        books: ['YDNJS', 'CSS', 'TS'],
    }

    const UserWithNewBook1 = UpdateUserBooks(user, 'TS', 'JS')
    expect(UserWithNewBook1.books[2]).toBe('JS')
})

test('remove user book', () => {
    let user: UserWithBooksType = {
        name: 'Some name',
        hair: 1,
        address: {
            city: 'Kukueva',
            house: 12,
        },
        laptop: {
            title: 'no name laptop'
        },
        books: ['YDNJS', 'CSS', 'TS'],
    }

    const removeBook1 = removeUserBook(user, 'CSS')
    expect(removeBook1.books.length).toBe(2)
    expect(removeBook1.books[1]).toBe('TS')
})

test('add company', () => {
    let user: UserWithCompanyType = {
        name: 'Some name',
        hair: 1,
        address: {
            city: 'Kukueva',
            house: 12,
        },
        laptop: {
            title: 'no name laptop'
        },
        books: ['YDNJS', 'CSS', 'TS'],
        companies: [
            {id: 1, title: 'RSM'},
            {id: 2, title: 'New job 1'},
        ]
    }

    const addCompany1 = addCompany(user, 'New job 2')
    expect(addCompany1.companies.length).toBe(3)
    expect(addCompany1.companies[2].id).toBe(3)
    expect(addCompany1.companies[2].title).toBe('New job 2')
})

test('Change company title', () => {
    let user: UserWithCompanyType = {
        name: 'Some name',
        hair: 1,
        address: {
            city: 'Kukueva',
            house: 12,
        },
        laptop: {
            title: 'no name laptop'
        },
        books: ['YDNJS', 'CSS', 'TS'],
        companies: [
            {id: 1, title: 'RSM'},
            {id: 2, title: 'New job 1'},
        ]
    }

    const copyUser = changeCompanyTitle(user, 1, 'Cleaning serves')
    expect(copyUser).not.toBe(user)
    expect(copyUser.address).toBe(user.address)
    expect(copyUser.companies[0].title).toBe('Cleaning serves')
    console.log(copyUser)
})