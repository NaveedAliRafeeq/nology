import NewsBox from "../../components/NewsBox/NewsBox";
import styles from './NewsSection.module.css';

const NewsSection = () => {

    const response = {

        headlines: ["Peace at last", "Oil is a joke now!", "Tupac seen alive"],
        descriptions: ["Peace on earth lol", "U know why...", "We knew it all along"]
    }
    
    return (
        <section className={styles.newsSection}>
            <NewsBox headline={response.headlines[0]} description={response.descriptions[0]}/>
            <NewsBox headline={response.headlines[1]} description={response.descriptions[1]}/>
            <NewsBox headline={response.headlines[2]} description={response.descriptions[2]}/>
        </section>
    )
}

export default NewsSection;