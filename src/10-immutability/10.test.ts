
import {upgradeUserToMackBook, UserWithLaptopType} from "./10";


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
    expect(userWithMac1.laptop.title).not.toBe(user.laptop.title)
    expect(userWithMac2).not.toBe(user)
    expect(user).not.toBe(userWithMac3)
    expect(user.laptop).toBe(userWithMac3.laptop)
})

