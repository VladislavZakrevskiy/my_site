import classes from '../styles/sections.module.scss'

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className={classes.header}>
        <h1 onClick={scrollToTop}>Zakr</h1>
    </div>
  )
}

export default Header