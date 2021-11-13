
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

    const userWithMac = upgradeUserToMackBook(user, 'MacBook')

    expect(userWithMac.laptop.title).toBe('MacBook')
    expect(userWithMac.laptop.title).not.toBe(user.laptop.title)
})

