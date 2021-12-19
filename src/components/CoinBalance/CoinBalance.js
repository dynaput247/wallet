import React from 'react'
import useSWR from 'swr'
import useCoinBalance from '../../hooks/useCoinBalance'
import fetcher from '../../services/fetcher'

import * as S from './styled'

const binanceAPI = 'https://api.binance.com/api/v3/ticker/price?symbol='

function CoinBalance({ onClick, item: { image, symbol, address }, icon }) {
  const { data, error } = useSWR(`${binanceAPI}${symbol}USDT`, fetcher, {
    refreshInterval: 3000,
  })

  const [balance, loading] = useCoinBalance(address)

  const usdBalance =
    !error && data && (parseFloat(balance) * parseFloat(data.price)).toFixed(2)
  const loadingText = 'Loading...'
  const label = loading ? loadingText : `${balance.slice(0, 10)} ${symbol}`

  return (
    <S.CoinBalanceItem
      image={<img src={image} alt={label} />}
      label={label}
      description={`$${usdBalance || '-'} USD`}
      icon={icon}
      onClick={onClick}
    />
  )
}

export default CoinBalance
