import './RussianHero.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function RussianHero() {
    return (
        <div className='russian__hero russianHero'>
            <div className="container">
                <div className="russianHero__general">
                    <h2 className="russianHero__title">
                        Rus <span>Tili</span>
                    </h2>
                    <p className="russianHero__text">
                        Rus Tili ni qulay muhitda «Turon Ta`lim»da o`rganing!
                    </p>
                    <button className='russianHero__btn'>
                        <KeyboardArrowDownIcon
                            color=""
                            sx={{ fontSize: 60 }}
                        />
                    </button>

                </div>
            </div>
        </div>
    )
}
