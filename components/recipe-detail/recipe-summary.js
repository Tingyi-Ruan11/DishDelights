import classes from './recipe-summary.module.css';

function RecipeSummary(props) {
  const { imgurl } = props;

  return (
    <section className={classes.summary}>
      <img src={imgurl}/>
    </section>
  );
}

export default RecipeSummary;