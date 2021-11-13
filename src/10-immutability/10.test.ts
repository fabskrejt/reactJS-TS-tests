
import {addUserBooks, UpdateUserBooks, upgradeUserToMackBook, UserWithBooksType, UserWithLaptopType} from "./10";


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
    let user: UserWithBooksType= {
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

    const UserWithNewBook1= addUserBooks(user, ['rest', 'TS'])
    expect(UserWithNewBook1.books[3]).toBe('rest')
    expect(UserWithNewBook1.books).not.toBe(user.books)
})

test('update list of books to user', () => {
    let user: UserWithBooksType= {
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

    const UserWithNewBook1=UpdateUserBooks(user, 'TS', 'JS')
    expect(UserWithNewBook1.books[2]).toBe('JS')
})