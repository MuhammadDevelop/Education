import '../RussianTimes/RussianTimes.scss'
import './Graduates.scss'

export default function Graduates() {
    return (
        <div className="graduates">
            <h2 className="graduates__title">
                Rus tili bitiruvchilarimizning <br /> <span>o{"'"}qishga  kirish </span>   ko{"'"}rsatkichi
            </h2>

            <div className='russianTimes'>
                <h2 className="russianTimes__title">
                    286 nafar
                    <span className='russianTimes__empty'>

                    </span>
                    <span className='russianTimes__span'>
                        Umumiy bitiruvchilar soni
                    </span>
                </h2>
                <h2 className="russianTimes__title">
                    234 nafar
                    <span className='russianTimes__empty'>

                    </span>
                    <span className='russianTimes__span'>
                        O'qishga kirdi
                    </span>
                </h2>
                <h2 className="russianTimes__title">
                    81,8%
                    <span className='russianTimes__empty'>

                    </span>
                    <span className='russianTimes__span'>
                        Foiz ko'rsatkichida
                    </span>
                </h2>
            </div>
        </div >
    )
}
