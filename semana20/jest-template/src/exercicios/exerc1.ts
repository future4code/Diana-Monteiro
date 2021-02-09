import { User } from "../types/user"

export function perfomPurchase(user: User, value: number) : User | undefined {
    if(user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}