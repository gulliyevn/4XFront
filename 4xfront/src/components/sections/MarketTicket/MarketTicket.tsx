'use client'
import { formatPrice, formatChange } from '@/utils'
import cls from './MarketTicket.module.scss'
import { useState, useEffect } from 'react'

interface MarketTicketProps {
    className?: string
    translations: {
        markets: string
        open: string
        closed: string
    }
}

export const MarketTicket = ({ className = '', translations }: MarketTicketProps) => {
    const [mounted, setMounted] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date())
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [marketStatus, setMarketStatus] = useState(translations.open)
    const [liveData, setLiveData] = useState({
        sp500: { price: 4567.89, change: 1.23, changePercent: 0.027 },
        nasdaq: { price: 14234.56, change: -23.45, changePercent: -0.164 },
        bitcoin: { price: 43567.89, change: 567.23, changePercent: 1.32 },
        eurusd: { price: 1.0876, change: 0.0023, changePercent: 0.21 },
    })

    useEffect(() => {
        setMounted(true)
        const timer = setInterval(() => {
            setCurrentTime(new Date())
            setLiveData((prev) => ({
                sp500: {
                    ...prev.sp500,
                    price: prev.sp500.price + (Math.random() - 0.5) * 2,
                    change: prev.sp500.change + (Math.random() - 0.5) * 0.5,
                },
                nasdaq: {
                    ...prev.nasdaq,
                    price: prev.nasdaq.price + (Math.random() - 0.5) * 10,
                    change: prev.nasdaq.change + (Math.random() - 0.5) * 2,
                },
                bitcoin: {
                    ...prev.bitcoin,
                    price: prev.bitcoin.price + (Math.random() - 0.5) * 100,
                    change: prev.bitcoin.change + (Math.random() - 0.5) * 50,
                },
                eurusd: {
                    ...prev.eurusd,
                    price: prev.eurusd.price + (Math.random() - 0.5) * 0.001,
                    change: prev.eurusd.change + (Math.random() - 0.5) * 0.0005,
                },
            }))
        }, 3000)

        return () => clearInterval(timer)
    }, [])
    return (
        <div className={`${cls['market-ticker']} ${className}`}>
            <div className={cls['ticker-container']}>
                <div className={cls['ticker-scroll']}>
                    <div className={cls['ticker-item']}>
                        <span className={cls['ticker-symbol']}>S&amp;P 500</span>
                        <span className={cls['ticker-price']}>{formatPrice(liveData.sp500.price)}</span>
                        <span
                            className={`${cls['ticker-change']} ${liveData.sp500.change >= 0 ? cls['positive'] : cls['negative']}`}>
                            {formatChange(liveData.sp500.change, liveData.sp500.changePercent)}
                        </span>
                    </div>
                    <div className={cls['ticker-item']}>
                        <span className={cls['ticker-symbol']}>NASDAQ</span>
                        <span className={cls['ticker-price']}>{formatPrice(liveData.nasdaq.price)}</span>
                        <span
                            className={`${cls['ticker-change']} ${liveData.nasdaq.change >= 0 ? cls['positive'] : cls['negative']}`}>
                            {formatChange(liveData.nasdaq.change, liveData.nasdaq.changePercent)}
                        </span>
                    </div>
                    <div className={cls['ticker-item']}>
                        <span className={cls['ticker-symbol']}>BTC/USD</span>
                        <span className={cls['ticker-price']}>${formatPrice(liveData.bitcoin.price)}</span>
                        <span
                            className={`${cls['ticker-change']} ${liveData.bitcoin.change >= 0 ? cls['positive'] : cls['negative']}`}>
                            {formatChange(liveData.bitcoin.change, liveData.bitcoin.changePercent)}
                        </span>
                    </div>
                    <div className={cls['ticker-item']}>
                        <span className={cls['ticker-symbol']}>EUR/USD</span>
                        <span className={cls['ticker-price']}>{formatPrice(liveData.eurusd.price, 4)}</span>
                        <span
                            className={`${cls['ticker-change']} ${liveData.eurusd.change >= 0 ? cls['positive'] : cls['negative']}`}>
                            {formatChange(liveData.eurusd.change, liveData.eurusd.changePercent)}
                        </span>
                    </div>
                </div>
                <div className={cls['market-status']}>
                    <span className={cls['status-dot']}></span>
                    <span className={cls['status-text']}>
                        {translations.markets} {marketStatus}
                    </span>
                    <span className={cls['status-time']}>{mounted ? currentTime.toLocaleTimeString() : '--:--:--'}</span>
                </div>
            </div>
        </div>
    )
}
