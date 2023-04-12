
type usuarios = {
    id: number, 
    name: string, 
    phone: number, 
    email: string
    website: string
}


type posts = {
    id: Number, 
    title: string, 
    body: string, 
    userId: Number
}


export const users = [
    
    {
        id:1, 
        name: "Fagner Fontes", 
        phone: 12345667,
        email: "fontesbatista@gmail.com", 
        website: "fontes.com.br"
    }, 

    {
        id:1, 
        name: "Jack Fontes", 
        phone: 12345787,
        email: "fontesbatista@gmail.com", 
        website: "fontes.com.br"
    }, 

    {
        id:1, 
        name: "Ellen Fontes", 
        phone: 125345787,
        email: "fontesbatista@gmail.com", 
        website: "fontes.com.br"
    },

    {
        id:1, 
        name: "Esme Fontes", 
        phone: 1253457897,
        email: "fontesbatista@gmail.com", 
        website: "fontes.com.br"
    }

]

export const posts = [
    {
        id:1, 
        title: "verdade", 
        body: "A verdade está la fora", 
        userId: 78

    },  

    {
        id:2, 
        title: "A bolha", 
        body: "Para quem vive dentro dela", 
        userId: 12558

    }, 
    {
        id:3, 
        title: "Vedade3 ", 
        body: "Para quem vive fora dela", 
        userId: 1254

    }, 

    { 
        id:5, 
        title: "A bolha2", 
        body: "Para quem vive dentro e fora dela", 
        userId: 455
        
}


]
