const pw = 'password';
const sliceStart = 2; 
const sliceCount = 3;

const cryptoPw = crypto(pw);
console.log(check(cryptoPw, pw));


function extractSlice(pwArr, sliceStart, sliceCount) {
    const tempArr = pwArr.slice(sliceStart, sliceStart + sliceCount);  
    const remainingArr = pwArr.slice(0, sliceStart).concat(pwArr.slice(sliceStart + sliceCount));
    return { tempArr, remainingArr };
}

function crypto(password) {
    const pwArr = password.split('');
    const { tempArr, remainingArr } = extractSlice(pwArr, sliceStart, sliceCount);
    return tempArr.concat(remainingArr).join('');
}

function check(cryptoPassword, originalPassword) {
    const pwArr = cryptoPassword.split('');
    const { tempArr, remainingArr } = extractSlice(pwArr, 0, sliceCount);
    const restoredPassword = remainingArr.slice(0, sliceStart).concat(tempArr).concat(remainingArr.slice(sliceStart)).join('');

    return restoredPassword === originalPassword;
}