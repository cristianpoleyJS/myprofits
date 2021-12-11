import { useState } from 'react'

const ListTotal = ({ stocks, cryptos }) => {
    const [totalMoneyInvested, setTotalMoneyInvested] = useState(0)
    const [totalProfits, setTotalProfits] = useState(0)

    return (
        <>
            <div className="ticker">
                <span><strong>Total</strong></span>
                <span>{totalMoneyInvested}</span>
                <span />
                <span />
                <span />
                <span />
                <span>{totalProfits}</span>
                <span />
            </div>
        </>
    )
}

export default ListTotal
