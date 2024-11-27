import './RussianTimes.scss'


export default function RussianTimes() {
    return (
        <div className='russianTimes'>
            <h2 className="russianTimes__title">
                8 oy
                <span className='russianTimes__empty'>

                </span>
                <span className='russianTimes__span'>
                    Davomiyligi
                </span>
            </h2>
            <h2 className="russianTimes__title">
                3 kun
                <span className='russianTimes__empty'>

                </span>
                <span className='russianTimes__span'>
                    Haftada
                </span>
            </h2>
            <h2 className="russianTimes__title">
                1.5 soat
                <span className='russianTimes__empty'>

                </span>
                <span className='russianTimes__span'>
                    Dars soati
                </span>
            </h2>
        </div>
    )
}
