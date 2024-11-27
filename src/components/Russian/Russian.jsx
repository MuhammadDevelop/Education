import AboutRussian from './AboutRussian/AboutRussian'
import Graduates from './Graduates/Graduates'
import './Russian.scss'
import RussianHero from './RussianHero/RussianHero'
import LearnRussian from './RussianTimes/LearnRussian/LearnRussian'
import RussianTimes from './RussianTimes/RussianTimes'
import Teacher from './Teacher/Teacher'

export default function Russian() {
    return (
        <section className='russian'>
            <RussianHero />
            <marquee >

                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!
                •  Kelajak kasblarini biz bilan o`rganing!

            </marquee>

            <div className="container">
                <RussianTimes />
                <AboutRussian />
                <LearnRussian />
                <Teacher />
                <Graduates />
                <button className="russian__linkBtn">
                    Ro'yhatdan o'tish
                </button>
            </div>
        </section>
    )
}
