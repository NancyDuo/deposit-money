// type Action = {
//     type:string,
//     payload?:number
// }

interface DepositAction {
    type: 'deposit',
    payload: number
}
interface WithdrawAction {
    type: 'withdraw',
    payload: number
}
interface BankruptAction {
    type: 'bankrupt',
}

type Action = DepositAction | WithdrawAction | BankruptAction

export default Action