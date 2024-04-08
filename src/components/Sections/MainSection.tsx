import Section from './Section'
import classes from '../styles/sections.module.scss'
import JokeTitle from '../titles/JokeTitle'
import Title from '../titles/Title'
import MoreAboutMe from './MoreAboutMe'
import Achivements from './Achivements'
import MyWork from './MyWork'
import Portfolio from '../Portfolio/Portfolio'
import Form from '../common/Form'

const MainSection = () => {
    return (
        <div className={classes.main_section}>
            <Title
                fontSize={100}
                text="Hello, World.
I'm Vlad Zakrevskiy. A Frontend developer from Russia. I love to communicate with people through my work."
            />
            <MoreAboutMe />
            <Achivements />
            <JokeTitle joke="Mar ing" jokeURL="../../../src/assets/Fun/cat.webp" />
            <Section text="What I Do ...">
                <MyWork />
            </Section>
            <JokeTitle joke="Crea vity" jokeURL="../../../src/assets/Fun/tie.webp" />
            <Section text="Recent Work ...">
                <Portfolio />
            </Section>
            <JokeTitle joke="Pro tivity" jokeURL="../../../src/assets/Fun/duck.webp" />
            <Section text="Let's Collab ...">
                <Form padding={120} />
            </Section>
        </div>
    )
}

{
    /* 

 */
}

export default MainSection
