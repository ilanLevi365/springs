import * as React from 'react';
import './Text_Field.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";

export default () => {
    const [message, set_Message] = React.useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data, props) => {
        console.log(data)
        if (/^.+@.+$/.test(data.email) !== true) { set_Message('.כתובת המייל אינו תקין, יש למלאות שוב') }
        else if (data.password !== data.repeat_Password) { set_Message('.הסיסמאות אינן תואמות, נא נסה שוב') }
        else if ((Number(data.firstName) + 1 || Number(data.lastName) + 1) > -1) { set_Message('.שם פרטי/משפחה אינו תקין, יש למלאות שוב') }
        else if ((document.getElementById('conditions').checked) === false) { set_Message('.יש לאשר את מדיניות הפרטיות') }
        else {
            delete data.repeat_Password;
            console.log(document.getElementById('conditions').checked);
            set_Message('')
            let options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            try {
                let get_Data = await fetch('http://localhost:5000/Create_Account', options);
                let result = await get_Data.json();
                console.log(result);
                if (result === true) { document.getElementById("login").click(); };
            } catch (error) {
                console.log('.הוכנסו נתונים אשר לא תואמים את הפרמטרים של הטבלה')
                set_Message('ישנה תקלה במערכת, יש לנסות שוב במועד מאוחר יותר');
            }

        }
    };
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Personal_Information-Filds">
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100%', },
                            '& label.Mui-focused': {
                                color: 'black',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'black',
                            },
                        }}
                    >
                        <p id="message" >{message}</p>
                        <TextField
                            id="standard-required"
                            name="email"
                            label='Email'
                            variant="standard"
                            InputProps={{ style: { fontSize: 9 } }}
                            {...register('email', { required: 'יש למלאות שדה זו' },)}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                        />
                        <div className="Text_Fields-Password">
                            <TextField
                                id="standard-password-input"
                                name="password"
                                label='Password'
                                variant="standard"
                                InputProps={{ style: { fontSize: 9 } }}
                                {...register('password', { required: 'יש למלאות שדה זו' },)}
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message}
                                type="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                id="standard-password-input"
                                name="repeat_Password"
                                label='Repeat the password'
                                variant="standard"
                                InputProps={{ style: { fontSize: 9 } }}
                                {...register('repeat_Password', { required: 'יש למלאות שדה זו' },)}
                                error={Boolean(errors.repeat_Password)}
                                helperText={errors.repeat_Password?.message}
                                type="password"
                                autoComplete="current-password"
                            />
                        </div>
                        <div className="Text_Fields-Name">
                            <TextField
                                id="standard-input"
                                name="firstName"
                                label='First name'
                                variant="standard"
                                InputProps={{ style: { fontSize: 9 } }}
                                {...register('firstName', { required: 'יש למלאות שדה זו' },)}
                                error={Boolean(errors.firstName)}
                                helperText={errors.firstName?.message}
                            />
                            <TextField
                                id="standard-input"
                                name="lastName"
                                label='Last name'
                                variant="standard"
                                InputProps={{ style: { fontSize: 9 } }}
                                {...register('lastName', { required: 'יש למלאות שדה זו' },)}
                                error={Boolean(errors.lastName)}
                                helperText={errors.lastName?.message}
                            />
                        </div>
                        <TextField
                            id="standard-input"
                            name="address"
                            label='Address'
                            variant="standard"
                            InputProps={{ style: { fontSize: 9 } }}
                            {...register('address')}
                        />
                        <TextField
                            id="standard-input"
                            name="locality"
                            label='Locality'
                            variant="standard"
                            InputProps={{ style: { fontSize: 9 } }}
                            {...register('locality')}
                        />
                    </Box>
                </div>
                <div className="Create_Account-Div_Link">
                    <button variant="contained" type="submit" className="Div_Link-Btn">צור חשבון</button>
                </div>
                <div className="Create_Account-Conditions">
                    <span className="login_Word_ForgotPassword">.בדוא"ל   <b> SPRING</b>  -מסכים/ה לקבל הצעות מסחריות מ</span>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <input id="" type="checkbox" />
                    <br />
                    <a href="https://static.zara.net/static//pdfs/IL/privacy-policy/privacy-policy-he_IL-20210706.pdf" target="blank">.("COOKIES") הריני מאשר/ת כי קראתי והבנתי את מדיניות הפרטיות וה"עוגיות</a>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <input id="conditions" type="checkbox" />
                </div>
            </form>
        </React.Fragment >
    )
};


