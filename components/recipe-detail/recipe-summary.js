import classes from './recipe-summary.module.css';

function RecipeSummary(props) {
  const { strMeal } = props;

  return (
    <section className={classes.summary}>
      <h1>{strMeal}</h1>
    </section>
  );
}

export default RecipeSummary;