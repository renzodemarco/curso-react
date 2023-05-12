import data from '../data/data.json'

const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(data)
        }, 200)
        })
}

const getProductById = id => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const product = data.find(element => element.id === id)
            if (product) {
                resolve(product)
            } else {
                reject({
                    error: 'No se ha encontrado el producto'
                })
            }
        }, 200)
    })
}

export {getProducts, getProductById}