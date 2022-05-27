import { Button, Grid, TextField, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyle = makeStyles({
  button: {
    background: "gray",
    height: "50px",
    width: "50px",
    color: "white",
    borderRadius: "50%",
    "&:hover": {
      background: "silver"
    }
  }
});
const Calculator = () => {
  const [result, setResult] = useState("");
  const classes = useStyle();

  const renderFormula = (e) => {
    // １文字目に「=」の入力を受け付けない
    if (result === "" && e.currentTarget.value === "=") {
      return;
    }
    setResult(result + e.currentTarget.value);
    if (e.currentTarget.value === "=") {
      try {
        setResult(eval(result));
      } catch {
        setResult("");
      }
    }
  };

  const clearFormula = () => {
    setResult("");
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="filled-basic"
          type="text"
          variant="filled"
          value={result}
          inputProps={{
            readOnly: true
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <Button value="1" onClick={renderFormula} className={classes.button}>
          1
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="2" onClick={renderFormula} className={classes.button}>
          2
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="3" onClick={renderFormula} className={classes.button}>
          3
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="/" onClick={renderFormula} className={classes.button}>
          /
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="4" onClick={renderFormula} className={classes.button}>
          4
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="5" onClick={renderFormula} className={classes.button}>
          5
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="6" onClick={renderFormula} className={classes.button}>
          6
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="*" onClick={renderFormula} className={classes.button}>
          *
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="7" onClick={renderFormula} className={classes.button}>
          7
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="8" onClick={renderFormula} className={classes.button}>
          8
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="9" onClick={renderFormula} className={classes.button}>
          9
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="-" onClick={renderFormula} className={classes.button}>
          -
        </Button>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}>
        <Button value="ac" onClick={clearFormula} className={classes.button}>
          ac
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="=" onClick={renderFormula} className={classes.button}>
          =
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button value="+" onClick={renderFormula} className={classes.button}>
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default Calculator;
