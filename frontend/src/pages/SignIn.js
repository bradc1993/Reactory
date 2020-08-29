import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import StyledButton from '../components/styled/StyledButton';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgba(240, 245, 243, 0.6)',
        },
        secondary: {
            main: 'rgb(240, 245, 243)',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    input: {
        color: 'rgb(240, 245, 243)'
    }
}));

export default function SignIn(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    {/* <Typography component="h1" variant="h5">
                    Sign in
                </Typography> */}

                    <form className={classes.form} noValidate>
                        <TextField
                            inputProps={{
                                className: classes.input
                            }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="email address"
                            name="email"
                            autoFocus
                        />
                        <TextField
                            inputProps={{
                                className: classes.input
                            }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="password"
                            type="password"
                            id="password"
                        />
                        {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                        <Grid container align="flex-start">
                            <StyledButton
                                type="submit"
                                fullWidth={true}
                                className={classes.submit}
                                label="SIGN IN"
                            />
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" onClick={props.backButton}>
                                    BACK
                             </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={props.signSwitch}>
                                    SIGN UP
                            </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    {/* <Copyright /> */}
                </Box>
            </Container>
        </ThemeProvider>
    );
}