import { Product } from "../interfaces/global"

export const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products")
    if (!response.ok) {
        const message: string = `An error has occurred: ${response.status}`
        console.log(`Request falhou: ${message}`)
        throw new Error(message)
    }

    const convertedJson = await response.json()
    const products: Product[] = convertedJson.products;

    return products
}