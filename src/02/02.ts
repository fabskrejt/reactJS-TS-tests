type CityType = {
    title: string
    country: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}
type TechType = {
    id: number
    title: string
}
type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student: studentType = {
    id: 1,
    name: 'Vladimir',
    age: 29,
    isActive: false,
    address: {
        streetTitle: 'SomeStreet',
        city: {
            title: 'RnD',
            country: 'Russia',
        }
    },
    technologies: [
        {id: 1, title: 'CSS'},
        {id: 2, title: 'React'},
        {id: 3, title: 'JS'},
        {id: 4, title: 'TS'},
    ]
}

console.log(student.id)
console.log(student.name)
console.log(student.address.streetTitle)