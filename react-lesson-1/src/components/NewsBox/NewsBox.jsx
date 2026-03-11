// No need to use this import anymore with React 17 and above, but it's still common to see it in many codebases.
import React from 'react';
import styles from './NewsBox.module.css';

const NewsBox = (props) => {

    // Destructuring props to extract headline and description for easier access.
    const { headline, description } = props;

    return (
        <div className={styles.news}>
            <h2>{headline}</h2>
            <p>{description}</p>
        </div>
    )
}

export default NewsBox;